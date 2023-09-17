<script setup lang="ts">
import { ref } from "vue";
import Navbar from "../../components/dashboard/Header.vue";
import Sidebar from "../../components/dashboard/Sidebar.vue";

const showSidebar = ref<boolean>(false);

const toggleMenu = () => {
  showSidebar.value = !showSidebar.value;
};
</script>

<template>
  <div class="w-screen h-screen flex text-center">
    <!-- Sidebar  -->
    <Sidebar :showSidebar="showSidebar" />

    <!-- Main Start -->
    <main class="w-full h-full">
      <!-- Navbar  -->
      <Navbar @toggleMenu="toggleMenu" />
      <!-- Page content  -->
      <div class="h-[calc(100vh-50px)] bg-gray-50 p-[20px]">
        <div class="border border-gray-300 rounded-md p-[20px] h-full">
          <router-view></router-view>
        </div>
      </div>
    </main>
    <!-- Main ends /.  -->
  </div>
</template>
<style>
body {
  overflow: hidden;
}
</style>
