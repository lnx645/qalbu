<template>
  <Carousel v-bind="carouselConfig">
    <Slide v-for="slide in slides" :key="slide">
      <div class="h-full w-full bg-gray-200 flex items-center justify-center">
        <img :src="slide" alt="" />
      </div>
    </Slide>
  </Carousel>
</template>
<script setup lang="ts">
import "vue3-carousel/carousel.css";
import { Carousel, Slide } from "vue3-carousel";
const carouselConfig = {
  itemsToShow: 1,
  wrapAround: true,
  mouseDrag: true,
  pauseAutoPlayOnHover: true,
  autoPlay: 3000,
};
const slides = [
  "https://cdn.tokovoucher.net/2023/02/61181b434d4118b566c0b6b1a3de6eab.png?auto_optimize=medium&format=webp",
  "https://cdn.tokovoucher.net/2025/04/4c01f4b82797518ceec3ffcd99588064.png?auto_optimize=medium&format=webp",
  "https://cdn.tokovoucher.net/2024/02/dd9e14db86e9b963893061bf28a90732.png?auto_optimize=medium&format=webp",
];
</script>
