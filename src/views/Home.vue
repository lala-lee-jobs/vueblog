<template>
  <div class="home">
    <article v-for="(item, index) in articles" :key="index">
      <h3 @click.prevent="routerToArticle(item.id)">{{ item.title }}</h3>
      <i>{{ item.date }}</i>
      <span>{{ item.content | subContent(0, 150)}}</span>
    </article>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Home',
  filters: {
    subContent(content, start, end) {
      return content.substring(start, end);
    },
  },
  data() {
    return {
      articles: [],
    };
  },
  mounted() {
    const api = 'https://us-central1-expressapi-8c039.cloudfunctions.net/app/article';
    axios.get(api).then((response) => {
      this.articles = response.data.data;
    });
  },
  methods: {
    routerToArticle(id) {
      this.$router.push({ name: 'Article', params: { id } });
    },
  },
};
</script>

<style lang="scss" scoped>
  article {
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: flex-start;
    width: 80vw;
    height: 200px;
    margin: 1rem;
    padding-left: 2rem;
    padding-right: 2rem;
    background-color: #dddddd;
    border-radius: 16px;
    i {
      color: #cccccc;
    }
  }
</style>
