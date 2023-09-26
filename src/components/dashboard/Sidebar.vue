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
        <div
          class="flex flex-col justify-between space-y-[10px] text-md font-medium"
        >
          <MenuLink to="/">
            <i class="ri-home-3-line" :class="iconClass"></i>
            <span v-show="!showSidebar">Home</span>
          </MenuLink>

          <MenuLink to="/profile">
            <i class="ri-user-3-line" :class="iconClass"></i>
            <span v-show="!showSidebar">Profile</span>
          </MenuLink>

          <MenuLink to="/chat">
            <i class="ri-discuss-line" :class="iconClass"></i>
            <span v-show="!showSidebar" class="flex-1 whitespace-nowrap"
              >Messages</span
            >
            <!-- right side content  -->
            <span
              v-show="!showSidebar"
              class="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300"
              >3</span
            >
          </MenuLink>

          <MenuLink to="/vip-service">
            <i class="ri-vip-crown-line" :class="iconClass"></i>
            <span v-show="!showSidebar" class="flex-1 whitespace-nowrap"
              >Vip Service</span
            >
            <!-- right side content  -->
            <span
              v-show="!showSidebar"
              class="inline-flex items-center justify-center px-2 ml-3 text-sm text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300"
              >Pro</span
            >
          </MenuLink>

          <!-- Activities Dropdown -->
          <Button
            type="button"
            class="inline-flex items-center py-[10px] px-[20px] w-full text-sm font-medium text-gray-800 hover:bg-red-200 hover:text-black transition duration-400 ease-in-out"
            aria-controls="dropdown-example"
            data-collapse-toggle="dropdown-example"
          >
            <i class="ri-funds-box-line" :class="iconClass"></i>
            <span
              v-show="!showSidebar"
              class="flex-1 text-left whitespace-nowrap"
              >Activities</span
            >
            <i v-show="!showSidebar" class="ri-arrow-down-s-line ri-xl"></i>
          </Button>
          <!-- Dropdown  -->
          <ul id="dropdown-example" class="hidden py-1 space-y-2 ml-2">
            <li>
              <MenuLink to="/activities/interests">
                <i class="ri-service-line" :class="iconClass"></i>
                <span v-show="!showSidebar">Interests</span>
              </MenuLink>
            </li>
            <li>
              <MenuLink to="/activities/photo-requests">
                <i class="ri-image-add-line" :class="iconClass"></i>
                <span v-show="!showSidebar">Photo Requests</span>
              </MenuLink>
            </li>
            <li>
              <MenuLink to="/activities/shortlists">
                <!-- <i class="ri-heart-line ri-xl mr-2"></i> -->
                <i class="ri-hearts-line" :class="iconClass"></i>
                <span v-show="!showSidebar">Shortlists</span>
              </MenuLink>
            </li>
            <li>
              <MenuLink to="/activities/profile-viewers">
                <i class="ri-pass-valid-line" :class="iconClass"></i>
                <span v-show="!showSidebar">Profile Viewers</span>
              </MenuLink>
            </li>
            <li>
              <MenuLink to="/activities/profile-visited">
                <i class="ri-pass-pending-line" :class="iconClass"></i>
                <span v-show="!showSidebar">Profile Visited</span>
              </MenuLink>
            </li>
            <li>
              <MenuLink to="/activities/block-lists">
                <i class="ri-prohibited-line" :class="iconClass"></i>
                <span v-show="!showSidebar">Block Lists</span>
              </MenuLink>
            </li>
            <li>
              <MenuLink to="/activities/rejection-lists">
                <i class="ri-spam-2-line" :class="iconClass"></i>
                <span v-show="!showSidebar">Rejection List</span>
              </MenuLink>
            </li>
          </ul>

          <MenuLink to="/settings">
            <i class="ri-settings-5-line" :class="iconClass"></i>
            <span v-show="!showSidebar">Settings</span>
          </MenuLink>
        </div>
        <div class="h-[50px]">
          <Button
            class="inline-flex items-center py-[10px] px-[20px] w-full text-gray-800 hover:bg-red-200 hover:text-black transition duration-400 ease-in-out"
          >
            <i class="ri-logout-box-r-line" :class="iconClass"></i>
            <span v-show="!showSidebar">Sign Out</span>
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
