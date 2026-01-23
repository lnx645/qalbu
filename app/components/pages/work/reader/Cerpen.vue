<template>
  <PagesContainer>
    <div class="flex flex-col lg:flex-row-reverse">
      <div
        class="w-full lg:w-2/6 flex flex-col items-start justify-start lg:p-3 lg:min-h-[calc(100vh-3.5rem)] lg:sticky lg:top-(--height-header) lg:max-h-[calc(100vh-3.5rem)] lg:border-l border-neutral-200"
      >
        <div class="rounded-lg lg:px-5 space-y-4 mt-3">
          <PagesWorkAuthorProfileCard />
          <div class="flex items-center justify-center space-x-2">
            <div
              v-for="i in 3"
              class="w-2 h-2 bg-neutral-400 rounded-full"
            ></div>
          </div>
          <div class="flex items-center w-full">
            <div
              class="flex-1 border border-neutral-200 border-r-0 rounded-l-lg py-2 flex flex-col items-center justify-center space-y-1"
            >
              <div class="font-semibold text-xs text-neutral-500">Views</div>
              <div class="text-sm font-bold text-neutral-900">190 M</div>
            </div>

            <div
              class="flex-1 border border-neutral-200 rounded-r-lg py-2 flex flex-col items-center justify-center space-y-1"
            >
              <div class="font-semibold text-xs text-neutral-500">Dukungan</div>
              <div class="text-sm font-bold text-neutral-900">190 M</div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex lg:hidden my-3 mb-0 lg:px-3 space-x-2">
        <div v-for="i in 17" class="w-2 h-2 bg-neutral-100 rounded-full"></div>
      </div>
      <div class="flex-1">
        <div class="py-3 lg:px-3">
          <div
            class="rounded-pill hidden rounded"
            :style="
              imageCoverStyle(
                'https://kwikku.us/uploads/public/images/short/cover/thumb/239148604909-20260122222035.png',
              )
            "
            style="height: 350px"
          />
          <div class="title mb-3 px-3 lg:px-0 lg:text-left">
            <h1 class="text-2xl">Hujan di Bulan Juni yang Tak Kunjung Reda</h1>
          </div>
          <div class="prose prose-neutral prose-md max-w-none px-3 lg:px-0 text-neutral-700">
            <h4>Bab 1</h4>
            <p>
              Usia Nebiru sudah menginjak kepala dua dan punya keinginan besar
              untuk segera menikah dengan kekasihnya, tetapi justru sang kekasih
              diam-diam menyusun rapi persiapan pernikahan dengan orang lain,
              yang jelas bukan dengan dirinya.
              
              <p>
                 Untuk menyembuhkan luka batinnya
              setiap ada waktu luang Nebiru mengajak adiknya bermain ke tempat
              berbagai wahana. Ketika sedang asik memilih wahana mana yang akan
              dinaiki lagi, Nebiru bertemu dengan seorang cewek yang sedang
              mabuk berat. "Lo naik wahana berapa kali? Jangan nyoba buat nyiksa
              diri lo sendiri."
              </p>Nebiru bertanya kepada cewek yang ditemuinya.
              "5," jawabnya enteng. Nebiru dan Olive spontan melebarkan matanya.
              "Wahana di sini udah dibuka lama. Nggak perlu tumbal proyek lagi
              kayaknya. Alamat lo di mana?" -- Apakah Nebiru masih membutuhkan
              waktu yang lama lagi untuk sembuh sedangkan Tuhan sudah
              mengirimkan dia di depan mata?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
              necessitatibus! Ea, rerum, fugit commodi possimus odit fugiat amet
              blanditiis ex soluta assumenda aspernatur excepturi eveniet
              voluptates perferendis numquam quaerat ad? Sequi ipsa odit
              reiciendis obcaecati quaerat? Blanditiis earum, magnam et velit
              neque corrupti, quae eaque doloribus illo incidunt provident in
              quaerat mollitia cumque deleniti nemo, ea recusandae! Dicta,
              provident dolor! Eum laudantium enim cupiditate odio eos officia
              voluptate ab earum doloribus doloremque quaerat numquam rerum hic
              cumque, iure voluptatum dignissimos molestias architecto accusamus
              libero. Illo eos molestias deleniti praesentium delectus!
            </p>
          </div>
        </div>
      </div>
    </div>
  </PagesContainer>
</template>
<script setup lang="ts">
const { imageCoverStyle } = useWorkItem();
const stats = [
  { label: "Views", value: "190Jt" },
  { label: "Dukungan", value: "190Jt" },
];
</script>
