<template>
  <Layout class="articles-page">
    <div class="content">
      <h1 data-aos="fade-up">Articles</h1>
      <p
        class="text-lg max-w-lg leading-8 mt-6"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        Making a general inquiry, or you’ll like us to talk in detail? <br />
        Tell us what you need and we will get back to you as soon as possible.
      </p>

      <div class="articles" data-aos="fade-up" data-aos-delay="400">
        <div class="articles__heading">
          Discover more of what matters to you
        </div>
        <div class="articles__tags">
          <BaseButton v-for="i in 6" :key="i">
            <span class="font-light">
              CATEGORY
            </span>
          </BaseButton>
        </div>
        <div class="articles__list">
          <ArticleCard
            v-for="i in 8"
            :key="i"
            :image="articleImage"
            title="Article title goes here and it should be long up to two lines"
            :categories="['category', 'category']"
          />
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import ArticleCard from '../components/pages/articles/ArticleCard.vue';
import articleImage from '@/assets/img/article.png';

export default {
  metaInfo: {
    title: 'Articles'
  },
  data() {
    return {
      articleImage: articleImage
    };
  },
  components: {
    ArticleCard
  }
};
</script>

<style lang="scss" scoped>
.articles-page {
  .content {
    @apply my-0 mx-auto font-light;
    max-width: $contentMaxWidth;

    .articles {
      @apply mt-10;

      &__heading {
        @apply font-bold text-lg;
      }

      &__tags {
        @apply mt-4 grid gap-3 grid-cols-3 max-w-md;
      }

      &__list {
        @apply py-10 grid grid-cols-2 gap-6;
      }
    }
  }
}
</style>
