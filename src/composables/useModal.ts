import { ref } from "vue";

// keep track of component to render
const component = ref();
// keep track of whether to show modal
const isOpen = ref(false);

export function useModal() {
  return {
    component,
    isOpen,
    showModal: () => (isOpen.value = true),
    hideModal: () => (isOpen.value = false),
  };
}
