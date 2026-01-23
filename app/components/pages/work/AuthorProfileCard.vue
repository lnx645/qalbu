<template>
  <ul class="flex flex-col space-y-4">
    <li class="flex space-x-2 items-center">
      <div
        class="h-8 border border-neutral-100 bg-neutral-200 w-8 rounded-full"
        :class="`bg-[url('https://img.wattpad.com/useravatar/LilyLayu.128.699134.jpg')]`"
      ></div>
      <div class="flex flex-col">
        <a href="" class="inline-block text-sm font-semibold">Hendry Priatno</a>
        <span class="text-xs text-primary font-medium">@nashuha82</span>
      </div>
      <button
        class="bg-primary/20 ml-auto hover:bg-primary/70 border border-primary/50 active:bg-primary/80 flex items-center space-x-1 px-3 py-1.5 cursor-pointer rounded-lg text-sm text-primary"
      >
        <IconsUserAdd />
        <span class="text-xs">Follow</span>
      </button>
    </li>

    <li class="bg-neutral-200/50 p-3 text-xs rounded-lg">
      <p>
        adalah seorang perangkai kata yang percaya bahwa setiap sudut kota
        menyimpan cerita magis. Lahir dan besar di Yogyakarta,
      </p>
      <a href="">Selengkapnya...</a>
    </li>
  </ul>
</template>
