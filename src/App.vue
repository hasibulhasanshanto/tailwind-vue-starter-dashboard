<script setup lang="ts">
import { ref } from "vue";
import Navbar from "./components/dashboard/Header.vue";
import Sidebar from "./components/dashboard/Sidebar.vue";
import OffCanvas from "./components/dashboard/OffCanvas.vue";

const showSidebar = ref<boolean>(false);

const toggleMenu = () => {
  showSidebar.value = !showSidebar.value;
};
</script>

<template>
  <div class="flex bg-[#f8fafc]">
    <!-- Off canvas menu  -->
    <OffCanvas />

    <!-- Sidebar  -->
    <Sidebar :showSidebar="showSidebar" />

    <!-- Main Start -->
    <main class="w-full h-full relative">
      <!-- Navbar  -->
      <Navbar @toggleMenu="toggleMenu" />
      <!-- Page content  -->
      <!-- TODO: add to body and see -> overflow-auto  -->
      <div class="h-[calc(100vh-50px)] p-[20px]">
        <!-- <div class="container flex-grow mx-auto"> -->
        <div class="h-full">
          <router-view></router-view>
        </div>
      </div>
    </main>
    <!-- Main ends /.  -->
  </div>
</template>

<style>
/* body {
  overflow: hidden;
} */
</style>
