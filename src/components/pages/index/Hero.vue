<template>
  <section class="hero">
    <div class="bg <lg:hidden" />
    <h1 data-aos="fade-up" class="<sm:text-left">
      Everything you need for reliable global payments
    </h1>
    <p class="summary <sm:text-left" data-aos="fade-up" data-aos-delay="200">
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
  @apply py-16 text-center flex <sm:block items-center flex-col <lg:px-6;

  h1 {
    @apply max-w-660px;
  }

  .summary {
    @apply max-w-660px mt-6 <sm:mt-4;
  }

  .contact-btn {
    @apply mt-32px;
  }

  .partners {
    @apply flex justify-center gap-x-16 mt-14 lg:gap-24 <sm:flex-wrap <sm:gap-x-8 <sm:gap-y-6;
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
