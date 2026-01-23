<script setup lang="ts">
import avatar from "~/assets/images/avatar.jpeg";
</script>

<template>
  <div class="grid m-2 grid-cols-3 gap-1">
    <div
      v-for="i in 5"
      class="bg-red-500/10 p-3 text-center rounded border-red-500 text-red-500"
    >
      TOTAL Tugas {{ i }}
    </div>
  </div>
  {{ avatar }}
</template>
