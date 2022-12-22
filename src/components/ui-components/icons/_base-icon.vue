<template>
  <div class="icon">
    <component :is="iconComponent" :color="color" />
  </div>
</template>

<script>
const icons = {}; // { 'juice': require('./icons/icon-juice.svg').default }

const requireComponents = require.context('./assets/', false, /.svg$/);

requireComponents.keys().forEach((fileName) => {
  const iconName = fileName.replace(/^\.\/icon-(.+)\.svg$/, '$1');
  const componentConfig = requireComponents(fileName);
  icons[iconName] = componentConfig.default || componentConfig;
});

export default {
  props: {
    icon: {
      type: String,
      required: true,
      validator(value) {
        return Object.prototype.hasOwnProperty.call(icons, value);
      }
    },
    color: { type: String, default: 'currentColor' },
    size: { type: String, default: '100%' }
  },
  computed: {
    iconComponent() {
      return icons[this.icon];
    }
  }
};
</script>

<style>
svg {
  flex: 1;
}
</style>

<style lang="scss" scoped>
.icon {
  width: v-bind(size);
  height: v-bind(size);
  color: v-bind(color);

  @apply flex justify-center items-center;
}
</style>
