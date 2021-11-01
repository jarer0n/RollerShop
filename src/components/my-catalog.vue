<template>
  <div class="my-catalog">
    <router-link to="/cart">
      <div class="my-catalog_link-cart">Cart: {{ CART.length }}</div>
    </router-link>
    <h2>Каталог товаров</h2>
    <my-catalog-item
      v-for="product in PRODUCTS"
      :key="product.article"
      :product_data="product"
      @addToCart="addToCart"
    />
  </div>
</template>

<script>
import MyCatalogItem from "./my-catalog-item.vue";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "my-catalog",
  components: { MyCatalogItem },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["PRODUCTS", "CART"]),
  },
  methods: {
    ...mapActions(["GET_PRODUCTS_FROM_API", "ADD_TO_CART"]),

    addToCart(event) {
      this.ADD_TO_CART(event);
    },
  },
  mounted() {
    this.GET_PRODUCTS_FROM_API();
  },
};
</script>

<style lang="scss">
.my-catalog {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  flex-shrink: 1;
  position: relative;
  &_link-cart {
    padding: 1.5rem 2rem;
    border: 1px solid rgb(75, 74, 74);
    position: absolute;
    top: 0;
    right: 0;
  }
}
h2 {
  width: 100%;
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 4rem;
}
</style>
