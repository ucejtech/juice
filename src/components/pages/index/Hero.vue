<template>
  <section class="hero">
    <div class="bg" />
    <h1 data-aos="fade-up">Everything you need for reliable global payments</h1>
    <p class="summary" data-aos="fade-up" data-aos-delay="200">
      Juice is an ecosystem of services making business cross border payment
      less complex, more reliable and compliant than ever before.
    </p>
    <BaseButton
      class="contact-btn"
      to="/contact"
      data-aos="fade-up"
      data-aos-delay="300"
    >
      Contact us
    </BaseButton>
    <div class="partners">
      <BaseIcon icon="rewire" size="48px" color="#434343" />
      <BaseIcon icon="flstudio" size="48px" color="#434343" />
      <BaseIcon icon="github" size="48px" color="#434343" />
      <BaseIcon icon="vmware" size="48px" color="#434343" />
      <BaseIcon icon="rewire" size="48px" color="#434343" />
      <BaseIcon icon="flstudio" size="48px" color="#434343" />
    </div>
    <p class="mt-4 text-xs text-gray-600">
      DIVERSE INDUSTRY LEADERS TRUST JUICE
    </p>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.hero {
  @apply py-16 text-center flex items-center flex-col;

  h1 {
    @apply max-w-660px;
  }

  .summary {
    @apply font-normal text-lg max-w-660px mt-24px leading-8;
  }

  .contact-btn {
    @apply mt-32px;
  }

  .partners {
    @apply flex gap-24 mt-14;
  }

  .bg {
    background-image: url(../../../assets/img/hero-bg.png);
    background-position: center;
    background-size: cover;
    position: absolute;
    width: 100%;
    bottom: 0;
    max-height: 600px;
    top: 0;
    z-index: -1;
  }
}
</style>
