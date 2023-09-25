<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

const dropdownOpen = ref<boolean>(false);
const trigger = ref<any>(null);
const dropdown = ref<any>(null);
defineProps(["btnId", "dropId","buttonClass", "dropDownClass"]);

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
      :id="btnId"
      :data-dropdown-toggle="dropId"
      ref="trigger"
      :class="buttonClass"
      aria-haspopup="true"
      @click.prevent="dropdownOpen = !dropdownOpen"
      :aria-expanded="dropdownOpen"
    >
      <slot name="button">
        <i class="ri-arrow-down-line ri-xl mr-2"></i>
        Button
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
        :id="dropId"
        v-show="dropdownOpen"
        :class="dropDownClass"
        :aria-labelledby="btnId"
      >
        <div class="py-1 text-left divide-y">
          <ul
            class="py-1"
            ref="dropdown"
            @focusin="dropdownOpen = true"
            @focusout="dropdownOpen = false"
          >
            <!-- Options -->
            <slot name="dropdown-options">
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
              <li>Item 4</li>
            </slot>
          </ul>
        </div>
      </div>
    </transition>
  </div>
</template>
