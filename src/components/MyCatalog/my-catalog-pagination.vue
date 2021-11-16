<template>
  <div class="my-catalog-pagination">
    <div class="my-catalog-pagination_page">{{ page }}</div>
  </div>
</template>

<script>
export default {
  name: "my-catalog-pagination",
  props: {
    page: {
      type: Number,
      default() {
        return 1;
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.my-catalog-pagination {
  margin: 0 0.7rem;
  background: rgba($color: $grey, $alpha: 0.3);
  box-shadow: 0px 0px 6px $orange;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  font-size: 1rem;
  height: 2.5rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background: $grey;
    color: $darkGrey;
  }
}
.page_selected {
  background: rgba($color: $orange, $alpha: 0.6);
  color: $grey;
  border: none;
  box-shadow: 0px 0px 16px $orange;
  transform: scale(1.2);
  &:hover {
    background: rgba($color: $orange, $alpha: 0.6);
    color: $grey;
  }
}
</style>
