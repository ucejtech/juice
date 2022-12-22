<template>
  <footer class="footer">
    <div class="content">
      <div class="site-details flex gap-4 items-start">
        <BaseButton icon width="32px" height="32px" to="/">
          <BaseIcon icon="juice" size="8px" />
        </BaseButton>
        <p class="text-sm leading-8 max-w-44">
          ©2022 Juice Africa. <br />
          All rights reserved.
        </p>
      </div>
      <div class="footer-link__group">
        <div class="title">Resources</div>
        <g-link to="/documentation" class="underline">
          Documentation
        </g-link>
        <g-link to="/articles">
          Articles
        </g-link>
      </div>
      <div class="footer-link__group">
        <div class="title">Legal</div>
        <g-link to="/terms">
          Terms & conditions
        </g-link>
      </div>
      <div class="footer-link__group">
        <div class="title">Company</div>
        <g-link to="/about">
          About us
        </g-link>
        <g-link to="/contact">
          Contact us
        </g-link>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.footer {
  @apply bg-purple-200 p-16 font-light;

  .content {
    @apply my-0 mx-auto grid grid-cols-4;
    max-width: $contentMaxWidth;
  }

  &-link {
    &__group {
      .title {
        @apply text-lg font-bold;
      }

      a {
        @apply mt-4 block;
      }
    }
  }
}
</style>
