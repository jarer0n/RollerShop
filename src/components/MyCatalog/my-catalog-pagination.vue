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
  margin: 0 1rem 2rem 0;
  border-radius: 50%;
  border: 1px solid $grey;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  font-size: 1.2rem;
  height: 2.5rem;
  cursor: pointer;

  &:hover {
    background: $grey;
    color: $headerColor;
  }
}
.page_selected {
  background: lighten($color: $headerColor, $amount: 25%);
  color: $grey;
}
</style>
