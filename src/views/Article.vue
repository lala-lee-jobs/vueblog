<template>
  <article v-if="getArticleById">
    <h3>{{ getArticleById.title }}</h3>
    <i>發表時間：{{ getArticleById.date | formatDate }}</i>
    <p v-html="getArticleById.content"></p>
  </article>
</template>

<script>
export default {
  name: 'Article',
  data() {
    return {
      articleId: '',
    };
  },
  mounted() {
    const { id } = this.$route.params;
    this.articleId = id;
    this.$store.dispatch('fetchArticles');
  },
  computed: {
    getArticleById() {
      return this.$store.getters.getArticleById(this.articleId);
    },
  },
};
</script>
