<template>
  <div class="mb-2 flex items-start justify-between lg:px-0 px-2">
    <h1 class="text-lg lg:text-2xl font-roboto font-bold">
      {{ title }}
    </h1>
    <NuxtLink
      to="work/commic/"
      class="text-xs text-primary font-semibold underline"
      >Semuanya</NuxtLink
    >
  </div>
</template>
<script setup lang="ts">
defineProps<{
  title?: string;
}>();
</script>
