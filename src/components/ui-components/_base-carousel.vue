<template>
  <div class="base-carousel">
    <div class="base-carousel-controls left-1 z-1">
      <BaseButton
        :color="buttonColor"
        width="40px"
        height="40px"
        radius="12px"
        @click="prevSlide()"
        icon
      >
        <BaseIcon icon="arrow-left" size="16px" />
      </BaseButton>
    </div>
    <div class="base-carousel-content">
      <slot />
    </div>
    <div class="base-carousel-controls right-1">
      <BaseButton
        :color="buttonColor"
        width="40px"
        height="40px"
        radius="12px"
        @click="nextSlide()"
        icon
      >
        <BaseIcon icon="arrow-right" size="16px" />
      </BaseButton>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    height: {
      type: String,
      default: '400px'
    },
    buttonColor: {
      type: String,
      default: 'white'
    }
  },
  data() {
    return {
      curSlide: 0
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.startCarousels();
      this.goToSlide(0);
    },
    startCarousels() {
      this.$slots.default.forEach((slot, index) => {
        slot.elm.style.cssText = `position: absolute; transition: all 0.3s; width: 100%; height: 100%;`;
      });
    },
    goToSlide(slide) {
      this.$slots.default.forEach((s, i) => {
        s.elm.style.transform = `translateX(${100 * (i - slide)}%)`;
      });
    },
    nextSlide() {
      this.curSlide === this.$slots.default.length - 1
        ? (this.curSlide = 0)
        : this.curSlide++;
      this.goToSlide(this.curSlide);
    },
    prevSlide() {
      this.curSlide === 0
        ? (this.curSlide = this.$slots.default.length - 1)
        : this.curSlide--;
      this.goToSlide(this.curSlide);
    }
  }
};
</script>

<style lang="scss" scoped>
.base-carousel {
  height: v-bind(height);

  @apply relative flex items-center justify-center gap-6 <sm:gap-0;

  &-controls {
    @apply <sm:absolute;
  }

  &-content {
    @apply relative overflow-hidden w-full h-full;
  }
}
</style>
