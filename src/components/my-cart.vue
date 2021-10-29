<template>
  <div class="my-cart">
    <h3>Корзина</h3>
    <my-cart-item
      v-for="(cartItem, index) in cart_data"
      :key="cartItem.article"
      :cart_item_data="cartItem"
      @delFromCart="delFromCart(index)"
    />
  </div>
</template>

<script>
import MyCartItem from "./my-cart-item.vue";
import { mapActions } from "vuex";
export default {
  name: "my-cart",
  components: { MyCartItem },
  props: {
    cart_data: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    ...mapActions(["DEL_FROM_CART"]),
    delFromCart(index) {
      this.DEL_FROM_CART(index);
    },
  },
};
</script>

<style lang="scss" scoped></style>
