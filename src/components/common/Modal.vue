<script setup lang="ts">
import { computed, ref } from "vue";
const emit = defineEmits(["closeModal"])
const props = defineProps(["showModal"])

const visible = ref(false);

computed(() => {
  return visible.value = props.showModal;
})

const closeModal = () => {
  emit('closeModal'); 
  visible.value = false;
}
</script>

<template>
  <Dialog
    v-model:visible="props.showModal"
    modal
    header="This is the modal header"
    :style="{ width: '50vw' }"
  > 
  <div class="mb-5">
    <slot name="modal-body"></slot>
  </div>
    <slot name="footer">
      <div class="flex justify-end gap-x-4">
         <slot name="update-btn"></slot>
        <button @click="closeModal" class="bg-red-500 p-3 text-white">
          Cancel
        </button>
      </div>
    </slot>
  </Dialog>
</template>
