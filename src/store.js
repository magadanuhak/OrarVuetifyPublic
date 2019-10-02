import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    searchResults: []
  },
  // getters: {
  //   getResults: state => state.searchResults;
  // },
  mutations: {
    FETCH_RESULTS(state, results) {
        state.searchResults = results
    }
  },
  actions: {
    fetchResults({ commit }, { self })  {         
        // Vue.http.get("http://ok.api.md?name=" + self.searchText )
        // .then((response) => {
        //     commit("FETCH_RESULTS", response.body);
        //     self.filterResults();
        // })
        // .catch((error) => {
        //     console.log(error.statusText)
        // }); e corect codu comentat
        // let data = [
        // 		{
        // 			"name" : "IS31Z",
        // 			"type" : "g"
        // 		},
        // 		{
        // 			"name" : "Daniel Maga",
        // 			"type" : "p"
        // 		}
        // 	];
        // commit("FETCH_RESULTS", data );

    }
  }
})
