<template>
  <div class="my-catalog">
    <h2>Каталог товаров</h2>
    <my-select
      :selected="selected"
      :options="categories"
      @selectedOption="sortedCategory"
    />
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
}
h2 {
  width: 100%;
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 4rem;
}
</style>
