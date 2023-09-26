<script setup lang="ts">
import { ref } from "vue";
import { useDark, useToggle } from "@vueuse/core";
import Bangladesh from "../icons/bgd.vue";
import UnitedStates from "../icons/usa.vue";
import Warning from "../icons/warning.vue";
import Success from "../icons/success.vue";
import Cross from "../icons/cross.vue";
import Button from "../common/Button.vue";
import Link from "../common/Link.vue";
import BtnDropdown from "../common/BtnDropdown.vue";

defineProps(["showDropDown", "showNotification", "showLightDark", "showLang"]);

const langOption = ref<any>("english");

const isDark = useDark();
const toggleDark = useToggle(isDark);

const languageChange = (params: string) => {
  langOption.value = params;
};
</script>

<template>
  <header class="header shadow-sm">
    <div
      class="h-[60px] bg-white dark:bg-dark-300 text-gray-800 dark:text-white flex items-center shadow-sm px-[10px] w-full py-[10px] z-10 justify-between"
    >
      <!-- left Side  -->
      <div class="flex items-center">
        <!-- Menu icon -->
        <div
          @click="$emit('toggleMenu')"
          class="cursor-pointer w-[30px] hidden md:block"
        >
          <i class="ri-menu-2-line ri-xl"></i>
        </div>

        <!-- Mobile menu  -->
        <div
          id="drawer-show-button"
          class="cursor-pointer w-[30px] block md:hidden"
        >
          <i class="ri-menu-line ri-xl"></i>
        </div>

        <!-- Search bar -->
        <div class="ml-3">
          <form class="hidden md:flex items-center w-[500px]">
            <label for="search" class="sr-only">Search</label>
            <div class="relative w-full">
              <div
                class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"
              >
                <i
                  class="ri-search-line text-gray-500 dark:text-light-400 ri-lg"
                ></i>
              </div>
              <input
                type="text"
                id="search"
                name="search"
                class="text-gray-700 dark:text-white bg-light-800 border border-light-800 dark:bg-dark-400 dark:border-dark-400 placeholder-gray-500 dark:placeholder-light-400 text-sm rounded-lg block w-full pl-10 p-2.5 border-transparent focus:border-transparent focus:ring-0"
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
          <BtnDropdown
            btnId="langBtn"
            dropId="langDropdown"
            buttonClass="flex items-center justify-start text-gray-700 dark:text-white space-x-1 py-2"
            dropDownClass="absolute right-[15px] md:right-[230px] z-10 mt-[10px] w-32 origin-top-right rounded-md text-gray-700 dark:text-white bg-white dark:bg-dark-300 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          >
            <template v-slot:button>
              <span v-if="langOption === 'bangla'"
                ><Bangladesh class="h-6 w-6"
              /></span>
              <span v-else><UnitedStates class="h-6 w-6" /></span>

              <div class="text-left hidden md:block">
                <h5 class="text-sm font-medium">
                  {{ langOption === "bangla" ? "Bangla" : "English" }}
                </h5>
              </div>
            </template>

            <template v-slot:dropdown-options>
              <li>
                <Button
                  @click="languageChange('bangla')"
                  styleClass="px-4 text-sm inline-flex items-center"
                >
                  <Bangladesh class="mr-2 h-6 w-6" />
                  Bangla
                </Button>
              </li>

              <li>
                <Button
                  @click="languageChange('english')"
                  styleClass="px-4 text-sm inline-flex items-center"
                >
                  <UnitedStates class="mr-2 h-6 w-6" />
                  English
                </Button>
              </li>
            </template>
          </BtnDropdown>
        </div>

        <!-- Light Dark -->
        <div class="mx-2">
          <button @click="toggleDark()">
            <span v-if="isDark"><i class="ri-moon-line ri-xl"></i></span>
            <span v-else><i class="ri-sun-line ri-xl"></i></span>
            <!-- <span>{{ isDark ? "Dark" : "Light" }}</span> -->
          </button>
        </div>

        <!-- Notifications -->
        <div class="mx-2 hidden md:block">
          <BtnDropdown
            btnId="notificationBtn"
            dropId="notificationDropdown"
            buttonClass="py-2 text-gray-700 dark:text-white"
            dropDownClass="absolute right-[195px] z-10 mt-[10px] w-80 top-full origin-top-right rounded-md text-gray-700 dark:text-white bg-white dark:bg-dark-300 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          >
            <template v-slot:button>
              <i class="ri-notification-2-line ri-xl"></i>
            </template>

            <template v-slot:dropdown-options>
              <div class="divide-y">
                <div class="flex justify-between mx-4 py-3">
                  <p class="text-sm font-semibold">Notifications</p>
                  <p class="truncate text-sm cursor-pointer">Clear All</p>
                </div>

                <!-- Options -->
                <div class="py-1 h-[300px] overflow-auto">
                  <!-- Notification item  -->
                  <Link
                    to="#"
                    styleClass="group text-gray-700 dark:text-white px-4 py-2 text-sm inline-flex"
                  >
                    <div class="w-[12%] mr-1 mt-1">
                      <Warning class="h-6 w-6" />
                    </div>

                    <div class="w-[calc(100-12%)]">
                      <h4
                        class="text-gray-700 dark:text-white group-hover:dark:text-white font-medium"
                      >
                        High CPU Usage
                      </h4>
                      <div
                        class="text-gray-500 dark:text-gray-300 group-hover:dark:text-light-400"
                      >
                        <p class="text-sm">CPU usage is at 92%</p>
                        <p class="text-xs">5 min ago</p>
                      </div>
                    </div>
                  </Link>

                  <!-- Notification item  -->
                  <Link
                    to="#"
                    styleClass="group text-gray-700 dark:text-white px-4 py-2 text-sm inline-flex"
                  >
                    <div class="w-[12%] mr-1 mt-1">
                      <Success class="h-6 w-6" />
                    </div>

                    <div class="w-[calc(100-12%)]">
                      <h4
                        class="text-gray-700 dark:text-white group-hover:dark:text-white font-medium"
                      >
                        High CPU Usage
                      </h4>
                      <div
                        class="text-gray-500 dark:text-gray-300 group-hover:dark:text-light-400"
                      >
                        <p class="text-sm">CPU usage is at 92%</p>
                        <p class="text-xs">5 min ago</p>
                      </div>
                    </div>
                  </Link>

                  <!-- Notification item  -->
                  <Link
                    to="#"
                    styleClass="group text-gray-700 dark:text-white px-4 py-2 text-sm inline-flex"
                  >
                    <div class="w-[12%] mr-1 mt-1">
                      <Cross class="h-6 w-6" />
                    </div>

                    <div class="w-[calc(100-12%)]">
                      <h4
                        class="text-gray-700 dark:text-white group-hover:dark:text-white font-medium"
                      >
                        High CPU Usage
                      </h4>
                      <div
                        class="text-gray-500 dark:text-gray-300 group-hover:dark:text-light-400"
                      >
                        <p class="text-sm">CPU usage is at 92%</p>
                        <p class="text-xs">5 min ago</p>
                      </div>
                    </div>
                  </Link>

                  <!-- Notification item  -->
                  <Link
                    to="#"
                    styleClass="group text-gray-700 dark:text-white px-4 py-2 text-sm inline-flex"
                  >
                    <div class="w-[12%] mr-1 mt-1">
                      <Success class="h-6 w-6" />
                    </div>

                    <div class="w-[calc(100-12%)]">
                      <h4
                        class="text-gray-700 dark:text-white group-hover:dark:text-white font-medium"
                      >
                        High CPU Usage
                      </h4>
                      <div
                        class="text-gray-500 dark:text-gray-300 group-hover:dark:text-light-400"
                      >
                        <p class="text-sm">CPU usage is at 92%</p>
                        <p class="text-xs">5 min ago</p>
                      </div>
                    </div>
                  </Link>

                  <!-- Notification item  -->
                  <Link
                    to="#"
                    styleClass="group text-gray-700 dark:text-white px-4 py-2 text-sm inline-flex"
                  >
                    <div class="w-[12%] mr-1 mt-1">
                      <Success class="h-6 w-6" />
                    </div>

                    <div class="w-[calc(100-12%)]">
                      <h4
                        class="text-gray-700 dark:text-white group-hover:dark:text-white font-medium"
                      >
                        High CPU Usage
                      </h4>
                      <div
                        class="text-gray-500 dark:text-gray-300 group-hover:dark:text-light-400"
                      >
                        <p class="text-sm">CPU usage is at 92%</p>
                        <p class="text-xs">5 min ago</p>
                      </div>
                    </div>
                  </Link>

                  <!-- Notification item  -->
                  <Link
                    to="#"
                    styleClass="group text-gray-700 dark:text-white px-4 py-2 text-sm inline-flex"
                  >
                    <div class="w-[12%] mr-1 mt-1">
                      <Success class="h-6 w-6" />
                    </div>

                    <div class="w-[calc(100-12%)]">
                      <h4
                        class="text-gray-700 dark:text-white group-hover:dark:text-white font-medium"
                      >
                        High CPU Usage
                      </h4>
                      <div
                        class="text-gray-500 dark:text-gray-300 group-hover:dark:text-light-400"
                      >
                        <p class="text-sm">CPU usage is at 92%</p>
                        <p class="text-xs">5 min ago</p>
                      </div>
                    </div>
                  </Link>

                  <!-- Notification item  -->
                  <Link
                    to="#"
                    styleClass="group text-gray-700 dark:text-white px-4 py-2 text-sm inline-flex"
                  >
                    <div class="w-[12%] mr-1 mt-1">
                      <Success class="h-6 w-6" />
                    </div>

                    <div class="w-[calc(100-12%)]">
                      <h4
                        class="text-gray-700 dark:text-white group-hover:dark:text-white font-medium"
                      >
                        High CPU Usage
                      </h4>
                      <div
                        class="text-gray-500 dark:text-gray-300 group-hover:dark:text-light-400"
                      >
                        <p class="text-sm">CPU usage is at 92%</p>
                        <p class="text-xs">5 min ago</p>
                      </div>
                    </div>
                  </Link>

                  <!-- Notification item  -->
                  <Link
                    to="#"
                    styleClass="group text-gray-700 dark:text-white px-4 py-2 text-sm inline-flex"
                  >
                    <div class="w-[12%] mr-1 mt-1">
                      <Success class="h-6 w-6" />
                    </div>

                    <div class="w-[calc(100-12%)]">
                      <h4
                        class="text-gray-700 dark:text-white group-hover:dark:text-white font-medium"
                      >
                        High CPU Usage
                      </h4>
                      <div
                        class="text-gray-500 dark:text-gray-300 group-hover:dark:text-light-400"
                      >
                        <p class="text-sm">CPU usage is at 92%</p>
                        <p class="text-xs">5 min ago</p>
                      </div>
                    </div>
                  </Link>
                </div>

                <!-- See more -->
                <div>
                  <Button
                    type="submit"
                    styleClass="inline-flex items-center justify-center px-4 !text-md text-gray-700 dark:text-white hover:dark:text-gray-900"
                  >
                    <h5>See more</h5>
                    <i class="ri-arrow-right-line ri-md ml-1"></i>
                  </Button>
                </div>
              </div>
            </template>
          </BtnDropdown>
        </div>

        <!-- User login transform !translate-y-0 !translate-x-0 -->
        <div class="mx-2">
          <BtnDropdown
            btnId="userProfileBtn"
            dropId="userProfileDropdown"
            buttonClass="flex items-center justify-start space-x-4 cursor-pointer"
            dropDownClass="absolute right-[195px] z-10 mt-[15px] w-56 top-full origin-top-right rounded-md text-gray-700 dark:text-white bg-white dark:bg-dark-300 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          >
            <template v-slot:button>
              <img
                class="w-10 h-10 rounded-full border-2 border-gray-50"
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
                alt=""
              />
              <div class="font-semibold text-left hidden md:block">
                <h3
                  class="text-md front-semibold text-gray-800 dark:text-white"
                >
                  Hasibul Hasan
                </h3>
                <div class="text-xs text-gray-500 dark:text-gray-300">
                  Free user
                </div>
              </div>
            </template>

            <template v-slot:dropdown-options>
              <div class="divide-y">
                <!-- User info -->
                <div class="px-4 py-3">
                  <p class="text-sm">Logged in as</p>
                  <p class="truncate text-sm font-medium">user@example.com</p>
                </div>

                <!-- Options -->
                <div class="py-1">
                  <Link
                    to="/profile"
                    styleClass="px-4 inline-flex items-center"
                  >
                    <i class="ri-user-3-line ri-xl mr-2"></i>
                    Profile
                  </Link>
                  <Link
                    to="/settings"
                    styleClass="px-4 inline-flex items-center"
                  >
                    <i class="ri-settings-5-line ri-xl mr-2"></i>
                    Settings
                  </Link>
                </div>

                <!-- Logged out -->
                <form action="#">
                  <Button
                    type="submit"
                    styleClass="inline-flex items-center px-4 text-sm"
                  >
                    <i class="ri-logout-box-r-line ri-xl mr-2"></i>
                    Sign out
                  </Button>
                </form>
              </div>
            </template>
          </BtnDropdown>
        </div>
      </div>
      <!-- right Side ends ./  -->
    </div>
  </header>
</template>
