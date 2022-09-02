import { defineComponent } from './vendor/vue.esm-browser.js';
import { createLocalPropMixin } from './mixins/createLocalPropMixin.js';
import UiInput from './UiInput.js';

export default defineComponent({
  name: 'UserForm',

  components: { UiInput },

  extends: createLocalPropMixin('user', { localName: 'localUser' }),

  props: {
    user: {
      type: Object,
      required: true,
    },
  },

  emits: ['update:user'],

  template: `
    <form>
      <p>FirstName: <ui-input v-model="localUser.firstName" /></p>
      <p>LastName: <ui-input v-model="localUser.lastName" /></p>
    </form>`,
});
