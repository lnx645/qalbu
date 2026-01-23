<template>
  <motion.div
    :whilePress="{ scale: 0.9 }"
    class="shadow-[0_6px_0_0] w-full h-full shadow-neutral-100 hover:shadow-[0_4px_0_0] border border-neutral-100 transition-all cursor-pointer group bg-white rounded-lg relative"
  >
    <div
      :style="imageCoverStyle(item.image)"
      class="rounded-bottom-0 rounded-lg rounded-b-none group-hover:outline-3 -outline-offset-3 outline-primary/80 offset-4 overflow-hidden transition-all"
    />
    <div class="absolute top-0 left-0 p-2 text-[10px]">
      <div :class="cn(typeClasses(item.type), 'px-1 py-0.5')">
        {{ item.type }}
      </div>
    </div>
    <div class="mt-2 p-2 py-0 pb-3">
      <h1
        class="font-semibold transition-all group-active:text-primary group-hover:text-primary tracking-[.15px] leading-5 text-[14px] line-clamp-2"
      >
        {{ item.title }}
      </h1>
      <h2
        class="text-xs flex gap-x-0.5 font-bold items-center justify-start group-hover:text-neutral-700 text-neutral-400"
      >
        <div class="text-[10px]">{{ item.category }}</div>
        <span>&bull;</span>
        <div class="text-[10px] group-active:text-primary">
          @{{ item.author }}
        </div>
      </h2>
    </div>
  </motion.div>
</template>

<script setup lang="ts">
import { motion } from "motion-v";
import type { WorkItemsType } from "@@/types/work-item.types";
defineProps<{
  item: WorkItemsType;
}>();
const { typeClasses, imageCoverStyle } = useWorkItem();
import { cn } from "@sglara/cn";
</script>
