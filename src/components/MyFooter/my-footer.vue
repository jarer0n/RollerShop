<template>
  <footer class="my-footer">
    <div class="container">Footer</div>
  </footer>
</template>

<script>
export default {
  name: "my-footer",
};
</script>

<style lang="scss" scoped>
.my-footer {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 7rem;
  background: rgba($color: $darkGrey, $alpha: 0.7);
  color: $grey;
  box-shadow: 0px -1px 5px $orange;
}
</style>
