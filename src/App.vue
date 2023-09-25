<script setup lang="ts">
import { ref } from "vue";
import { RouterView } from "vue-router";
import Navbar from "./components/dashboard/Header.vue";
import Sidebar from "./components/dashboard/Sidebar.vue";
import Footer from "./components/dashboard/Footer.vue";
import OffCanvas from "./components/dashboard/OffCanvas.vue";
const showSidebar = ref<boolean>(false);

const toggleMenu = () => {
  showSidebar.value = !showSidebar.value;
};
</script>

<template>
  <div class="body-content">
    <!-- Sidebar -->
    <Sidebar class="hidden md:block" :showSidebar="showSidebar" />
    <!-- Sidebar /.-->

    <!-- Off canvas class="block md:hidden"  -->
    <OffCanvas />
    <!-- Off canvas  /.-->

    <div
      class="wrapper ml-0"
      :class="showSidebar ? 'md:ml-[70px]' : 'md:ml-[280px]'"
    >
      <!-- Header  -->
      <Navbar @toggleMenu="toggleMenu" />
      <!-- Header  /.-->

      <div class="content">
        <!-- Main  -->
        <main class="container p-4">
          <RouterView />
        </main>
        <!-- Main  /.-->

        <!-- Footer  -->
        <Footer />
        <!-- Footer  /.-->
      </div>
    </div>
  </div>
</template>
