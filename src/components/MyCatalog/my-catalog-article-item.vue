<template>
  <div class="my-catalog-article-item container">
    <my-catalog-slider :product="product" />
    <div>Название: {{ product.name }}</div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import MyCatalogSlider from "./my-catalog-slider.vue";
export default {
  name: "my-catalog-article-item",
  components: { MyCatalogSlider },
  computed: {
    ...mapGetters(["PRODUCTS"]),
    product() {
      let result = {};
      let vm = this;
      this.PRODUCTS.map(function(i) {
        if (i.article === vm.$route.query.products) {
          result = i;
        }
      });
      return result;
    },
  },
  methods: {
    ...mapActions(["GET_PRODUCTS_FROM_API"]),
  },
  mounted() {
    this.GET_PRODUCTS_FROM_API();
  },
};
</script>

<style lang="scss" scoped>
.my-catalog-article-item {
  display: flex;
  justify-content: space-between;
}
</style>
