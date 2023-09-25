<script setup lang="ts">
import { onMounted } from "vue";
import { Drawer } from "flowbite";
import Button from "../common/Button.vue";

onMounted(() => {
  // set the drawer menu element
  const $targetEl = document.getElementById("drawer-navigation");
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
      "bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-30",
    onHide: () => {
      console.log("drawer is hidden");
    },
    onShow: () => {
      console.log("drawer is shown");
    },
    onToggle: () => {
      console.log("drawer has been toggled");
    },
  };

  if ($targetEl) {
    /*
     * targetEl: required
     * options: optional
     */
    const drawer = new Drawer($targetEl, options);

    // show the drawer
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
    class="fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform -translate-x-full bg-white w-64 dark:bg-gray-800"
    tabindex="-1"
    aria-labelledby="drawer-navigation-label"
  >
    <div class="flex items-center mb-4">
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
        class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 right-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
      >
      <i class="ri-close-fill ri-xl"></i>
        <span class="sr-only">Close menu</span>
      </button>
    </div>
    <div class="flex flex-col justify-between h-full space-y-[10px]">
      <div class="flex flex-col justify-between space-y-[15px]">
        <MenuLink to="/dashboard">
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
</template>
