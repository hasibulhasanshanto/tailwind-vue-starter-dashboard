<script setup lang="ts">
defineProps(["type", "styleClass", "disabled"]);
</script>

<template>
  <button
    :type="type"
    class="block w-full py-2 text-left text-md font-medium text-gray-800 dark:text-white hover:text-black hover:dark:text-white hover:bg-red-200 hover:dark:bg-dark-200 transition duration-400 ease-in-out"
    :class="styleClass ?? ''"
    :disabled="disabled ?? false"
  >
    <slot></slot>
  </button>
</template>
