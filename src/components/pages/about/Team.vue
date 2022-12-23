<template>
  <section class="team-section">
    <h2>Our Team</h2>
    <p class="mt-6">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />Lorem ipsum
      dolor sit amet, consectetur adipiscing elit.
    </p>
    <TeamGroup
      class="mt-10"
      v-for="(group, index) in team"
      :key="index"
      :group="group"
    />
  </section>
</template>

<script>
import TeamGroup from './team/TeamGroup.vue';

export default {
  components: {
    TeamGroup
  },
  data() {
    return {
      team: [
        {
          name: 'Management',
          members: [
            {
              name: 'Ife Johnson',
              image: ''
            },
            {
              name: 'Justin Ziegler',
              image: ''
            }
          ]
        },
        {
          name: 'Engineering',
          members: [
            {
              name: 'Ridwan Otun',
              image: ''
            },
            {
              name: 'Pelumi Sola-Aremu',
              image: ''
            },
            {
              name: 'Uk Chukundah',
              image: ''
            },
            {
              name: 'Popsana Barida',
              image: ''
            },
            {
              name: 'Rasheed Atanda',
              image: ''
            },
            {
              name: 'Chizi Ogbonda',
              image: ''
            },
            {
              name: 'Joseph Oladokun',
              image: ''
            }
          ]
        },
        {
          name: 'Product',
          members: [
            {
              name: 'Ron Ogheneruona',
              image: ''
            },
            {
              name: 'Grace Thompson',
              image: ''
            },
            {
              name: 'Tomasz Zastawny',
              image: ''
            }
          ]
        },
        {
          name: 'Treasury Ops',
          members: [
            {
              name: 'Uche Okehie',
              image: ''
            }
          ]
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.team-section {
}
</style>
