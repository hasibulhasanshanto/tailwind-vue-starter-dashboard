<script setup lang="ts">
defineProps(["to", "styleClass", "target", "disabled"]);
</script>

<template>
  <router-link
    :to="to"
    class="flex items-center py-[10px] px-[20px] w-full text-sm font-medium text-gray-800 hover:bg-red-200 hover:text-black transition duration-400 ease-in-out"
    :class="styleClass ?? ''"
    :target="target ?? '_self'"
    :disabled="disabled ?? false"
  >
    <slot></slot>
  </router-link>
</template>
