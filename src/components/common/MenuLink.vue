<script setup lang="ts">
defineProps(["to", "styleClass", "target", "disabled"]);
</script>

<template>
  <!-- text-gray-800 -->
  <router-link
    :to="to"
    class="flex items-center py-[10px] px-[20px] w-full text-md font-medium text-gray-800 dark:text-white hover:text-black hover:dark:text-white hover:bg-red-200 hover:dark:bg-dark-200 transition duration-300 ease-in-out"
    :class="styleClass ?? ''"
    :target="target ?? '_self'"
    :disabled="disabled ?? false"
  >
    <slot></slot>
  </router-link>
</template>
