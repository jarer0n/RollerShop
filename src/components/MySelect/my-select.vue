<template>
  <div class="my-select">
    <div
      class="my-select_select"
      :class="{ active: isActive }"
      @click.stop="optionsVisible = !optionsVisible"
      @click="isActive = !isActive"
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
      isActive: false,
    };
  },
  methods: {
    selectedOption(op) {
      this.$emit("selectedOption", op);
      this.optionsVisible = false;
      this.isActive = false;
    },
    hideSelect() {
      this.optionsVisible = false;
      this.isActive = false;
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
    position: relative;
    border: 1px solid grey;
    width: 22rem;
    padding: 0.7rem;
    margin-bottom: 2rem;
    cursor: pointer;
    &::before,
    &::after {
      content: "";
      position: absolute;
      top: 0;
      right: 5px;
      width: 1rem;
      height: 0.2rem;
      background: $grey;
      transition: all 0.1s ease;
    }
    &::after {
      top: 50%;
      transform: rotate(-45deg);
    }
    &::before {
      top: 50%;
      right: 12px;
      transform: rotate(45deg);
    }
  }
  &_select.active {
    &::before {
      transform: rotate(-45deg);
    }
    &::after {
      transform: rotate(45deg);
    }
  }
  &_options {
    display: inline-block;
    width: 22rem;
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
