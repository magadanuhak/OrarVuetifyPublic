<template>
    <v-expansion-panels popout>
      <v-expansion-panel>
        <v-expansion-panel-header>Setari</v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-container>
            <v-col>
              <v-select

                      label="Saptamina"
                      outlined
                      :items="weeks"
              >

              </v-select>
            </v-col>
            <v-col>
              <v-select

                      label="Ziua"
                      outlined
                      :items="days"
              >

              </v-select>
            </v-col>
            <v-col>
              <v-select

                      label="Semestru"
                      outlined
                      :items="semesters"
              >

              </v-select>
            </v-col>
          </v-container>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
</template>
<style scoped>

</style>

<script>
export default {
  data: () => ({
    year: 2019,
    weeks: [
      '1 - 12.11.2019',
      '2 - 17.11.2019',
      '3 - 25.11.2019'
    ],
    days: [
      'Luni',
      'Marți',
      'Miercuri',
      'Joi',
      'Vineri',
      'Sîmbătă',
      'Duminică'
    ],
    semesters: [
      1,
      2
    ],
    semester: 1,
    week: 1,
    week_day: 1
  }),
  watch: {

  },
  methods: {
  },
  computed: {

  },
  mounted () {
    this.$store.commit('updateSemester', this.semester)
    this.$store.commit('updateWeek', this.week)
    this.$store.commit('updateWeekDay', this.week_day)
  }

}
</script>
