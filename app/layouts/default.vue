<template>
  <div
    id="main-app"
    class="max-w-2xl relative overflow-x-hidden bg-white min-h-screen mx-auto"
  >
    <Header />
    <LazyDrawer>
      <DrawerMainMenu />
    </LazyDrawer>
    <slot />
  </div>
</template>
<script setup lang="ts">
import Header from "~/components/header.vue";
</script>
