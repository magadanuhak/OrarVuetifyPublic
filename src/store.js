import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    searchText: '',
    schedule: '',
    id: '',
    week: '',
    weekDay: '',
    semester: ''
  },
  getters: {
    getSearchText: state => state.searchText,
    getSchedule: state => state.schedule,
    getID: state => state.id,
    getWeek: state => state.week,
    getWeekDay: state => state.id,
    getSemester: state => state.semester
  },
  mutations: {
    updateSearchText (state, status) {
      Vue.set(state, 'searchText', status)
    },
    updateSchedule (state, status) {
      Vue.set(state, 'schedule', status)
    },
    updateID (state, status) {
      Vue.set(state, 'id', status)
    },
    updateWeek (state, status) {
      Vue.set(state, 'week', status)
    },
    updateWeekDay (state, status) {
      Vue.set(state, 'weekDay', status)
    },
    updateSemester (state, status) {
      Vue.set(state, 'semester', status)
    }
  },
  actions: {
    async fetchApi ({ commit, state }) {
      console.log('ok')

      let xhttp = new XMLHttpRequest()
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          commit('updateSchedule', xhttp.responseText)
        }
      }
      // console.log(this.getID)
      xhttp.open('GET', localStorage.getItem('api') + '/schedule/' + state.id + '/semester/' + state.semester + '/week/' + state.week + '/week_day/' + state.weekDay, true)
      xhttp.send()
    }
  }
})
