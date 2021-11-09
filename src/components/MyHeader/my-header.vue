<template>
  <header class="my-header">
    <div class="my-header-container container">
      <div class="my-header_row">
        <router-link to="/">
          <div class="my-header_logo_item">
            <img
              class="my-header_logo"
              :class="{ active: (isActive = !isActive) }"
              src="@/assets/images/tyre.png"
              alt=""
            />

            <div class="my-header_logo_title">Roller Skates STORE</div>
          </div>
        </router-link>
        <router-link to="/cart">
          <div class="my-header_link_cart">
            <span class="material-icons my-header_link_cart_icon">
              shopping_cart
            </span>
            <span>{{ CART.length }}</span>
          </div>
        </router-link>
      </div>
    </div>
  </header>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "my-header",
  data() {
    return {};
  },
  methods: {},

  computed: {
    ...mapGetters(["CART"]),
  },
};
</script>

<style lang="scss">
.my-header {
  position: fixed;
  z-index: 99999;
  width: 100%;
  height: 8rem;
  top: 0;
  left: 0;
  background: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNTAwIiBoZWlnaHQ9IjUwMCI+CjxmaWx0ZXIgaWQ9Im4iPgo8ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjciIG51bU9jdGF2ZXM9IjEwIiBzdGl0Y2hUaWxlcz0ic3RpdGNoIj48L2ZlVHVyYnVsZW5jZT4KPC9maWx0ZXI+CjxyZWN0IHdpZHRoPSI1MDAiIGhlaWdodD0iNTAwIiBmaWxsPSIjMDAwIj48L3JlY3Q+CjxyZWN0IHdpZHRoPSI1MDAiIGhlaWdodD0iNTAwIiBmaWx0ZXI9InVybCgjbikiIG9wYWNpdHk9IjAuNCI+PC9yZWN0Pgo8L3N2Zz4=");
  &_row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 8rem;
  }
  &_logo {
    background: $grey;
    width: 7rem;
    height: 95%;
    border-radius: 50%;
    transition: all 1s ease;

    &_item {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    img {
      width: 100%;
      display: block;
      padding: 0.3rem;
    }
    &_title {
      color: $grey;
      font-size: 1.5rem;
      font-weight: 700;
      margin-left: 1rem;
      max-width: 12rem;
    }
  }
  &_logo.active {
    transform: rotate(720deg);
  }

  &_icon {
    align-self: center;
    justify-self: center;
    color: red;
  }
  &_link_cart {
    display: flex;
    align-items: center;
    justify-content: center;
    span {
      color: $grey;
      font-weight: 500;
    }
  }
  &_link_cart_icon {
    width: 2.5rem;
    height: 2.5rem;
    color: $grey;
    margin-right: 1rem;
  }
}
</style>
