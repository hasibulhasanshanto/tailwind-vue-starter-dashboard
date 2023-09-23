<script setup lang="ts">
import HomeLine from "../icons/home.vue";
import ProfileCircleOutline from "../icons/profile.vue";
import SettingsLine from "../icons/settings.vue";
import LogoutLine from "../icons/logout.vue";
import WechatLine from "../icons/chat.vue";
import MenuLink from "../common/MenuLink.vue";
import Button from "../common/Button.vue";
import { computed } from "vue";
const props = defineProps(["showSidebar"]);

const iconClass = computed(() => {
  return props.showSidebar ? "h-6 w-6" : "mr-2 h-6 w-6";
});
</script>

<template>
  <div
    class="w-[350px] h-full text-white bg-white hidden md:block duration-200 ease-out"
    :class="showSidebar ? 'w-[70px]' : 'w-[350px]'"
  >
    <aside>
      <div
        class="h-[60px] flex items-center justify-start duration-400 ease-out"
      >
        <div class="px-[20px]">
          <router-link to="/">
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
              <HomeLine :class="iconClass" />
              <span v-show="!showSidebar">Home</span>
            </MenuLink>

            <MenuLink to="/profile">
              <ProfileCircleOutline :class="iconClass" />
              <span v-show="!showSidebar">Profile</span>
            </MenuLink>

            <MenuLink to="/chat">
              <WechatLine :class="iconClass" />
              <span v-show="!showSidebar">Chat</span>
            </MenuLink>

            <MenuLink to="/settings">
              <SettingsLine :class="iconClass" />
              <span v-show="!showSidebar">Settings</span>
            </MenuLink>
          </div>
          <div class="h-[50px]">
            <Button
              class="inline-flex items-center py-[10px] px-[20px] w-full text-sm font-medium text-gray-800 hover:bg-red-200 hover:text-black transition duration-400 ease-in-out"
            >
              <LogoutLine :class="iconClass" />
              <span v-show="!showSidebar">Sign Out</span>
            </Button>
          </div>
        </div>
      </div>
    </aside>
  </div>
</template>

<style scoped>
.router-link-exact-active {
  background-color: rgb(251 213 213 /1);
  border-left: 5px solid red;
}
.router-link-exact-active svg {
  margin-left: -5px;
}
/* aside {
  overflow: hidden;
} */
</style>
