<template>
  <!-- begin:header -->
  <header
    class="lg:bg-linear-to-r bg-white lg:from-40% from-primary lg:to-black shadow-md lg:shadow-lg sticky top-0 z-50 h-header w-full"
  >
    <div class="container mx-auto px-2 lg:px-26">
      <div class="h-header flex items-center">
        <div class="mr-6 hidden lg:inline-block">
          <AppLogo />
        </div>
        <div class="h-full flex items-center">
          <HeaderNavAppMenu />
        </div>
        <div class="ml-auto">
          <IconsSearch class="text-2xl text-white" />
        </div>
      </div>
    </div>
  </header>
  <!-- end:header -->
</template>
