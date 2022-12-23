<template>
  <section class="solutions-section" id="use-cases">
    <div class="content">
      <h2>
        Payment solutions for diverse use cases
      </h2>
      <p class="text-lg text-gray-700 mt-6 font-light">
        Discover how we help some of Africa’s leading businesses
      </p>
      <div class="mt-4">
        <BaseCollapsible
          v-for="(solution, index) in solutions"
          :key="index"
          class="mt-6"
          :is-static="solution.isStatic"
        >
          <template #trigger>
            <h3>{{ solution.title }}</h3>
          </template>
          <template>
            <p>
              {{ solution.desc }}
            </p>
            <BaseButton class="mt-8" to="/contact"> Contact us</BaseButton>
          </template>
        </BaseCollapsible>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      solutions: [
        {
          title: 'Operating businesses',
          desc:
            'Start accepting payments in real time, no matter where your customers are based. Payments will settle in under one day. Increase your conversion with multiple payment methods your customers can choose from, for their ease.',
          isStatic: false
        },
        {
          title: 'Finance managers',
          desc:
            'Empower your team with scalable technology that saves you time and money. Optimize your treasury operations to move money in the quickest and most compliant way possible.',
          isStatic: false
        },
        {
          title: 'BDCs and IMTOs',
          desc:
            'Convert local currency to USD with ease. Expand your diaspora remittance inflow and outflow to over 100 countries worldwide.',
          isStatic: false
        },
        {
          title: 'Not sure if you’re a good match?',
          desc:
            'Want us to take a closer look at your idea and how you can utilize our products? Let’s discuss in detail.',
          isStatic: true
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.solutions-section {
  .content {
    @apply my-0 mx-auto;
    max-width: $contentMaxWidth;

    h2 {
      @apply max-w-489px;
    }
  }
}
</style>
