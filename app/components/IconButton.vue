<template>
  <motion.button
    :whileHover="{ scale: 1.1 }"
    :whilePress="{ scale: 0.9 }"
    class="w-8 h-8 aspect-square flex items-center justify-center cursor-pointer bg-neutral-100/80 rounded-lg"
  >
    <component class="text-neutral-600" :is="icon" />
  </motion.button>
</template>
<script setup lang="ts">
import { motion } from "motion-v";
defineProps<{
  icon: Component;
}>();
</script>
