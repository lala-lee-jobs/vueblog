<template>
  <div>
    <h4>最新文章</h4>
    <hr>
    <ul>
      <li v-for="(item,index) in articles" :key="index"
        @click="routerToArticle(item.id)">
        {{ item.title }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    articles: Array,
  },
  methods: {
    routerToArticle(id) {
      this.$router.push({ name: 'Article', params: { id } });
    },
  },
};
</script>

<style lang="scss" scoped>
  div {
    width: 21vw;
    right: 1rem;
    background-color: #eee;
    border-radius: 16px;
    height: 100%;
    padding-top: 1rem;
    padding-right: 0.5rem;

    h4 {
      width: 100%;
      display: inline-block;
      line-height: 1.5rem;
      text-align: left;
      text-indent: 1rem;
    }

    hr {
      margin: 5px;
      margin-bottom: 1rem;
    }

    ul {
      li {
        text-align: left;
        margin: 5px 0;
        transition: 0.3s;
        cursor: pointer;

        &:hover {
          text-decoration-line: underline;
        }
      }
    }
  }
</style>
