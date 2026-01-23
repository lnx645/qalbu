<template>
  <header
    class="bg-white border-b border-neutral-200 sticky top-0 text-neutral-200/90 h-14"
  >
    <div class="container mx-auto px-4">
      <div class="flex h-14 items-center justify-between">
        <div class="mr-auto">
          <HeaderMenuToggle
            v-if="store.isClientReady"
            mode="menu"
            @on-open-menu="openMenu"
          />
          <div
            v-else
            class="w-8 h-8 aspect-square flex items-center justify-center cursor-pointer bg-neutral-100/80 rounded-lg"
          >
            <IconsLoading class="w-5 h-5" />
          </div>
        </div>
        <div class="mx-auto flex-1">
          <div class="px-4">
            <HeaderLogo />
          </div>
        </div>
        <div class="flex gap-x-4 items-center justify-start">
          <IconButton :icon="Bell" />
          <IconButton :icon="Search" />
        </div>
      </div>
    </div>
  </header>
</template>
<script setup lang="ts">
import Bell from "./icons/BellFill.vue";
import Search from "./icons/Search.vue";
import { useDrawerStore } from "~/stores/drawer.store";
const store = useDrawerStore();
const openMenu = () => {
  if (store.isOpen) {
    store.close();
  } else {
    store.open();
  }
};
</script>
