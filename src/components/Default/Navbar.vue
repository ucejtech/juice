<template>
  <header class="header animate-animated " :id="`header${id}`">
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
import { generateRandomElementId } from '@/utils';

export default {
  data() {
    return {
      id: generateRandomElementId(),
      navElement: null,
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
    this.navElement = document.getElementById(`header${this.id}`);

    window.addEventListener('scroll', this.throttle(this.onScroll, 100));
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
    },
    onScroll() {
      console.log(window.pageYOffset);
      if (window.pageYOffset > 25) {
        this.navElement.classList.add('animate-slideInDown');
      } else {
        this.navElement.classList.remove('animate-slideInDown');
      }
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
      @apply hover:bg-purple-600;
    }
  }
}
</style>
