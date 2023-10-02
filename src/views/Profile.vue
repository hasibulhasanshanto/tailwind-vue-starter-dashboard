<script setup lang="ts">
import { ref } from "vue";
import Breadcrumb from "../components/common/Breadcrumb.vue";
import BaseInput from "../components/Form/BaseInput.vue";

const inputData = ref();
</script>
<template>
  <!-- Breadcrumb  -->
  <Breadcrumb :breadArray="['Profile', 'Home', 'User']" />

  <div class="grid grid-cols-1 gap-6 lg:grid-cols-4">
    <!-- Left Section Start  -->
    <section
      class="col-span-1 flex h-min w-full flex-col gap-6 lg:sticky lg:top-20"
    >
      <!-- User Avatar & Status  -->
      <div class="card">
        <div class="card-body flex flex-col items-center">
          <div class="relative my-2 h-24 w-24 rounded-full">
            <img
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
              alt="avatar-img"
              id="user-image"
              class="h-full w-full rounded-full"
            />
            <label
              for="upload-avatar"
              class="absolute bottom-0 right-0 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full text-white bg-black/80 p-2 dark:g-black/90"
            >
              <i class="ri-camera-line"></i>
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
            Hasibul Hasan
          </h2>
          <p class="text-sm font-normal tracking-tight text-slate-400">
            Platinum User
          </p>
          <div class="badge badge-soft-success my-3 inline-block px-4">
            <span
              class="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300"
              >Active</span
            >
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
              <i class="ri-edit-box-line ri-xl"></i>
            </button>
          </div>
          <!-- Facebook  -->
          <div class="my-3 flex items-center gap-4">
            <i
              class="ri-facebook-box-line ri-2x text-black/90 dark:text-white/80"
            ></i>
            <div>
              <h5
                class="text-sm font-medium text-slate-700 dark:text-slate-300"
              >
                Facebook
              </h5>
              <a href="#" class="cursor-not-allowed">
                <p
                  class="text-sm font-normal text-slate-400 dark:text-white/80"
                >
                  Not connected
                </p>
              </a>
            </div>
          </div>
          <!-- Instagram  -->
          <div class="my-3 flex items-center gap-4">
            <i
              class="ri-instagram-line ri-2x text-black/90 dark:text-white/80"
            ></i>
            <div>
              <h5
                class="text-sm font-medium text-slate-700 dark:text-slate-300"
              >
                Instagram
              </h5>
              <a href="#">
                <p
                  class="text-sm font-normal text-primary-500 dark:text-white/80"
                >
                  @ahmedshakil
                </p>
              </a>
            </div>
          </div>
          <!-- Twitter  -->
          <div class="my-3 flex items-center gap-4">
            <i
              class="ri-twitter-x-line ri-2x text-black/90 dark:text-white/80"
            ></i>
            <div>
              <h5
                class="text-sm font-medium text-slate-700 dark:text-slate-300"
              >
                Twitter
              </h5>
              <a href="#">
                <p
                  class="text-sm font-normal text-primary-500 dark:text-white/80"
                >
                  @ahmedshakil
                </p>
              </a>
            </div>
          </div>
          <!-- LinkedIn  -->
          <div class="my-3 flex items-center gap-4">
            <i
              class="ri-linkedin-box-line ri-2x text-black/90 dark:text-white/80"
            ></i>
            <div>
              <h5
                class="text-sm font-medium text-slate-700 dark:text-slate-300"
              >
                LinkedIn
              </h5>
              <a href="#">
                <p
                  class="text-sm font-normal text-primary-500 dark:text-white/80"
                >
                  ahmedshakil
                </p>
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
          <div class="flex justify-between items-baseline">
            <div class="left-content">
              <h2
                class="text-[16px] font-semibold text-slate-700 dark:text-slate-300"
              >
                Basics & Lifestyle
              </h2>
              <!-- <p class="mb-4 text-sm font-normal text-slate-400">
                Manage your personal information
              </p> -->
            </div> 
            <button
              data-toggle="modal"
              data-target="#social-link"
              class="cursor-pointer text-sm text-slate-600 duration-150 ease-in hover:text-primary-500 dark:text-slate-300 dark:hover:text-primary-500"
            >
              <i class="ri-edit-box-line ri-xl"></i>
            </button>
          </div>
          <hr class="border-t-2 border-slate-500 my-2">
          <div class="flex flex-col py-2">
            <!-- Name  -->
            <div class="grid grid-cols-1 gap-6 lg:gap-28 md:grid-cols-2 text-sm font-medium">
              <!-- left side  -->
              <div class="flex items-center justify-between">
                <div class="text-slate-600 dark:text-slate-300 space-y-1">
                 <h6>Age</h6>
                 <h6>Date of birth</h6>
                 <h6>Marital Status</h6>
                 <h6>Height</h6>
                 <h6>Grew up in</h6>
                </div> 

                <div class="text-black/90 dark:text-white/80 space-y-1">
                  <h6>: 29</h6>
                  <h6>: 12-March-1994</h6>
                  <h6>: Never married</h6>
                  <h6>: 5'6"</h6>
                  <h6>: Bangladesh</h6>
                </div>
              </div> 

              <!-- right side  -->
              <div class="flex items-center justify-between">
                <div class="text-slate-600 dark:text-slate-300 space-y-1">
                 <h6>Age</h6>
                 <h6>Date of birth</h6>
                 <h6>Marital Status</h6>
                 <h6>Height</h6>
                 <h6>Grew up in</h6>
                </div> 

                <div class="text-black/90 dark:text-white/80 space-y-1">
                  <h6>: 29</h6>
                  <h6>: 12-march-1994</h6>
                  <h6>: Never married</h6>
                  <h6>: 5'6"</h6>
                  <h6>: Bangladesh</h6>
                </div>
              </div> 

            </div> 
          </div>
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
              <span class="my-1 block text-slate-700 dark:text-slate-300">Confirm Your Password</span>
              <input type="password" class="bg-light-800 border border-light-800 dark:bg-dark-400 dark:border-dark-400 placeholder-gray-500 dark:placeholder-light-400 text-sm w-full" id="password" placeholder="Confirm password..." /> 
            </label>
            <div
              class="flex flex-wrap items-center justify-center md:items-end md:justify-end"
            >
              <div>
                <button class="text-white bg-red-700 px-6 py-2 rounded-lg" type="submit">
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
