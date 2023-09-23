<script setup lang="ts">
import { onMounted } from "vue";
import { Drawer } from "flowbite";
import HomeLine from "../icons/home.vue";
import ProfileCircleOutline from "../icons/profile.vue";
import SettingsLine from "../icons/settings.vue";
import LogoutLine from "../icons/logout.vue";
import WechatLine from "../icons/chat.vue";
import MenuLink from "../common/MenuLink.vue";
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
    class="fixed top-0 left-0 z-40 h-screen overflow-y-auto transition-transform -translate-x-full bg-white w-64 dark:bg-gray-800"
    tabindex="-1"
    aria-labelledby="drawer-navigation-label"
  >
    <div class="p-4">
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
        <svg
          class="w-3 h-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 14"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
          />
        </svg>
        <span class="sr-only">Close menu</span>
      </button>
    </div>
    <div class="py-4 overflow-y-auto">
      <div class="space-y-2 font-medium">
        <MenuLink to="/">
          <HomeLine class="mr-2 h-6 w-6" />
          <span>Home</span>
        </MenuLink>

        <MenuLink to="/profile">
          <ProfileCircleOutline class="mr-2 h-6 w-6" />
          <span>Profile</span>
        </MenuLink>

        <MenuLink to="/chat">
          <WechatLine class="mr-2 h-6 w-6" />
          <span>Chat</span>
        </MenuLink>

        <MenuLink to="/settings">
          <SettingsLine class="mr-2 h-6 w-6" />
          <span>Settings</span>
        </MenuLink>

        <Button
          class="inline-flex items-center py-[10px] px-[20px] w-full text-sm font-medium text-gray-800 hover:bg-red-200 hover:text-black transition duration-400 ease-in-out"
        >
          <LogoutLine class="mr-2 h-6 w-6" />
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
/* .router-link-exact-active svg {
  margin-left: -5px;
} */
/* aside {
  overflow: hidden;
} */
</style>
