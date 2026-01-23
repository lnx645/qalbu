<template>
  <NuxtLink
    arialabel="Item Link"
    exact-active-class="hover:bg-primary/5 "
    class="relative px-4 transition-all flex items-center justify-center h-full flex-1"
  >
    <template #default="{ isExactActive }">
      <component
        :class="{
          'text-primary': isExactActive,
          'text-secondary': !isExactActive,
        }"
        v-if="isExactActive"
        :is="iconActive"
      ></component>
      <component
        v-if="!isExactActive || !iconActive"
        class="text-xl"
        :is="icon"
        :class="{
          'text-primary': isExactActive,
          'text-secondary': !isExactActive,
        }"
      />
      <div
        v-if="isExactActive"
        class="absolute h-1 rounded-t-lg bottom-0 bg-primary w-full"
      ></div>
    </template>
  </NuxtLink>
</template>
<script setup lang="ts">
defineProps<{
  icon: Component;
  iconActive?: Component;
}>();
</script>
