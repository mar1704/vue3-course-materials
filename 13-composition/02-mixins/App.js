import { defineComponent } from './vendor/vue.esm-browser.js';
import UserForm from './UserForm.js';

export default defineComponent({
  components: { UserForm },

  data() {
    return {
      date: new Date().getTime(),
      user: {
        firstName: 'firstName',
        lastName: 'lastName',
      },
    };
  },

  methods: {
    handleSubmit() {
      // Этот метод добавлен миксином, подключенным в плагине
      this.toast(this.user);
    },
  },

  template: `
    <div class="container">
      <p>Current time: <time :datetime="formatAsIsoDate(date)">{{ formatAsLocalDate(date) }}</time></p>

      <UserForm v-model:user="user" @submit.prevent="handleSubmit" />

      <pre>{{ user }}</pre>
    </div>`,
});
