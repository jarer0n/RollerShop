<template>
  <div class="my-wrapper">
    <my-header />
    <div class="my-wrapper-logo">
      {{ title }}
    </div>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
  <my-footer />
</template>

<script>
import myHeader from "./MyHeader/my-header.vue";
import myFooter from "./MyFooter/my-footer.vue";
export default {
  components: { myHeader, myFooter },
  name: "my-wrapper",
  data() {
    return {
      title: "Магазин",
    };
  },
  computed: {},
};
</script>

<style lang="scss" scoped>
.my-wrapper {
  flex: 1 1 auto;
  margin-top: 8rem;
  &-logo {
    font-size: 3rem;
    margin-bottom: 3rem;
    text-align: center;
  }
}
</style>
