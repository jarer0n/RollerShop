<template>
  <div class="my-catalog">
    <h2>Каталог товаров</h2>
    <div class="my-catalog_filter">
      <div>
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
        v-for="product in showFilterProducts"
        :key="product.article"
        :product_data="product"
        @addToCart="addToCart"
      />
    </div>
  </div>
</template>

<script>
import MyCatalogItem from "./my-catalog-item.vue";
import MySelect from "../MySelect/my-select.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "my-catalog",
  components: { MyCatalogItem, MySelect },
  data() {
    return {
      categories: [
        { name: "Все", value: "ALL" },
        { name: "Мужские", value: "m" },
        { name: "Женские", value: "f" },
      ],
      selected: "Выберите из списка...",
      sortedProducts: [],
      ascending: false,
      descending: false,
    };
  },
  computed: {
    ...mapGetters(["PRODUCTS", "CART"]),

    showFilterProducts() {
      if (this.sortedProducts.length) {
        return this.sortedProducts;
      } else {
        return this.PRODUCTS;
      }
    },
  },
  methods: {
    ...mapActions(["GET_PRODUCTS_FROM_API", "ADD_TO_CART"]),

    addToCart(event) {
      this.ADD_TO_CART(event);
    },
    sortedCategory(category) {
      this.sortedProducts = [];
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
  },
  mounted() {
    this.GET_PRODUCTS_FROM_API();
  },
};
</script>

<style lang="scss">
.my-catalog {
  position: relative;
  &_row {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    flex-shrink: 1;
    position: relative;
  }
  &_filter {
    display: flex;
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
        border-color: lighten($color: $headerColor, $amount: 35%) transparent
          transparent transparent;
      }

      &:last-child::after {
        transform: rotate(180deg);
      }
    }
    &_item.sort-target {
      color: lighten($color: $headerColor, $amount: 35%);
      font-weight: 500;
    }
  }
}
h2 {
  width: 100%;
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 4rem;
}
</style>
