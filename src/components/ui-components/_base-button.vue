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
    }
  }
};
</script>

<style lang="scss" scoped>
.basebutton {
  @apply px-6 py-3 rounded-xl flex justify-center items-center font-bold text-base;
  min-width: 122px;
  width: v-bind(width);
  height: v-bind(height);

  &-icon {
    @apply px-2 py-1 rounded-lg;
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
