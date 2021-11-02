<template>
  <div class="my-cart-item">
    <img
      :src="require('../../assets/images/' + cart_item_data.image)"
      alt="img"
    />
    <div class="my-cart-item_info">
      <div class="my-cart-item_name">
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
    <button @click="$emit('delFromCart')">Удалить</button>
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
  },
  mounted() {},
};
</script>

<style lang="scss" scoped>
.my-cart-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 0 8px rgba(48, 48, 48, 0.575);
  padding: 1rem 2rem;
  margin-bottom: 1rem;

  img {
    display: block;
    max-width: 15rem;
    object-fit: cover;
  }
  button {
    display: block;
    padding: 0 2rem;
    height: 3rem;
    color: white;
    background-color: rgb(245, 76, 9);
  }
  &_info {
    flex: 0 0 33%;
  }
  &_name {
    font-size: 1.8rem;
    color: yellowgreen;
    margin-bottom: 1rem;
    span {
      color: rgba(36, 35, 35, 0.445);
    }
  }
  &_price {
    font-weight: 700;
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
