<template>
  <article class="article">
    <figure class="article-media">
      <g-image :src="image" alt="article image"></g-image>
    </figure>
    <header class="mt-6">
      <h3 class="text-2xl leading-38px">
        {{ title }}
      </h3>
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
    categories: {
      type: Array
    }
  }
};
</script>

<style lang="scss" scoped>
.article {
  @apply flex flex-col max-w-489px;
  &-media {
  }
}
</style>
