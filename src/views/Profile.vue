<script setup lang="ts">
import { ref } from "vue";
import Breadcrumb from "../components/common/Breadcrumb.vue";
import BaseModal from "../components/common/Modal.vue";

const isOpen = ref(false);
// open modal handler
const openModal = () => {
  isOpen.value = true;
};
// close modal handler
const closeModal = () => {
  isOpen.value = false;
};
</script>
<template>
  <!-- Breadcrumb  -->
  <Breadcrumb :breadArray="['Profile', 'Home']" />

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
          <h4 class="text-md font-semibold text-slate-500">01777111222</h4>
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
              @click="openModal"
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
      <!-- Short bio  -->
      <div class="card">
        <div class="card-body">
          <div class="flex justify-between items-baseline">
            <div class="left-content">
              <h2
                class="text-[16px] font-semibold text-slate-700 dark:text-slate-300"
              >
                Myself | Short Bio
              </h2>
              <p class="mb-4 text-sm font-normal text-slate-400">
                Say something about you or your expectation
              </p>
            </div>
            <button
            @click="openModal"
              class="cursor-pointer text-sm text-slate-600 duration-150 ease-in hover:text-primary-500 dark:text-slate-300 dark:hover:text-primary-500"
            >
              <i class="ri-edit-box-line ri-xl"></i>
            </button>
          </div>
          <!-- hr line  -->
          <hr class="border-t-2 border-slate-500 my-2" />

          <div class="flex py-2">
            <p
              class="text-black/90 dark:text-white/80 space-y-1 text-justify text-md font-medium"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
              voluptas veritatis iure facere totam qui et libero, quos aliquid
              atque itaque praesentium ducimus in distinctio asperiores tempore
              quisquam quaerat sequi recusandae eum excepturi voluptates
              eligendi autem. Illo quod optio aut porro? Vel sit ducimus, velit
              enim quo modi sed quae voluptatem, explicabo ea eos maxime labore
              laudantium corrupti eligendi esse numquam illum, dicta temporibus
              quaerat saepe nesciunt beatae. Nostrum architecto consequuntur
              nam. Iure, velit. Mollitia eum aliquid quam minus alias cum amet
              aperiam, obcaecati laudantium dolorem voluptate ad. Odio quam
              cupiditate, incidunt in maiores animi saepe! Quisquam repudiandae
              maiores et repellat, dolor magnam saepe atque commodi. Id numquam
              distinctio, perspiciatis itaque doloremque quasi maiores molestias
              corporis ullam veniam nihil, eligendi voluptatem hic maxime,
              laudantium debitis optio necessitatibus asperiores soluta facilis
              accusantium velit obcaecati unde eos. Dolores, unde numquam non
              culpa illum eos quis, cupiditate atque porro enim suscipit.
              Consequatur voluptates quo esse necessitatibus voluptate ab
              officia maiores dolores ipsa eum.
            </p>
          </div>
        </div>
      </div>

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
              class="cursor-pointer text-sm text-slate-600 duration-150 ease-in hover:text-primary-500 dark:text-slate-300 dark:hover:text-primary-500"
            >
              <i class="ri-edit-box-line ri-xl"></i>
            </button>
          </div>
          <hr class="border-t-2 border-slate-500 my-2" />
          <div class="flex flex-col py-2">
            <!-- Name  -->
            <div
              class="grid grid-cols-1 gap-6 lg:gap-28 md:grid-cols-2 text-sm font-medium"
            >
              <!-- left side  -->
              <div class="flex items-center justify-between">
                <div class="text-slate-600 dark:text-slate-300 space-y-1 w-1/2">
                  <h6>Age</h6>
                  <h6>Date of birth</h6>
                  <h6>Marital Status</h6>
                  <h6>Height</h6>
                  <h6>Grew up in</h6>
                  <h6>Diet</h6>
                  <h6>Sun Sign</h6>
                </div>

                <div class="text-black/90 dark:text-white/80 space-y-1 w-1/2">
                  <h6>: 29</h6>
                  <h6>: 12-March-1994</h6>
                  <h6>: Never married</h6>
                  <h6>: 5'6"</h6>
                  <h6>: Bangladesh</h6>
                  <h6>: Non-Veg</h6>
                  <h6>: Pisces</h6>
                </div>
              </div>

              <!-- right side  -->
              <div class="flex items-center justify-between">
                <div class="text-slate-600 dark:text-slate-300 space-y-1 w-1/2">
                  <h6>Personal values</h6>
                  <h6>Blood Group</h6>
                  <h6>Health Information</h6>
                  <h6>Body Type</h6>
                  <h6>Disability</h6>
                  <h6>Smoker</h6>
                  <h6>Drinker</h6>
                </div>

                <div class="text-black/90 dark:text-white/80 space-y-1 w-1/2">
                  <h6>: Will tell you later</h6>
                  <h6>: B+</h6>
                  <h6>: No Health Problem</h6>
                  <h6>: Vuriwala</h6>
                  <h6>: None</h6>
                  <h6>: No</h6>
                  <h6>: No</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Education & Career  -->
      <div class="card">
        <div class="card-body">
          <div class="flex justify-between items-baseline">
            <div class="left-content">
              <h2
                class="text-[16px] font-semibold text-slate-700 dark:text-slate-300"
              >
                Education & Career
              </h2>
            </div>
            <button
              data-toggle="modal"
              data-target="#social-link"
              class="cursor-pointer text-sm text-slate-600 duration-150 ease-in hover:text-primary-500 dark:text-slate-300 dark:hover:text-primary-500"
            >
              <i class="ri-edit-box-line ri-xl"></i>
            </button>
          </div>
          <hr class="border-t-2 border-slate-500 my-2" />
          <div class="flex flex-col py-2">
            <!-- Name  -->
            <div
              class="grid grid-cols-1 gap-6 lg:gap-28 md:grid-cols-2 text-sm font-medium"
            >
              <!-- left side  -->
              <div class="flex items-center justify-between">
                <div class="text-slate-600 dark:text-slate-300 space-y-1 w-1/2">
                  <h6>Highest Qualifaiction</h6>
                  <h6>Institution</h6>
                  <h6>Monthly Income</h6>
                </div>

                <div class="text-black/90 dark:text-white/80 space-y-1 w-1/2">
                  <h6>: B.Sc - CSE</h6>
                  <h6>: Gono Bishwabidayalay</h6>
                  <h6>: 50, 000</h6>
                </div>
              </div>

              <!-- right side  -->
              <div class="flex items-center justify-between">
                <div class="text-slate-600 dark:text-slate-300 space-y-1 w-1/2">
                  <h6>Working With</h6>
                  <h6>Working As</h6>
                  <h6>Company Name</h6>
                </div>

                <div class="text-black/90 dark:text-white/80 space-y-1 w-1/2">
                  <h6>: Private Company</h6>
                  <h6>: Software Engineer</h6>
                  <h6>: Jatri Services Limited</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Family details  -->
      <div class="card">
        <div class="card-body">
          <div class="flex justify-between items-baseline">
            <div class="left-content">
              <h2
                class="text-[16px] font-semibold text-slate-700 dark:text-slate-300"
              >
                Family Details
              </h2>
            </div>
            <button
              data-toggle="modal"
              data-target="#social-link"
              class="cursor-pointer text-sm text-slate-600 duration-150 ease-in hover:text-primary-500 dark:text-slate-300 dark:hover:text-primary-500"
            >
              <i class="ri-edit-box-line ri-xl"></i>
            </button>
          </div>
          <hr class="border-t-2 border-slate-500 my-2" />
          <div class="flex flex-col py-2">
            <!-- Name  -->
            <div
              class="grid grid-cols-1 gap-6 lg:gap-28 md:grid-cols-2 text-sm font-medium"
            >
              <!-- left side  -->
              <div class="flex items-center justify-between">
                <div
                  class="text-slate-600 dark:text-slate-300 space-y-1 flex-initial w-[50%]"
                >
                  <h6>Father's Status</h6>
                  <h6>Nature of Bussiness</h6>
                  <h6>Mother's Status</h6>
                  <h6>Family Location</h6>
                  <h6>Home town</h6>
                </div>

                <div
                  class="text-black/90 dark:text-white/80 space-y-1 flex-initial w-[50%]"
                >
                  <h6>: Bussiness</h6>
                  <h6>: Furniture</h6>
                  <h6>: Housewife</h6>
                  <h6>: Gopalpur, Tangail</h6>
                  <h6>: Tangail</h6>
                </div>
              </div>

              <!-- right side  -->
              <div class="flex items-center justify-between">
                <div
                  class="text-slate-600 dark:text-slate-300 space-y-1 flex-initial w-[50%]"
                >
                  <h6>No. of Brothers</h6>
                  <h6>No. of Sisters</h6>
                  <h6>Family Type</h6>
                  <h6>Family Values</h6>
                  <h6>Family Affluence</h6>
                </div>

                <div
                  class="text-black/90 dark:text-white/80 space-y-1 flex-initial w-[50%]"
                >
                  <h6>: 1 of which married 1</h6>
                  <h6>: 2 of which married 1</h6>
                  <h6>: Joint</h6>
                  <h6>: Moderate</h6>
                  <h6>: Middle Class</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Religious Background  -->
      <div class="card">
        <div class="card-body">
          <div class="flex justify-between items-baseline">
            <div class="left-content">
              <h2
                class="text-[16px] font-semibold text-slate-700 dark:text-slate-300"
              >
                Religious Background
              </h2>
            </div>
            <button
              data-toggle="modal"
              data-target="#social-link"
              class="cursor-pointer text-sm text-slate-600 duration-150 ease-in hover:text-primary-500 dark:text-slate-300 dark:hover:text-primary-500"
            >
              <i class="ri-edit-box-line ri-xl"></i>
            </button>
          </div>
          <hr class="border-t-2 border-slate-500 my-2" />
          <div class="flex flex-col py-2">
            <!-- Name  -->
            <div
              class="grid grid-cols-1 gap-6 lg:gap-28 md:grid-cols-2 text-sm font-medium"
            >
              <!-- left side  -->
              <div class="flex items-center justify-between">
                <div
                  class="text-slate-600 dark:text-slate-300 space-y-1 flex-initial w-[50%]"
                >
                  <h6>Religion</h6>
                  <h6>Community</h6>
                  <h6>Sub Community</h6>
                  <h6>Mother Tounge</h6>
                </div>

                <div
                  class="text-black/90 dark:text-white/80 space-y-1 flex-initial w-[50%]"
                >
                  <h6>: Islam</h6>
                  <h6>: Sunni</h6>
                  <h6>: Not Specified</h6>
                  <h6>: Bengali</h6>
                </div>
              </div>

              <!-- right side  -->
              <div class="flex items-center justify-between">
                <div
                  class="text-slate-600 dark:text-slate-300 space-y-1 flex-initial w-[50%]"
                >
                  <h6>Pray 5 times</h6>
                  <h6>Recite Holy Quran</h6>
                  <h6>Wear boorka & Hijab</h6>
                  <h6>Follow Sunnah</h6>
                </div>

                <div
                  class="text-black/90 dark:text-white/80 space-y-1 flex-initial w-[50%]"
                >
                  <h6>: Yes</h6>
                  <h6>: Yes</h6>
                  <h6>: No</h6>
                  <h6>: Yes</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Current Location of Groom  -->
      <div class="card">
        <div class="card-body">
          <div class="flex justify-between items-baseline">
            <div class="left-content">
              <h2
                class="text-[16px] font-semibold text-slate-700 dark:text-slate-300"
              >
                Current Location of Groom
              </h2>
            </div>
            <button
              data-toggle="modal"
              data-target="#social-link"
              class="cursor-pointer text-sm text-slate-600 duration-150 ease-in hover:text-primary-500 dark:text-slate-300 dark:hover:text-primary-500"
            >
              <i class="ri-edit-box-line ri-xl"></i>
            </button>
          </div>
          <hr class="border-t-2 border-slate-500 my-2" />
          <div class="flex flex-col py-2">
            <!-- Name  -->
            <div
              class="grid grid-cols-1 gap-6 lg:gap-28 md:grid-cols-2 text-sm font-medium"
            >
              <!-- left side  -->
              <div class="flex items-center justify-between">
                <div
                  class="text-slate-600 dark:text-slate-300 space-y-1 flex-initial w-[50%]"
                >
                  <h6>Current Residence</h6>
                  <h6>State/ Divison</h6>
                </div>

                <div
                  class="text-black/90 dark:text-white/80 space-y-1 flex-initial w-[50%]"
                >
                  <h6>: Vata, Notunbazar, Dhaka</h6>
                  <h6>: Dhaka</h6>
                </div>
              </div>

              <!-- right side  -->
              <div class="flex items-center justify-between">
                <div
                  class="text-slate-600 dark:text-slate-300 space-y-1 flex-initial w-[50%]"
                >
                  <h6>Residency Status</h6>
                  <h6>Zip / Pin code</h6>
                </div>

                <div
                  class="text-black/90 dark:text-white/80 space-y-1 flex-initial w-[50%]"
                >
                  <h6>: Citizens</h6>
                  <h6>: 1204</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Hobbies and Interests -->
      <div class="card">
        <div class="card-body">
          <div class="flex justify-between items-baseline">
            <div class="left-content">
              <h2
                class="text-[16px] font-semibold text-slate-700 dark:text-slate-300"
              >
                Hobbies and Interests
              </h2>
            </div>
            <button
              data-toggle="modal"
              data-target="#social-link"
              class="cursor-pointer text-sm text-slate-600 duration-150 ease-in hover:text-primary-500 dark:text-slate-300 dark:hover:text-primary-500"
            >
              <i class="ri-edit-box-line ri-xl"></i>
            </button>
          </div>
          <hr class="border-t-2 border-slate-500 my-2" />
          <div class="flex flex-col py-2">
            <!-- Name  -->
            <div class="flex flex-wrap text-sm font-medium gap-2">
              <span
                class="bg-pink-100 text-pink-800 text-xs font-medium mr-2 px-2.5 py-1.5 rounded dark:bg-pink-900 dark:text-pink-300 flex items-center justify-between"
              >
                <i class="ri-camera-2-line ri-lg mr-2"></i>
                Photography
              </span>
              <span
                class="bg-pink-100 text-pink-800 text-xs font-medium mr-2 px-2.5 py-1.5 rounded dark:bg-pink-900 dark:text-pink-300 flex items-center justify-between"
              >
                <i class="ri-article-line ri-lg mr-2"></i>
                Blogging
              </span>
              <span
                class="bg-pink-100 text-pink-800 text-xs font-medium mr-2 px-2.5 py-1.5 rounded dark:bg-pink-900 dark:text-pink-300 flex items-center justify-between"
              >
                <i class="ri-live-line ri-lg mr-2"></i>
                Movies
              </span>
              <span
                class="bg-pink-100 text-pink-800 text-xs font-medium mr-2 px-2.5 py-1.5 rounded dark:bg-pink-900 dark:text-pink-300 flex items-center justify-between"
              >
                <i class="ri-gamepad-line ri-lg mr-2"></i>
                Gaming
              </span>
              <span
                class="bg-pink-100 text-pink-800 text-xs font-medium mr-2 px-2.5 py-1.5 rounded dark:bg-pink-900 dark:text-pink-300 flex items-center justify-between"
              >
                <i class="ri-motorbike-line ri-lg mr-2"></i>
                Biking
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- Partner Preference  -->
      <div class="card">
        <div class="card-body">
          <div class="flex justify-between items-baseline">
            <div class="left-content">
              <h2
                class="text-[16px] font-semibold text-slate-700 dark:text-slate-300"
              >
                Partner Preference
              </h2>
              <p class="mb-4 text-sm font-normal text-slate-400">Basic Info</p>
            </div>
            <button
              data-toggle="modal"
              data-target="#social-link"
              class="cursor-pointer text-sm text-slate-600 duration-150 ease-in hover:text-primary-500 dark:text-slate-300 dark:hover:text-primary-500"
            >
              <i class="ri-edit-box-line ri-xl"></i>
            </button>
          </div>
          <!-- hr line  -->
          <hr class="border-t-2 border-slate-500 my-2" />

          <div class="flex flex-col py-2">
            <!-- Name  -->
            <div
              class="grid grid-cols-1 gap-6 lg:gap-28 md:grid-cols-2 text-sm font-medium"
            >
              <!-- left side  -->
              <div class="flex items-center justify-between">
                <div
                  class="text-slate-600 dark:text-slate-300 space-y-1 flex-initial w-[50%]"
                >
                  <h6>Age</h6>
                  <h6>Height</h6>
                  <h6>Religion / Community</h6>
                </div>

                <div
                  class="text-black/90 dark:text-white/80 space-y-1 flex-initial w-[50%]"
                >
                  <h6>: 20 to 28</h6>
                  <h6>: 5'0 to 5'4"</h6>
                  <h6>: Islam</h6>
                </div>
              </div>

              <!-- right side  -->
              <div class="flex items-center justify-between">
                <div
                  class="text-slate-600 dark:text-slate-300 space-y-1 flex-initial w-[50%]"
                >
                  <h6>Marital Status</h6>
                  <h6>Mother Tongue</h6>
                </div>

                <div
                  class="text-black/90 dark:text-white/80 space-y-1 flex-initial w-[50%]"
                >
                  <h6>: Never Married</h6>
                  <h6>: Bengali</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Education & Career  -->
      <div class="card">
        <div class="card-body">
          <div class="flex justify-between items-baseline">
            <div class="left-content">
              <h2
                class="text-[16px] font-semibold text-slate-700 dark:text-slate-300"
              >
                Education & Career
              </h2>
            </div>
            <button
              data-toggle="modal"
              data-target="#social-link"
              class="cursor-pointer text-sm text-slate-600 duration-150 ease-in hover:text-primary-500 dark:text-slate-300 dark:hover:text-primary-500"
            >
              <i class="ri-edit-box-line ri-xl"></i>
            </button>
          </div>
          <hr class="border-t-2 border-slate-500 my-2" />
          <div class="flex flex-col py-2">
            <!-- Name  -->
            <div
              class="grid grid-cols-1 gap-6 lg:gap-28 md:grid-cols-2 text-sm font-medium"
            >
              <!-- left side  -->
              <div class="flex items-center justify-between">
                <div
                  class="text-slate-600 dark:text-slate-300 space-y-1 flex-initial w-[50%]"
                >
                  <h6>Highest Qualifaiction</h6>
                  <h6>Institution</h6>
                  <h6>Monthly Income</h6>
                </div>

                <div
                  class="text-black/90 dark:text-white/80 space-y-1 flex-initial w-[50%]"
                >
                  <h6>: Doesn't Matter</h6>
                  <h6>: Doesn't Matter</h6>
                  <h6>: Doesn't Matter</h6>
                </div>
              </div>

              <!-- right side  -->
              <div class="flex items-center justify-between">
                <div
                  class="text-slate-600 dark:text-slate-300 space-y-1 flex-initial w-[50%]"
                >
                  <h6>Working With</h6>
                  <h6>Working As</h6>
                  <h6>Company Name</h6>
                </div>

                <div
                  class="text-black/90 dark:text-white/80 space-y-1 flex-initial w-[50%]"
                >
                  <h6>: Doesn't Matter</h6>
                  <h6>: Doesn't Matter</h6>
                  <h6>: Doesn't Matter</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Current Location of Groom  -->
      <div class="card">
        <div class="card-body">
          <div class="flex justify-between items-baseline">
            <div class="left-content">
              <h2
                class="text-[16px] font-semibold text-slate-700 dark:text-slate-300"
              >
                Current Location of Bride
              </h2>
            </div>
            <button
              data-toggle="modal"
              data-target="#social-link"
              class="cursor-pointer text-sm text-slate-600 duration-150 ease-in hover:text-primary-500 dark:text-slate-300 dark:hover:text-primary-500"
            >
              <i class="ri-edit-box-line ri-xl"></i>
            </button>
          </div>
          <hr class="border-t-2 border-slate-500 my-2" />
          <div class="flex flex-col py-2">
            <!-- Name  -->
            <div
              class="grid grid-cols-1 gap-6 lg:gap-28 md:grid-cols-2 text-sm font-medium"
            >
              <!-- left side  -->
              <div class="flex items-center justify-between">
                <div
                  class="text-slate-600 dark:text-slate-300 space-y-1 flex-initial w-[50%]"
                >
                  <h6>Current Residence</h6>
                  <h6>State/ Divison</h6>
                  <h6>City/ Upozilla</h6>
                </div>

                <div
                  class="text-black/90 dark:text-white/80 space-y-1 flex-initial w-[50%]"
                >
                  <h6>: Ullapara, Sirajgonj</h6>
                  <h6>: Sirajgonj</h6>
                  <h6>: Dhaka</h6>
                </div>
              </div>

              <!-- right side  -->
              <div class="flex items-center justify-between">
                <div
                  class="text-slate-600 dark:text-slate-300 space-y-1 flex-initial w-[50%]"
                >
                  <h6>Residency Status</h6>
                  <h6>Zip / Pin code</h6>
                </div>

                <div
                  class="text-black/90 dark:text-white/80 space-y-1 flex-initial w-[50%]"
                >
                  <h6>: Citizens</h6>
                  <h6>: 2001</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Other Details  -->
      <div class="card">
        <div class="card-body">
          <div class="flex justify-between items-baseline">
            <div class="left-content">
              <h2
                class="text-[16px] font-semibold text-slate-700 dark:text-slate-300"
              >
                Other Details
              </h2>
            </div>
            <button
              data-toggle="modal"
              data-target="#social-link"
              class="cursor-pointer text-sm text-slate-600 duration-150 ease-in hover:text-primary-500 dark:text-slate-300 dark:hover:text-primary-500"
            >
              <i class="ri-edit-box-line ri-xl"></i>
            </button>
          </div>
          <hr class="border-t-2 border-slate-500 my-2" />
          <div class="flex flex-col py-2">
            <!-- Name  -->
            <div
              class="grid grid-cols-1 gap-6 lg:gap-28 md:grid-cols-2 text-sm font-medium"
            >
              <!-- left side  -->
              <div class="flex items-center justify-between">
                <div
                  class="text-slate-600 dark:text-slate-300 space-y-1 flex-initial w-[50%]"
                >
                  <h6>Profile created by</h6>
                  <h6>Diet</h6>
                  <h6>Body Type</h6>
                  <h6>Complexation</h6>
                </div>

                <div
                  class="text-black/90 dark:text-white/80 space-y-1 flex-initial w-[50%]"
                >
                  <h6>: Relative</h6>
                  <h6>: Doesn't Matter</h6>
                  <h6>: Slim</h6>
                  <h6>: Fair</h6>
                </div>
              </div>

              <!-- right side  -->
              <div class="flex items-center justify-between">
                <div
                  class="text-slate-600 dark:text-slate-300 space-y-1 flex-initial w-[50%]"
                >
                  <h6>Disability</h6>
                  <h6>Health Information</h6>
                  <h6>Smoking</h6>
                  <h6>Drinking</h6>
                </div>

                <div
                  class="text-black/90 dark:text-white/80 space-y-1 flex-initial w-[50%]"
                >
                  <h6>: None</h6>
                  <h6>: No Health Problem</h6>
                  <h6>: Doesn't Matter</h6>
                  <h6>: Doesn't Matter</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- <button @click="showModal = true" class="bg-red-500 p-3 text-white block">Open Modal</button> -->
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
              <span class="my-1 block text-slate-700 dark:text-slate-300"
                >Confirm Your Password</span
              >
              <input
                type="password"
                class="bg-light-800 border border-light-800 dark:bg-dark-400 dark:border-dark-400 placeholder-gray-500 dark:placeholder-light-400 text-sm w-full"
                id="password"
                placeholder="Confirm password..."
              />
            </label>
            <div
              class="flex flex-wrap items-center justify-center md:items-end md:justify-end"
            >
              <div>
                <button
                  class="text-white bg-red-700 px-6 py-2 rounded-lg"
                  type="submit"
                >
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
  <!-- Modal  -->
  <Teleport to="#modal">
  <BaseModal v-if="isOpen" @closeModal="closeModal">
    <template #m-header> First modal tittle </template>
    <template #m-body>
      <p>Dynamic modal body</p>
    </template>
    <template #m-footer>
      <button
        @click.once="closeModal"
        class="mb-2 md:mb-0 bg-red-500 border border-red-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-md hover:shadow-lg hover:bg-red-600"
      >
        Update
      </button>
    </template>
  </BaseModal>
</Teleport>
</template>
