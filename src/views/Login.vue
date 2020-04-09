<template>
  <div>
    <b-form>
      <b-form-group id="input-group-1" label="輸入管理員帳號"
        label-for="input-1">
        <b-form-input id="input-1" v-model="form.account"
          type="text"
          required placeholder="Enter Account">
        </b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="登入密碼" label-for="input-2">
        <b-form-input id="input-2" v-model="form.password"
          type="password"
          required>
        </b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary" @click.prevent="routerToAdmin">Submit</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        account: '',
        password: '',
      },
    };
  },
  methods: {
    routerToAdmin() {
      this.$router.push({ name: 'AdminHome' });
    },
  },
};
</script>
