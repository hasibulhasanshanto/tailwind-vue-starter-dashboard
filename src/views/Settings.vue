<script setup lang="ts">
import Breadcrumb from "../components/common/Breadcrumb.vue";
</script>
<template>
  <!-- Breadcrumb  -->
  <Breadcrumb :breadArray="['Settings', 'Home']" />

  <section
    class="col-span-1 flex w-full flex-1 flex-col gap-6 lg:col-span-3 lg:w-auto"
  >
    <!-- Change password  -->
    <div class="card">
      <div class="card-body">
        <h2
          class="text-[16px] font-semibold text-slate-700 dark:text-slate-300"
        >
          Change Password
        </h2>
        <p class="mb-4 text-sm font-normal text-slate-400">
          Protect your account with a strong and secure password
        </p>
        <form method="get" class="flex flex-col gap-5">
          <div class="grid grid-cols-1 gap-5 md:grid-cols-2">
            <label class="label" for="new-password">
              <span class="my-1 block">New Password</span>
              <input type="password" class="input" id="new-password" />
            </label>
            <label class="label" for="confirm-password">
              <span class="my-1 block">Confirm Password</span>
              <input type="password" class="input" id="confirm-password" />
            </label>
          </div>
          <!-- Button  -->
          <div class="flex items-center justify-end gap-4">
            <button
              type="cancel"
              class="btn border border-slate-300 text-slate-500 dark:border-slate-700 dark:text-slate-300"
            >
              Cancel
            </button>
            <button type="submit" class="btn btn-primary">Update</button>
          </div>
        </form>
      </div>
    </div>

    <!-- Preferenes  -->
    <div class="card">
      <div class="card-body">
        <h2
          class="text-[16px] font-semibold text-slate-700 dark:text-slate-300"
        >
          Preferences
        </h2>
        <p class="mb-4 text-sm font-normal text-slate-400">
          Make the most of your experience by customizing your preferences
        </p>
        <form method="get" class="flex flex-col gap-5">
          <div class="grid grid-cols-1 gap-5 md:grid-cols-2">
            <label class="label" for="new-password">
              <span class="my-1 block">Time Zone</span>
              <select
                class="tom-select tomselected ts-hidden-accessible"
                id="tomselect-1"
                tabindex="-1"
              >
                <option value="2">UTC + 06:00 Dhaka Time</option>
                <option value="3">UTC + 07:00 Samoa Time</option>
                <option value="4">UTC + 07:00 Bangkok Time</option>
                <option value="5">UTC + 06:00 Omsk Time</option>
                <option value="6">UTC + 06:00 Yangon Time</option>
                <option value="7">UTC + 05:45 Kathmandu Time</option>
                <option value="8">UTC + 05:30 Chennai Time</option>
                <option value="9">UTC + 08:00 Baja California Time</option>
                <option value="10">UTC + 09:00 Alaska Time</option>
                <option value="11">UTC + 06:00 Central America Time</option>
                <option value="1" selected="">GMT - 07:00 Pacific Time</option>
              </select>
              <div
                class="ts-wrapper tom-select single plugin-dropdown_input full has-items"
              >
                <div
                  class="ts-control"
                  role="combobox"
                  aria-haspopup="listbox"
                  aria-expanded="false"
                  aria-controls="tomselect-1-ts-dropdown"
                  id="tomselect-1-ts-control"
                  tabindex="0"
                >
                  <div data-value="1" class="item" data-ts-item="">
                    GMT - 07:00 Pacific Time
                  </div>
                  <input
                    class="items-placeholder"
                    tabindex="-1"
                    placeholder=""
                  />
                </div>
                <div
                  class="ts-dropdown single plugin-dropdown_input"
                  style="display: none"
                >
                  <div class="dropdown-input-wrap">
                    <input
                      type="select-one"
                      autocomplete="off"
                      size="1"
                      tabindex="-1"
                      class="dropdown-input"
                    />
                  </div>
                  <div
                    role="listbox"
                    tabindex="-1"
                    class="ts-dropdown-content"
                    id="tomselect-1-ts-dropdown"
                  ></div>
                </div>
              </div>
            </label>
            <label class="label" for="confirm-password">
              <span class="my-1 block">Currency</span>
              <select
                class="tom-select tomselected ts-hidden-accessible"
                id="tomselect-2"
                tabindex="-1"
              >
                <option value="1">KWD</option>
                <option value="2">JOD</option>
                <option value="3">GBP</option>
                <option value="4">CHF</option>

                <option value="6">EUR</option>
                <option value="7">KYD</option>
                <option value="5" selected="">USD</option>
              </select>
              <div
                class="ts-wrapper tom-select single plugin-dropdown_input full has-items"
              >
                <div
                  class="ts-control"
                  role="combobox"
                  aria-haspopup="listbox"
                  aria-expanded="false"
                  aria-controls="tomselect-2-ts-dropdown"
                  id="tomselect-2-ts-control"
                  tabindex="0"
                >
                  <div data-value="5" class="item" data-ts-item="">USD</div>
                  <input
                    class="items-placeholder"
                    tabindex="-1"
                    placeholder=""
                  />
                </div>
                <div
                  class="ts-dropdown single plugin-dropdown_input"
                  style="display: none"
                >
                  <div class="dropdown-input-wrap">
                    <input
                      type="select-one"
                      autocomplete="off"
                      size="1"
                      tabindex="-1"
                      class="dropdown-input"
                    />
                  </div>
                  <div
                    role="listbox"
                    tabindex="-1"
                    class="ts-dropdown-content"
                    id="tomselect-2-ts-dropdown"
                  ></div>
                </div>
              </div>
            </label>
          </div>
          <!-- Button  -->
          <div class="flex items-center justify-end gap-4">
            <button
              type="cancel"
              class="btn border border-slate-300 text-slate-500 dark:border-slate-700 dark:text-slate-300"
            >
              Cancel
            </button>
            <button type="submit" class="btn btn-primary">Update</button>
          </div>
        </form>
      </div>
    </div>

    <!-- Notifications  -->
    <div class="card">
      <!-- <h2 class="py-10 px-5 text-gray-800 dark:text-white">Settings page</h2> -->
      <div class="card-body">
        <h2
          class="text-[16px] font-semibold text-slate-700 dark:text-slate-300"
        >
          Notification
        </h2>
        <p class="mb-4 text-sm font-normal text-slate-400">
          Manage when you receive updates and alerts
        </p>
        <label
          for="show-desktop-notification"
          class="toggle my-2 flex items-center justify-between"
        >
          <div class="label">
            <h3 class="text-sm font-medium text-slate-700 dark:text-slate-300">
              Show desktop notification
            </h3>
            <p class="mb-4 text-sm font-normal text-slate-400">
              Stay informed and in control with desktop notifications
            </p>
          </div>
          <label class="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" class="sr-only peer" checked />
            <div
              class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"
            ></div>
            <span
              class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"
            ></span>
          </label>
        </label>
        <label
          for="send-email-notification"
          class="toggle my-2 flex items-center justify-between"
        >
          <div class="label">
            <h3 class="text-sm font-medium text-slate-700 dark:text-slate-300">
              Send email notification
            </h3>
            <p class="mb-4 text-sm font-normal text-slate-400">
              Stay up-to-date even when you're away from the platform
            </p>
          </div>
          <label class="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" class="sr-only peer" checked />
            <div
              class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"
            ></div>
            <span
              class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"
            ></span>
          </label>
        </label>
        <label
          for="show-chat-notification"
          class="toggle my-2 flex items-center justify-between"
        >
          <div class="label">
            <h3 class="text-sm font-medium text-slate-700 dark:text-slate-300">
              Show chat notification
            </h3>
            <p class="mb-4 text-sm font-normal text-slate-400">
              Stay up-to-date even when you're away from the platform
            </p>
          </div>
          <label class="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" class="sr-only peer" checked />
            <div
              class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"
            ></div>
            <span
              class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"
            ></span>
          </label>
        </label>
      </div>
    </div>

    <!-- Delete account  -->
    <div class="card">
      <div class="card-body">
        <h2
          class="text-[16px] font-semibold text-slate-700 dark:text-slate-300"
        >
          Delete Account
        </h2>
        <p class="mb-4 text-sm font-normal text-slate-400">
          Permanently remove your account and data from the platform
        </p>
        <form class="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-0">
          <label class="label" for="password">
            <span class="my-1 block">Confirm Your Password</span>
            <input type="password" class="input" id="password" />
          </label>
          <div
            class="flex flex-wrap items-center justify-center md:items-end md:justify-end"
          >
            <div>
              <button class="btn btn-danger px-6" type="submit">
                Delete My Account
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>
