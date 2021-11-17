<template>
  <div v-if="product.image">
    <vueper-slides
      class="catalog-slider"
      autoplay
      bullets-outside
      fade
      :arrows="false"
    >
      <vueper-slide
        class="catalog-slider_slide"
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
  data() {
    return {};
  },
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
.vueperslides.catalog-slider {
  width: 35rem;
  height: 35rem;
  border-radius: 2rem;
  box-shadow: 0 0 20px black;
}
.catalog-slider .vueperslides__parallax-wrapper {
  height: 35rem;
}
.catalog-slider .vueperslides__inner {
  height: 35rem;
}
.vueperslide.catalog-slider_slide {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 2rem;
}
.catalog-slider .vueperslides__bullet .default {
  background-color: rgba(0, 0, 0, 0.3);
  border: none;
  box-shadow: none;
  transition: 0.3s;
  width: 3rem;
  height: 0.5rem;
}

.catalog-slider .vueperslides__bullet--active .default {
  background-color: $orange;
}
@media (max-width: 380px) {
  .vueperslides.catalog-slider {
    width: 25rem;
    height: 25rem;
    border-radius: 2rem;
    box-shadow: 0 0 20px black;
  }
  .catalog-slider .vueperslides__parallax-wrapper {
    height: 25rem;
  }
  .catalog-slider .vueperslides__inner {
    height: 25rem;
  }
}
</style>
