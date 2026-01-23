<script setup lang="ts">
import type { WorkItemsType } from "~~/types/work-item.types";
const { data, pending } = await useLazyFetch<WorkItemsType[]>("/api/works");
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import "vue3-carousel/carousel.css";
</script>

<template>
  <div class="container flex flex-col space-y-4 py-3 mx-auto px-0 lg:px-26">
    <section v-for="i in ['Populer', 'Cerpen', 'Terbaru']" :key="i">
      <SectionsLabelTitle :title="i" />
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

          breakpoints: {
            768: {
              itemsToShow: 2.5,
              snapAlign: 'center',
            },
            1024: {
              gap: 4,
              itemsToShow: 6,
              snapAlign: 'start',
            },
            1280: {
              itemsToShow: 6,
              gap: 6,
              snapAlign: 'start',
            },
          },
        }"
      >
        <Slide v-if="!pending" class="py-3 pt-0" v-for="(item, index) in data">
          <WorkItem :key="index" :item="item" />
        </Slide>
        <Slide class="py-3 pt-0" v-else v-for="i in 6" :key="i">
          <WorkItemLazyLoading />
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
