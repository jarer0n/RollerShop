<template>
  <div class="my-catalog-item item ">
    <img
      class="item_img"
      :src="require('../../assets/images/' + product_data.image)"
      alt="img"
    />
    <div class="item_name">{{ product_data.name }}</div>
    <div class="item_price">{{ product_data.price }} р.</div>
    <button @click="$emit('addToCart', this.product_data)" class="item_buy">
      В корзину
      <svg class="item_buy_icon">
        <use xlink:href="#addcart"></use>
      </svg>
    </button>
  </div>
</template>

<script>
export default {
  name: "my-catalog-item",
  props: {
    product_data: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  mounted() {},
};
</script>

<style lang="scss" scoped>
.item {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2rem;
  border: 1px solid rgba(0, 0, 0, 0.151);
  line-height: 150%;
  flex-basis: 30%;
  margin-bottom: 2rem;
  box-shadow: 0 0 10px rgba(48, 48, 48, 0.575);
  &_name {
    font-size: 1.8rem;
    color: $headerColor;
    font-weight: 500;
  }
  &_price {
    margin-bottom: 5rem;
    color: $green;
    font-weight: 700;
  }
  &_buy {
    padding: 1rem 2rem;
    font-family: inherit;
    font-size: 1.3rem;
    background: lighten($color: $headerColor, $amount: 15%);
    color: $grey;
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s ease;
    &_icon {
      width: 2.3rem;
      height: 2rem;
      margin-left: 1rem;
    }
    &:hover {
      background: lighten($color: $headerColor, $amount: 30%);
      color: lighten($color: $grey, $amount: 10%);
    }
  }
  &_img {
    display: block;
    width: 100%;
  }
}
</style>
