import { defineComponent } from './vendor/vue.esm-browser.js';
import { formatAsLocalDate, formatAsIsoDate } from './utils/dateFormatters.js';
import UserForm from './UserForm.js';
import { TOASTER_KEY } from './plugins/toaster/index.js';

export default defineComponent({
  components: { UserForm },

  inject: {
    toaster: TOASTER_KEY,
  },

  data() {
    return {
      date: new Date().getTime(),
      user: {
        firstName: 'firstName',
        lastName: 'lastName',
      },
    };
  },

  computed: {
    // Обычные функции можно использовать в работе компонента
    localDate() {
      return formatAsLocalDate(this.date);
    },

    isoDate() {
      return formatAsIsoDate(this.date);
    },
  },

  methods: {
    // Если функция нужна в контексте компонента для использования в шаблоне, можно добавить её в методы
    formatAsLocalDate,
    formatAsIsoDate,

    handleSubmit() {
      this.toaster.toast(this.user);
    },
  },

  template: `
    <div class="container">
      <p>Current time: <time :datetime="formatAsIsoDate(date)">{{ formatAsLocalDate(date) }}</time></p>

      <UserForm v-model:user="user" @submit.prevent="handleSubmit" />

      <pre>{{ user }}</pre>
    </div>`,
});
