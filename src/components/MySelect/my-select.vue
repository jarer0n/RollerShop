<template>
  <div class="my-select">
    <div
      class="my-select_select"
      @click.stop="optionsVisible = !optionsVisible"
    >
      {{ selected }}
    </div>
    <ul class="my-select_options" v-if="optionsVisible">
      <li
        @click.stop="selectedOption(op)"
        v-for="op in options"
        :key="op.value"
      >
        {{ op.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "my-select",
  props: {
    options: {
      type: Array,
      default() {
        return [];
      },
    },
    selected: {
      type: String,
      default() {
        return "";
      },
    },
  },
  data() {
    return {
      optionsVisible: false,
    };
  },
  methods: {
    selectedOption(op) {
      this.$emit("selectedOption", op);
      this.optionsVisible = false;
    },
    hideSelect() {
      this.optionsVisible = false;
    },
  },
  mounted() {
    document.addEventListener("click", this.hideSelect);
  },
  beforeDestroy() {
    document.removeEventListener("click", this.hideSelect);
  },
};
</script>

<style lang="scss">
.my-select {
  position: relative;
  display: flex;
  justify-content: flex-end;
  &_select {
    border: 1px solid grey;
    width: 20rem;
    padding: 0.7rem;
    margin-bottom: 2rem;
    cursor: pointer;
  }
  &_options {
    display: inline-block;
    width: 20rem;
    position: absolute;
    top: 3rem;
    right: 0;
    z-index: 100;
    background: $grey;
    cursor: pointer;
    li {
      border: 1px solid grey;
      padding: 0.7rem;
    }
    li:hover {
      background: lighten($color: $grey, $amount: 10%);
    }
  }
}
</style>
