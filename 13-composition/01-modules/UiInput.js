import { defineComponent } from './vendor/vue.esm-browser.js';
import { createModelProxy } from './utils/createModelProxy.js';

export default defineComponent({
  name: 'UiInput',

  props: ['modelValue'],

  emits: ['update:modelValue'],

  computed: {
    // Добавляем вычисляемое свойство с переиспользуемым сгенерированным описанием
    modelValueProxy: createModelProxy(),
  },

  template: `<input v-model="modelValueProxy" />`,
});
