import { toRefs } from './vendor/vue.esm-browser.js';
import { defineComponent } from './vendor/vue.esm-browser.js';
import { useModelProxy } from './composables/useModelProxy.js';

export default defineComponent({
  name: 'UiInput',

  props: ['modelValue'],

  emits: ['update:modelValue'],

  setup(props, { emit }) {
    const { modelValue } = toRefs(props);
    // Создаём вычисляемое значение для проксирования модели новой функцией
    const modelValueProxy = useModelProxy(modelValue, emit);

    return {
      modelValueProxy,
    };
  },

  template: `<input v-model="modelValueProxy" />`,
});
