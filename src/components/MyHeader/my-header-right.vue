<template>
  <div class="my-header_right">
    <div class="my-header_link_cart">
      <router-link to="/cart">
        <div class="my-header_link_cart_row">
          <span class="material-icons my-header_link_cart_icon">
            star
          </span>
          <div class="my-header_link_cart_title">Избранное</div>
        </div>
        <span class="my-header_counter">{{ FAVORITE.length }}</span>
      </router-link>
    </div>

    <div class="my-header_link_cart">
      <router-link to="/cart">
        <div class="my-header_link_cart_row">
          <span class="material-icons my-header_link_cart_icon">
            shopping_cart
          </span>
          <div class="my-header_link_cart_title">Корзина</div>
        </div>
        <span class="my-header_counter">{{ CART.length }}</span>
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "my-header-right",
  computed: {
    ...mapGetters(["CART", "FAVORITE"]),
  },
};
</script>

<style lang="scss">
.my-header {
  &_right {
    display: flex;
  }
  &_link_cart {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    margin-left: 2rem;

    &_row {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    &_title {
      font-size: 1rem;
      color: $grey;
    }
  }
  &_counter {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    top: -6px;
    right: 8px;
    background: $orange;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    color: $grey;
    font-size: 1rem;
  }
  &_link_cart_icon {
    width: 2.5rem;
    height: 2.5rem;
    color: $grey;
    margin-right: 1rem;
  }
}
</style>
