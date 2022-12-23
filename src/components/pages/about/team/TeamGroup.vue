<template>
  <div class="team-group">
    <h3 class="team-group__name" data-aos="fade-up">
      {{ group.name }}
    </h3>
    <div
      class="team-group__members helper"
      data-aos="fade-up"
      data-aos-delay="200"
    >
      <TeamCard
        v-for="(member, i) in group.members"
        :key="i"
        :person="member"
      />
    </div>
  </div>
</template>

<script>
import TeamCard from './TeamCard.vue';

export default {
  props: {
    group: {
      type: Object
    }
  },
  components: {
    TeamCard
  }
};
</script>

<style lang="scss" scoped>
.team-group {
  &__name {
    @apply mb-6;
  }

  &__members {
    @apply grid grid-cols-3 gap-6;

    @include breakpoint(1020px, max) {
      @apply grid-cols-2;
    }

    &.helper {
      @apply <sm:grid-cols-1;
    }
  }
}
</style>
