<template>
  <div class="my-cart">
    <div class="container">
      <router-link to="/">
        <div class="my-catalog_link-cart">Назад в каталог</div>
      </router-link>
      <h3>Корзина</h3>
      <p v-if="!CART.length">Корзина пуста! Добавьте товары!</p>
      <div class="my-cart_wrapper">
        <div class="my-cart_left">
          <my-cart-item
            v-for="(cartItem, index) in CART"
            :key="cartItem.article"
            :cart_item_data="cartItem"
            @delFromCart="delFromCart(index)"
            @decrementCartItem="decrementCartItem(index)"
            @incrementCartItem="incrementCartItem(index)"
          />
        </div>
        <div class="my-cart_right">
          <div class="my-cart_right_total">Итого: {{ totalCost }} Р.</div>
          <div class="my-cart_right_coupon">
            <input type="text" placeholder="КУПОН" /><button>ПРИМЕНИТЬ</button>
          </div>
        </div>
      </div>
    </div>
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
  padding: 4rem 0;
  &_wrapper {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }
  &_left {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    flex-basis: 60%;
  }
  &_right {
    flex-basis: 40%;
    display: flex;
    flex-direction: column;
    &_coupon {
      display: flex;
    }
    input,
    button {
      padding: 1rem 2rem;
      font-weight: 600;
    }
    input {
      flex-basis: 70%;
      background: $grey;
    }
    button {
      flex-basis: 30%;
      background: darken($color: $grey, $amount: 30%);
      color: $grey;
    }
  }
  &_right_total {
    background-color: rgb(71, 175, 71);
    height: 100%;
    margin-top: 1rem;
    padding: 3rem;
    text-align: center;
    margin-bottom: 3rem;
  }
}
</style>
