<template>
  <header
    class="header animate-animated "
    :id="`app-header`"
    :class="{ 'mobile--opened': isMobileOpened }"
  >
    <div class="content">
      <div class="logo">
        <g-link to="/">
          <JuiceLogo />
        </g-link>
      </div>
      <div class="nav-links">
        <g-link
          class="route"
          v-for="(route, index) in navLinks"
          :key="index"
          :to="route.link"
        >
          {{ route.title }}
        </g-link>
      </div>
      <div class="contact">
        <BaseButton outlined to="/contact">Contact us</BaseButton>
      </div>
      <div
        class="menu-control"
        :class="{ 'is--active': isMobileOpened }"
        @click="toggleMobileMenu"
      >
        <span></span>
        <span></span>
        <span></span>
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
          link: '/#documentation'
        },
        {
          title: 'Benefits',
          link: '/#benefits'
        },
        {
          title: 'Use cases',
          link: '/#use-cases'
        },
        {
          title: 'Guidance',
          link: '/#guidance'
        }
      ],
      isMobileOpened: false
    };
  },
  components: {
    JuiceLogo
  },
  watch: {
    $route() {
      this.isMobileOpened = false;
    }
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
    },
    toggleMobileMenu() {
      this.isMobileOpened = !this.isMobileOpened;
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

  @include breakpoint(641px, min) {
    backdrop-filter: blur(20px);
  }

  .content {
    @apply flex justify-between items-center;
    max-width: 1300px;
    margin: 0 auto;
  }

  .nav-links {
    @apply flex gap-12 text-base <sm:hidden;

    .route {
      @apply hover:text-purple-600 <sm:text-lg;
    }
  }

  @include breakpoint(640px, max) {
    &:not(.mobile--opened) {
      backdrop-filter: blur(20px);
    }
    &.mobile--opened {
      .nav-links {
        @apply absolute flex flex-col top-0 -z-1 w-full h-screen left-0 gap-8 px-4 py-19 font-normal;
        transition: all 0.3s ease-in-out;

        background: linear-gradient(
          180deg,
          rgba(255, 255, 255, 0.5) 0%,
          rgba(255, 255, 255, 0.25) 100%
        );
        backdrop-filter: blur(20px);
      }
    }
  }

  @include breakpoint(820px, max) {
    .contact {
      @apply hidden;
    }
  }

  .menu-control {
    @apply relative z-20;

    &.is--active {
      span {
        &:first-child {
          top: 0.438em;
          transform: rotate(45deg);
        }
        &:nth-child(2) {
          opacity: 0;
        }
        &:last-child {
          top: -0.313em;
          transform: rotate(-45deg);
        }
      }
    }

    span {
      @apply bg-black block;
      display: block;
      height: 0.133em;
      margin-bottom: 0.25em;
      position: relative;
      top: 0;
      transition: all 0.3s ease-in-out;
      width: 1.25em;
    }
  }
}
</style>
