<script setup lang="ts">
import IcOutlineHome from "../components/icons/home.vue";
import ProfileCircleOutline from "../components/icons/profile.vue";
import SettingsOutlineRounded from "../components/icons/settings.vue";
import LogoutRounded from "../components/icons/logout.vue";
import PhChatCircle from "../components/icons/chat.vue";
import CiHamburger from "../components/icons/hamburger.vue";
</script>

<template>
  <div class="w-screen h-screen flex text-center">
    <!-- Sidebar  -->
    <div class="w-[400px] h-full text-white">
      <div class="h-[50px] bg-gray-700 flex items-center justify-start">
        <div class="px-[20px]">
          <h3 class="font-bold text-sm md:text-xl">Admin Dashboard</h3>
        </div>
      </div>
      <div class="h-[calc(100vh-50px)] bg-stone-400 py-4">
        <div
          class="flex flex-col justify-between h-full px-[20px] space-y-[10px]"
        >
          <div class="flex flex-col justify-between space-y-[10px]">
            <router-link
              to="/home"
              class="inline-flex relative items-center py-[10px] w-full font-medium text-sm rounded-md rounded-b-lg hover:bg-gray-200 hover:text-black"
            >
              <IcOutlineHome class="mr-1" />
              Home
            </router-link>

            <router-link
              to="/home"
              class="inline-flex relative items-center py-[10px] w-full font-medium text-sm rounded-md rounded-b-lg hover:bg-gray-200 hover:text-black"
            >
              <ProfileCircleOutline class="mr-1" />
              Profile
            </router-link>

            <router-link
              to="/chat"
              class="inline-flex relative items-center py-[10px] w-full font-medium text-sm rounded-md rounded-b-lg hover:bg-gray-200 hover:text-black"
            >
              <PhChatCircle class="mr-1" />
              Chat
            </router-link>

            <router-link
              to="/settings"
              class="inline-flex relative items-center py-[10px] w-full font-medium text-sm rounded-md rounded-b-lg hover:bg-gray-200 hover:text-black"
            >
              <SettingsOutlineRounded class="mr-1" />
              Settings
            </router-link>
          </div>
          <div class="h-[50px]">
            <router-link
              to="/home"
              class="inline-flex relative items-center py-[10px] w-full font-medium text-sm rounded-md rounded-b-lg hover:bg-gray-200 hover:text-black"
            >
              <LogoutRounded class="mr-1" />
              Sign Out
            </router-link>
          </div>
        </div>
      </div>
    </div>

    <!-- Main  -->
    <main class="w-full h-full">
      <div
        class="h-[50px] bg-gray-100 flex items-center shadow-sm px-[10px] w-full py-[10px] z-10 border-b border-stone-700"
      >
        <div class="cursor-pointer w-[30px]">
            <CiHamburger/>
        </div>
      </div>

      <div class="h-[calc(100vh-50px)] bg-white">Content</div>
    </main>
  </div>
</template>
