<script setup lang="ts">
defineProps(["type", "deClass", "disabled"]);
</script>

<template>
  <button
    :type="type"
    class="block w-full px-4 py-2 text-left text-sm"
    :class="deClass ?? ''"
    :disabled="disabled ?? false"
  >
    <slot></slot>
  </button>
</template>
