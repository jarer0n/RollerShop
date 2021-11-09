<template>
  <div class="my-main">
    <div class="container">
      <div class="my-main_title">
        Добро пожаловать в <span>Roller Skates STORE</span>
      </div>
      <router-link to="/catalog">В каталог</router-link>
      <my-main-slider />
    </div>
  </div>
</template>

<script>
import MyMainSlider from "./my-main-slider.vue";
export default {
  components: {
    MyMainSlider,
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
    span {
      font-size: 2.5rem;
      color: #647295;
      font-weight: 600;
    }
  }
}
</style>
