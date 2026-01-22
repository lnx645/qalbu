<script setup lang="ts">
import ImageSliders from "~/features/home/ImageSliders.vue";

const images = [
  {
    name: "Genshin Impact",
    image:
      "https://assets.tokovoucher.me/2022/11/20fabce74b66c51c771b12fea8653c67.png?auto_optimize=medium",
  },
  {
    name: "Genshin Impact",
    image:
      "https://assets.tokovoucher.me/2022/11/20fabce74b66c51c771b12fea8653c67.png?auto_optimize=medium",
  },
  {
    name: "Free Fire",
    image:
      "https://cdn.tokovoucher.net/2025/10/63693cd12e1451aceb1f6ec2c7c4ab20.png?auto_optimize=medium&format=webp",
  },
  {
    name: "Hago Diamond",
    image:
      "https://cdn.aplikasikreasi.id/uploads/tokovoucher/2025/10/6_Hago-Diamond-ID-73112c1493e4f36c06f405d23d87156d.png?auto_optimize=medium&format=webp",
  },
  {
    name: "Free Fire",
    image:
      "https://cdn.tokovoucher.net/2025/10/63693cd12e1451aceb1f6ec2c7c4ab20.png?auto_optimize=medium&format=webp",
  },
  {
    name: "Hago Diamond",
    image:
      "https://cdn.aplikasikreasi.id/uploads/tokovoucher/2025/10/6_Hago-Diamond-ID-73112c1493e4f36c06f405d23d87156d.png?auto_optimize=medium&format=webp",
  },
];
</script>

<template>
  <!-- SLIDER -->
  <div class="rounded-lg mx-2 my-2 overflow-hidden">
    <ImageSliders />
  </div>
  <!-- END SLIDER -->
  <section>
    <nav
      class="overflow-x-auto border-b border-b-neutral-100 text-xs scrollbar-hide"
    >
      <ul class="flex items-center min-w-max">
        <li
          class="border-b-4 rounded-t bg-primary/20 border-primary py-2 whitespace-nowrap flex items-center px-4"
        >
          <p class="font-bold text-primary">Jadwal Solat</p>
        </li>
        <li class="py-2 whitespace-nowrap flex items-center px-4">
          <p>Juz Amma</p>
        </li>
        <li class="py-2 whitespace-nowrap flex items-center px-4">
          <p>Ramadhan 1447H</p>
        </li>
        <li class="py-2 whitespace-nowrap flex items-center px-4">
          <p>Forums & Diskusi</p>
        </li>
        <li class="py-2 whitespace-nowrap flex items-center px-4">
          <p>Arah Qiblat</p>
        </li>
      </ul>
    </nav>
  </section>
  <div class="p-2">JADWAL SOLAT 2006</div>
</template>
