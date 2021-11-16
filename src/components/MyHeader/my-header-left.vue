<template>
  <div class="my-header_left">
    <router-link to="/">
      <div class="my-header_logo_item">
        <img
          class="my-header_logo"
          :class="{ active: (isActive = !isActive) }"
          src="@/assets/images/tyre9.png"
          alt=""
        />
        <div class="my-header_logo_title">Roller Skates STORE</div>
      </div>
    </router-link>
    <div class="my-header_left_phone">
      +7 (888) 888 88 88
      <div class="my-header_left_time">Без выходных:</div>
      <div class="my-header_left_time">с 12:00 до 21:00</div>
    </div>
    <router-link class="my-header_left_catalog" to="/catalog"
      >Каталог товаров</router-link
    >
  </div>
</template>

<script>
export default {
  name: "my-header-left",
};
</script>

<style lang="scss">
.my-header {
  &_left {
    display: flex;
    align-items: center;
    justify-content: center;
    &_phone {
      color: $grey;
      margin-left: 2rem;
      line-height: 150%;
      font-size: 1.5rem;
    }
    &_time {
      color: rgba($color: $grey, $alpha: 0.3);
      font-size: 1.1rem;
      line-height: 130%;
    }
    &_catalog {
      color: $grey;
      display: flex;
      align-items: center;
      margin-left: 3rem;
      border-right: 2px solid $orange;
      border-left: 2px solid $orange;
      padding: 2rem 1.5rem;
      transition: all 0.2s ease-in-out;
      font-size: 1.3rem;
      &:hover {
        background: rgba($color: $orange, $alpha: 0.3);
        box-shadow: 0px 0px 15px $orange;
      }
    }
  }
  &_logo {
    width: 7rem;
    height: 95%;
    border-radius: 50%;
    transition: all 1s ease;
    box-shadow: 0 0 8px $orange;

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
      color: $orange;
      font-size: 1.5rem;
      font-weight: 700;
      margin-left: 1rem;
      max-width: 12rem;
    }
  }
  &_logo.active {
    transform: rotate(720deg);
  }
}
@media (max-width: 767px) {
  .my-header_left_phone {
    display: none;
  }
}
@media (max-width: 595px) {
  .my-header_left_catalog {
    font-size: 1rem;
    padding: 1rem;
    margin-left: 0.5rem;
    max-width: 7rem;
  }
  .my-header_logo {
    width: 5rem;
    &_title {
      font-size: 1.2rem;
      max-width: 7rem;
    }
  }
}
@media (max-width: 595px) {
  .my-header_logo {
    margin-right: 1rem;
    &_title {
      display: none;
    }
  }
}
</style>
