<script setup lang="ts">
import Breadcrumb from "../../components/common/Breadcrumb.vue";
</script>
<template>
  <!-- Breadcrumb  -->
  <Breadcrumb :breadArray="['Photo Requests', 'Home']" />

  <div class="card">
    <h2 class="py-10 px-5 text-gray-800 dark:text-white">
      Photo Requests page
    </h2>
  </div>
</template>
