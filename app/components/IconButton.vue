<template>
  <motion.button
    :whileHover="{ scale: 1.1 }"
    :whilePress="{ scale: 0.9 }"
    class="w-8 h-8 aspect-square flex items-center justify-center cursor-pointer bg-neutral-600/40 rounded-lg"
  >
    <component class="text-neutral-200/90" :is="icon" />
  </motion.button>
</template>
<script setup lang="ts">
import { motion } from "motion-v";
defineProps<{
  icon: Component;
}>();
</script>
