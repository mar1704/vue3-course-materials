import { createApp } from './vendor/vue.esm-browser.js';
import App from './App.js';
import { toaster } from './toaster.js';
import { dateFormattersMixin } from './mixins/dateFormattersMixin.js';

// Глобальное подключение миксина примешает опции ко всем компонентам приложения
createApp(App).mixin(dateFormattersMixin).use(toaster).mount('#app');
