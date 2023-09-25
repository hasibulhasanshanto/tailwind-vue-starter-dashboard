<script setup lang="ts">
import MenuLink from "../common/MenuLink.vue";

defineProps(["showSidebar"]);
</script>

<template>
  <div v-show="!showSidebar" class="h-full text-white hidden md:block">
    <aside class="sidebar">
      <div class="h-[60px] bg-white flex items-center justify-start">
        <div class="px-[20px]">
          <router-link to="/">
            <h3 class="font-bold text-sm md:text-xl text-black">
              Admin Dashboard
            </h3>
          </router-link>
        </div>
      </div>
      <div class="h-[calc(100vh-50px)] bg-gray-700 py-4 drop-shadow-lg">
        <div
          class="flex flex-col justify-between h-full px-[10px] space-y-[10px]"
        >
          <div class="flex flex-col justify-between space-y-[10px]">
            <MenuLink to="/">
              <i class="ri-home-3-line ri-xl mr-2"></i>
              Home
            </MenuLink>

            <MenuLink to="/profile">
              <i class="ri-user-3-line ri-xl mr-2"></i>
              Profile
            </MenuLink>

            <MenuLink to="/chat">
              <i class="ri-chat-smile-2-line ri-xl mr-2"></i>
              Chat
            </MenuLink>

            <MenuLink to="/settings">
              <i class="ri-settings-5-line ri-xl mr-2"></i>
              Settings
            </MenuLink>
          </div>
          <div class="h-[50px]">
            <Button>
              <i class="ri-logout-box-r-line ri-xl mr-2"></i>
              Sign Out
            </Button>
          </div>
        </div>
      </div>
    </aside>
  </div>
</template>
