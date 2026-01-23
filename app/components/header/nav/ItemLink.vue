<template>
  <NuxtLink
    arialabel="Item Link"
    exact-active-class="hover:bg-neutral/5 "
    class="relative px-4 transition-all flex items-center justify-center h-full flex-1"
  >
    <template #default="{ isExactActive }">
      <component
        :class="{
          'lg:text-neutral-100 text-primary': isExactActive,
          'lg:text-neutral-200': !isExactActive,
        }"
        v-if="isExactActive"
        :is="iconActive"
      />
      <component
        v-if="!isExactActive || !iconActive"
        class="text-xl"
        :is="icon"
        :class="{
          'lg:text-neutral-100 text-primary': isExactActive,
          'lg:text-neutral-200': !isExactActive,
        }"
      />
      <div
        v-if="isExactActive"
        class="absolute h-1 rounded-t-lg bottom-0 bg-primary lg:bg-neutral-50 w-full"
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
