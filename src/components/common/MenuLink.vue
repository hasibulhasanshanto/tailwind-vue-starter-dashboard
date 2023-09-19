<script setup lang="ts">
defineProps(["to", "styleClass", "target", "disabled"]);
</script>

<template>
  <router-link
    :to="to"
    class="inline-flex relative items-center py-[10px] px-[10px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-200 hover:text-gray-800 transition duration-400 ease-in-out"
    :class="styleClass ?? ''"
    :target="target ?? '_self'"
    :disabled="disabled ?? false"
  >
    <slot></slot>
  </router-link>
</template>
