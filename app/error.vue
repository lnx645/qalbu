<script setup lang="ts">
import type { NuxtError } from "#app";

defineProps<{
  error: NuxtError;
}>();

definePageMeta({
  layout: "default",
});

const handleError = () => {
  clearError({ redirect: "/" });
};
</script>

<template>
  <div class="min-h-screen flex items-center justify-center px-4">
    <div class="max-w-md w-full text-center space-y-4">
      <!-- Status Code -->
      <h1 class="text-6xl font-bold text-red-500">
        {{ error.statusCode }}
      </h1>
      <!-- Message -->
      <p class="text-lg font-medium text-neutral-800">
        {{
          error.statusCode === 404
            ? "Halaman tidak ditemukan"
            : "Terjadi kesalahan"
        }}
      </p>

      <p class="text-sm text-neutral-500">
        {{ error.message }}
      </p>

      <!-- Actions -->
      <div class="flex justify-center gap-3 pt-4">
        <button
          @click="handleError"
          class="px-4 py-2 rounded-lg bg-primary text-white text-sm font-medium hover:bg-red-600 active:scale-95 transition"
        >
          Kembali ke Beranda
        </button>

        <button
          @click="$router.back()"
          class="px-4 py-2 rounded-lg border border-neutral-300 text-sm font-medium text-neutral-700 hover:bg-neutral-100 active:scale-95 transition"
        >
          Kembali
        </button>
      </div>
    </div>
  </div>
</template>
