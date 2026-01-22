<template>
  <ClientOnly>
    <teleport to="body">
      <div
        v-if="isOpen"
        class="fixed inset-0 bg-primary/70 z-40 backdrop-blur"
      ></div>
      <AnimatePresence>
        <motion.div
          ref="drawer"
          v-if="isOpen"
          @dragEnd="endDrag"
          drag="x"
          :dragConstraints="{ left: 0, right: 0 }"
          class="bg-white shadow-2xl fixed top-0 z-50 lg:max-w-xs lg:min-w-xs h-full w-70 max-w-70"
          :initial="{ x: -500 }"
          :animate="{ x: 0 }"
          :exit="{ x: -500 }"
          :transition="{
            type: 'spring',
            stiffness: 260,
            damping: 30,
          }"
        >
          <header class="border-b border-neutral-200 bg-primary">
            <div class="flex px-2 items-center">
              <HeaderLogo class="p-4" />
              <div class="ml-auto">
                <HeaderMenuToggle @on-open-menu="closeMenu" mode="close" />
              </div>
            </div>
          </header>
          <div>
            <slot />
          </div>
        </motion.div>
      </AnimatePresence>
    </teleport>
  </ClientOnly>
</template>

<script setup lang="ts">
import { motion, AnimatePresence } from "motion-v";
import { storeToRefs } from "pinia";
import { useDrawerStore } from "~/stores/drawer.store";

const store = useDrawerStore();
const { isOpen } = storeToRefs(store);
import { onClickOutside } from "@vueuse/core";

const target = useTemplateRef("drawer");

onClickOutside(target, (_) => {
  if (isOpen.value) {
    store.close();
  }
});
function closeMenu() {
  if (isOpen.value) {
    store.close();
  }
}
//for end drag
function endDrag(e: PointerEvent, info: any) {
  if (info.offset.x < -180) {
    store.close();
  }
  console.log(`info offset drawer [x]: ${info.offset.x}`);
}
//is open
store.$subscribe((_, state) => {
  if (state.isOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }
});

onMounted(() => {
  store.setClientReady();
});
onUnmounted(() => {
  document.body.style.overflow = "";
});

const route = useRoute();

watch(
  () => route.fullPath,
  () => {
    store.close();
  },
);
</script>
