<template>
  <Layout class="about about-page">
    <div class="content">
      <div class="about-heading">
        <div class="title-desc">
          <h1 data-aos="fade-up">About Us</h1>
          <p class="mt-6 summary" data-aos="fade-up" data-aos-delay="200">
            For one year, Juice has been innovating with payment technology.
            With every iteration, we move closer to our ultimate goal - to get
            global payments to the safest, quickest and most inexpensive it can
            be.
          </p>
        </div>
        <g-image
          src="@/assets/img/about-header.png"
          alt="about heading"
          class="<lg:w-3/6 <md:w-full"
        />
      </div>

      <Values class="pt-7" />
      <Team class="mt-16" />
    </div>
    <FitCheck />
  </Layout>
</template>

<script>
import Values from '../components/pages/about/Values.vue';
import Team from '../components/pages/about/Team.vue';
import FitCheck from '../components/pages/about/FitCheck.vue';

export default {
  metaInfo: {
    title: 'About us'
  },
  components: {
    Values,
    Team,
    FitCheck
  }
};
</script>

<style lang="scss" scoped>
.about {
  .content {
    @apply my-0 mx-auto font-light py-16 <lg:px-8;
    max-width: $contentMaxWidth;
  }

  &-heading {
    @apply flex gap-6 <md:flex-col;
  }
}
</style>
