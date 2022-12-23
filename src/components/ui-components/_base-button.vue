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
    @click="click"
  >
    <slot v-if="!loading" />
    <BaseLoader v-else />
  </button>
</template>

<script>
import { hexToRGB } from '../../utils';

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
      let hexColor;
      if (this.color === 'black') {
        hexColor = '#111111';
      } else if (this.color === 'white') {
        hexColor = '#F8F8F8';
      } else {
        hexColor = this.color;
      }
      const hoverColor = hexToRGB(hexColor, 0.2);

      return {
        height,
        width,
        radius,
        hoverColor,
        backgroundColor: this.color
      };
    }
  },
  methods: {
    click() {
      if (this.to) {
        if (this.$route.fullPath !== this.to) this.$router.push(this.to);
      } else if (this.href) {
        window.location.href = this.href;
      }
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

.basebutton__outlined:hover {
  background-color: v-bind(css.hoverColor) !important;
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

    &:hover {
      box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.1);
    }
    &.basebutton__outlined {
      @apply bg-transparent text-black border-black border;
    }
  }
  &__white {
    @apply bg-white text-black;

    &:hover {
      box-shadow: inset 0em 0em 0em 10em rgba(0, 0, 0, 0.3);
    }
    &.basebutton__outlined {
      @apply bg-transparent text-white border-white border;
    }
  }
}
</style>
