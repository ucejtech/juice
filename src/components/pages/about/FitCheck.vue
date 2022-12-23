<template>
  <section class="fitcheck">
    <div class="content">
      <div class="flex-1 py-12 <lg:p-6">
        <h2>Do you think you’re a good fit?</h2>
        <p class="text-white max-w-md text-lg leading-8 mt-6">
          Even though we may not be looking for talents and the moment we are
          open to any inquiries. Reach out to us and convince why we should work
          toghether.
        </p>

        <p class="mt-4">
          <span class="flex items-center gap-2">
            <g-image
              src="@/assets/img/success.png"
              alt="checkmark"
              class="h-4 w-4"
            />Make sure your resume is attached
          </span>
          <span class="flex items-center gap-2 mt-2">
            <g-image
              src="@/assets/img/success.png"
              alt="checkmark"
              class="h-4 w-4"
            />We value skills the most
          </span>
          <span class="flex items-center gap-2 mt-2">
            <g-image
              src="@/assets/img/success.png"
              alt="checkmark"
              class="h-4 w-4"
            />We’ll reply to every email regardless of the decision
          </span>
        </p>

        <BaseButton class="mt-8" color="white" to="/contact">
          <span>Contact us</span>
        </BaseButton>
      </div>

      <div class="flex-1 my-0 media">
        <g-image
          class="h-full relative right-0 max-w-600px 2xl:absolute <lg:max-w-[50%] <md:max-w-400px"
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
.fitcheck {
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
