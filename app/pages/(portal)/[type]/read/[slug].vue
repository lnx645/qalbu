<template>
  <PagesWorkReaderCerpen
    v-if="route.params.type == WorkType.CERITA_PENDEK.toLowerCase()"
  />
  <PagesWorkReaderPuisi
    v-else-if="route.params.type == WorkType.PUISI.toLowerCase()"
  />
  <div v-else>Opps Tidak ada</div>
</template>
<script setup lang="ts">
const route = useRoute();
</script>
