<script setup lang="ts">
import CiHamburger from "../icons/hamburger.vue";
import IonMdSearch from "../icons/search.vue";
import Button from "../common/Button.vue";
import Link from "../common/Link.vue";

defineProps(["showDropDown"]);
</script>

<template>
  <header>
    <div
      class="h-[50px] bg-gray-100 flex items-center shadow-sm px-[10px] w-full py-[10px] z-10 border-b border-stone-700"
    >
      <!-- Menu icon -->
      <div @click="$emit('toggleMenu')" class="cursor-pointer w-[30px]">
        <CiHamburger />
      </div>

      <!-- Right Side  -->
      <div class="w-[calc(100%-30px)] flex">
        <div class="w-[calc(100%-200px)] flex justify-center">
          <!-- Search bar -->
          <form class="hidden md:flex items-center w-[500px]">
            <label for="voice-search" class="sr-only">Search</label>
            <div class="relative w-full">
              <div
                class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"
              >
                <!-- <svg
                  aria-hidden="true"
                  class="w-5 h-auto text-gray-500 dark:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clip-rule="evenodd"
                  ></path>
                </svg> -->
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

        <!-- User login -->
        <div class="w-[200px]">
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
            class="absolute right-[10px] z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="menu-button"
            tabindex="-1"
          >
            <div class="py-1 text-left" role="none">
              <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" -->
              <Link to="/profile" class="text-gray-700 block px-4 py-2 text-sm">
                Profile
              </Link>
              <Link
                to="/settings"
                class="text-gray-700 block px-4 py-2 text-sm"
              >
                Settings
              </Link>
              <form action="#">
                <Button type="submit" styleClass="text-gray-700">
                  Sign out
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
