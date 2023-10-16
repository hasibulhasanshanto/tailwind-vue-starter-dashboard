<script setup lang="ts">
import BaseModal from "../common/Modal.vue";
import { useModal } from "../../composables/useModal";

const modal = useModal();
// close modal handler
const closeModal = () => {
  modal.hideModal();
};
</script>
<template>
  <BaseModal v-if="modal.isOpen.value" modalSize="max-w-4xl max-h-full">
    <template #m-header> Education & Career modal tittle </template>
    <template #m-body>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 p-1 md:p-2">
        <!-- Input field  -->
        <div class="mb-2">
          <label
            for="highest_qualification"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Highest Qualification
          </label>
          <select
            id="highest_qualification"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value="never_married">Never Married</option>
            <option value="married">Married</option>
            <option value="divorce">Divorce</option>
            <option value="widow">Widow</option>
            <option value="widower">Widower</option>
          </select>
        </div>

        <!-- Input field  -->
        <div class="mb-2"> 
          <label
            for="institution"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
          Institution
          </label>
          <select
            id="institution"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value="never_married">Never Married</option>
            <option value="married">Married</option>
            <option value="divorce">Divorce</option>
            <option value="widow">Widow</option>
            <option value="widower">Widower</option>
          </select>
        </div>

        <!-- Input field  -->
        <div class="mb-2"> 
          <label
            for="working_with"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
          Working With
          </label>
          <select
            id="working_with"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value="private_company">Private Company</option>
            <option value="government">Government Sector</option>
            <option value="defense">Defense / Armed forces</option>
            <option value="civil_services">Civil Services</option>
            <option value="business">Business /  Self Employed</option>
            <option value="not_working">Not Working</option>
          </select>
        </div>

        <!-- Input field  -->
        <div class="mb-2"> 
          <label
            for="working_as"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
          Working As
          </label>
          <select
            id="working_as"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value="private_company">Engineer</option>
            <option value="government">Lecturer</option>
            <option value="defense">Teacher</option>
            <option value="civil_services">Army</option>
            <option value="business">Student</option>v
          </select>
        </div>

        <!-- Input field  -->
        <div class="mb-2">
          <label
            for="company_name"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Company Name
          </label>
          <input
            type="text"
            id="company_name"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter your company name"
            required
          />
        </div>

        <!-- Input field  -->
        <div class="mb-2">
          <label
            for="monthly_income"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Monthly Income (*BDT)
          </label>
          <input
            type="text"
            id="monthly_income"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter your monthly income"
            required
          />
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
