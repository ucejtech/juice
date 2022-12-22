<template>
  <section class="process-section">
    <div class="content">
      <h2>
        Accept and process payments in a secure and scalable way
      </h2>
      <BaseWell color="#ffffff" class="settlements">
        <h3>
          Speedy Settlements
        </h3>
        <p class="mt-4 max-w-sm text-lg font-light leading-8">
          Legacy payments take up to 4 business days to settle. With Juice’s
          rapid payment system, payments settle in only a couple of hours. Save
          time and effort with effective scheme management, and timely
          settlement.
        </p>
      </BaseWell>
      <BaseWell class="mt-6 p-10 pb-0">
        <h3 class="text-white">You’re in control</h3>
        <div class="flex gap-6 text-white mt-4 tracking-0.37px font-light">
          <p class="flex-1">
            One robust dashboard to manage all your finance operations within
            our ecosystem
          </p>
          <p class="flex-1">
            With both top-level and indepth transaction history view on the
            dashboard, Juice helps finance teams reconcile transactions
            efficiently and conveniently.
          </p>
        </div>
        <g-image
          src="@/assets/img/juice-dash.png"
          alt="Juice Dashboard"
          class="mt-8"
          data-aos="fade-up"
        />
      </BaseWell>
      <div class="flex gap-6 mt-6 font-light">
        <BaseWell class="p-10 flex-1" color="#ffffff">
          <g-image src="@/assets/img/shield.png" alt="Shield" width="88px" />
          <h3 class="mt-6">
            Security enabled
          </h3>
          <p class="mt-4 text-lg">
            Juice delivers a frictionless flow that offers many layers of
            protection without sacrificing user experience. Accrue way less in
            operational expenses associated with fraud investigations.
          </p>
        </BaseWell>
        <BaseWell class="p-10 flex-1" color="#ffffff">
          <g-image
            src="@/assets/img/hand-currency.png"
            alt="Shield"
            width="88px"
          />
          <h3 class="mt-6">Great pricing</h3>
          <p class="mt-4 text-lg">
            Especially valuable for businesses processing huge volumes at high
            frequencies, Juice charges a flat fee per transaction. No percentage
            or any surprise monthly fees.
          </p>
        </BaseWell>
      </div>
      <BaseWell class="mt-6 p-10" color="black">
        <h3 class="text-white max-w-400px">
          $50 for for all payin and payout transactions
        </h3>
        <div class="flex gap-6 text-white mt-4 tracking-0.37px font-light">
          <p class="flex-1 ">
            Using Juice rails, cross border payments is simple. See your
            transfers settle as soon as the next business hour. We offer clear
            pricing and no surprise fees.
          </p>
          <p class="flex-1">
            <span class="flex items-center gap-2">
              <g-image
                src="@/assets/img/success.png"
                alt="checkmark"
                class="h-4 w-4"
              />Transfer and settlement in minutes
            </span>
            <span class="flex items-center gap-2 mt-2">
              <g-image
                src="@/assets/img/success.png"
                alt="checkmark"
                class="h-4 w-4"
              />No monthly or hidden fees
            </span>
            <span class="flex items-center gap-2 mt-2">
              <g-image
                src="@/assets/img/success.png"
                alt="checkmark"
                class="h-4 w-4"
              />End-to-end data security
            </span>
          </p>
        </div>
      </BaseWell>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.process-section {
  .content {
    @apply my-0 mx-auto;
    max-width: $contentMaxWidth;

    h2 {
      @apply max-w-489px;
    }

    .settlements {
      @apply mt-10 p-10 relative;
      background-image: url(../../../assets/img/netflix-bubble.png);
      background-repeat: no-repeat;
      background-position-x: right;
      background-size: contain;
    }
  }
}
</style>
