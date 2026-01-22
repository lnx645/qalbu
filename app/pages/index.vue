<script setup lang="ts">
import avatar from "~/assets/images/avatar.jpeg";
</script>

<template>
  <!-- Top Tabs -->
  <section class="sticky top-0 z-30 bg-white">
    <nav
      class="overflow-x-auto border-b border-neutral-100 text-xs scrollbar-hide"
    >
      <ul class="flex min-w-max">
        <li class="border-b-2 border-primary bg-primary/10 px-5 py-3">
          <p class="font-semibold text-primary">🔥 Viral</p>
        </li>
        <li class="px-5 py-3 text-neutral-500">Trending</li>
        <li class="px-5 py-3 text-neutral-500">Ramadhan 1447H</li>
        <li class="px-5 py-3 text-neutral-500">Fresh</li>
      </ul>
    </nav>
  </section>

  <!-- Feed -->
  <div class="px-3 mt-4 pb-20 space-y-6">
    <article
      v-for="i in 5"
      :key="i"
      class="bg-white rounded-xl shadow-sm overflow-hidden"
    >
      <!-- Header -->
      <div class="flex items-center gap-3 p-3">
        <img
          class="w-9 h-9 rounded-full object-cover"
          :src="avatar"
          alt="avatar"
        />
        <div class="text-xs">
          <p class="font-semibold">Jarjit Singh</p>
          <p class="text-neutral-500 text-[11px]">@jarjit · 2 jam lalu</p>
        </div>
      </div>

      <!-- Caption -->
      <div class="px-3 pb-2 text-sm space-y-2">
        <p>
          Konon katanya bro ini udah gak keluar dari bilik toilet selama 6 tahun
          💀💀
        </p>
        <div class="text-primary text-xs font-medium">#RAMADHANCERIA</div>
      </div>

      <!-- Image -->
      <NuxtImg
        class="w-full aspect-square object-cover bg-neutral-100"
        src="https://cache.lahelu.com/8ff03855-7ce8-4726-a4ab-2b76531d2c70.webp"
        loading="lazy"
      />

      <!-- Actions -->
      <div
        class="flex justify-between items-center px-4 py-3 text-xs text-neutral-600"
      >
        <div class="flex items-center gap-4">
          <button class="flex items-center gap-1 active:scale-90">
            ❤️ <span>1.2k</span>
          </button>
          <button class="flex items-center gap-1 active:scale-90">
            💬 <span>87</span>
          </button>
        </div>
        <button class="active:scale-90">🔗 Share</button>
      </div>
    </article>
  </div>
</template>
