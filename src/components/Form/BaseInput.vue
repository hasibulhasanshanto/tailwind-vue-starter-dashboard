<script setup lang="ts">
defineProps({
    label: {
        type: [String, Boolean],
        default: false,
    },
    id: {
        type: [String],
        default: "",
    },
    modelValue: {
        type: String,
        default: ""
    }
})
</script> 

<template>
    <div class="input-group"> 
        <label v-if="label" :for="id">{{ label }}</label>
        <input type="text" :id="id" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" v-bind="$attrs"> 
    </div>
</template>

