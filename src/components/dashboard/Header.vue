<script setup lang="ts">
import ProfileCircleOutline from "../icons/profile.vue";
import SettingsOutlineRounded from "../icons/settings.vue";
import CiHamburger from "../icons/hamburger.vue";
import IonMdSearch from "../icons/search.vue";
import LogoutRounded from "../icons/logout.vue";
import Button from "../common/Button.vue";
import Link from "../common/Link.vue";

defineProps(["showDropDown"]);
</script>

<template>
  <header>
    <div
      class="h-[60px] bg-gray-100 flex items-center shadow-sm px-[10px] w-full py-[10px] z-10 justify-between"
    >
      <!-- left Side  -->
      <div class="flex items-center">
        <!-- Menu icon -->
        <div @click="$emit('toggleMenu')" class="cursor-pointer w-[30px]">
          <CiHamburger />
        </div>

        <!-- Search bar -->
        <div class="ml-3">           
          <form class="hidden md:flex items-center w-[500px]">
            <label for="voice-search" class="sr-only">Search</label>
            <div class="relative w-full">
              <div
                class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"
              >
                <IonMdSearch class="text-gray-500" />
              </div>
              <input
                type="text"
                id="search"
                name="search"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full pl-10 p-2.5 dark:bg-gray-700"
                placeholder="Search..."
                required
              />
            </div>
          </form>
        </div>
      </div>
      <!-- left Side ends ./  -->

      <!-- right Side  -->
      <div class="flex items-center justify-end">
        <!-- User login -->
        <div class="mx-3">
          <div
            class="flex items-center justify-start space-x-4"
            @click="$emit('toggleDrop')"
          >
            <img
              class="w-10 h-10 rounded-full border-2 border-gray-50"
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
              alt=""
            />
            <div class="font-semibold dark:text-white text-left">
              <div>Hasibul Hasan</div>
              <div class="text-xs text-gray-500 dark:text-gray-400">
                Free user
              </div>
            </div>
          </div>

          <!-- Drop down -->
          <div
            v-show="showDropDown"
            class="absolute right-[10px] z-10 mt-1 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          >
            <div class="py-1 text-left divide-y">
              <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" -->
              <!-- User info -->
              <div class="px-4 py-3">
                <p class="text-sm">Logged in as</p>
                <p class="truncate text-sm font-medium">user@example.com</p>
              </div>

              <!-- Options -->
              <div class="py-1">
                <Link
                  to="/profile"
                  class="text-gray-700 px-4 py-2 text-sm hover:bg-gray-100 inline-flex items-center"
                >
                  <ProfileCircleOutline class="mr-1" />
                  Profile
                </Link>
                <Link
                  to="/settings"
                  class="text-gray-700 px-4 py-2 text-sm hover:bg-gray-100 inline-flex items-center"
                >
                  <SettingsOutlineRounded class="mr-1" />
                  Settings
                </Link>
              </div>

              <!-- Logged out -->
              <form action="#">
                <Button
                  type="submit"
                  styleClass="text-gray-700 hover:bg-gray-100 inline-flex items-center px-4"
                >
                  <LogoutRounded class="mr-1" />
                  Sign out
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <!-- right Side ends ./  -->
    </div>
  </header>
</template>
