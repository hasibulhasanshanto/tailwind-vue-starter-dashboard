<script setup lang="ts">
defineProps(['options', 'label', 'track', 'modelValue'])
</script>

<template>
  <multiselect 
    :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" v-bind="$attrs"
    :options="options"
    :label="label"  
    :searchable="true"
    :close-on-select="true"
    :show-labels="false"
    track-by="track" 
  >
    <template #noResult>
      <p class="text-black dark:text-white">Not found</p>
    </template>
  </multiselect>
</template>

<style scope>
.multiselect__option--highlight {
  background: #41b883 !important;
}

.multiselect__option--highlight .multiselect__option {
  color: #fff;
  background-color: #575757;
}

.multiselect__option--selected {
  color: #fff;
  background-color: #ff0000 !important;
}
.multiselect__input {
  border: none !important;
  border-radius: 0px;
  background: #fff;
  padding: 3px;
  width: calc(100%);
  margin-bottom: 5px;
  --tw-ring-shadow: 0 0 #000 !important;
}

.dark .multiselect__tags,
.dark .multiselect__single,
.dark .multiselect__option {
  color: #fff;
  background-color: #575757;
}

.dark .multiselect__input {
  color: #fff;
  background-color: #575757;
}

.multiselect::-webkit-input-placeholder {
  color: red;
}
</style>
