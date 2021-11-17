<template>
  <div class="my-catalog-navigation">
    <router-link to="/"
      ><div class="my-catalog-navigation_item">
        <span class="material-icons"> home </span><span>На главную</span>
      </div></router-link
    >
    <router-link to="/catalog"
      ><div class="my-catalog-navigation_item">
        <span class="material-icons"> shopping_bag </span><span>В каталог</span>
      </div></router-link
    >
  </div>
</template>

<script>
export default {
  name: "my-catalog-navigation",
};
</script>

<style lang="scss">
.my-catalog-navigation {
  display: flex;
  justify-content: space-between;
  margin-bottom: 4rem;
  align-items: center;
  &_item {
    display: flex;
    align-items: center;
    justify-content: center;
    color: $grey;
    transition: all 0.2s ease-in-out;
    &:hover {
      color: $orange;
      text-shadow: 0px 0px 10px black;
    }
    span {
      margin-left: 1rem;
    }
  }
}
@media (max-width: 360px) {
  .my-catalog-navigation {
    span {
      font-size: 1.2rem;
    }
  }
}
</style>
