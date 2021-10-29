<template>
  <div>
    <div class="my-wrapper">
      <div class="my-wrapper-logo">{{ title }}</div>
      <my-catalog />
      <my-cart v-if="CART.length" :cart_data="CART" />
    </div>
  </div>
</template>

<script>
import MyCatalog from "./my-catalog.vue";
import MyCart from "./my-cart.vue";
import { mapGetters } from "vuex";

export default {
  name: "my-wrapper",
  components: {
    MyCatalog,
    MyCart,
  },
  data() {
    return {
      title: "Магазин",
    };
  },
  computed: {
    ...mapGetters(["CART"]),
  },
};
</script>

<style lang="scss" scoped>
.my-wrapper {
  margin: 0 auto;
  max-width: 90rem;
  &-logo {
    font-size: 3rem;
    margin-bottom: 3rem;
    text-align: center;
  }
}
</style>
