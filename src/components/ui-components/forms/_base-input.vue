<template>
  <div class="base-input">
    <input
      class="base-input__element"
      v-bind="$attrs"
      :value="content"
      v-on="listeners"
      :placeholder="label"
      :id="`form-${label.toLowerCase()}`"
      :autocomplete="`current-${label.toLowerCase()}`"
    />
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String
    },
    color: {
      type: String
    },
    roundness: {
      type: String,
      default: '12px'
    },
    value: {
      type: String
    }
  },
  computed: {
    content: {
      get: function() {
        return this.value;
      },
      set: function(newValue) {
        this.$emit('input', newValue);
      }
    },
    listeners() {
      return {
        ...this.$listeners,
        input: (e) => {
          const el = e.currentTarget;
          this.content = el.value;
        }
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.base-input {
  &__element {
    border-radius: v-bind(roundness);

    @apply py-5 px-4 border border-[#D8D8D8] w-full focus:border-purple-600 outline-none font-light;
  }
}
</style>
