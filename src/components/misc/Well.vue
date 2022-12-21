<template>
  <div class="base-well" :class="`base-well__${color}`">
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: 'purple'
    },
    radius: {
      type: String,
      default: '12px'
    }
  }
};
</script>

<style lang="scss" scoped>
.base-well {
  background: v-bind(color);
  border-radius: v-bind(radius);

  &__purple {
    @apply bg-purple;
  }
  &__black {
    @apply bg-black;
  }
  &__white {
    @apply bg-white;
  }
}
</style>
