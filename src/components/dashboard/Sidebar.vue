<script setup lang="ts">
import { computed } from "vue";
import Button from "../common/Button.vue";
import MenuLink from "../common/MenuLink.vue";

const props = defineProps(["showSidebar"]);

const iconClass = computed(() => {
  return props.showSidebar ? "ri-xl" : "ri-xl mr-2";
});

const menuItemStyle = computed(() => {
  return props.showSidebar ? "py-[14px]" : "py-[10px]";
});
const dropItemStyle = computed(() => {
  return props.showSidebar ? "py-[14px] pl-[25px]" : "py-[10px] pl-[30px]";
});
</script>

<template>
  <aside
    class="sidebar h-full bg-white dark:bg-dark-300 duration-200 ease-out shadow-sm drop-shadow-md"
    :class="showSidebar ? 'w-[70px]' : 'w-[280px]'"
  >
    <div class="h-[60px] flex items-center justify-start duration-400 ease-out">
      <div class="px-[20px]">
        <router-link to="/" class="logo-exact">
          <h3
            class="font-bold text-sm md:text-xl text-gray-800 dark:text-white"
          >
            {{ showSidebar ? "SB" : "Admin Dashboard" }}
          </h3>
        </router-link>
      </div>
    </div>
    <div class="h-[calc(100vh-50px)] py-4 drop-shadow-lg">
      <div
        class="flex flex-col justify-between h-full space-y-[10px] overflow-y-auto"
      >
        <div
          class="flex flex-col justify-between space-y-[10px] text-md font-medium"
        >
          <MenuLink to="/" :styleClass="menuItemStyle">
            <i class="ri-home-3-line" :class="iconClass"></i>
            <span v-show="!showSidebar">Home</span>
          </MenuLink>

          <MenuLink to="/profile" :styleClass="menuItemStyle">
            <i class="ri-user-3-line" :class="iconClass"></i>
            <span v-show="!showSidebar">Profile</span>
          </MenuLink>

          <MenuLink to="/chat" :styleClass="menuItemStyle">
            <i class="ri-discuss-line" :class="iconClass"></i>
            <span v-show="!showSidebar" class="flex-1 whitespace-nowrap"
              >Messages</span
            >
            <!-- right side content  -->
            <span
              v-show="!showSidebar"
              class="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm text-white bg-dark-600 rounded-full dark:bg-dark-100"
              >3</span
            >
          </MenuLink>

          <MenuLink to="/vip-service" :styleClass="menuItemStyle">
            <i class="ri-vip-crown-line" :class="iconClass"></i>
            <span v-show="!showSidebar" class="flex-1 whitespace-nowrap"
              >Vip Service</span
            >
            <!-- right side content  -->
            <span
              v-show="!showSidebar"
              class="inline-flex items-center justify-center px-2 ml-3 text-sm text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-white"
              >Pro</span
            >
          </MenuLink>

          <!-- Activities Dropdown -->
          <Button
            :styleClass="`w-full inline-flex items-center py-[10px] px-[20px] text-md ${menuItemStyle}`"
            type="button"
            aria-controls="dropdown-activities-sidebar"
            data-collapse-toggle="dropdown-activities-sidebar"
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
          <ul id="dropdown-activities-sidebar" class="hidden py-0 space-y-1">
            <li>
              <MenuLink to="/activities/interests" :styleClass="dropItemStyle">
                <i class="ri-service-line" :class="iconClass"></i>
                <span v-show="!showSidebar">Interests</span>
              </MenuLink>
            </li>
            <li>
              <MenuLink
                to="/activities/photo-requests"
                :styleClass="dropItemStyle"
              >
                <i class="ri-image-add-line" :class="iconClass"></i>
                <span v-show="!showSidebar">Photo Requests</span>
              </MenuLink>
            </li>
            <li>
              <MenuLink to="/activities/shortlists" :styleClass="dropItemStyle">
                <!-- <i class="ri-heart-line ri-xl mr-2"></i> -->
                <i class="ri-hearts-line" :class="iconClass"></i>
                <span v-show="!showSidebar">Shortlists</span>
              </MenuLink>
            </li>
            <li>
              <MenuLink
                to="/activities/profile-viewers"
                :styleClass="dropItemStyle"
              >
                <i class="ri-pass-valid-line" :class="iconClass"></i>
                <span v-show="!showSidebar">Profile Viewers</span>
              </MenuLink>
            </li>
            <li>
              <MenuLink
                to="/activities/profile-visited"
                :styleClass="dropItemStyle"
              >
                <i class="ri-pass-pending-line" :class="iconClass"></i>
                <span v-show="!showSidebar">Profile Visited</span>
              </MenuLink>
            </li>
            <li>
              <MenuLink
                to="/activities/block-lists"
                :styleClass="dropItemStyle"
              >
                <i class="ri-prohibited-line" :class="iconClass"></i>
                <span v-show="!showSidebar">Block Lists</span>
              </MenuLink>
            </li>
            <li>
              <MenuLink
                to="/activities/rejection-lists"
                :styleClass="dropItemStyle"
              >
                <i class="ri-spam-2-line" :class="iconClass"></i>
                <span v-show="!showSidebar">Rejection List</span>
              </MenuLink>
            </li>
          </ul>

          <MenuLink to="/settings" :styleClass="menuItemStyle">
            <i class="ri-settings-5-line" :class="iconClass"></i>
            <span v-show="!showSidebar">Settings</span>
          </MenuLink>
        </div>
        <div class="h-[50px]">
          <Button
            type="button"
            :styleClass="`w-full inline-flex items-center py-[10px] px-[20px] text-md ${menuItemStyle}`"
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
.dark .router-link-exact-active {
  background-color: #282828;
  border-left: 5px solid white;
}
.router-link-exact-active i {
  margin-left: -5px;
}
</style>
