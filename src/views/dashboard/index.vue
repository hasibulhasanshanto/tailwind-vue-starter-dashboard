<script setup lang="ts">
import { ref } from "vue";
import Navbar from "../../components/dashboard/Header.vue";
import Sidebar from "../../components/dashboard/Sidebar.vue";
import OffCanvas from "../../components/dashboard/OffCanvas.vue";

const showSidebar = ref<boolean>(false);
const showDropDown = ref<boolean>(false);
const showNotification = ref<boolean>(false);
const showLightDark = ref<boolean>(false);
const showLang = ref<boolean>(false);

const toggleMenu = () => {
  showSidebar.value = !showSidebar.value;
};
const toggleDrop = () => {
  showDropDown.value = !showDropDown.value;
  showLightDark.value = false;
  showNotification.value = false;
  showLang.value = false;
};

const toggleNotification = () => {
  showNotification.value = !showNotification.value;
  showLightDark.value = false;
  showDropDown.value = false;
  showLang.value = false;
};

const toggleLightDark = () => {
  showLightDark.value = !showLightDark.value;
  showNotification.value = false;
  showDropDown.value = false;
  showLang.value = false;
};

const toggleLang = () => {
  showLang.value = !showLang.value;
  showLightDark.value = false;
  showNotification.value = false;
  showDropDown.value = false;
};
</script>

<template>
  <div class="flex bg-[#f8fafc]">
    <OffCanvas/>
    <!-- Sidebar  -->
    <Sidebar :showSidebar="showSidebar" />

    <!-- Main Start -->
    <main class="w-full h-full">
      <!-- Navbar  -->
      <Navbar
        @toggleMenu="toggleMenu"
        @toggleDrop="toggleDrop"
        @toggleNotification="toggleNotification"
        @toggleLightDark="toggleLightDark"
        @toggleLang="toggleLang"
        :showDropDown="showDropDown"
        :showNotification="showNotification"
        :showLightDark="showLightDark"
        :showLang="showLang"
      />
      <!-- Page content  -->
      <div class="h-[calc(100vh-50px)] p-[20px] overflow-auto">
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
body {
  overflow: hidden;
}
</style>
