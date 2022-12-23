<template>
  <BaseWell color="#fff">
    <div class="media">
      <g-image :src="getImage(person.name)" :alt="person.name" class="w-full" />
    </div>
    <div class="p-10">
      <p class="name text-2xl font-bold">
        {{ person.name }}
      </p>
      <p class="text-md font-light mt-2">
        Job position title
      </p>
      <BaseIcon icon="linkedin" color="#007EBB" size="24px" class="mt-4" />
    </div>
  </BaseWell>
</template>

<script>
export default {
  props: {
    person: {
      type: Object
    }
  },
  methods: {
    getImage(name) {
      return `/img/team/${name
        .split(' ')
        .join('-')
        .toLowerCase()}.png`;
    }
  }
};
</script>

<style lang="scss" scoped>
.media {
  @apply w-full;

  @include breakpoint(1020px, min) {
    max-height: 240px;
  }
}
</style>
