<script setup lang="ts">
import Breadcrumb from "../components/common/Breadcrumb.vue";
</script>
<template>
  <!-- Breadcrumb  -->
  <Breadcrumb :breadArray="['Profile', 'Home', 'User']" />

  <div class="grid grid-cols-1 gap-6 lg:grid-cols-4 pb-10">
    <!-- Left Section Start  -->
    <section
      class="col-span-1 flex h-min w-full flex-col gap-6 lg:sticky lg:top-10"
    >
      <!-- User Avatar & Status  -->
      <div class="card">
        <div class="card-body flex flex-col items-center">
          <div class="relative my-2 h-24 w-24 rounded-full">
            <img
              src="https://www.getadmintoolkit.com/images/avatar11.png"
              alt="avatar-img"
              id="user-image"
              class="h-full w-full rounded-full"
            />
            <label
              for="upload-avatar"
              class="absolute bottom-0 right-0 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-slate-50 p-2 dark:bg-slate-900"
            >
              <span class="text-slate-600 dark:text-slate-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-camera w-full"
                >
                  <path
                    d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"
                  ></path>
                  <circle cx="12" cy="13" r="4"></circle>
                </svg>
              </span>
              <input
                type="file"
                accept="image/jpeg, image/png, image/jpg"
                class="hidden"
                id="upload-avatar"
              />
            </label>
          </div>
          <h2
            class="text-[16px] font-medium text-slate-700 dark:text-slate-200"
          >
            Ahmed Shakil
          </h2>
          <p class="text-sm font-normal tracking-tight text-slate-400">
            Fullstack Developer
          </p>
          <div class="badge badge-soft-success my-3 inline-block px-4">
            Active
          </div>
        </div>
      </div>

      <!-- Social Link  -->
      <div class="card">
        <div class="card-body">
          <div class="mb-2 flex items-center justify-between">
            <h3
              class="text-[16px] font-semibold text-slate-700 dark:text-slate-200"
            >
              Social Media
            </h3>
            <button
              data-toggle="modal"
              data-target="#social-link"
              class="cursor-pointer text-sm text-slate-600 duration-150 ease-in hover:text-primary-500 dark:text-slate-300 dark:hover:text-primary-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-edit h-5"
              >
                <path
                  d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"
                ></path>
                <path
                  d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"
                ></path>
              </svg>
            </button>
          </div>
          <!-- Facebook  -->
          <div class="my-3 flex items-center gap-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-facebook h-8 text-slate-600 dark:text-slate-300"
            >
              <path
                d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
              ></path>
            </svg>
            <div>
              <h5
                class="text-sm font-medium text-slate-700 dark:text-slate-300"
              >
                Facebook
              </h5>
              <a href="#" class="cursor-not-allowed">
                <p class="text-sm font-normal text-slate-400">Not connected</p>
              </a>
            </div>
          </div>
          <!-- Instagram  -->
          <div class="my-3 flex items-center gap-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-instagram h-8 text-slate-600 dark:text-slate-300"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
            <div>
              <h5
                class="text-sm font-medium text-slate-700 dark:text-slate-300"
              >
                Instagram
              </h5>
              <a href="#">
                <p class="text-sm font-normal text-primary-500">@ahmedshakil</p>
              </a>
            </div>
          </div>
          <!-- Twitter  -->
          <div class="my-3 flex items-center gap-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-twitter h-8 text-slate-600 dark:text-slate-300"
            >
              <path
                d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"
              ></path>
            </svg>
            <div>
              <h5
                class="text-sm font-medium text-slate-700 dark:text-slate-300"
              >
                Twitter
              </h5>
              <a href="#">
                <p class="text-sm font-normal text-primary-500">@ahmedshakil</p>
              </a>
            </div>
          </div>
          <!-- LinkedIn  -->
          <div class="my-3 flex items-center gap-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-linkedin h-8 text-slate-600 dark:text-slate-300"
            >
              <path
                d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
              ></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
            <div>
              <h5
                class="text-sm font-medium text-slate-700 dark:text-slate-300"
              >
                LinkedIn
              </h5>
              <a href="#">
                <p class="text-sm font-normal text-primary-500">ahmedshakil</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Left Section End  -->
    <!-- Right Section Start  -->
    <section
      class="col-span-1 flex w-full flex-1 flex-col gap-6 lg:col-span-3 lg:w-auto"
    >
      <!-- Personal Details  -->
      <div class="card">
        <div class="card-body">
          <h2
            class="text-[16px] font-semibold text-slate-700 dark:text-slate-300"
          >
            Personal Details
          </h2>
          <p class="mb-4 text-sm font-normal text-slate-400">
            Manage your personal information
          </p>
          <form method="get" class="flex flex-col gap-5">
            <!-- Name  -->
            <div class="grid grid-cols-1 gap-5 md:grid-cols-2">
              <label class="label" for="first-name">
                <span class="my-1 block">First Name</span>
                <input
                  type="text"
                  class="input"
                  value="Ahmed"
                  id="first-name"
                />
              </label>
              <label class="label" for="last-name">
                <span class="my-1 block">Last Name</span>
                <input
                  type="text"
                  class="input"
                  value="Shakil"
                  id="last-name"
                />
              </label>
            </div>
            <!-- Phone & Email  -->
            <div class="grid grid-cols-1 gap-5 md:grid-cols-2">
              <label class="label" for="phone">
                <span class="my-1 block">Phone Number</span>
                <input
                  type="tell"
                  class="input"
                  value="+880 1834507645"
                  id="phone"
                />
              </label>
              <label class="label" for="email">
                <span class="my-1 block">Email</span>
                <input
                  type="email"
                  class="input"
                  value="ahmedshakil@example.com"
                  id="email"
                />
              </label>
            </div>
            <!-- Street & City  -->
            <div class="grid grid-cols-1 gap-5 md:grid-cols-2">
              <label class="label" for="street-address">
                <span class="my-1 block">Street Address</span>
                <input
                  type="text"
                  class="input"
                  value="15205 North California,  Suite 100"
                  id="street-address"
                />
              </label>
              <label class="label" for="city-state">
                <span class="my-1 block">City/State</span>
                <input
                  type="text"
                  class="input"
                  value="California"
                  id="city-state"
                />
              </label>
            </div>
            <!-- Country & Zip  -->
            <div class="grid grid-cols-1 gap-5 md:grid-cols-2">
              <label class="label" for="country">
                <span class="my-1 block">Country</span>
                <input
                  type="text"
                  class="input"
                  value="United States"
                  id="country"
                />
              </label>
              <label class="label" for="zip-code">
                <span class="my-1 block">Zip Code</span>
                <input type="text" class="input" value="90011" id="zip-code" />
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
      <!-- Change Password  -->
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
      <!-- Preferences  -->
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
                  <option value="1" selected="">
                    GMT - 07:00 Pacific Time
                  </option>
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
      <!-- Notification -->
      <div class="card">
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
              <h3
                class="text-sm font-medium text-slate-700 dark:text-slate-300"
              >
                Show desktop notification
              </h3>
              <p class="mb-4 text-sm font-normal text-slate-400">
                Stay informed and in control with desktop notifications
              </p>
            </div>
            <div class="relative">
              <input
                class="toggle-input peer sr-only"
                id="show-desktop-notification"
                type="checkbox"
              />
              <div class="toggle-body"></div>
            </div>
          </label>
          <label
            for="send-email-notification"
            class="toggle my-2 flex items-center justify-between"
          >
            <div class="label">
              <h3
                class="text-sm font-medium text-slate-700 dark:text-slate-300"
              >
                Send email notification
              </h3>
              <p class="mb-4 text-sm font-normal text-slate-400">
                Stay up-to-date even when you're away from the platform
              </p>
            </div>
            <div class="relative">
              <input
                class="toggle-input peer sr-only"
                id="send-email-notification"
                type="checkbox"
                checked=""
              />
              <div class="toggle-body"></div>
            </div>
          </label>
          <label
            for="show-chat-notification"
            class="toggle my-2 flex items-center justify-between"
          >
            <div class="label">
              <h3
                class="text-sm font-medium text-slate-700 dark:text-slate-300"
              >
                Show chat notification
              </h3>
              <p class="mb-4 text-sm font-normal text-slate-400">
                Stay up-to-date even when you're away from the platform
              </p>
            </div>
            <div class="relative">
              <input
                class="toggle-input peer sr-only"
                id="show-chat-notification"
                type="checkbox"
                checked=""
              />
              <div class="toggle-body"></div>
            </div>
          </label>
        </div>
      </div>
      <!-- Delete Account -->
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
    <!-- Right Section End -->
  </div>
</template>
