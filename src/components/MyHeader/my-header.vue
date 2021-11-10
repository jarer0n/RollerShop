<template>
  <header class="my-header">
    <div class="my-header-container container">
      <div class="my-header_row">
        <my-header-left />
        <my-header-right />
      </div>
    </div>
  </header>
</template>

<script>
import MyHeaderLeft from "./my-header-left.vue";
import MyHeaderRight from "./my-header-right.vue";
import { mapGetters } from "vuex";
export default {
  components: { MyHeaderLeft, MyHeaderRight },
  name: "my-header",
  data() {
    return {};
  },
  methods: {},

  computed: {
    ...mapGetters(["CART"]),
  },
};
</script>

<style lang="scss">
.my-header {
  position: fixed;
  z-index: 99999;
  width: 100%;
  height: 8rem;
  top: 0;
  left: 0;
  background: rgba($color: $darkGrey, $alpha: 0.7);
  box-shadow: 0px 1px 5px $orange;
  &_row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 8rem;
  }
}
</style>
