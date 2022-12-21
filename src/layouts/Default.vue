<template>
  <div class="layout">
    <navbar />
    <slot />
  </div>
</template>

<script>
import Navbar from '../components/Default/Navbar';
export default {
  components: {
    Navbar
  }
};
</script>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style lang="scss">
body {
  @apply font-roobert bg-white;
  margin: 0;
  padding: 0;
  line-height: 1.5;
}
</style>
