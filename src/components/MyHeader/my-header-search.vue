<template>
  <div class="my-header-search">
    <transition-group name="show-input">
      <button
        v-if="searchActive"
        class="my-header-search_done"
        @click="resetSearch, search(searchValue)"
      >
        <span class="material-icons">
          done
        </span>
      </button>
      <input
        @keyup.enter="search(searchValue)"
        v-model="searchValue"
        v-if="searchActive"
        type="text"
        name="search"
        placeholder="Поиск..."
      />
      <button
        v-if="searchActive"
        class="my-header-search_reset"
        @click="resetSearch"
      >
        <span class="material-icons">
          close
        </span>
      </button>
    </transition-group>

    <div @click="searchActive = !searchActive" class="my-header-search_row">
      <span class="material-icons my-header-search_icon">
        search
      </span>
      <div>Поиск</div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "my-header-search",
  data() {
    return {
      searchValue: "",
      searchActive: false,
    };
  },
  computed: {
    ...mapGetters(["SEARCH_VALUE"]),
  },
  methods: {
    ...mapActions(["SEARCH_VALUE_TO_STATE"]),
    search(value) {
      if (this.searchActive === true) {
        this.SEARCH_VALUE_TO_STATE(value);
        this.$router.push({ name: "catalog" });
      }
    },
    resetSearch() {
      this.searchValue = "";
      this.search();
      this.searchActive = false;
    },
  },
};
</script>

<style lang="scss">
.my-header-search {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  &_row {
    font-size: 1rem;
    color: $grey;
    cursor: pointer;
  }
  span {
    font-size: 2.5rem;
  }
  input {
    padding: 0.6rem 1rem;
    background: $grey;
    position: absolute;
    bottom: -6rem;
  }

  &_reset {
    background: $grey;
    margin-right: 6rem;
    transition: all 0.2s ease;
    position: absolute;
    bottom: -6rem;
    left: 11.05rem;
    &:hover {
      background: darken($color: $grey, $amount: 8%);
    }

    span {
      color: $darkGrey;
    }
  }
  &_done {
    color: $darkGrey;
    background: $grey;
    transition: all 0.2s ease;
    position: absolute;
    bottom: -6rem;
    left: -10.25rem;
    z-index: 5;
    &:hover {
      background: $orange;
      color: $grey;
    }
  }
}
.show-input-enter-active,
.show-input-leave-active {
  transition: all 0.3s ease-in-out;
}

.show-input-enter-from,
.show-input-leave-to {
  opacity: 0;
  transform: translateY(-20px);
  transform-origin: left;
}
@media (max-width: 360px) {
  .my-header-search {
    span {
      font-size: 2rem;
      margin-bottom: 0.3rem;
    }
  }
}
</style>
