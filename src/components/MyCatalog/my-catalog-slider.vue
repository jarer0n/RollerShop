<template>
  <div v-if="product.image">
    <vueper-slides
      class="no-shadow"
      autoplay
      bullets-outside
      fade
      fixed-height="400px"
      :arrows="false"
    >
      <vueper-slide
        v-for="i in 3"
        :key="i"
        :image="require('@/assets/images/' + product.image)"
      />
    </vueper-slides>
    <i class="icon pause_circle_outline"></i>
  </div>
</template>

<script>
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";
export default {
  components: { VueperSlides, VueperSlide },
  name: "my-catalog-slider",
  props: {
    product: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {},
};
</script>

<style lang="scss">
.vueperslides {
  width: 40rem;
  border-radius: 2rem;
  box-shadow: 0 0 20px black;
}
.vueperslide {
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 2rem;
}
.vueperslides__bullet .default {
  background-color: rgba(0, 0, 0, 0.3);
  border: none;
  box-shadow: none;
  transition: 0.3s;
  width: 3rem;
  height: 0.5rem;
}

.vueperslides__bullet--active .default {
  background-color: $orange;
}
</style>
