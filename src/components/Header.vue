<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand href="#">LalaCoding</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-navbar-nav>
            <b-nav-item to="/">Home</b-nav-item>
            <b-nav-item to="/about">About</b-nav-item>
            <b-nav-item to="/login">Login</b-nav-item>
          </b-navbar-nav>
          <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2"
              placeholder="Search"
              v-model="search">
            </b-form-input>
            <b-button size="sm" class="my-2 my-sm-0"
              @click.prevent = "changeSearch(search)"
              type="submit">Search</b-button>
          </b-nav-form>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      search: '',
    };
  },
  methods: {
    ...mapActions(['changeSearch']),
  },
  watch: {
    search() {
      console.log('search', this.search);
      if (this.search.trim().length === 0) {
        this.changeSearch();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
  .nav-item {
    color: #ffffff;
    margin-right: 1.2rem;
  }
</style>
