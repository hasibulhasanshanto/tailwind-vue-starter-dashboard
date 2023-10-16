<script setup lang="ts">
import { ref } from "vue";
import BaseModal from "../common/Modal.vue";
import { useModal } from "../../composables/useModal";
import { Calendar, DatePicker } from "v-calendar";
const masks = ref({
  input: 'DD-MM-YYYY',
});

const dob = ref(new Date());
const modal = useModal();
// close modal handler
const closeModal = () => {
  modal.hideModal();
};
</script>
<template>
  <BaseModal v-if="modal.isOpen.value" modalSize="max-w-4xl max-h-full">
    <template #m-header> Basics & Lifestyle modal tittle </template>
    <template #m-body>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 p-1 md:p-2">
         <!-- Date picker  -->
        <div class="mb-2">
          <label
            for="dob"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Date of birth</label
          >
          <DatePicker v-model="dob" :masks="masks">
            <template #default="{ inputValue, togglePopover }">
              <div class="relative">
                <div
                  class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
                >
                  <i class="ri-calendar-line"></i>
                </div>
                <input
                  @click="togglePopover"
                  :value="inputValue"
                  type="text"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Select date"
                />
              </div>
            </template>
          </DatePicker>
        </div>

        <div class="mb-2">
          <label
            for="marital_status"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Marital Status</label
          >
          <select
            id="marital_status"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value="never_married">Never Married</option>
            <option value="married">Married</option>
            <option value="divorce">Divorce</option>
            <option value="widow">Widow</option>
            <option value="widower">Widower</option>
          </select>
        </div>

        <div class="mb-2">
          <label
            for="height"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Height</label
          >
          <select
            id="height"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value="134">4ft 5in - 134cm</option>
            <option value="137">4ft 6in - 137cm</option>
            <option value="139">4ft 7in - 139cm</option>
            <option value="142">4ft 8in - 142cm</option>
            <option value="144">4ft 9in - 144cm</option>
            <option value="147">4ft 10in - 147cm</option>
            <option value="149">4ft 11in - 149cm</option>
            <option value="152">5ft - 152cm</option>
            <option value="154">5ft 1in - 154cm</option>
            <option value="157" selected>5ft 2in - 157cm</option>
            <option value="160">5ft 3in - 160cm</option>
            <option value="162">5ft 4in - 162cm</option>
            <option value="165">5ft 5in - 165cm</option>
            <option value="167">5ft 6in - 167cm</option>
            <option value="170">5ft 7in - 170cm</option>
            <option value="172">5ft 8in - 172cm</option>
            <option value="175">5ft 9in - 175cm</option>
            <option value="177">5ft 10in - 177cm</option>
            <option value="180">5ft 11in - 180cm</option>
            <option value="182">6ft - 182cm</option>
          </select>
        </div>

        <div class="mb-2">
          <label
            for="weight"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Weight</label
          >
          <input
            type="text"
            id="weight"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter your weight in kg"
            required
          />
        </div>

        <div class="mb-2">
          <label
            for="grew_up_in"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Grew Up In</label
          >
          <select
            id="grew_up_in"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value="BD">Bangladesh</option>
            <option value="USA">USA</option>
            <option value="CA">CANDA</option>
            <option value="UK">UK</option>
          </select>
        </div>

        <div class="mb-2">
          <label
            for="diet"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Diet</label
          >
          <select
            id="diet"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value="veg">Veg</option>
            <option value="non-veg">Non-Veg</option>
            <option value="oca-non-veg">Occasionally Non Veg</option>
            <option value="eggetarian">Eggetarian</option>
            <option value="jain">Jain</option>
            <option value="vegan">Vegan</option>
          </select>
        </div>

        <div class="mb-2">
          <label
            for="health_info"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Health Information</label
          >
          <select
            id="health_info"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value="no">No Health Problems</option>
            <option value="hiv">HIV Positive</option>
            <option value="diabetes">Diabetes</option>
            <option value="low-bp">Low BP</option>
            <option value="high-bp">High BP</option>
            <option value="heart-dieseases">Heart Dieseases</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div class="mb-2">
          <label
            for="body_type"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Body Type</label
          >
          <select
            id="body_type"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value="slim">Slim</option>
            <option value="athletic">Athletic</option>
            <option value="average">Average</option>
            <option value="heavy">Heavy</option>
          </select>
        </div>

        <div class="mb-2">
          <label
            for="grew_up_in"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Blood Group</label
          >
          <select
            id="grew_up_in"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value="a_pos">A+</option>
            <option value="a_neg">A-</option>
            <option value="b_pos">B+</option>
            <option value="b_neg">B-</option>
            <option value="o_pos">O+</option>
            <option value="o_neg">O-</option>
            <option value="ab_pos">AB+</option>
            <option value="ab_neg">AB-</option>
          </select>
        </div>

        <div class="mb-2">
          <label
            for="personal_values"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Personal Values</label
          >
          <input
            type="text"
            id="personal_values"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter personal values"
            required
          />
        </div>

        <div class="mb-2">
          <label
            for="health_info"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Any Disability?</label
          >
          <div class="flex flex-wrap py-2.5">
            <div class="flex items-center mr-4">
              <input
                id="none"
                type="radio"
                value="false"
                name="disability"
                checked
                class="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                for="none"
                class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >None</label
              >
            </div>
            <div class="flex items-center mr-4">
              <input
                id="has_disability"
                type="radio"
                value="true"
                name="disability"
                class="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                for="has_disability"
                class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >Physically Disability</label
              >
            </div>
          </div>
        </div>

        <div class="mb-2">
          <label
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Smoking Habits?</label
          >
          <div class="flex flex-wrap py-2.5">
            <div class="flex items-center mr-4">
              <input
                id="s_no"
                type="radio"
                value="false"
                name="smoker"
                checked
                class="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                for="s_no"
                class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >No</label
              >
            </div>
            <div class="flex items-center mr-4">
              <input
                id="s_yes"
                type="radio"
                value="true"
                name="smoker"
                class="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                for="s_yes"
                class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >Yes</label
              >
            </div>
          </div>
        </div>
      </div>

      <div class="mb-2 p-1 md:p-2">
        <label
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Drinking Habits?</label
        >
        <div class="flex flex-wrap py-2.5">
          <div class="flex items-center mr-4 mb-3 md:mb-0">
            <input
              id="non-drinker"
              type="radio"
              value="null"
              name="drinker"
              checked
              class="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              for="non-drinker"
              class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >Non-drinker</label
            >
          </div>

          <div class="flex items-center mr-4 mb-3 md:mb-0">
            <input
              id="social-drinker"
              type="radio"
              value="true"
              name="drinker"
              class="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              for="social-drinker"
              class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >Light/Social Drinker</label
            >
          </div>

          <div class="flex items-center mr-4 mb-3 md:mb-0">
            <input
              id="regular-drinker"
              type="radio"
              value="false"
              name="drinker"
              class="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              for="regular-drinker"
              class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >Regular Drinker</label
            >
          </div>
        </div>
      </div>
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
</template>
