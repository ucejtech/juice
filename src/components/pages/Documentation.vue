<template>
  <section class="documentation" id="documentation">
    <div class="content">
      <div class="flex-1 py-12">
        <h2>Higher levels of operational efficiency with our API suite</h2>
        <p class="text-white max-w-md text-lg leading-8 mt-6">
          Juice is an ecosystem of services making business cross border payment
          less complex, more reliable and compliant than ever before.
        </p>

        <p class="mt-4">
          <span class="flex items-center gap-2">
            <g-image
              src="@/assets/img/success.png"
              alt="checkmark"
              class="h-4 w-4"
            />Thousand of successful payouts
          </span>
          <span class="flex items-center gap-2 mt-2">
            <g-image
              src="@/assets/img/success.png"
              alt="checkmark"
              class="h-4 w-4"
            />Compliance & risk experts
          </span>
          <span class="flex items-center gap-2 mt-2">
            <g-image
              src="@/assets/img/success.png"
              alt="checkmark"
              class="h-4 w-4"
            />Round the clock support
          </span>
        </p>

        <BaseButton class="mt-8" color="white" to="/documentation">
          <span class="underline">Documentation</span>
          <BaseIcon icon="external-link" size="25px" class="ml-2"></BaseIcon>
        </BaseButton>
      </div>

      <div class="flex-1 h-full my-0">
        <g-image
          class="h-full relative right-0 max-w-600px 2xl:absolute"
          src="@/assets/img/two-women-communicating.png"
          alt="two women communicating"
          quality="90"
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.documentation {
  @apply bg-black relative text-white h-full;

  .content {
    @apply my-0 mx-auto font-light h-full grid grid-cols-2;
    max-width: $contentMaxWidth;

    h2 {
      @apply max-w-400px;
    }
  }
}
</style>
