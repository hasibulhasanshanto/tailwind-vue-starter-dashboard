<script setup lang="ts">
import IcOutlineHome from "../icons/home.vue";
import ProfileCircleOutline from "../icons/profile.vue";
import SettingsOutlineRounded from "../icons/settings.vue";
import LogoutRounded from "../icons/logout.vue";
import PhChatCircle from "../icons/chat.vue";

defineProps(["showSidebar"]);
</script>

<template>
  <div v-show="!showSidebar" class="w-[400px] h-full text-white">
    <aside>
      <div class="h-[50px] bg-gray-100 flex items-center justify-start">
        <div class="px-[20px]">
          <router-link to="/dashboard">
            <h3 class="font-bold text-sm md:text-xl text-black">Admin Dashboard</h3>
          </router-link>
        </div>
      </div>
      <div class="h-[calc(100vh-50px)] bg-gray-700 py-4">
        <div
          class="flex flex-col justify-between h-full px-[20px] space-y-[10px]"
        >
          <div class="flex flex-col justify-between space-y-[10px]">
            <router-link
              to="/dashboard"
              class="inline-flex relative items-center py-[10px] w-full font-medium text-sm rounded-md rounded-b-lg hover:bg-gray-200 hover:text-black"
            >
              <IcOutlineHome class="mr-1" />
              Home
            </router-link>

            <router-link
              to="/profile"
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
    </aside>
  </div>
</template>
