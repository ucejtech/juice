<template>
  <section class="contact-hero">
    <div class="content">
      <div class="flex-1 contact-description">
        <h1 data-aos="fade-up">How can we help?</h1>
        <p class="mt-6 summary" data-aos="fade-up" data-aos-delay="200">
          Making a general inquiry, or you’ll like us to talk in detail? Tell us
          what you need and we will get back to you as soon as possible.
        </p>
        <div class="partners" data-aos="fade-up" data-aos-delay="400">
          <BaseIcon icon="rewire" size="48px" color="#434343" />
          <BaseIcon icon="flstudio" size="48px" color="#434343" />
          <BaseIcon icon="github" size="48px" color="#434343" />
          <BaseIcon icon="vmware" size="48px" color="#434343" />
          <BaseIcon icon="rewire" size="48px" color="#434343" />
          <BaseIcon icon="flstudio" size="48px" color="#434343" />
        </div>
        <p
          class="mt-4 text-xs text-gray-600"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          DIVERSE INDUSTRY LEADERS TRUST JUICE
        </p>
      </div>
      <div class="form flex-1">
        <BaseWell class="p-10 <sm:p-6" color="#ffffff">
          <form class="flex flex-col gap-6">
            <BaseInput
              label="First name (required)"
              type="text"
              v-model="contact.firstName"
              required
            />
            <BaseInput
              label="Last name (required)"
              type="text"
              v-model="contact.lastName"
              required
            />
            <BaseInput
              label="Company email (required)"
              type="email"
              v-model="contact.companyEmail"
              required
            />
            <BaseInput
              label="Company (required)"
              type="text"
              v-model="contact.company"
              required
            />
            <BaseTextarea
              label="Message (required)"
              v-model="contact.message"
              height="180px"
              required
            />
            <BaseButton> Submit</BaseButton>
          </form>
        </BaseWell>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      contact: {
        firstName: '',
        lastName: '',
        company: '',
        companyEmail: '',
        message: ''
      }
    };
  }
};
</script>

<style lang="scss" scoped>
.contact-hero {
  .content {
    @apply my-0 mx-auto flex py-16 gap-6 <lg:px-6 <md:flex-col;
    max-width: $contentMaxWidth;
  }

  .contact-description {
    .partners {
      @apply mt-10 flex gap-x-16 gap-y-6 max-w-400px flex-wrap <sm:flex-wrap <sm:gap-x-8;
    }
  }
}
</style>
