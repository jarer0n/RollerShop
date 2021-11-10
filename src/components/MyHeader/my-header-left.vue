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
  }
  &_logo {
    background: $grey;
    width: 7rem;
    height: 95%;
    border-radius: 50%;
    transition: all 1s ease;
    box-shadow: 0 0 10px $orange;

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
</style>
