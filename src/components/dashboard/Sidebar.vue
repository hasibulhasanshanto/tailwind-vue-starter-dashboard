<script setup lang="ts">
import { computed } from "vue";
import Button from "../common/Button.vue";
import MenuLink from "../common/MenuLink.vue";

const props = defineProps(["showSidebar"]);

const iconClass = computed(() => {
  return props.showSidebar ? "ri-2x" : "ri-xl mr-2";
});
</script>

<template>
  <aside
    class="sidebar h-full text-white bg-white duration-200 ease-out shadow-sm drop-shadow-md"
    :class="showSidebar ? 'w-[70px]' : 'w-[280px]'"
  >
    <div class="h-[60px] flex items-center justify-start duration-400 ease-out">
      <div class="px-[20px]">
        <router-link to="/" class="logo-exact">
          <h3 class="font-bold text-sm md:text-xl text-black">
            {{ showSidebar ? "SB" : "Admin Dashboard" }}
          </h3>
        </router-link>
      </div>
    </div>
    <div class="h-[calc(100vh-50px)] py-4 drop-shadow-lg">
      <div class="flex flex-col justify-between h-full space-y-[10px]">
        <div class="flex flex-col justify-between space-y-[10px]">
          <MenuLink to="/">
            <i class="ri-home-3-line" :class="iconClass"></i>
            <span v-show="!showSidebar" class="text-md font-medium">Home</span>
          </MenuLink>

          <MenuLink to="/profile">
            <i class="ri-user-3-line" :class="iconClass"></i>
            <span v-show="!showSidebar" class="text-md font-medium"
              >Profile</span
            >
          </MenuLink>

          <MenuLink to="/chat">
            <i class="ri-chat-smile-2-line" :class="iconClass"></i>
            <span v-show="!showSidebar" class="text-md font-medium">Chat</span>
          </MenuLink>

          <MenuLink to="/settings">
            <i class="ri-settings-5-line" :class="iconClass"></i>
            <span v-show="!showSidebar" class="text-md font-medium"
              >Settings</span
            >
          </MenuLink>
        </div>
        <div class="h-[50px]">
          <Button
            class="inline-flex items-center py-[10px] px-[20px] w-full text-sm font-medium text-gray-800 hover:bg-red-200 hover:text-black transition duration-400 ease-in-out"
          >
            <i class="ri-logout-box-r-line" :class="iconClass"></i>
            <span v-show="!showSidebar" class="text-md font-medium"
              >Sign Out</span
            >
          </Button>
        </div>
      </div>
    </div>
  </aside>
</template>

<style scoped>
.logo-exact {
  border-left: 0px !important;
}
.router-link-exact-active {
  background-color: rgb(251 213 213 /1);
  border-left: 5px solid red;
}
.router-link-exact-active i {
  margin-left: -5px;
}
</style>
