<template>
  <div></div>
</template>

<page-query>
query {
  terms: allTerms {
    edges {
      node {
        id
        lastModified
        content
      }
    }
  }
}
</page-query>

<script>
export default {
  created() {
    this.$router.replace({
      path: `/terms/${this.$page.terms.edges[0].node.id}`
    });
  }
};
</script>

<style lang="scss" scoped></style>
