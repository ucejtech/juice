<template>
  <Layout class="terms-page">
    <div class="content">
      <h1>Terms & conditions</h1>
      <div class="mt-10" v-html="$page.term.content"></div>
      This document was last updated on
      {{ new Date($page.term.lastModified).toDateString() }}
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Terms & Conditions'
  }
};
</script>

<page-query>
query($id: ID!) {
  term: terms(id: $id) {
    lastModified
    content
  }
}

</page-query>

<style lang="scss" scoped>
.terms-page {
  .content {
    @apply my-0 mx-auto py-16 text-lg font-light leading-38px <lg:px-6;
    max-width: $contentMaxWidth;
  }
}
</style>
