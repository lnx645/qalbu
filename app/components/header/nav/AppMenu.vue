<script setup lang="ts">
import IconsHome from "~/components/icons/Home.vue";
import IconsCompas from "~/components/icons/Compas.vue";
import IconsLists from "~/components/icons/Lists.vue";
import IconsListsFill from "~/components/icons/ListsFill.vue";
import IconsBellFill from "~/components/icons/BellFill.vue";
import IconsHomeFill from "~/components/icons/HomeFill.vue";

import IconsBell from "~/components/icons/Bell.vue";
</script>
<template>
  <nav class="flex gap-3 h-header items-center">
    <HeaderNavItemLink :iconActive="IconsHomeFill" to="/" :icon="IconsHome">
      HOME
    </HeaderNavItemLink>
    <HeaderNavItemLink to="/explore" :icon="IconsCompas">
      COMPAS
    </HeaderNavItemLink>
    <HeaderNavItemLink
      :iconActive="IconsListsFill"
      to="/reading-lists"
      :icon="IconsLists"
    >
      COMPAS
    </HeaderNavItemLink>
    <HeaderNavItemLink
      :icon-active="IconsBellFill"
      to="/notif"
      :icon="IconsBell"
    >
      COMPAS
    </HeaderNavItemLink>
  </nav>
</template>
