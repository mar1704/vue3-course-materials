import { defineComponent, ref } from './vendor/vue.esm-browser.js';
import UserForm from './UserForm.js';
import { useToaster } from './plugins/toaster/index.js';
import { useDateFormatters } from './composables/useDateFormatters.js';

export default defineComponent({
  name: 'App',

  components: { UserForm },

  // setup - функция сборки экземпляра компонента
  // В ней создаются и возвращаются свойства экземпляра
  setup(props, { attrs, slots, emit }) {
    const date = ref(new Date().getTime());
    const user = ref({
      firstName: 'firstName',
      lastName: 'lastName',
    });

    // Внедряем тостер
    const toaster = useToaster();

    const handleSubmit = () => {
      toaster.toast(user.value);
    };

    // Пример бесполезного composable. Эти функции можно импортировать напрямую
    const { formatAsIsoDate, formatAsLocalDate } = useDateFormatters();

    // Возвращаемый объект - объект со свойствами экземпляра
    return {
      date,
      user,
      handleSubmit,
      formatAsIsoDate,
      formatAsLocalDate,
    };
  },

  template: `
    <div class="container">
      <p>Current time: <time :datetime="formatAsIsoDate(date)">{{ formatAsLocalDate(date) }}</time></p>

      <UserForm v-model:user="user" @submit.prevent="handleSubmit" />

      <pre>{{ user }}</pre>
    </div>`,
});
