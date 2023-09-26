<script setup lang="ts">
defineProps(["to", "styleClass", "target", "disabled"]);
</script>

<template>
  <router-link
    :to="to"
    class="block w-full py-2 text-sm font-medium text-gray-800 dark:text-white hover:text-black hover:dark:text-white hover:bg-red-200 hover:dark:bg-dark-200 transition duration-400 ease-in-out"
    :class="styleClass ?? ''"
    :target="target ?? '_self'"
    :disabled="disabled ?? false"
  >
    <slot></slot>
  </router-link>
</template>
