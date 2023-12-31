<script setup lang="ts">
import { onMounted } from "vue";
import { Drawer } from "flowbite";
import Button from "../common/Button.vue";
import MenuLink from "../common/MenuLink.vue";

onMounted(() => {
  // set the drawer menu element
  const $targetEl: any = document.getElementById("drawer-navigation");
  const $drawerHideButton: any = document.getElementById("drawer-hide-button");
  const $drawerShowButton: any = document.getElementById("drawer-show-button");

  // options with default values
  const options = {
    placement: "left",
    backdrop: true,
    bodyScrolling: false,
    edge: false,
    edgeOffset: "",
    backdropClasses:
      "bg-gray-900 bg-opacity-50 dark:bg-opacity-90 fixed inset-0 z-40",
  };

  if ($targetEl) {
    const drawer = new Drawer($targetEl, options);
    drawer.hide();

    $drawerHideButton.addEventListener("click", () => {
      drawer.hide();
    });

    $drawerShowButton.addEventListener("click", () => {
      drawer.show();
    });
  }
});
</script>

<template>
  <!-- drawer component -->
  <div
    id="drawer-navigation"
    class="fixed top-0 left-0 z-50 h-screen overflow-y-auto transition-transform -translate-x-full bg-white dark:bg-dark-300 w-64"
    tabindex="-1"
    aria-labelledby="drawer-navigation-label"
  >
    <div class="flex items-center justify-between px-5 pt-4 pb-2">
      <h5
        id="drawer-navigation-label"
        class="text-base font-semibold text-gray-500 uppercase dark:text-white"
      >
        Menu
      </h5>
      <button
        id="drawer-hide-button"
        type="button"
        data-drawer-hide="drawer-navigation"
        aria-controls="drawer-navigation"
        class="text-gray-800 dark:text-white hover:text-gray-900 bg-transparent hover:bg-gray-200 hover:dark:bg-dark-100 rounded-lg text-sm w-8 h-8 absolute top-2.5 right-2.5 inline-flex items-center justify-center"
      >
        <i class="ri-close-fill ri-2x"></i>
        <span class="sr-only">Close menu</span>
      </button>
    </div>
    <div class="py-4 overflow-y-auto">
      <ul class="space-y-1 text-md font-medium">
        <li>
          <MenuLink to="/">
            <i class="ri-home-3-line ri-xl mr-2"></i>
            <span>Home</span>
          </MenuLink>
        </li>

        <li>
          <MenuLink to="/profile">
            <i class="ri-user-3-line ri-xl mr-2"></i>
            <span>Profile</span>
          </MenuLink>
        </li>

        <li>
          <MenuLink to="/chat">
            <i class="ri-discuss-line ri-xl mr-2"></i>
            <span class="flex-1 whitespace-nowrap">Messages</span>
            <!-- right side content  -->
            <span
              class="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm text-white bg-dark-600 rounded-full dark:bg-dark-100"
              >3</span
            >
          </MenuLink>
        </li>

        <li>
          <MenuLink to="/chat">
            <i class="ri-notification-2-line ri-xl mr-2"></i>
            <span class="flex-1 whitespace-nowrap">Notifications</span>
            <!-- right side content  -->
            <span
              class="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm text-white bg-dark-600 rounded-full dark:bg-dark-100"
              >3</span
            >
          </MenuLink>
        </li>

        <!-- Activities Dropdown -->
        <li>
          <Button
            styleClass="w-full inline-flex items-center py-[10px] px-[20px] text-md"
            type="button"
            aria-controls="dropdown-activities-offcanvas"
            data-collapse-toggle="dropdown-activities-offcanvas"
          >
            <i class="ri-funds-box-line ri-xl mr-2"></i>
            <span class="flex-1 text-left whitespace-nowrap">Activities</span>
            <i class="ri-arrow-down-s-line ri-xl"></i>
          </Button>
          <!-- Dropdown  -->
          <ul id="dropdown-activities-offcanvas" class="hidden py-1 space-y-1">
            <li>
              <MenuLink to="/activities/interests" styleClass="pl-[30px]">
                <i class="ri-service-line ri-xl mr-2"></i>
                <span>Interests</span>
              </MenuLink>
            </li>
            <li>
              <MenuLink to="/activities/photo-requests" styleClass="pl-[30px]">
                <i class="ri-image-add-line ri-xl mr-2"></i>
                <span>Photo Requests</span>
              </MenuLink>
            </li>
            <li>
              <MenuLink to="/activities/shortlists" styleClass="pl-[30px]">
                <!-- <i class="ri-heart-line ri-xl mr-2"></i> -->
                <i class="ri-hearts-line ri-xl mr-2"></i>
                <span>Shortlists</span>
              </MenuLink>
            </li>
            <li>
              <MenuLink to="/activities/profile-viewers" styleClass="pl-[30px]">
                <i class="ri-pass-valid-line ri-xl mr-2"></i>
                <span>Profile Viewers</span>
              </MenuLink>
            </li>
            <li>
              <MenuLink to="/activities/profile-visited" styleClass="pl-[30px]">
                <i class="ri-pass-pending-line ri-xl mr-2"></i>
                <span>Profile Visited</span>
              </MenuLink>
            </li>
            <li>
              <MenuLink to="/activities/block-lists" styleClass="pl-[30px]">
                <i class="ri-prohibited-line ri-xl mr-2"></i>
                <span>Block Lists</span>
              </MenuLink>
            </li>
            <li>
              <MenuLink to="/activities/rejection-lists" styleClass="pl-[30px]">
                <i class="ri-spam-2-line ri-xl mr-2"></i>
                <span>Rejection List</span>
              </MenuLink>
            </li>
          </ul>
        </li>

        <li>
          <MenuLink to="/vip-service">
            <i class="ri-vip-crown-line ri-xl mr-2"></i>
            <span class="flex-1 whitespace-nowrap">Vip Service</span>
            <!-- right side content  -->
            <span
              class="inline-flex items-center justify-center px-2 ml-3 text-sm text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-white"
              >Pro</span
            >
          </MenuLink>
        </li>

        <li>
          <MenuLink to="/settings">
            <i class="ri-settings-5-line ri-xl mr-2"></i>
            <span>Settings</span>
          </MenuLink>
        </li>

        <li>
          <Button
            styleClass="w-full inline-flex items-center py-[10px] px-[20px] text-md"
            type="button"
          >
            <i class="ri-logout-box-r-line ri-xl mr-2"></i>
            <span>Sign Out</span>
          </Button>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.router-link-exact-active {
  background-color: rgb(251 213 213 /1);
  border-right: 5px solid red;
}
.dark .router-link-exact-active {
  background-color: #282828;
  border-right: 5px solid white;
}
</style>
