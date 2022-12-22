<template>
  <header class="header animate-animated " :id="`app-header`">
    <div class="content">
      <div class="logo">
        <g-link to="/">
          <JuiceLogo />
        </g-link>
      </div>
      <div class="nav-links">
        <g-link class="route" v-for="(route, index) in navLinks" :key="index">
          {{ route.title }}
        </g-link>
      </div>
      <div class="contact">
        <BaseButton outlined to="/contact">Contact us</BaseButton>
      </div>
    </div>
  </header>
</template>

<script>
import JuiceLogo from '@/assets/img/Juice-Full.svg';
import { generateRandomElementId } from '@/utils';

export default {
  data() {
    return {
      id: generateRandomElementId(),
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
  },
  mounted() {
    const navElement = document.getElementById(`app-header`);
    const onScroll = () => {
      if (window.pageYOffset > 25) {
        navElement.classList.add('animate-slideInDown');
      } else {
        navElement.classList.remove('animate-slideInDown');
      }
    };

    window.addEventListener('scroll', this.throttle(onScroll, 100));
  },
  methods: {
    throttle(cb, delay) {
      let wait = false;

      return (...args) => {
        if (wait) {
          return;
        }

        cb(...args);
        wait = true;
        setTimeout(() => {
          wait = false;
        }, delay);
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.header {
  @apply px-4 py-6 font-roobert z-10 transition-all sticky top-0;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.5) 0%,
    rgba(255, 255, 255, 0.25) 100%
  );
  backdrop-filter: blur(20px);

  .content {
    @apply flex justify-between items-center;
    max-width: 1300px;
    margin: 0 auto;
  }

  .nav-links {
    @apply flex gap-12 text-base;

    .route {
      @apply hover:text-purple-600;
    }
  }
}
</style>
