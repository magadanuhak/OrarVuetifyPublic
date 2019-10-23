import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    searchText: ''
  },
  getters: {
    getSearchText: state => state.searchText
  },
  mutations: {
    FETCH_RESULTS(state, searchText) {
        state.searchText = searchText
    }
  },
})
