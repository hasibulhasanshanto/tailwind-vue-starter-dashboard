<script setup lang="ts">
import BaseModal from "../common/Modal.vue";
import { useModal } from "../../composables/useModal";
import {
  FatherStatusOptions,
  MotherStatusOptions,
} from "../../constant/commonOption";

const modal = useModal();
// close modal handler
const closeModal = () => {
  modal.hideModal();
};
</script>
<template>
  <BaseModal v-if="modal.isOpen.value" modalSize="max-w-4xl max-h-full">
    <template #m-header> Family Details modal tittle </template>
    <template #m-body>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 p-1 md:p-2">
        <!-- Input field  -->
        <div class="mb-2">
          <label
            for="highest_qualification"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Father's Status
          </label>
          <select
            id="highest_qualification"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option
              v-for="(status, key) in FatherStatusOptions"
              :key="key"
              :value="status.key"
            >
              {{ status.value }}
            </option>
          </select>
        </div>

        <!-- Input field  -->
        <div class="mb-2">
          <label
            for="company_name"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Nature of Business
          </label>
          <input
            type="text"
            id="company_name"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Example 'Super Store'"
            required
          />
        </div>

        <!-- Input field  -->
        <div class="mb-2">
          <label
            for="highest_qualification"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Mother's Status
          </label>
          <select
            id="highest_qualification"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option
              v-for="(status, key) in MotherStatusOptions"
              :key="key"
              :value="status.key"
            >
              {{ status.value }}
            </option>
          </select>
        </div>

        <!-- Input field  -->
        <div class="mb-2">
          <label
            for="company_name"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Nature of Business
          </label>
          <input
            type="text"
            id="company_name"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Example 'Super Store'"
            required
          />
        </div>

        <!-- Input field  -->
        <div class="mb-2">
          <label
            for="highest_qualification"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Family Values
          </label>
          <select
            id="highest_qualification"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value="traditional">Traditional</option>
            <option value="moderate">Moderate</option>
            <option value="liberal">Liberal</option>
          </select>
        </div>

        <!-- Input field  -->
        <div class="mb-2">
          <label
            for="highest_qualification"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Family Affluence
          </label>
          <select
            id="highest_qualification"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value="affluent">Affluent</option>
            <option value="upper_middle_class">Upper Middle Class</option>
            <option value="middle_class">Middle Class</option>
            <option value="lower_middle_class">Lower Middle Class</option>
          </select>
        </div>

        <!-- Input field  -->
        <div class="mb-2">
          <label
            for="company_name"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Number of Brothers
          </label>
          <input
            type="number"
            id="company_name"
            min="0"
            max="20"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter native place"
            required
          />
        </div>

        <!-- Input field  -->
        <div class="mb-2">
          <label
            for="company_name"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Brothers Married
          </label>
          <input
            type="number"
            id="company_name"
            min="0"
            max="20"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter native place"
            required
          />
        </div>

        <!-- Input field  -->
        <div class="mb-2">
          <label
            for="company_name"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Number of Sisters
          </label>
          <input
            type="number"
            id="company_name"
            min="0"
            max="20"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter native place"
            required
          />
        </div>

        <!-- Input field  -->
        <div class="mb-2">
          <label
            for="company_name"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Sisters Married
          </label>
          <input
            type="number"
            id="company_name"
            min="0"
            max="20"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter native place"
            required
          />
        </div>

        <!-- Input field  -->
        <div class="mb-2">
          <label
            for="company_name"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Native Place
          </label>
          <input
            type="text"
            id="company_name"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter native place"
            required
          />
        </div>

        <!-- Input field  -->
        <div class="mb-2">
          <label
            for="highest_qualification"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Family Type
          </label>
          <div class="flex flex-wrap py-2.5">
            <div class="flex items-center mr-4">
              <input
                id="s_yes"
                type="radio"
                value="true"
                name="smoker"
                checked
                class="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                for="s_no"
                class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Nuclear
              </label>
            </div>
            <div class="flex items-center mr-4">
              <input
                id="s_no"
                type="radio"
                value="false"
                name="smoker"
                class="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                for="s_no"
                class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Joint
              </label>
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
