<template>
  <IconButton
    :icon="IconsMenu"
    v-if="mode === 'menu'"
    @click="emit('onOpenMenu')"
  />
  <IconButton :icon="IconsClose" v-else @click="emit('onOpenMenu')" />
</template>

<script setup lang="ts">
import IconsClose from "~/components/icons/Close.vue";
import IconsMenu from "~/components/icons/Menu.vue";

defineProps<{
  mode?: "menu" | "close";
}>();
const emit = defineEmits<{
  (e: "onOpenMenu"): void;
}>();
</script>
