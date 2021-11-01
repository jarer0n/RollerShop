<template>
  <div>
    <div class="my-wrapper">
      <div class="my-wrapper-logo">{{ title }}</div>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>
export default {
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
  margin: 0 auto;
  max-width: 90rem;
  &-logo {
    font-size: 3rem;
    margin-bottom: 3rem;
    text-align: center;
  }
}
</style>
