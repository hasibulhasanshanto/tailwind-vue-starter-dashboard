<script setup lang="ts">
defineProps(["to", "styleClass", "target", "disabled"]);
</script>

<template>
  <router-link
    :to="to"
    class="py-2 text-sm"
    :class="styleClass ?? ''"
    :target="target ?? '_self'"
    :disabled="disabled ?? false"
  >
    <slot></slot>
  </router-link>
</template>
