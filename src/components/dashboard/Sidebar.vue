<script setup lang="ts">
import IcOutlineHome from "../icons/home.vue";
import ProfileCircleOutline from "../icons/profile.vue";
import SettingsOutlineRounded from "../icons/settings.vue";
import LogoutRounded from "../icons/logout.vue";
import PhChatCircle from "../icons/chat.vue";
import MenuLink from "../common/MenuLink.vue";

defineProps(["showSidebar"]);
</script>

<template>
  <div v-show="!showSidebar" class="w-[350px] h-full text-white">
    <aside>
      <div class="h-[60px] bg-white flex items-center justify-start">
        <div class="px-[20px]">
          <router-link to="/dashboard">
            <h3 class="font-bold text-sm md:text-xl text-black">
              Admin Dashboard
            </h3>
          </router-link>
        </div>
      </div>
      <div class="h-[calc(100vh-50px)] bg-gray-700 py-4 drop-shadow-lg">
        <div
          class="flex flex-col justify-between h-full px-[20px] space-y-[10px]"
        >
          <div class="flex flex-col justify-between space-y-[10px]">
            <MenuLink to="/dashboard">
              <IcOutlineHome class="mr-2" />
              Home
            </MenuLink>

            <MenuLink to="/profile">
              <ProfileCircleOutline class="mr-2" />
              Profile
            </MenuLink>

            <MenuLink to="/chat">
              <PhChatCircle class="mr-2" />
              Chat
            </MenuLink>

            <MenuLink to="/settings">
              <SettingsOutlineRounded class="mr-2" />
              Settings
            </MenuLink>
          </div>
          <div class="h-[50px]">
            <MenuLink to="/">
              <LogoutRounded class="mr-2" />
              Sign Out
            </MenuLink>
          </div>
        </div>
      </div>
    </aside>
  </div>
</template>
