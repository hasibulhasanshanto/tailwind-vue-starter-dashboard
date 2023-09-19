<script setup lang="ts">
defineProps(["type", "styleClass", "disabled"]);
</script>

<template>
  <button
    :type="type"
    class="block w-full px-4 py-2 text-left text-sm"
    :class="styleClass ?? ''"
    :disabled="disabled ?? false"
  >
    <slot></slot>
  </button>
</template>
