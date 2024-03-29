<template>
  <div class="my-catalog">
    <div class="container">
      <router-link class="my-catalog_link" to="/"
        ><span class="material-icons">
          home
        </span>
        На главную</router-link
      >
      <h2 class="my-catalog_title">Каталог товаров</h2>
      <div class="my-catalog_filter">
        <div class="my-catalog_filter_row">
          <span
            class="my-catalog_filter_item"
            :class="{ 'sort-target': ascending }"
            @click="sortByAscending"
            >По возрастанию цены</span
          >
          <span
            class="my-catalog_filter_item"
            :class="{ 'sort-target': descending }"
            @click="sortByDescending"
            >По убыванию цены</span
          >
        </div>
        <my-select
          :selected="selected"
          :options="categories"
          @selectedOption="sortedCategory"
        />
      </div>
      <div class="my-catalog_row">
        <my-catalog-item
          v-for="product in paginatedProducts"
          :key="product.article"
          :product_data="product"
          @addToCart="addToCart"
          @addToFavorite="addToFavorite"
          @click="targetProduct(product.article)"
        />
        <div v-if="emptySearch">По вашему запросу ничего не найдено</div>
      </div>
      <div class="my-catalog_pag" v-if="showFilterProducts.length > 7">
        <my-catalog-pagination
          v-for="page in TOTAL_PAGES"
          :key="page"
          :page="page"
          @click="changePage(page)"
          :class="{ page_selected: page === PAGE }"
        />
      </div>
    </div>
  </div>
</template>

<script>
import MyCatalogItem from "./my-catalog-item.vue";
import MySelect from "../MySelect/my-select.vue";
import MyCatalogPagination from "./my-catalog-pagination.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "my-catalog",
  components: { MyCatalogItem, MySelect, MyCatalogPagination },
  data() {
    return {
      categories: [
        { name: "Все", value: "ALL" },
        { name: "Мужские", value: "m" },
        { name: "Женские", value: "f" },
        { name: "Детские", value: "c" },
      ],
      selected: "Выберите из списка...",
      sortedProducts: [],
      ascending: false,
      descending: false,
      emptySearch: false,
    };
  },
  computed: {
    ...mapGetters([
      "PRODUCTS",
      "CART",
      "TOTAL_PAGES",
      "PAGE",
      "PRODUCTS_ON_PAGE",
      "SEARCH_VALUE",
      "FAVORITE",
    ]),

    showFilterProducts() {
      if (this.sortedProducts.length) {
        return this.sortedProducts;
      } else {
        return this.PRODUCTS;
      }
    },
    paginatedProducts() {
      let from = (this.PAGE - 1) * this.PRODUCTS_ON_PAGE;
      let to = from + this.PRODUCTS_ON_PAGE;
      return this.showFilterProducts.slice(from, to);
    },
  },
  methods: {
    ...mapActions([
      "GET_PRODUCTS_FROM_API",
      "ADD_TO_CART",
      "ADD_TO_FAVORITE",
      "CHANGE_PAGE",
      "TO_FIRST_PAGE",
      "DEL_FROM_FAVORITE",
    ]),
    targetProduct(article) {
      this.$router.push({ name: "products", query: { products: article } });
    },

    addToCart(event) {
      this.ADD_TO_CART(event);
    },
    addToFavorite(event) {
      this.ADD_TO_FAVORITE(event);
    },
    sortedCategory(category) {
      this.sortedProducts = [];
      this.TO_FIRST_PAGE();
      let vm = this;
      this.PRODUCTS.map(function(i) {
        if (i.category === category.name) {
          vm.sortedProducts.push(i);
        }
      });
      this.selected = category.name;
    },
    sortByDescending() {
      this.ascending = false;
      this.showFilterProducts.sort((a, b) => b.price - a.price);
      this.descending = true;
    },
    sortByAscending() {
      this.descending = false;
      this.showFilterProducts.sort((a, b) => a.price - b.price);
      this.ascending = true;
    },
    changePage(page) {
      this.CHANGE_PAGE(page);
    },
    sortBySearch(value) {
      let val = value;
      this.sortedProducts = [...this.PRODUCTS];
      this.TO_FIRST_PAGE();
      if (val) {
        this.sortedProducts = this.sortedProducts.filter(function(i) {
          return i.name.toLowerCase().includes(val.toLowerCase());
        });
      } else {
        this.sortedProducts = this.PRODUCTS;
      }
    },
  },
  watch: {
    SEARCH_VALUE() {
      this.sortBySearch(this.SEARCH_VALUE);
    },
  },
  mounted() {
    this.GET_PRODUCTS_FROM_API().then(() => {
      this.sortBySearch(this.SEARCH_VALUE);
      let fav = this.FAVORITE.map((item) => item.article);
      for (let i = 0; i < this.sortedProducts.length; i++) {
        if (fav.indexOf(this.sortedProducts[i].article) > -1) {
          this.sortedProducts[i].active = true;
        } else {
          this.sortedProducts[i].active = false;
        }
      }
    });
  },
};
</script>

<style lang="scss">
.my-catalog {
  position: relative;
  padding: 5rem 0;
  &_link {
    display: flex;
    align-items: flex-end;
    color: rgba($color: $grey, $alpha: 0.5);
    transition: all 0.2s ease;
    &:hover {
      color: $orange;
    }
    span {
      margin-right: 1rem;
    }
  }
  &_title {
    font-size: 2.3rem;
    font-weight: 600;
    text-shadow: 0px 0px 14px black;
  }
  &_row {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    position: relative;
    margin-right: -1.8rem;
    margin-bottom: 2rem;
  }
  &_pag {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &_filter {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 2rem;
    &_item {
      font-size: 1.4rem;
      margin-right: 3rem;
      position: relative;
      cursor: pointer;
      &::after {
        content: "";
        position: absolute;
        top: 35%;
        right: -10px;
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 6px 3px 0 3px;
        border-color: $orange transparent transparent transparent;
      }

      &:last-child::after {
        transform: rotate(180deg);
      }
    }
    &_item.sort-target {
      color: $orange;
      font-weight: 600;
    }
  }
}
h2 {
  width: 100%;
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 4rem;
}
@media (max-width: 620px) {
  .my-catalog {
    padding: 2.5rem 0;
    &_link {
      margin-bottom: 2rem;
      font-size: 1.3rem;
      span {
        font-size: 1.8rem;
      }
    }
    &_filter {
      &_row {
        margin-bottom: 2rem;
      }
      &_item {
        font-size: 1rem;
      }
    }
  }
  .my-catalog_filter_row {
  }
}
</style>
