<template>
  <div class="my-catalog-item item ">
    <div class="item_to_favorite">
      <span
        @click.stop="$emit('addToFavorite', this.product_data)"
        class="material-icons item_favorite"
        :class="{ active: favoriteActive }"
        @click="favoriteActive = !favoriteActive"
      >
        star
      </span>
    </div>
    <img
      class="item_img"
      :src="require('../../assets/images/' + product_data.image)"
      alt="img"
    />
    <div class="item_name">{{ product_data.name }}</div>
    <div class="item_price">{{ product_data.price }} р.</div>
    <button
      @click.stop="$emit('addToCart', this.product_data)"
      class="item_buy"
    >
      В корзину
      <span class="material-icons item_buy_icon">
        add_shopping_cart
      </span>
    </button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
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
  data() {
    return {
      favoriteActive: false,
    };
  },

  computed: {
    ...mapGetters(["FAVORITE"]),
  },
  mounted() {},
};
</script>

<style lang="scss">
.item {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2rem;
  line-height: 150%;
  flex-basis: 23.6%;
  background: white;
  box-shadow: 0 0 6px rgba($color: $grey, $alpha: 0.7);
  margin-bottom: 2rem;
  margin-right: 1.8rem;
  &_name {
    font-size: 1.8rem;
    color: $darkGrey;
    font-weight: 600;
  }
  &_price {
    margin-bottom: 5rem;
    color: rgb(100, 165, 3);
    font-weight: 700;
  }
  &_buy {
    padding: 1rem 2rem;
    font-family: inherit;
    font-size: 1.3rem;
    background: $darkGrey;
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
      background: lighten($color: $darkGrey, $amount: 15%);
      color: lighten($color: $grey, $amount: 10%);
    }
  }
  &_to_favorite {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
  &_favorite {
    color: rgba($color: $darkGrey, $alpha: 0.5);
    padding: 0.2rem;
    font-size: 2.8rem;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    &:hover {
      background: darken($color: $grey, $amount: 5%);
    }
  }
  &_favorite.active {
    color: $orange;
  }
  &_img {
    display: block;
    width: 100%;
  }
}
</style>
