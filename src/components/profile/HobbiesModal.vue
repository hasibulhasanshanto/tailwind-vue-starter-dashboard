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
    <template #m-header> Hobbies & Interest modal tittle </template>

    <template #m-body>
      <div class="card p-4 mb-5">
        <h3 class="mb-2 text-lg font-medium text-gray-900 dark:text-white">
          Creative
        </h3>
        <ul class="grid w-full gap-4 md:grid-cols-4">
          <li>
            <input type="checkbox" value="" class="hidden peer" required="" />
            <label
              class="inline-flex items-center justify-between w-full p-2 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <i class="ri-wordpress-fill mr-2"></i>
              <div class="w-full text-lg font-semibold">Writing</div>
            </label>
          </li>

          <li>
            <input type="checkbox" value="" class="hidden peer" required="" />
            <label
              class="inline-flex items-center justify-between w-full p-2 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <i class="ri-fire-line mr-2"></i>
              <div class="w-full text-lg font-semibold">Cooking</div>
            </label>
          </li>

          <li>
            <input type="checkbox" value="" class="hidden peer" required="" />
            <label
              class="inline-flex items-center justify-between w-full p-2 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <i class="ri-music-line mr-2"></i>
              <div class="w-full text-lg font-semibold">Singing</div>
            </label>
          </li>

          <li>
            <input type="checkbox" value="" class="hidden peer" required="" />
            <label
              class="inline-flex items-center justify-between w-full p-2 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <i class="ri-camera-3-line mr-2"></i>
              <div class="w-full text-lg font-semibold">Photography</div>
            </label>
          </li>

          <li>
            <input type="checkbox" value="" class="hidden peer" required="" />
            <label
              class="inline-flex items-center justify-between w-full p-2 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <i class="ri-paint-brush-line mr-2"></i>
              <div class="w-full text-lg font-semibold">Painting</div>
            </label>
          </li>
        </ul>
      </div>

      <div class="card p-4 mb-5">
        <h3 class="mb-2 text-lg font-medium text-gray-900 dark:text-white">
          Fun
        </h3>
        <ul class="grid w-full gap-4 md:grid-cols-4">
          <li>
            <input type="checkbox" value="" class="hidden peer" required="" />
            <label
              class="inline-flex items-center justify-between w-full p-2 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <i class="ri-wordpress-fill mr-2"></i>
              <div class="w-full text-lg font-semibold">Writing</div>
            </label>
          </li>

          <li>
            <input type="checkbox" value="" class="hidden peer" required="" />
            <label
              class="inline-flex items-center justify-between w-full p-2 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <i class="ri-fire-line mr-2"></i>
              <div class="w-full text-lg font-semibold">Cooking</div>
            </label>
          </li>

          <li>
            <input type="checkbox" value="" class="hidden peer" required="" />
            <label
              class="inline-flex items-center justify-between w-full p-2 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <i class="ri-music-line mr-2"></i>
              <div class="w-full text-lg font-semibold">Singing</div>
            </label>
          </li>

          <li>
            <input type="checkbox" value="" class="hidden peer" required="" />
            <label
              class="inline-flex items-center justify-between w-full p-2 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <i class="ri-camera-3-line mr-2"></i>
              <div class="w-full text-lg font-semibold">Photography</div>
            </label>
          </li>

          <li>
            <input type="checkbox" value="" class="hidden peer" required="" />
            <label
              class="inline-flex items-center justify-between w-full p-2 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <i class="ri-paint-brush-line mr-2"></i>
              <div class="w-full text-lg font-semibold">Painting</div>
            </label>
          </li>
        </ul>
      </div>

      <div class="card p-4 mb-5">
        <h3 class="mb-2 text-lg font-medium text-gray-900 dark:text-white">
          Fitness
        </h3>
        <ul class="grid w-full gap-4 md:grid-cols-4">
          <li>
            <input type="checkbox" value="" class="hidden peer" required="" />
            <label
              class="inline-flex items-center justify-between w-full p-2 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <i class="ri-wordpress-fill mr-2"></i>
              <div class="w-full text-lg font-semibold">Writing</div>
            </label>
          </li>

          <li>
            <input type="checkbox" value="" class="hidden peer" required="" />
            <label
              class="inline-flex items-center justify-between w-full p-2 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <i class="ri-fire-line mr-2"></i>
              <div class="w-full text-lg font-semibold">Cooking</div>
            </label>
          </li>

          <li>
            <input type="checkbox" value="" class="hidden peer" required="" />
            <label
              class="inline-flex items-center justify-between w-full p-2 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <i class="ri-music-line mr-2"></i>
              <div class="w-full text-lg font-semibold">Singing</div>
            </label>
          </li>

          <li>
            <input type="checkbox" value="" class="hidden peer" required="" />
            <label
              class="inline-flex items-center justify-between w-full p-2 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <i class="ri-camera-3-line mr-2"></i>
              <div class="w-full text-lg font-semibold">Photography</div>
            </label>
          </li>

          <li>
            <input type="checkbox" value="" class="hidden peer" required="" />
            <label
              class="inline-flex items-center justify-between w-full p-2 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <i class="ri-paint-brush-line mr-2"></i>
              <div class="w-full text-lg font-semibold">Painting</div>
            </label>
          </li>
        </ul>
      </div>

      <div class="card p-4 mb-5">
        <h3 class="mb-2 text-lg font-medium text-gray-900 dark:text-white">
          Others
        </h3>
        <ul class="grid w-full gap-4 md:grid-cols-4">
          <li>
            <input type="checkbox" value="" class="hidden peer" required="" />
            <label
              class="inline-flex items-center justify-between w-full p-2 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <i class="ri-wordpress-fill mr-2"></i>
              <div class="w-full text-lg font-semibold">Writing</div>
            </label>
          </li>

          <li>
            <input type="checkbox" value="" class="hidden peer" required="" />
            <label
              class="inline-flex items-center justify-between w-full p-2 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <i class="ri-fire-line mr-2"></i>
              <div class="w-full text-lg font-semibold">Cooking</div>
            </label>
          </li>

          <li>
            <input type="checkbox" value="" class="hidden peer" required="" />
            <label
              class="inline-flex items-center justify-between w-full p-2 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <i class="ri-music-line mr-2"></i>
              <div class="w-full text-lg font-semibold">Singing</div>
            </label>
          </li>

          <li>
            <input type="checkbox" value="" class="hidden peer" required="" />
            <label
              class="inline-flex items-center justify-between w-full p-2 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <i class="ri-camera-3-line mr-2"></i>
              <div class="w-full text-lg font-semibold">Photography</div>
            </label>
          </li>

          <li>
            <input type="checkbox" value="" class="hidden peer" required="" />
            <label
              class="inline-flex items-center justify-between w-full p-2 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <i class="ri-paint-brush-line mr-2"></i>
              <div class="w-full text-lg font-semibold">Painting</div>
            </label>
          </li>
        </ul>
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
