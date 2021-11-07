<template>
  <div class="my-cart container">
    <router-link to="/">
      <div class="my-catalog_link-cart">Назад в каталог</div>
    </router-link>
    <h3>Корзина</h3>
    <p v-if="!CART.length">Корзина пуста! Добавьте товары!</p>
    <div class="my-cart_wrapper">
      <my-cart-item
        v-for="(cartItem, index) in CART"
        :key="cartItem.article"
        :cart_item_data="cartItem"
        @delFromCart="delFromCart(index)"
        @decrementCartItem="decrementCartItem(index)"
        @incrementCartItem="incrementCartItem(index)"
      />
    </div>
    <div class="my-cart_total">К оплате: {{ totalCost }} р.</div>
  </div>
</template>

<script>
import MyCartItem from "./my-cart-item.vue";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "my-cart",
  components: { MyCartItem },
  computed: {
    ...mapGetters(["CART"]),
    totalCost() {
      let result = [];
      if (this.CART.length) {
        for (let i of this.CART) {
          result.push(i.price * i.amount);
        }
        result = result.reduce(function(sum, el) {
          return sum + el;
        });
        return result;
      } else {
        return 0;
      }
    },
  },
  methods: {
    ...mapActions([
      "DEL_FROM_CART",
      "INCREMENT_CART_ITEM",
      "DECREMENT_CART_ITEM",
    ]),
    incrementCartItem(index) {
      this.INCREMENT_CART_ITEM(index);
    },
    decrementCartItem(index) {
      this.DECREMENT_CART_ITEM(index);
    },
    delFromCart(index) {
      this.DEL_FROM_CART(index);
    },
  },
};
</script>

<style lang="scss">
.my-cart {
  position: relative;
  &_wrapper {
    margin-bottom: 3rem;
    padding-bottom: 7rem;
  }
  &_total {
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    width: 100%;
    height: 7rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.8rem;
    color: white;
    font-weight: 500;
    background-color: rgb(71, 175, 71);
    box-shadow: 0px -2px 7px rgba(0, 0, 0, 0.521);
  }
}
</style>
