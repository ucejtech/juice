<template>
  <Layout class="contact-page">
    <Hero />
    <Solutions class="mb-16" />
  </Layout>
</template>

<script>
import Hero from '../components/pages/contact/Hero.vue';
import Solutions from '../components/pages/index/Solutions.vue';

export default {
  metaInfo: {
    title: 'Contact us'
  },
  components: {
    Hero,
    Solutions
  }
};
</script>

<style lang="scss">
.contact-page {
  background: linear-gradient(180deg, #e3ffe9 0%, #f8f8f8 100%);
}
</style>
