<template>
  <div class="my-catalog-article-item ">
    <div class="container">
      <my-catalog-navigation />
      <div class="my-catalog-article-item_wrapper">
        <my-catalog-slider class="my-catalog-slider" :product="product" />
        <div class="my-catalog-article-item_row">
          <div class="my-catalog-article-item_title">
            {{ product.name }} <span>({{ product.article }})</span>
          </div>
          <div class="my-catalog-article-item_info">{{ product.about }}</div>
          <div class="my-catalog-article-item_price">
            {{ product.price }} Р.
          </div>
          <button @click="addToCart" class="item_buy article_btn">
            В корзину
            <span class="material-icons item_buy_icon">
              add_shopping_cart
            </span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import MyCatalogSlider from "./my-catalog-slider.vue";
import MyCatalogNavigation from "./my-catalog-navigation.vue";
export default {
  name: "my-catalog-article-item",
  components: { MyCatalogSlider, MyCatalogNavigation },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["PRODUCTS"]),
    product() {
      let result = {};
      let vm = this;
      this.PRODUCTS.find(function(i) {
        if (i.article === vm.$route.query.products) {
          result = i;
        }
      });
      return result;
    },
  },
  watch: {},
  methods: {
    ...mapActions(["GET_PRODUCTS_FROM_API", "ADD_TO_CART"]),
    addToCart() {
      this.ADD_TO_CART(this.product);
    },
  },
  mounted() {
    this.GET_PRODUCTS_FROM_API();
  },
};
</script>

<style lang="scss">
.my-catalog-article-item {
  padding: 5rem 0;
  &_wrapper {
    display: flex;
    justify-content: space-between;
  }
  &_row {
    flex-basis: 40%;
  }
  &_title {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 5rem;
    position: relative;
    &::after {
      content: "";
      width: 50%;
      height: 0.2rem;
      background: $orange;
      position: absolute;
      bottom: -2.5rem;
      right: 50%;
      box-shadow: 0px 0px 20px black;
    }

    span {
      font-weight: 400;
      font-size: 1.6rem;
    }
  }
  &_info {
    font-size: 1.5rem;
    line-height: 140%;
    margin-bottom: 2rem;
  }
  &_price {
    font-size: 2rem;
    font-weight: 700;
    color: $orange;
    margin-bottom: 4rem;
  }
  .article_btn {
    box-shadow: 0 0 8px $orange;
    transition: all 0.2s ease;
    &:hover {
      box-shadow: 0 0 16px $orange;
      color: $orange;
      background: $darkGrey;
    }
  }
  .my-catalog-slider {
    // flex: 1 1 20%;
  }
}
@media (max-width: 767px) {
  .my-catalog-article-item {
    &_wrapper {
      flex-direction: column;
    }
    &_row {
      margin-top: 6rem;
    }
  }
}
@media (max-width: 380px) {
  .my-catalog-article-item {
    &_wrapper {
      align-items: center;
    }
  }
}
</style>
