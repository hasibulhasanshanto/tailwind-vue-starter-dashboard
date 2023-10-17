<script setup lang="ts">
import { ref } from "vue";
import BaseModal from "../common/Modal.vue";
import { useModal } from "../../composables/useModal";
import { DatePicker } from "v-calendar";

import {
  MaritalStatusOptions,
  HeightOptions,
  WeightOptions,
  GrewUpCountryOptions,
  DietOptions,
  HealthInfoOptions,
  BodyTypeOptions,
  BloodGroupOptions,
  SkinComplexionOptions,
} from "../../constant/commonOption";
const masks = ref({
  input: "DD-MM-YYYY",
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
            <option
              v-for="(marital, key) in MaritalStatusOptions"
              :key="key"
              :value="marital.key"
            >
              {{ marital.value }}
            </option>
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
            <option
              v-for="(height, key) in HeightOptions"
              :key="key"
              :value="height.key"
            >
              {{ height.value }}
            </option>
          </select>
        </div>

        <div class="mb-2">
          <label
            for="weight"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Weight</label
          >
          <select
            id="height"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option
              v-for="(weight, key) in WeightOptions"
              :key="key"
              :value="weight.key"
            >
              {{ weight.value }} kg
            </option>
          </select>
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
            <option
              v-for="(country, key) in GrewUpCountryOptions"
              :key="key"
              :value="country.key"
            >
              {{ country.value }}
            </option>
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
            <option
              v-for="(diet, key) in DietOptions"
              :key="key"
              :value="diet.key"
            >
              {{ diet.value }}
            </option>
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
            <option
              v-for="(health, key) in HealthInfoOptions"
              :key="key"
              :value="health.key"
            >
              {{ health.value }}
            </option>
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
            <option
              v-for="(type, key) in BodyTypeOptions"
              :key="key"
              :value="type.key"
            >
              {{ type.value }}
            </option>
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
            <option
              v-for="(blood, key) in BloodGroupOptions"
              :key="key"
              :value="blood.key"
            >
              {{ blood.value }}
            </option>
          </select>
        </div>

        <div class="mb-2">
          <label
            for="personal_values"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Skin Complexion</label
          >
          <select
            id="grew_up_in"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option
              v-for="(complexion, key) in SkinComplexionOptions"
              :key="key"
              :value="complexion.key"
            >
              {{ complexion.value }}
            </option>
          </select>
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
