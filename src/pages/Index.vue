<template>
  <Layout>
    <Hero />
    <Process />
    <Documentation class="mt-16" />
    <Benefits />
    <Solutions />
    <Guidance class="mt-16" />
  </Layout>
</template>

<script>
import Hero from '../components/pages/index/Hero.vue';
import Process from '../components/pages/index/Process.vue';
import Benefits from '../components/pages/index/Benefits.vue';
import Documentation from '../components/pages/Documentation.vue';
import Guidance from '../components/pages/Guidance.vue';
import Solutions from '../components/pages/index/Solutions.vue';

export default {
  metaInfo() {
    return {
      title: `Home`
    };
  },
  components: {
    Benefits,
    Hero,
    Process,
    Documentation,
    Guidance,
    Solutions
  }
};
</script>

<static-query>
  query {
    metadata {
      siteName
    }
  }
</static-query>

<style>
.home-links a {
  /* margin-right: 1rem; */
}
</style>
