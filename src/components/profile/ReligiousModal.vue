<script setup lang="ts">
import BaseModal from "../common/Modal.vue";
import { useModal } from "../../composables/useModal";
import {
  ReligionOptions,
  CastOrSectOptions,
  PrayingOptions,
  WearPanjabiOptions,
} from "../../constant/commonOption";

const modal = useModal();
// close modal handler
const closeModal = () => {
  modal.hideModal();
};
</script>
<template>
  <BaseModal v-if="modal.isOpen.value" modalSize="max-w-4xl max-h-full">
    <template #m-header> Religious modal tittle </template>
    <template #m-body>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 p-1 md:p-2">
        <!-- Input field  -->
        <div class="mb-2">
          <label
            for="highest_qualification"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Religion
          </label>
          <select
            id="highest_qualification"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option
              v-for="(religion, key) in ReligionOptions"
              :key="key"
              :value="religion.key"
            >
              {{ religion.value }}
            </option>
          </select>
        </div>

        <!-- Input field  -->
        <div class="mb-2">
          <label
            for="highest_qualification"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Community
          </label>
          <select
            id="highest_qualification"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option
              v-for="(cast, key) in CastOrSectOptions"
              :key="key"
              :value="cast.key"
            >
              {{ cast.value }}
            </option>
          </select>
        </div>

        <!-- Input field  -->
        <div class="mb-2">
          <label
            for="highest_qualification"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Namaaz / Salah
          </label>
          <select
            id="highest_qualification"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option
              v-for="(pray, key) in PrayingOptions"
              :key="key"
              :value="pray.key"
            >
              {{ pray.value }}
            </option>
          </select>
        </div>

        <div class="mb-2">
          <label
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Wear Panjabi & pajama</label
          >
          <select
            id="highest_qualification"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option
              v-for="(wearPanjabi, key) in WearPanjabiOptions"
              :key="key"
              :value="wearPanjabi.key"
            >
              {{ wearPanjabi.value }}
            </option>
          </select>
        </div>

        <div class="mb-2">
          <label
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Follow Sunnah?</label
          >
          <div class="flex flex-wrap py-2.5">
            <div class="flex items-center mr-4">
              <input
                id="fs_yes"
                type="radio"
                value="true"
                name="follow_sunnah"
                checked
                class="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                for="fs_yes"
                class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >Yes</label
              >
            </div>

            <div class="flex items-center mr-4">
              <input
                id="fs_no"
                type="radio"
                value="false"
                name="follow_sunnah"
                class="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                for="fs_no"
                class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >No</label
              >
            </div>
          </div>
        </div>

        <div class="mb-2">
          <label
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Zakaat?</label
          >
          <div class="flex flex-wrap py-2.5">
            <div class="flex items-center mr-4">
              <input
                id="za_yes"
                type="radio"
                value="true"
                name="zakaat"
                checked
                class="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                for="za_yes"
                class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >Yes</label
              >
            </div>

            <div class="flex items-center mr-4">
              <input
                id="za_no"
                type="radio"
                value="false"
                name="zakaat"
                class="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                for="za_no"
                class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >No</label
              >
            </div>
          </div>
        </div>

        <div class="mb-2">
          <label
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Fasting In Ramadan?</label
          >
          <div class="flex flex-wrap py-2.5">
            <div class="flex items-center mr-4">
              <input
                id="fir_yes"
                type="radio"
                value="true"
                name="fasting_in"
                checked
                class="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                for="fir_yes"
                class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >Yes</label
              >
            </div>
            <div class="flex items-center mr-4">
              <input
                id="fir_no"
                type="radio"
                value="false"
                name="fasting_in"
                class="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                for="fir_no"
                class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >No</label
              >
            </div>
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
