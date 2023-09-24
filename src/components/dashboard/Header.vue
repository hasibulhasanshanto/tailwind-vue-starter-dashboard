<script setup lang="ts">
import ProfileCircleOutline from "../icons/profile.vue";
import SettingsLine from "../icons/settings.vue";
import NotificationLine from "../icons/notification.vue";
import SunLine from "../icons/light.vue";
import MoonLine from "../icons/dark.vue";
import Computer from "../icons/computer.vue";
import Bangladesh from "../icons/bgd.vue";
import UnitedStates from "../icons/usa.vue";
import Warning from "../icons/warning.vue";
import Success from "../icons/success.vue";
import Cross from "../icons/cross.vue";
import ArrowRight from "../icons/right-arrow.vue";
import HamburgerMenu from "../icons/hamburger.vue";
import MenuFill from "../icons/menu2.vue";
import SearchLine from "../icons/search.vue";
import LogoutLine from "../icons/logout.vue";
import Button from "../common/Button.vue";
import Link from "../common/Link.vue";

defineProps(["showDropDown", "showNotification", "showLightDark", "showLang"]);
</script>

<template>
  <header>
    <div
      class="h-[60px] bg-white flex items-center shadow-sm px-[10px] w-full py-[10px] z-10 justify-between sticky"
    >
      <!-- left Side  -->
      <div class="flex items-center">
        <!-- Menu icon -->
        <div @click="$emit('toggleMenu')" class="cursor-pointer w-[30px] hidden md:block">
          <HamburgerMenu class="h-5 w-5" />
        </div>

        <div id="drawer-show-button" class="cursor-pointer w-[30px] block md:hidden">
          <MenuFill class="h-5 w-5" />
        </div>

        <!-- Search bar -->
        <div class="ml-3">
          <form class="hidden md:flex items-center w-[500px]">
            <label for="search" class="sr-only">Search</label>
            <div class="relative w-full">
              <div
                class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"
              >
                <SearchLine class="text-gray-500 h-5 w-5" />
              </div>
              <input
                type="text"
                id="search"
                name="search"
                class="bg-[#f1f5f9] border border-[#f1f5f9] text-gray-700 text-sm rounded-lg block w-full pl-10 p-2.5 focus:ring-0 !outline-none"
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
        <!-- Language -->
        <div class="mx-2">
          <button
            class="flex items-center justify-start space-x-1 py-2"
            @click="$emit('toggleLang')"
          >
            <Bangladesh class="h-6 w-6" />
            <div class="font-semibold text-left hidden md:block">
              <div>Bangla</div>
            </div>
          </button>

          <!-- Drop down -->
          <div
            v-show="showLang"
            class="absolute right-[15px] md:right-[230px] z-10 mt-[10px] w-32 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          >
            <div class="py-1 text-left divide-y">
              <!-- Options -->
              <div class="py-1">
                <Button 
                  class="text-gray-700 px-4 py-2 text-sm hover:bg-gray-100 inline-flex items-center"
                >
                  <Bangladesh class="mr-2 h-6 w-6" />
                  Bangla
                </Button>
                <Button 
                  class="text-gray-700 px-4 py-2 text-sm hover:bg-gray-100 inline-flex items-center"
                >
                  <UnitedStates class="mr-2 h-6 w-6" />
                  English
                </Button>
              </div>
            </div>
          </div>
        </div>

        <!-- Light Dark -->
        <div class="mx-2">
          <button @click="$emit('toggleLightDark')" class="py-2">
            <SunLine class="h-6 w-6" />
          </button>

          <!-- Drop down -->
          <div
            v-show="showLightDark"
            class="absolute right-[10px] md:right-[130px] z-10 mt-[10px] w-32 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          >
            <div class="py-1 text-left divide-y">
              <!-- Options -->
              <div class="py-1">
                <Button 
                  class="text-gray-700 px-4 py-2 text-sm hover:bg-gray-100 inline-flex items-center"
                >
                  <SunLine class="mr-2 h-6 w-6" />
                  Light
                </Button>
                <Button 
                  class="text-gray-700 px-4 py-2 text-sm hover:bg-gray-100 inline-flex items-center"
                >
                  <MoonLine class="mr-2 h-6 w-6" />
                  Dark
                </Button>
                <Button 
                  class="text-gray-700 px-4 py-2 text-sm hover:bg-gray-100 inline-flex items-center"
                >
                  <Computer class="mr-2 h-6 w-6" />
                  System
                </Button>
              </div>
            </div>
          </div>
        </div>

        <!-- Notifications -->
        <div class="mx-2 hidden md:block">
          <button @click="$emit('toggleNotification')" class="py-2">
            <NotificationLine class="h-6 w-6" />
          </button>

          <!-- Drop down -->
          <div
            v-show="showNotification"
            class="absolute right-[195px] z-10 mt-[10px] w-80 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          >
            <div class="py-1 text-left divide-y">
              <div class="flex justify-between mx-4 py-3">
                <p class="text-sm font-semibold">Notifications</p>
                <p class="truncate text-sm cursor-pointer">Clear All</p>
              </div>

              <!-- Options -->
              <div class="py-1 h-[300px] overflow-auto">
                <!-- Notification item  -->
                <Link
                  to="#"
                  class="text-gray-700 px-4 py-2 text-sm hover:bg-gray-100 inline-flex"
                >
                  <div class="w-[12%] mr-1 mt-1">
                    <Warning class="h-6 w-6" />
                  </div>

                  <div class="w-[calc(100-12%)]">
                    <h4 class="text-gray-700 font-medium">High CPU Usage</h4>
                    <div class="text-gray-500">
                      <p class="text-sm">CPU usage is at 92%</p>
                      <p class="text-xs">5 min ago</p>
                    </div>
                  </div>
                </Link>

                <!-- Notification item  -->
                <Link
                  to="#"
                  class="text-gray-700 px-4 py-2 text-sm hover:bg-gray-100 inline-flex"
                >
                  <div class="w-[12%] mr-1 mt-1">
                    <Success class="h-6 w-6" />
                  </div>

                  <div class="w-[calc(100-12%)]">
                    <h4 class="text-gray-700 font-medium">High CPU Usage</h4>
                    <div class="text-gray-500">
                      <p class="text-sm">CPU usage is at 92%</p>
                      <p class="text-xs">5 min ago</p>
                    </div>
                  </div>
                </Link>

                <!-- Notification item  -->
                <Link
                  to="#"
                  class="text-gray-700 px-4 py-2 text-sm hover:bg-gray-100 inline-flex"
                >
                  <div class="w-[12%] mr-1 mt-1">
                    <Cross class="h-6 w-6" />
                  </div>

                  <div class="w-[calc(100-12%)]">
                    <h4 class="text-gray-700 font-medium">High CPU Usage</h4>
                    <div class="text-gray-500">
                      <p class="text-sm">CPU usage is at 92%</p>
                      <p class="text-xs">5 min ago</p>
                    </div>
                  </div>
                </Link>

                <!-- Notification item  -->
                <Link
                  to="#"
                  class="text-gray-700 px-4 py-2 text-sm hover:bg-gray-100 inline-flex"
                >
                  <div class="w-[12%] mr-1 mt-1">
                    <Success class="h-6 w-6" />
                  </div>

                  <div class="w-[calc(100-12%)]">
                    <h4 class="text-gray-700 font-medium">High CPU Usage</h4>
                    <div class="text-gray-500">
                      <p class="text-sm">CPU usage is at 92%</p>
                      <p class="text-xs">5 min ago</p>
                    </div>
                  </div>
                </Link>

                <!-- Notification item  -->
                <Link
                  to="#"
                  class="text-gray-700 px-4 py-2 text-sm hover:bg-gray-100 inline-flex"
                >
                  <div class="w-[12%] mr-1 mt-1">
                    <Success class="h-6 w-6" />
                  </div>

                  <div class="w-[calc(100-12%)]">
                    <h4 class="text-gray-700 font-medium">High CPU Usage</h4>
                    <div class="text-gray-500">
                      <p class="text-sm">CPU usage is at 92%</p>
                      <p class="text-xs">5 min ago</p>
                    </div>
                  </div>
                </Link>

                <!-- Notification item  -->
                <Link
                  to="#"
                  class="text-gray-700 px-4 py-2 text-sm hover:bg-gray-100 inline-flex"
                >
                  <div class="w-[12%] mr-1 mt-1">
                    <Success class="h-6 w-6" />
                  </div>

                  <div class="w-[calc(100-12%)]">
                    <h4 class="text-gray-700 font-medium">High CPU Usage</h4>
                    <div class="text-gray-500">
                      <p class="text-sm">CPU usage is at 92%</p>
                      <p class="text-xs">5 min ago</p>
                    </div>
                  </div>
                </Link>

                <!-- Notification item  -->
                <Link
                  to="#"
                  class="text-gray-700 px-4 py-2 text-sm hover:bg-gray-100 inline-flex"
                >
                  <div class="w-[12%] mr-1 mt-1">
                    <Success class="h-6 w-6" />
                  </div>

                  <div class="w-[calc(100-12%)]">
                    <h4 class="text-gray-700 font-medium">High CPU Usage</h4>
                    <div class="text-gray-500">
                      <p class="text-sm">CPU usage is at 92%</p>
                      <p class="text-xs">5 min ago</p>
                    </div>
                  </div>
                </Link>

                <!-- Notification item  -->
                <Link
                  to="#"
                  class="text-gray-700 px-4 py-2 text-sm hover:bg-gray-100 inline-flex"
                >
                  <div class="w-[12%] mr-1 mt-1">
                    <Success class="h-6 w-6" />
                  </div>

                  <div class="w-[calc(100-12%)]">
                    <h4 class="text-gray-700 font-medium">High CPU Usage</h4>
                    <div class="text-gray-500">
                      <p class="text-sm">CPU usage is at 92%</p>
                      <p class="text-xs">5 min ago</p>
                    </div>
                  </div>
                </Link>
              </div>

              <!-- Logged out -->
              <div>
                <Button
                  type="submit"
                  styleClass="text-gray-700 inline-flex items-center justify-center px-4 !text-md"
                >
                  See more
                  <ArrowRight class="ml-1" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        <!-- User login -->
        <div class="mx-2">
          <div
            class="flex items-center justify-start space-x-4 cursor-pointer"
            @click="$emit('toggleDrop')"
          >
            <img
              class="w-10 h-10 rounded-full border-2 border-gray-50"
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
              alt=""
            />
            <div
              class="font-semibold text-left hidden md:block"
            >
              <div>Hasibul Hasan</div>
              <div class="text-xs text-gray-500">
                Free user
              </div>
            </div>
          </div>

          <!-- Drop down -->
          <div
            v-show="showDropDown"
            class="absolute right-[10px] z-10 mt-[10px] w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
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
                  <ProfileCircleOutline class="mr-2 h-5 w-5" />
                  Profile
                </Link>
                <Link
                  to="/settings"
                  class="text-gray-700 px-4 py-2 text-sm hover:bg-gray-100 inline-flex items-center"
                >
                  <SettingsLine class="mr-2 h-5 w-5" />
                  Settings
                </Link>
              </div>

              <!-- Logged out -->
              <form action="#">
                <Button
                  type="submit"
                  styleClass="text-gray-700 hover:bg-gray-100 inline-flex items-center px-4"
                >
                  <LogoutLine class="mr-2 h-5 w-5" />
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
