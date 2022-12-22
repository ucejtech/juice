<template>
  <div
    class="collapsible"
    :class="[
      { collapsible__opened: isOpened },
      { collapsible__static: isStatic }
    ]"
  >
    <BaseWell color="#ffffff" class="p-10">
      <header
        class="flex justify-between cursor-pointer"
        :id="`trigger_${id}`"
        @click="toggleCollapsible"
      >
        <slot name="trigger" />
        <BaseButton
          radius="12px"
          color="#EEEEEE"
          @click.stop="toggleCollapsible"
          v-if="!isStatic"
          icon
        >
          <BaseIcon icon="arrow-down" size="24px" class="indicator"></BaseIcon>
        </BaseButton>
      </header>
      <div class="content-wrapper" :class="{ static: isStatic }">
        <div class="mt-6">
          <slot />
        </div>
      </div>
    </BaseWell>
  </div>
</template>

<script>
import { generateRandomElementId } from '@/utils';

export default {
  props: {
    isStatic: {
      type: Boolean
    }
  },
  data() {
    return {
      id: generateRandomElementId(),
      trigger: null,
      isOpened: false
    };
  },
  mounted() {
    this.trigger = document.getElementById(`trigger_${this.id}`);
  },
  methods: {
    toggleCollapsible() {
      if (!this.isStatic) {
        this.isOpened = !this.isOpened;
        var content = this.trigger.nextElementSibling;
        if (content.style.maxHeight) {
          content.style.maxHeight = null;
        } else {
          content.style.maxHeight = content.scrollHeight + 'px';
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.collapsible {
  .indicator {
    @apply transition-transform duration-[0.25s] ease-in-out origin-center;
  }
  .content-wrapper {
    @apply max-w-[95%] text-lg font-light overflow-hidden box-border;
    transition: max-height 0.25s ease-in-out;

    &:not(.static) {
      @apply max-h-0;
    }
  }

  &__opened {
    .indicator {
      transform: rotate(-180deg);
      -ms-transform: rotate(-180deg);
      -webkit-transform: rotate(-180deg);
    }
  }
}
</style>
