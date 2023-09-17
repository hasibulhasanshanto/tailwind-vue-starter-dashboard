<script setup lang="ts">
import CiHamburger from "../icons/hamburger.vue";
</script>

<template>
  <header>
    <div
      class="h-[50px] bg-gray-100 flex items-center shadow-sm px-[10px] w-full py-[10px] z-10 border-b border-stone-700"
    >
      <!-- Menu icon -->
      <div @click="$emit('toggleMenu')" class="cursor-pointer w-[30px]">
        <CiHamburger />
      </div>
      <!-- Search Bar  -->

      <!-- Profile and Bar  -->
    </div>
  </header>
</template>
