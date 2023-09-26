<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import Button from "../common/Button.vue";

const dropdownOpen = ref<boolean>(false);
const trigger = ref<any>(null);
const dropdown = ref<any>(null);

// close on click outside
const clickHandler = ({ target }: any) => {
  if (
    !dropdownOpen.value ||
    dropdown.value.contains(target) ||
    trigger.value.contains(target)
  )
    return;
  dropdownOpen.value = false;
};

// close if the esc key is pressed
const keyHandler = ({ keyCode }: any) => {
  if (!dropdownOpen.value || keyCode !== 27) return;
  dropdownOpen.value = false;
};

onMounted(() => {
  document.addEventListener("click", clickHandler);
  document.addEventListener("keydown", keyHandler);
});

onUnmounted(() => {
  document.removeEventListener("click", clickHandler);
  document.removeEventListener("keydown", keyHandler);
});
</script>

<template>
  <div>
    <button
      ref="trigger"
      class="py-2 text-gray-900"
      aria-haspopup="true"
      @click.prevent="dropdownOpen = !dropdownOpen"
      :aria-expanded="dropdownOpen"
    >
      <slot name="button">
        <i class="ri-sun-line ri-xl"></i>
      </slot>
    </button>

    <!-- Drop down -->
    <transition
      enter-active-class="transition ease-out duration-200 transform"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition ease-out duration-200"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-show="dropdownOpen"
        class="absolute right-[10px] md:right-[130px] z-10 mt-[10px] w-32 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
      >
        <div class="py-1 text-left divide-y">
          <ul
            class="py-1"
            ref="dropdown"
            @focusin="dropdownOpen = true"
            @focusout="dropdownOpen = false"
          >
            <slot name="dropdown-options">
              <!-- Options -->
              <li>
                <Button
                  class="w-full text-gray-700 px-4 py-2 text-sm hover:bg-gray-100 inline-flex items-center"
                >
                  <i class="ri-sun-line ri-xl mr-2"></i>
                  Light
                </Button>
              </li>

              <li>
                <Button
                  class="w-full text-gray-700 px-4 py-2 text-sm hover:bg-gray-100 inline-flex items-center"
                >
                  <i class="ri-moon-line ri-xl mr-2"></i>
                  Dark
                </Button>
              </li>

              <li>
                <Button
                  class="w-full text-gray-700 px-4 py-2 text-sm hover:bg-gray-100 inline-flex items-center"
                >
                  <i class="ri-computer-line ri-xl mr-2"></i>
                  System
                </Button>
              </li>
            </slot>
          </ul>
        </div>
      </div>
    </transition>
  </div>
</template>
