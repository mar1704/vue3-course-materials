<template>
  <div class="sub-page">
    <button @click="toast">Toast</button>
  </div>
</template>

<script>
import { TOASTER_KEY } from './plugins/toaster/toaster.js';

export default {
  name: 'SubPage',

  inject: {
    toaster: TOASTER_KEY,
  },

  methods: {
    toast() {
      this.toaster.toast('Toast');
    },
  },
};
</script>
