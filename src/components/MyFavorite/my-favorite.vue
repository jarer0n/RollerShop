<template>
  <div class="my-favorite">
    <div class="container">
      <div class="my-favorite_navigation">
        <router-link to="/">
          <div class="my-favorite_navigation_home">
            <span class="material-icons">
              home
            </span>
            На главную
          </div>
        </router-link>
        <router-link to="/catalog">
          <div class="my-favorite_navigation_catalog">
            <span class="material-icons">
              arrow_back_ios
            </span>
            Назад в каталог
          </div>
        </router-link>
      </div>
      <div class="my-favorite_title">Избранные товары</div>
      <div v-if="!FAVORITE.length" class="my-favorite_else">
        Избранных товаров нет
      </div>
      <div class="my-favorite_wrapper">
        <my-favorite-item
          v-for="(mfItem, index) in FAVORITE"
          :key="mfItem.article"
          :favoriteItem="mfItem"
          @delFromFavorite="delFromFavorite(index)"
          @click="targetItem(mfItem.article)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import MyFavoriteItem from "./my-favorite-item.vue";
export default {
  name: "my-favorite",
  components: {
    MyFavoriteItem,
  },
  computed: {
    ...mapGetters(["FAVORITE"]),
  },
  methods: {
    ...mapActions(["DEL_FROM_FAVORITE"]),
    delFromFavorite(index) {
      this.DEL_FROM_FAVORITE(index);
    },
    targetItem(article) {
      this.$router.push({ name: "products", query: { products: article } });
    },
  },
};
</script>

<style lang="scss">
.my-favorite {
  padding: 5rem 0;
  &_title {
    text-align: center;
    font-size: 2.1rem;
    margin-bottom: 4rem;
  }
  &_else {
    color: $orange;
  }
  &_wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  }
  &_navigation {
    display: flex;
    justify-content: space-between;
    margin-bottom: 2rem;

    &_home {
      display: flex;
      align-items: flex-end;
      justify-content: center;
      cursor: pointer;
      transition: all 0.2s ease;
      color: $grey;
      span {
        margin-right: 1rem;
      }
      &:hover {
        color: $orange;
      }
    }
    &_catalog {
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: all 0.2s ease;
      color: $grey;
      &:hover {
        color: $orange;
      }
    }
  }
}
</style>
