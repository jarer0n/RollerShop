<template>
  <div class="my-main">
    <div class="container">
      <div class="my-main_title">
        Добро пожаловать в <span>Roller Skates STORE</span>
      </div>
      <my-main-slider />
      <router-link to="/catalog">
        <div class="my-main_tocatalog">
          В каталог
          <span class="material-icons">
            shopping_bag
          </span>
        </div>
      </router-link>
      <my-main-about />
    </div>
  </div>
</template>

<script>
import MyMainSlider from "./my-main-slider.vue";
import MyMainAbout from "./my-main-about.vue";
export default {
  components: {
    MyMainSlider,
    MyMainAbout,
  },
  name: "my-main",
};
</script>

<style lang="scss" scoped>
.my-main {
  margin-top: 5rem;
  &_title {
    text-align: center;
    font-size: 2.1rem;
    margin-bottom: 4rem;
    position: relative;
    line-height: 140%;
    span {
      font-size: 2.5rem;
      color: $orange;
      font-weight: 600;
    }
    &::after {
      content: "";
      width: 20rem;
      height: 0.2rem;
      background: $orange;
      position: absolute;
      bottom: -2rem;
      left: 50%;
      transform: translateX(-50%);
    }
  }
  &_tocatalog {
    margin-top: 3rem;
    text-align: center;
    background: $darkGrey;
    border: 2px solid $orange;
    color: $grey;
    padding: 0.7rem 0;
    transition: all 0.2s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    span {
      margin-left: 2rem;
    }
    &:hover {
      background: $orange;
    }
  }
}
</style>
