<template>
  <div>
    <h1>Admin Home</h1>
    <div>
      <b-table striped hover :fields="fields" :items="articles">
        <template v-slot:cell(date)="data">
          {{ data.value | formatDate }}
        </template>
        <template v-slot:cell(content)="data">
          {{ data.value | subContent(0, 40, '...') }}
        </template>
        <template v-slot:cell(id)="data">
          <b-button-group>
            <b-button @click="editArticle(data.value)">修改</b-button>
            <b-button @click="delArticle(data.value)">刪除</b-button>
          </b-button-group>
        </template>
      </b-table>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'AdminHome',
  data() {
    return {
      fields: [
        { key: 'title', label: '文章標題' },
        { key: 'date', label: '上傳日期' },
        { key: 'content', label: '文章內容' },
        { key: 'id', label: '修改/刪除' },
      ],
    };
  },
  computed: {
    ...mapState(['articles']),
  },
  methods: {
    ...mapActions(['deleteArticle']),
    editArticle(id) {
      this.$router.push({
        name: 'AdminEdit',
        params: { id },
      });
    },
    delArticle(id) {
      const ensure = window.confirm('是否確定刪除？');
      if (ensure) {
        this.deleteArticle(id);
      }
    },
  },
};
</script>
