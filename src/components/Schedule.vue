<template>
  <v-container>
    <v-simple-table  light>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">Lecții</th>

          </tr>
        </thead>

        <tbody>
          <v-container class=" ">

          <v-row v-for="lessons in schedule"
              justify="center"
              no-gutters
              >

            <v-col v-for="lesson in lessons">
               <v-card
                    outlined

                >
      <div class=" centered-text lesson-name text-field" >{{lesson.lesson}}</div>
      <v-card-text class="pb-0 mb-0 classroom text-field"><span > Auditoriu : {{lesson.auditory}}</span></v-card-text>
      <v-card-text class="group-name text-field" v-if="lesson.group_part == 'all'">{{lesson.group}}</v-card-text>
      <v-card-text class="group-name text-field" v-if="lesson.group_part != 'all'">{{lesson.group_part}}</v-card-text>

    </v-card>
            </v-col>

          </v-row>
            </v-container>
        </tbody>
      </template>
    </v-simple-table>
  </v-container>
</template>
<style scoped>
  .centered-text{
    text-align:center!important;
  }
  .lesson-name{
    font-size:16px;
    margin-top:2px;

    font-weight:800;
  }
  .group-name{
    font-size:16px;
  }
  .classroom{

  }
  .text-field{
    padding:2px;
    margin-left:8px;
    text-align:center;
  }
  .no-lesson{
    outline-color: red!important;
  }
</style>

<script>
import Vue from 'vue'

export default {
  data: () => ({
    schedule: {}
  }),
  mounted () {
    this.$store.watch(
      (state, getters) => getters.getID,
      (newValue, oldValue) => {
        console.log(`Updating from ${oldValue} to ${newValue}`)
        this.$store.dispatch('fetchApi')
      }
    )
    this.$store.watch(
      (state, getters) => getters.getSchedule,
      (newValue, oldValue) => {
        this.schedule = this.getSchedule()
      }
    )
  },
  methods: {
    getSchedule () {
      return JSON.parse(this.$store.state.schedule)
    }
  }

}
</script>
