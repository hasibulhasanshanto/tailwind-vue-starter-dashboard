<script setup lang="ts">
import { onMounted } from "vue";
import { Drawer } from "flowbite";
import MenuLink from "../common/MenuLink.vue";
import Button from "../common/Button.vue";

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
      <div class="space-y-3 text-md font-medium">
        <MenuLink to="/">
          <i class="ri-home-3-line ri-xl mr-2"></i>
          <span>Home</span>
        </MenuLink>

        <MenuLink to="/profile">
          <i class="ri-user-3-line ri-xl mr-2"></i>
          <span>Profile</span>
        </MenuLink>

        <MenuLink to="/chat">
          <i class="ri-chat-smile-2-line ri-xl mr-2"></i>
          <span>Chat</span>
        </MenuLink>

        <MenuLink to="/settings">
          <i class="ri-settings-5-line ri-xl mr-2"></i>
          <span>Settings</span>
        </MenuLink>

        <Button
          class="inline-flex items-center py-[10px] px-[20px] w-full text-sm font-medium text-gray-800 hover:bg-red-200 hover:text-black transition duration-400 ease-in-out"
        >
          <i class="ri-logout-box-r-line ri-xl mr-2"></i>
          <span>Sign Out</span>
        </Button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.router-link-exact-active {
  background-color: rgb(251 213 213 /1);
  border-right: 5px solid red;
}
</style>
