<template>
  <div class="my-favorite">
    <div class="container">
      <my-catalog-navigation />
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
import MyCatalogNavigation from "../MyCatalog/my-catalog-navigation.vue";
export default {
  name: "my-favorite",
  components: {
    MyFavoriteItem,
    MyCatalogNavigation,
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
    font-size: 2.3rem;
    margin-bottom: 4rem;
    text-shadow: 0px 0px 14px black;
  }
  &_else {
    color: $orange;
  }
  &_wrapper {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-wrap: wrap;
  }
}
</style>
