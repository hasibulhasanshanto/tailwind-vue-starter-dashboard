<script setup lang="ts"> 
import ArrowRightLine from "../icons/right-chevron.vue";
// const arr = ['Profile', 'Home', 'Users'];
defineProps(["breadArray"])

</script>  

<template>
    <div class="flex justify-between items-center py-4">
        <h3 class="text-lg font-bold text-slate-500">{{ breadArray[0] }}</h3>
        <div class="flex items-center text-sm">
            <div v-for="(data, index) in breadArray.length-1" :key="index" class="flex items-center">
                <h5 class="font-medium">{{ breadArray[index+1] }}</h5>
                <ArrowRightLine class="w-5 h-5"/>
            </div>  
            <h6 class="font-normal">{{ breadArray[0] }}</h6> 
        </div>
    </div>
</template>

