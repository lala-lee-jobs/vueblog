import Vue from 'vue';
import Vuex from 'vuex';
import db from './firestore';

Vue.use(Vuex);
const ref = db.collection('Articles');

export default new Vuex.Store({
  state: {
    isLoading: false,
    articles: [],
    articleChanged: false,
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
    CHANGE_SEARCH(state, payload) {
      state.search = payload;
    },
    CHANGE_FOCUSID(state, payload) {
      state.focusID = payload;
    },
    SET_ARTICLES(state, payload) {
      state.articles = payload;
    },
    ADD_ARTICLE(state, payload) {
      state.articles = [payload, ...state.articles];
      state.articleChanged = !state.articleChanged;
    },
    UPDATE_ARTICLE(state, { id, article }) {
      const index = state.articles.findIndex((item) => item.id === id);
      state.articles[index] = article;
      state.articleChanged = !state.articleChanged;
    },
    DELETE_ARTICLE(state, id) {
      const index = state.articles.findIndex((item) => item.id === id);
      state.articles.splice(index, 1);
    },
  },
  actions: {
    changeSearch({ commit }, payload = '') {
      commit('CHANGE_SEARCH', payload);
    },
    changeFoucusID({ commit }, payload) {
      commit('CHANGE_FOCUSID', payload);
    },
    async fetchArticles({ commit }) {
      commit('LOADING', true);
      const result = await ref.get();
      const payload = [];
      result.forEach((item) => payload.push({ id: item.id, ...item.data() }));
      commit('LOADING', false);
      commit('SET_ARTICLES', payload);
    },
    async addArticle({ commit }, payload) {
      const addRef = await ref.add(payload);
      const newArticle = { ...payload, id: addRef.id };
      commit('ADD_ARTICLE', newArticle);
    },
    async updateArticle({ commit }, payload) {
      const docRef = ref.doc(payload.id);
      await docRef.update(payload.article);
      commit('UPDATE_ARTICLE', payload);
    },
    async deleteArticle({ commit }, id) {
      commit('LOADING', true);
      const docRef = ref.doc(id);
      await docRef.delete();
      commit('DELETE_ARTICLE', id);
      commit('LOADING', false);
    },
  },
  modules: {
  },
});
