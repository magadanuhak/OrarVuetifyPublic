<template>
  <v-app id="app">
    <v-app-bar
      app
      clipped-left
      color="amber"
    >
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <span class="title ml-3 mr-5">Orar&nbsp;<span class="font-weight-light"></span></span>
      <SearchForm ></SearchForm>
    </v-app-bar>
    <v-navigation-drawer
      :width="425"
      v-model="drawer"
      app
      clipped
      color="grey lighten-4"
    >
      <SetupPannel>
      </SetupPannel>
      <v-container>
        <Calendar>
        </Calendar>
      </v-container>
    </v-navigation-drawer>
    <v-content>
      <v-container
        fluid
        class="grey lighten-4 "
      >
        <v-row>
          <Schedule>
          </Schedule>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Schedule from './components/Schedule'
import SearchForm from './components/SearchForm'
import SetupPannel from './components/SetupPannel'
import Calendar from './components/Calendar.vue'
export default {
  props: {
    source: String
  },
  components: {
    Schedule,
    SearchForm,
    SetupPannel,
    Calendar
  },
  data: () => ({
    drawer: null,
    scheduleDate: null,
    currentSchedule: null,
    semester: 1,
    week: 1,
    week_day: 1,
    schedule: {
      'name': null,
      'type': null
    }
  }),
  created () {
    // if (localStorage.hasOwnProperty('schedule')) {
    //   this.schedule = JSON.parse(localStorage.getItem('schedule'))
    // }
  },
  methods: {

  }
}
</script>

<style>
#keep .v-navigation-drawer__border {
  display: none
}
</style>
