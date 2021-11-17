<template>
  <div class="my-cart">
    <div class="container">
      <my-catalog-navigation />
      <div class="my-cart_title">Корзина</div>
      <p class="my-cart_none" v-if="!CART.length">
        Корзина пуста! Добавьте товары!
      </p>
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
            <input type="text" placeholder="КУПОН" /><button
              class="my-cart_right_coupon_btn my-cart_right_btn "
            >
              ПРИМЕНИТЬ
            </button>
          </div>
          <div class="my-cart_right_confirm">
            <button class="my-cart_right_confirm_btn my-cart_right_btn">
              Перейти к оплате
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MyCartItem from "./my-cart-item.vue";
import { mapActions, mapGetters } from "vuex";
import MyCatalogNavigation from "../MyCatalog/my-catalog-navigation.vue";
export default {
  name: "my-cart",
  components: { MyCartItem, MyCatalogNavigation },
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
  &_title {
    text-align: center;
    margin-bottom: 4rem;
    font-size: 2.3rem;
    text-shadow: 0px 0px 14px black;
  }

  &_none {
    font-size: 1.4rem;
    color: rgba($color: $grey, $alpha: 0.3);
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
    margin-left: 4rem;
    &_btn {
      flex-basis: 30%;
      background: darken($color: $grey, $amount: 30%);
      color: $grey;
      font-weight: 700;
    }
    &_coupon {
      display: flex;
      margin-bottom: 5rem;
      &_btn {
        padding: 0 1rem;
        &:hover {
          background: darken($color: $grey, $amount: 40%);
        }
      }
    }
    input {
      flex-basis: 70%;
      background: $grey;
      padding: 1rem 2rem;
      font-weight: 600;
    }
  }
  &_right_confirm_btn {
    padding: 2rem 2rem;
    background: $darkGrey;
    font-size: 1.6rem;
    box-shadow: 0px 0px 8px $orange;
    transition: all 0.3s ease-in-out;
    &:hover {
      box-shadow: 0px 0px 16px $orange;
      color: $orange;
    }
  }
  &_right_total {
    background-color: rgb(71, 175, 71);
    box-shadow: 0px 0px 8px black;
    height: 100%;
    margin-top: 1rem;
    padding: 3rem;
    text-align: center;
    margin-bottom: 3rem;
  }
}
@media (max-width: 767px) {
  .my-cart {
    &_wrapper {
      flex-direction: column;
    }
    &_right {
      flex-basis: 100%;
      width: 100%;
      margin: 0;
      &_confirm {
        align-self: flex-end;
      }
    }
  }
}
@media (max-width: 367px) {
  .my-cart {
    &_right {
      &_coupon {
        &_btn {
          font-size: 1rem;
        }
      }
      input {
        font-size: 1.2rem;
        width: 50%;
      }
    }
  }
}
</style>
