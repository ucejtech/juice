<template>
  <button
    v-on="$listeners"
    :class="[
      'basebutton',
      { 'basebutton-icon': icon },
      { basebutton__outlined: outlined },
      `basebutton__${color}`
    ]"
    :disabled="loading"
    v-bind="$attrs"
  >
    <slot v-if="!loading" />
    <BaseLoader v-else />
  </button>
</template>

<script>
export default {
  props: {
    to: {
      type: String
    },
    href: {
      type: String
    },
    outlined: {
      type: Boolean,
      default: false
    },
    icon: {
      type: Boolean
    },
    loading: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: 'black'
    },
    width: {
      type: String
    },
    height: {
      type: String
    },
    radius: {
      type: String
    }
  },
  computed: {
    css() {
      const height = this.height;
      const width = this.width;
      const radius = this.radius || (this.icon ? '8px' : '12px');

      return {
        height,
        width,
        radius,
        backgroundColor: this.color
      };
    }
  }
};
</script>

<style scoped>
.basebutton {
  width: v-bind(css.width);
  height: v-bind(css.height);
  border-radius: v-bind(css.radius);
  background-color: v-bind(css.backgroundColor);
}
</style>

<style lang="scss" scoped>
.basebutton {
  @apply px-6 py-3 flex justify-center items-center font-bold text-base;
  min-width: 122px;

  &-icon {
    @apply px-2 py-1;
    min-width: 32px;
  }

  &__black {
    @apply bg-black text-white;
    &.basebutton__outlined {
      @apply bg-transparent text-black border-black border;
    }
  }
  &__white {
    @apply bg-white text-black;
    &.basebutton__outlined {
      @apply bg-transparent text-white border-black;
    }
  }
}
</style>
