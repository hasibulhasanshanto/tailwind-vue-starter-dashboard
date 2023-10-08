<script setup lang="ts">
import { ref } from "vue";
import { RouterView } from "vue-router";
import Navbar from "./components/dashboard/Header.vue";
import Sidebar from "./components/dashboard/Sidebar.vue";
import OffCanvas from "./components/dashboard/OffCanvas.vue";
import Footer from "./components/dashboard/Footer.vue";
const showSidebar = ref<boolean>(false);

const toggleMenu = () => {
  showSidebar.value = !showSidebar.value;
};
</script>

<template>
  <div class="body-content bg-light-900 dark:bg-dark-100">
    <!-- Sidebar -->
    <Sidebar class="hidden md:block" :showSidebar="showSidebar" />
    <!-- Sidebar /.-->

    <!-- Off canvas -->
    <OffCanvas class="block md:hidden" />
    <!-- Off canvas  /.-->

    <!-- Wrapper -->
    <div
      class="wrapper ml-0"
      :class="showSidebar ? 'md:ml-[70px]' : 'md:ml-[280px]'"
    >
      <!-- Header  -->
      <Navbar @toggleMenu="toggleMenu" />
      <!-- Header  /.-->

      <div class="content">
        <!-- Main  -->
        <main class="sb-container py-4 px-6">
          <RouterView />
        </main>
        <!-- Main  /.-->

        <!-- Footer  -->
        <Footer />
        <!-- Footer  /.-->
      </div>
    </div>
    <!-- Wrapper /.-->
  </div> 
</template>
