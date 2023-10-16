<script setup lang="ts">
import { useModal } from '../../composables/useModal';
defineProps({
  modalSize: {
    type: String,
    default: "max-w-lg max-h-full md:h-auto"
  }
})
const modal = useModal();

const closeHandler = () => {
  modal.hideModal();
};
</script>

<template>
  <Teleport to="#modal">
    <transition name="fade">
      <div>
        <div class="bg-black opacity-80 fixed inset-0 z-[100]"></div>
        <div
          class="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 w-full md:inset-0 h-modal md:h-full justify-center items-center flex !z-[101]"
        >
          <div class="relative p-4 w-full" :class="modalSize">
            <div
              class="relative bg-white rounded-lg shadow dark:bg-dark-300 overflow-hidden"
            >
              <!-- Modal header  -->
              <div class="modal-header flex items-center justify-between p-4">
                <h4 class="text-lg font-semibold text-black dark:text-white">
                  <slot name="m-header"> This is modal default header </slot>
                </h4>

                <span
                  @click="closeHandler"
                  class="text-black dark:text-white cursor-pointer hover:bg-gray-400 hover:text-white rounded-full p-1"
                >
                  <i class="ri-close-line ri-xl"></i>
                </span>
              </div>
              <hr />

              <!-- Modal body  -->
              <div class="modal-body p-4 text-black dark:text-white">
                <slot name="m-body"> This is modal default body </slot>
              </div>

              <!-- Modal footer  -->
              <div class="flex items-center justify-end p-4 mt-2 space-x-4">
                <slot name="m-footer">
                  <!-- default button  -->
                  <button
                    class="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-md hover:shadow-lg hover:bg-gray-100"
                  >
                    Default Handler
                  </button>
                </slot>

                <button
                  @click.once="closeHandler"
                  class="mb-2 md:mb-0 bg-purple-500 border border-purple-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-md hover:shadow-lg hover:bg-purple-600"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </Teleport>
</template>

<style>
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 500ms ease-out;
}
</style>
