<template>
  <header class="header">
    <div class="content">
      <div class="logo">
        <JuiceLogo />
      </div>
      <div class="nav-links">
        <g-link class="route" v-for="(route, index) in navLinks" :key="index">
          {{ route.title }}
        </g-link>
      </div>
      <div class="contact">
        <BaseButton outlined>Contact us</BaseButton>
      </div>
    </div>
  </header>
</template>

<script>
import JuiceLogo from '@/assets/img/Juice-Full.svg';

export default {
  data() {
    return {
      navLinks: [
        {
          title: 'Documentation',
          link: '/documentation'
        },
        {
          title: 'Benefits',
          link: '/benefits'
        },
        {
          title: 'Use cases',
          link: '/use-cases'
        },
        {
          title: 'Guidance',
          link: '/guidance'
        }
      ]
    };
  },
  components: {
    JuiceLogo
  }
};
</script>

<style lang="scss" scoped>
.header {
  @apply px-4 py-6 font-roobert z-10 relative;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.5) 0%,
    rgba(255, 255, 255, 0.25) 100%
  );
  // backdrop-filter: blur(20px);

  .content {
    @apply flex justify-between items-center;
    max-width: 1300px;
    margin: 0 auto;
  }

  .nav-links {
    @apply flex gap-12 text-base;

    .route {
      @apply hover:text-purple;
    }
  }
}
</style>
