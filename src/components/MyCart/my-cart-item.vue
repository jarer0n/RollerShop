<template>
  <div class="my-cart-item">
    <div @click="toItem(cart_item_data.article)" class="my-cart-item_img_row">
      <img
        class="my-cart-item_img"
        :src="require('../../assets/images/' + cart_item_data.image)"
        alt="img"
      />
      <button class="my-cart-item_del" @click.stop="$emit('delFromCart')">
        <span class="material-icons">
          close
        </span>
      </button>
    </div>
    <div class="my-cart-item_info">
      <div @click="toItem(cart_item_data.article)" class="my-cart-item_name">
        {{ cart_item_data.name }}
        <span class="my-cart-item_article">({{ cart_item_data.article }})</span>
      </div>
      <div class="my-cart-item_price">{{ cart_item_data.price }} р.</div>
    </div>
    <div class="my-cart-item_amount">
      <span @click="decrementCartItem">-</span>
      {{ cart_item_data.amount }}
      <span @click="incrementCartItem">+</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "my-cart-item",
  props: {
    cart_item_data: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {};
  },
  methods: {
    decrementCartItem() {
      this.$emit("decrementCartItem");
    },
    incrementCartItem() {
      this.$emit("incrementCartItem");
    },
    toItem(article) {
      this.$router.push({ name: "products", query: { products: article } });
    },
  },
  mounted() {},
};
</script>

<style lang="scss">
.my-cart-item {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  flex-basis: 25%;
  padding: 1rem 2rem;
  margin-bottom: 2rem;

  &_img {
    display: block;
    max-width: 100%;
    object-fit: cover;
    box-shadow: 0px 0px 8px $orange;
    margin-bottom: 2rem;
    cursor: pointer;
    &_row {
      position: relative;
    }
  }
  &_del {
    position: absolute;
    top: 0;
    right: 0;
    color: $darkGrey;
    background: white;
    &:hover {
      background: darken($color: $grey, $amount: 5%);
    }
  }

  &_info {
    margin-bottom: 1rem;
  }
  &_name {
    font-size: 1.8rem;
    color: $orange;
    margin-bottom: 1rem;
    cursor: pointer;
  }
  &_article {
    color: rgba($color: $grey, $alpha: 0.5);
  }

  &_price {
    font-weight: 700;
    color: $grey;
  }

  &_amount {
    display: flex;
    align-items: center;
    justify-content: center;
    span {
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      background: rgb(71, 175, 71);
      color: white;
      font-weight: 700;
      border-radius: 50%;
      cursor: pointer;
      height: 3rem;
      width: 3rem;
      margin: 0 1rem;
    }
  }
}
</style>
