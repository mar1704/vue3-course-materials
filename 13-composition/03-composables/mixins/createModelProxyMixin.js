export const createModelProxyMixin = (propName = 'modelValue') => ({
  computed: {
    [`${propName}Proxy`]: {
      get() {
        return this[propName];
      },

      set(value) {
        this.$emit(`update:${propName}`, value);
      },
    },
  },
});
