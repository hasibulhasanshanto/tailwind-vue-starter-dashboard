<script setup lang="ts">
import { ref } from "vue";
import Navbar from "../../components/dashboard/Header.vue";
import Sidebar from "../../components/dashboard/Sidebar.vue";

const showSidebar = ref<boolean>(false);
const showDropDown = ref<boolean>(false);
const showNotification = ref<boolean>(false);
const showLightDark = ref<boolean>(false);

const toggleMenu = () => {
  showSidebar.value = !showSidebar.value;
};
const toggleDrop = () => {
  showDropDown.value = !showDropDown.value;
  showLightDark.value = false;
  showNotification.value = false;
};

const toggleNotification = () => {
  showNotification.value = !showNotification.value;
  showLightDark.value = false;
  showDropDown.value = false;
};

const toggleLightDark = () => {
  showLightDark.value = !showLightDark.value;
  showNotification.value = false;
  showDropDown.value = false;
};
</script>

<template>
  <div class="w-screen h-screen flex text-center">
    <!-- Sidebar  -->
    <Sidebar :showSidebar="showSidebar"/>

    <!-- Main Start -->
    <main class="w-full h-full">
      <!-- Navbar  -->
      <Navbar @toggleMenu="toggleMenu" @toggleDrop="toggleDrop" @toggleNotification="toggleNotification" @toggleLightDark="toggleLightDark" :showDropDown="showDropDown" :showNotification="showNotification" :showLightDark="showLightDark" />
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
