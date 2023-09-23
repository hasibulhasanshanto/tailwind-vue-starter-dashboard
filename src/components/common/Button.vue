<script setup lang="ts">
defineProps(["type", "styleClass", "disabled"]);
</script>

<template>
  <button
    :type="type"
    class="block w-full py-2 text-left text-sm hover:bg-red-200"
    :class="styleClass ?? ''"
    :disabled="disabled ?? false"
  >
    <slot></slot>
  </button>
</template>
