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
    class="fixed top-0 left-0 z-50 h-screen overflow-y-auto transition-transform -translate-x-full bg-white w-64 dark:bg-gray-800"
    tabindex="-1"
    aria-labelledby="drawer-navigation-label"
  >
    <div class="flex items-center justify-between px-5 py-4">
      <h5
        id="drawer-navigation-label"
        class="text-base font-semibold text-gray-500 uppercase dark:text-gray-400"
      >
        Menu
      </h5>
      <button
        id="drawer-hide-button"
        type="button"
        data-drawer-hide="drawer-navigation"
        aria-controls="drawer-navigation"
        class="text-gray-700 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 right-2.5 inline-flex items-center justify-center"
      >
        <i class="ri-close-fill ri-2x"></i>
        <span class="sr-only">Close menu</span>
      </button>
    </div>
    <div class="py-4 overflow-y-auto">
      <ul class="space-y-3 text-md font-medium">
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
              class="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300"
              >3</span
            >
          </MenuLink>
        </li>
        <!-- Activities Dropdown -->
        <li>
          <Button
            type="button"
            class="inline-flex items-center py-[10px] px-[20px] w-full text-sm font-medium text-gray-800 hover:bg-red-200 hover:text-black transition duration-400 ease-in-out"
            aria-controls="dropdown-example"
            data-collapse-toggle="dropdown-example"
          >
            <i class="ri-exchange-box-line ri-xl mr-2"></i>
            <span class="flex-1 text-left whitespace-nowrap">Activities</span>
            <i class="ri-arrow-down-s-line ri-xl"></i>
          </Button>
          <!-- Dropdown  -->
          <ul id="dropdown-example" class="hidden py-2 space-y-2 ml-2">
            <li>
              <MenuLink to="/activities/interests">
                <i class="ri-user-3-line ri-xl mr-2"></i>
                <span>Interests</span>
              </MenuLink>
            </li>
            <li>
              <MenuLink to="/activities/photo-requests">
                <i class="ri-user-3-line ri-xl mr-2"></i>
                <span>Photo Requests</span>
              </MenuLink>
            </li>
            <li>
              <MenuLink to="/activities/shortlists">
                <i class="ri-user-3-line ri-xl mr-2"></i>
                <span>Shortlists</span>
              </MenuLink>
            </li>
            <li>
              <MenuLink to="/activities/profile-viewers">
                <i class="ri-user-3-line ri-xl mr-2"></i>
                <span>Profile Viewers</span>
              </MenuLink>
            </li>
            <li>
              <MenuLink to="/activities/profile-visited">
                <i class="ri-user-3-line ri-xl mr-2"></i>
                <span>Profile Visited</span>
              </MenuLink>
            </li>
            <li>
              <MenuLink to="/activities/block-lists">
                <i class="ri-user-3-line ri-xl mr-2"></i>
                <span>Block Lists</span>
              </MenuLink>
            </li>
            <li>
              <MenuLink to="/activities/rejection-lists">
                <i class="ri-user-3-line ri-xl mr-2"></i>
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
              class="inline-flex items-center justify-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300"
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
            class="inline-flex items-center py-[10px] px-[20px] w-full text-sm font-medium text-gray-800 hover:bg-red-200 hover:text-black transition duration-400 ease-in-out"
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
</style>
