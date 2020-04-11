<template>
  <article v-if="getArticleById">
    <h3>{{ getArticleById.title }}</h3>
    <i>發表時間：{{ getArticleById.date | formatDate }}</i>
    <p v-html="getArticleById.content"></p>
  </article>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Article',
  data() {
    return {
    };
  },
  mounted() {
    const { id } = this.$route.params;
    this.$store.dispatch('changeFoucusID', id);
  },
  computed: {
    ...mapGetters(['getArticleById']),
  },
};
</script>
