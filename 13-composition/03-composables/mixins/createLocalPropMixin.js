const deepEqual = (a, b) => JSON.stringify(a) === JSON.stringify(b);
const deepClone = (obj) => JSON.parse(JSON.stringify(obj));

export function createLocalPropMixin(propName, { localName }) {
  const localPropName = localName ?? `${propName}Local`;

  return {
    data() {
      return {
        [localPropName]: null,
      };
    },

    watch: {
      [propName]: {
        immediate: true,
        deep: true,
        handler() {
          if (!deepEqual(this[propName], this[localPropName])) {
            this[localPropName] = deepClone(this[propName]);
          }
        },
      },

      [localPropName]: {
        deep: true,
        handler() {
          this.$emit(`update:${propName}`, deepClone(this[localPropName]));
        },
      },
    },
  };
}
