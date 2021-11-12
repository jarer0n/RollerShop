<template>
  <div>
    <vueper-slides
      autoplay
      fixed-height="500px"
      class="main-slider"
      :arrows="false"
      :touchable="false"
      :transitionSpeed="800"
      :duration="7000"
    >
      <vueper-slide
        class="main-slider_slide"
        v-for="(slide, i) in slides"
        :key="i"
        :image="slide.image"
      />
      <template #pause>
        <i class="icon pause_circle_outline"></i>
      </template>
    </vueper-slides>
  </div>
</template>

<script>
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";
export default {
  components: {
    VueperSlides,
    VueperSlide,
  },
  name: "my-main-slider",
  data() {
    return {
      slides: [
        {
          image: require("@/assets/images/mainSlider1.jpg"),
        },
        { image: require("@/assets/images/mainSlider2.jpg") },
        { image: require("@/assets/images/mainSlider3.jpg") },
        { image: require("@/assets/images/mainSlider4.jpg") },
      ],
    };
  },
};
</script>

<style lang="scss">
.vueperslides.main-slider {
  width: 100%;
  box-shadow: none;
  border-radius: 0;
  box-shadow: 0 0 20px black;
}
.vueperslide__title {
  position: absolute;
  bottom: 15px;
  right: 15px;
  color: $grey;
  font-size: 2.8rem;
}
.vueperslide.main-slider_slide {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 0;
}
.main-slider .vueperslides__bullet .default {
  background-color: rgba(0, 0, 0, 0.3);
  border: none;
  box-shadow: none;
  transition: 0.3s;
  width: 7rem;
  height: 0.3rem;
}

.main-slider .vueperslides__bullet--active .default {
  background-color: $grey;
}
</style>
