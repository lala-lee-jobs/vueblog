<template>
  <div>
    <b-form>
      <b-form-group id="input-group-1" label="輸入文章標題" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="formData.title"
          type="text"
          required
          placeholder="Enter Title"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="文章內容" label-for="input-2">
        <b-form-textarea
          id="textarea"
          v-model="formData.content"
          placeholder="Enter Content..."
          rows="3"
          max-rows="6"
        ></b-form-textarea>
      </b-form-group>
      <div>
        <b-button type="submit" variant="primary" @click.prevent="submitFormData">送出</b-button>
        <b-button variant="danger" @click.prevent="resetFormData">重置</b-button>
      </div>
    </b-form>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'AdminAdd',
  data() {
    return {
      formData: {
        title: '',
        date: '',
        content: '',
      },
    };
  },
  methods: {
    ...mapActions(['addArticle']),
    resetFormData() {
      this.formData = {
        title: '',
        date: '',
        content: '',
      };
    },
    submitFormData() {
      this.formData.date = new Date().getTime();
      this.addArticle(this.formData);
      this.$router.push({ name: 'AdminHome' });
    },
  },
};
</script>
