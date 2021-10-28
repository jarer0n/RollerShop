<template>
  <div class="my-catalog">
    <h2>Каталог товаров</h2>
    <my-catalog-item
      v-for="product in PRODUCTS"
      :key="product.article"
      :product_data="product"
      @sendArticle="showConsole"
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
    ...mapGetters(["PRODUCTS"]),
  },
  methods: {
    ...mapActions(["GET_PRODUCTS_FROM_API"]),

    showConsole(event) {
      console.log(event);
    },
  },
  mounted() {
    this.GET_PRODUCTS_FROM_API();
  },
};
</script>

<style lang="scss" scoped>
.my-catalog {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  flex-shrink: 1;
}
h2 {
  width: 100%;
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 4rem;
}
</style>
