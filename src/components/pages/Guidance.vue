<template>
  <section class="guidance" id="guidance">
    <div class="content">
      <div class="flex-1 py-12 <lg:p-6">
        <h2>All the guidance you’ll need</h2>
        <p class="text-white max-w-md summary mt-6">
          Our team of experts provide guidance from inquiry to integration and
          beyond. Get personalized recommendations for your business use case.
        </p>

        <p class="mt-4">
          <span class="flex items-center gap-2">
            <g-image
              src="@/assets/img/success.png"
              alt="checkmark"
              class="h-4 w-4"
            />Extensive integration support
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
            />Dedicated product usecase workshop
          </span>
        </p>

        <BaseButton class="mt-8" color="white" to="/contact">
          <span>Contact us</span>
        </BaseButton>
      </div>

      <div class="flex-1 my-0 media">
        <g-image
          class="h-full relative right-0 max-w-550px 2xl:absolute  <lg:max-w-[50%] <md:max-w-400px"
          src="@/assets/img/woman-smiling.png"
          alt="woman smiling"
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.guidance {
  @apply bg-black relative text-white h-full;

  .content {
    @apply my-0 mx-auto font-light h-full grid grid-cols-2;
    max-width: $contentMaxWidth;

    h2 {
      @apply max-w-400px;
    }

    @include breakpoint(824px, max) {
      @apply p-4 grid-cols-1;
      .media {
        @apply hidden;
      }

      h2,
      .summary {
        @apply max-w-full;
      }
    }
  }
}
</style>
