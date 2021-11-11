<template>
  <div class="my-favorite-item">
    <div class="my-favorite-item_img">
      <img
        :src="require('../../assets/images/' + favoriteItem.image)"
        alt="img"
      />
      <div
        @click.stop="$emit('delFromFavorite')"
        class="my-favorite-item_delete"
      >
        <span class="material-icons">
          clear
        </span>
      </div>
    </div>
    <div class="my-favorite-item_name">{{ favoriteItem.name }}</div>
    <div class="my-favorite-item_price">{{ favoriteItem.price }} Р.</div>
  </div>
</template>

<script>
export default {
  name: "my-favorite-item",
  props: {
    favoriteItem: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style lang="scss">
.my-favorite-item {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  flex-basis: 28%;
  margin: 0 2rem 4rem;

  &_img {
    max-width: 25rem;
    margin-bottom: 3rem;
    position: relative;
    img {
      width: 100%;
      box-shadow: 0px 0px 8px $orange;
    }
  }
  &_name {
    margin-bottom: 1rem;
  }
  &_price {
    color: $orange;
    font-weight: 400;
    font-size: 1.4rem;
  }
  &_delete {
    position: absolute;
    color: $orange;
    top: 0.5rem;
    right: 1rem;
    cursor: pointer;
    &:hover {
      background: darken($color: $grey, $amount: 5%);
    }
    span {
      font-size: 3rem;
    }
  }
}
</style>
