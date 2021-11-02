<template>
  <div>
    <div class="my-wrapper">
      <my-header />
      <div class="my-wrapper-logo">{{ title }}</div>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import myHeader from "./MyHeader/my-header.vue";
export default {
  components: { myHeader },
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
  margin: 8rem auto 0;
  max-width: 90rem;
  &-logo {
    font-size: 3rem;
    margin-bottom: 3rem;
    text-align: center;
  }
}
</style>
