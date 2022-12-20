import { computed, getCurrentInstance, toRef } from '../vendor/vue.esm-browser.js';

export function useModelProxy(modelValue, emit) {
  // Используя внутреннею функцию, можно добраться до пропсов и emit

  // const modelValue = toRef(getCurrentInstance().props, 'modelValue');
  // const emit = getCurrentInstance().emit;

  return computed({
    get() {
      return modelValue.value;
    },

    set(value) {
      emit('update:modelValue', value);
    },
  });
}
