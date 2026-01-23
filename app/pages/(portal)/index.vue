<script setup lang="ts">
import type { WorkItemsType } from "~~/types/work-item.types";
const { data, pending } = await useLazyFetch<WorkItemsType[]>("/api/works");
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import "vue3-carousel/carousel.css";
</script>

<template>
  <div class="container flex flex-col space-y-4 py-3 mx-auto px-0 lg:px-26">
    <section v-for="i in ['Populer', 'Cerpen', 'Terbaru']" :key="i">
      <div class="mb-4">
        <h1 class="text-2xl font-primary font-bold">{{ i }}</h1>
      </div>

      <Carousel
        v-bind="{
          itemsToShow: 2,
          snapAlign: 'center',
          wrapAround: true,
          transition: 500,
          autoplay: 3000,
          mouseDrag: true,
          touchDrag: true,
          gap: 3,
          pauseAutoplayOnHover: true,

          // Responsive Breakpoints
          breakpoints: {
            768: {
              itemsToShow: 2.5,
              snapAlign: 'center',
            },
            // Laptop/Desktop (1024px ke atas)
            1024: {
              gap: 4,
              itemsToShow: 6, // Menampilkan 3 full + 1 setengah
              snapAlign: 'start', // Di desktop biasanya lebih enak align kiri (start)
            },
            // Layar Lebar (1280px ke atas)
            1280: {
              itemsToShow: 6,
              gap: 6,
              snapAlign: 'start',
            },
          },
        }"
      >
        <Slide class="py-3" v-for="(item, index) in data">
          <WorkItem v-if="!pending" :key="index" :item="item" />
        </Slide>
        <template #addons>
          <Navigation />
        </template>
      </Carousel>
    </section>
  </div>
</template>
<style>
.carousel__next,
.carousel__prev {
  background: rgba(0, 0, 0, 0.3);
  border-radius: 50%;
  width: 40px;
  bottom: 0;
  height: 40px;
  color: white;
}
.carousel__prev {
  left: 10px;
}
.carousel__next {
  right: 10px;
}
.carousel__next:hover,
.carousel__prev:hover {
  color: #e5e5e5;
}

.carousel__next--disabled,
.carousel__prev--disabled {
  opacity: 0.3;
}
</style>
