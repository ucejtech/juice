<template>
  <section class="values-section">
    <h2>Juice values</h2>
    <p class="mt-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

    <BaseWell color="#ffffff" class="dummy-content">
      <h3>
        Lorem ipsum
      </h3>
      <p class="mt-4 max-w-sm text-lg font-light leading-8">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nunc arcu,
        iaculis quis ipsum vel, efficitur venenatis lacus. Nulla mattis nulla
        sem, a tempor urna vehicula sit amet.
      </p>
    </BaseWell>
    <div class="flex gap-6 mt-6 font-light <md:flex-col">
      <BaseWell
        class="p-10 flex-1 <md:px-8"
        color="#ffffff"
        v-for="i in 2"
        :key="i"
      >
        <g-image
          src="@/assets/img/hand-currency.png"
          alt="Shield"
          width="88px"
        />
        <h3 class="mt-6">Lorem ipsum</h3>
        <p class="mt-4 text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nunc
          arcu, iaculis quis ipsum vel, efficitur venenatis lacus. Nulla mattis
          nulla sem, a tempor urna vehicula sit amet.
        </p>
      </BaseWell>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.values-section {
  .dummy-content {
    @apply mt-10 p-10 relative <md:px-8;
    background-image: url(../../../assets/img/netflix-bubble.png);
    background-repeat: no-repeat;
    background-position-x: right;
    background-size: contain;

    @include breakpoint(800px, max) {
      background-size: 50%;
      background-position-y: bottom;
    }

    @include breakpoint(640px, max) {
      background: white;
    }
  }
}
</style>
