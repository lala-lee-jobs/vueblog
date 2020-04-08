<template>
  <article v-if="articles.length">
    <h3>{{ filterById.title }}</h3>
    <i>{{ filterById.date }}</i>
    <span v-html="filterById.content"></span>
  </article>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Article',
  data() {
    return {
      articleId: '',
      articles: [],
    };
  },
  mounted() {
    const { id } = this.$route.params;
    this.articleId = id;
    const api = 'https://us-central1-expressapi-8c039.cloudfunctions.net/app/article';
    axios.get(api).then((response) => {
      this.articles = response.data.data;
    });
  },
  computed: {
    filterById() {
      return this.articles.filter((item) => item.id === this.articleId)[0];
    },
  },
};
</script>
