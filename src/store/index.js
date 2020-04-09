import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLoading: false,
    articles: [],
    search: '',
  },
  getters: {
    getArticleById(state) {
      return (id) => state.articles.find((item) => item.id === id);
    },
    getArticlesBySearch(state) {
      let result = [];
      if (state.search.trim().length === 0) {
        result = [...state.articles];
      } else {
        result = [...state.articles.filter((item) => item.title.includes(state.search))];
      }

      return result;
    },
  },
  mutations: {
    LOADING(state, status) {
      state.isLoading = status;
    },
    SET_ARTICLES(state, payload) {
      state.articles = payload;
    },
    CHANGE_SEARCH(state, payload) {
      state.search = payload;
    },
  },
  actions: {
    async fetchArticles({ commit }) {
      commit('LOADING', true);
      const api = 'https://us-central1-expressapi-8c039.cloudfunctions.net/app/article';
      const response = await axios.get(api);
      commit('LOADING', false);
      commit('SET_ARTICLES', response.data.data);
    },
    changeSearch({ commit }, payload = '') {
      commit('CHANGE_SEARCH', payload);
    },
  },
  modules: {
  },
});
