<template>
  <nav class="p-2 flex items-center justify-between text-xs font-bold">
    <span class="text-md text-primary">Qualbu.com</span>
    <div>Login</div>
  </nav>
  <!-- begin:header -->
  <header class="bg-primary shadow-lg sticky top-0 z-50 h-header w-full">
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
