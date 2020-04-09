<template>
  <div class="home">
    <section class="home-articles">
      <article v-for="(item, index) in getArticlesBySearch" :key="index">
        <h3 @click.prevent="routerToArticle(item.id)">{{ item.title }}</h3>
        <i>發表時間：{{ item.date | formatDate }}</i>
        <p>{{ item.content | subContent(0, 150)}}</p>
      </article>
    </section>
    <section class="home-side-bar">
      <SideBar :articles="articles" />
    </section>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
import SideBar from '@/components/SideBar.vue';

export default {
  name: 'Home',
  components: {
    SideBar,
  },
  filters: {
    subContent(content, start, end) {
      return content.substring(start, end);
    },
  },
  data() {
    return {};
  },
  mounted() {
    this.$store.dispatch('fetchArticles');
  },
  computed: {
    ...mapState(['articles']),
    ...mapGetters(['getArticlesBySearch']),
  },
  methods: {
    routerToArticle(id) {
      this.$router.push({ name: 'Article', params: { id } });
    },
  },
};
</script>

<style lang="scss" scoped>
  .home {
    display: flex;
    overflow-x: hidden;
    .home-articles {
    }
    .home-side-bar {
      width: 25vw;
      padding: 1rem;
      height: calc(100vh - 56px);
    }
  }
  article {
    display: flex;
    padding: 1rem;
    justify-content: center;
    margin: 1rem;
    flex-direction: column;
    align-items: flex-start;
    width: 75vw;
    height: 200px;
    background-color: #dddddd;
    border-radius: 16px;

    h3 {
      cursor: pointer;
      &:hover {
        opacity: 0.6;
      }
    }

    i {
      color: #8f8f8f;
    }

    p {
      text-align: left;
      padding-right: 1.5rem;
    }
  }
</style>
