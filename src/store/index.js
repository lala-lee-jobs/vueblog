import Vue from 'vue';
import Vuex from 'vuex';
import db from './firestore';

Vue.use(Vuex);
const ref = db.collection('Articles');

export default new Vuex.Store({
  state: {
    isLoading: false,
    articles: [],
    search: '',
    focusID: null,
  },
  getters: {
    getArticleById(state) {
      if (state.articles.length) {
        return state.articles.find((item) => item.id === state.focusID);
      }
      return [];
    },
    getArticlesBySearch(state) {
      if (state.articles.length && state.search.trim().length) {
        return [...state.articles.filter((item) => item.title.includes(state.search))];
      }
      return [...state.articles];
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
    ADD_ARTICLE(state, payload) {
      state.articles = [payload, ...state.articles];
    },
    CHANGE_FOCUSID(state, payload) {
      state.focusID = payload;
    },
  },
  actions: {
    async fetchArticles({ commit }) {
      commit('LOADING', true);
      const result = await ref.get();
      const payload = [];
      result.forEach((item) => payload.push({ id: item.id, ...item.data() }));
      commit('LOADING', false);
      commit('SET_ARTICLES', payload);
    },
    changeSearch({ commit }, payload = '') {
      commit('CHANGE_SEARCH', payload);
    },
    changeFoucusID({ commit }, payload) {
      commit('CHANGE_FOCUSID', payload);
    },
    async addArticle({ commit }, payload) {
      const addRef = await ref.add(payload);
      const newArticle = { ...payload, id: addRef.id };
      commit('ADD_ARTICLE', newArticle);
    },
  },
  modules: {
  },
});
