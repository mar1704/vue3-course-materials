import { createApp } from 'vue';
import App from './App.vue';
import { ToasterPlugin } from './plugins/toaster/toaster.js';

createApp(App).use(ToasterPlugin).mount('#app');
