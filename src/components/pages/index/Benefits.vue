<template>
  <section class="benefits">
    <div class="content">
      <h2>Benefits</h2>
      <p class="text-lg text-gray-700 mt-6 font-light">Why Juice</p>
      <div class="mt-10 grid grid-cols-2 gap-6">
        <BaseWell
          class="p-10 flex-1"
          color="#ffffff"
          v-for="(benefit, index) in benefits"
          :key="index"
        >
          <img :src="benefit.image" alt="Shield" width="88px" />
          <h3 class="mt-6">
            {{ benefit.title }}
          </h3>
          <p class="mt-4 text-lg font-light">
            {{ benefit.description }}
          </p>
        </BaseWell>
      </div>
      <BaseWell color="black" class="mt-6 p-10 text-white">
        <div class="grid grid-cols-3">
          <div class="max-w-220px">
            <p class="value text-3xl font-bold">+70</p>
            <p class="description text-lg mt-4 font-light">
              Countries supported for USD payments
            </p>
          </div>
          <div class="max-w-220px">
            <p class="value text-3xl font-bold">+100</p>
            <p class="description text-lg mt-4 font-light">
              Countries supported for local payouts
            </p>
          </div>
          <div class="max-w-220px">
            <p class="value text-3xl font-bold">70%</p>
            <p class="description text-lg mt-4 font-light">
              Quicker payout time
            </p>
          </div>
        </div>
        <div class="uppercase text-xs text-gray-300 font-light mt-8">
          all bragging rights unreserved.*
        </div>
      </BaseWell>
    </div>
  </section>
</template>

<script>
import smartphonesImage from '@/assets/img/smartphones.png';
import globeImage from '@/assets/img/globe.png';
import handCurrencyImage from '@/assets/img/hand-currency.png';
import mapImage from '@/assets/img/map.png';
import shieldImage from '@/assets/img/shield.png';
import walletCardImage from '@/assets/img/wallet-card.png';

const benefits = [
  {
    title: 'Digital wallets',
    description:
      'Generate white label custodial wallets for your business and your end users via our API. This wallet can receive digital currency on-chain and via regular bank transfer.',
    image: smartphonesImage
  },
  {
    title: 'International payouts',
    description:
      'Frictionlessly move funds to major destinations in the world via our unified dashboard. We charge 0% in commission, only a per-transaction fee of $50 only.',
    image: globeImage
  },
  {
    title: 'Liquidity sourcing',
    description:
      'Maintain cash flow required for international payments. Juice will provide your business with cash available for swaps whenever you want to make global payments.',
    image: handCurrencyImage
  },
  {
    title: 'Cross border remmittance',
    description:
      'Send money to major destinations in the world in either USD, or users local currency.',
    image: mapImage
  },
  {
    title: 'KYC & fraud checks',
    description:
      'Get your business and your users onboarded safely and compliantly, without all the frustrations. Maximize payments from legitimate customers and minimize fraud.',
    image: shieldImage
  },
  {
    title: 'Payment gateway',
    description:
      'Avoid the collections difficulties in emerging markets. Enable fully compliant payment collections for your business. Accept payments from your users in both digital and.',
    image: walletCardImage
  }
];
export default {
  data() {
    return {
      benefits
    };
  }
};
</script>

<style lang="scss" scoped>
.benefits {
  @apply py-16;
  .content {
    @apply my-0 mx-auto;
    max-width: $contentMaxWidth;
  }
}
</style>
