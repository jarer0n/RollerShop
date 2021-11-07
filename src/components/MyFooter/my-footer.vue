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
  height: 4rem;
  background: $darkGrey;
  color: $grey;
}
</style>
