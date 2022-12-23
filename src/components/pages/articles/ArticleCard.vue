<template>
  <article class="article">
    <figure class="article-media">
      <g-link :to="path">
        <g-image :src="image" alt="article image" class="w-full"></g-image>
      </g-link>
    </figure>
    <header class="mt-6">
      <g-link :to="path">
        <h3 class="">
          {{ title }}
        </h3>
      </g-link>
      <p class="uppercase mt-2">
        <span class="category">{{ categories.join(' • ') }}</span>
      </p>
    </header>
  </article>
</template>

<script>
export default {
  props: {
    image: {
      type: String
    },
    title: {
      type: String
    },
    path: {
      type: String
    },
    categories: {
      type: Array
    }
  }
};
</script>

<style lang="scss" scoped>
.article {
  @apply flex flex-col max-w-489px <md:max-w-768px;
  &-media {
    @apply w-full;
  }
}
</style>
