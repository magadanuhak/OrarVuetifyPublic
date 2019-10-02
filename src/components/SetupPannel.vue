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
      year : 2019 ,
      weeks: [],
      days: [
          "Luni",
          "Marți",
          "Miercuri",
          "Joi",
          "Vineri",
          "Sîmbătă",
          "Duminică"
      ],
      semesters:[
          1,
          2
      ],
      startDate: {
          semester1:"",
          semester2:"",
      },
    }),
  watch: {

  },
  methods: {
      generateWeeks(semester){
          let startDate = new Date(this.startDate[semester]);
          for(let i = 0; i < 23; i++ ){
              let date = this.addWeeks(startDate, i);
              let formatedDate =  date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear();
              console.log(formatedDate + " - " + i);
//                this.weeks.push(
//                    {
//
//                    }
//                );
          }
      },
      addWeeks(dt, n){
              return new Date(dt.setDate(dt.getDate() + (n * 7)));
      },
      getSemester(){
          let semester = 1;
          let currentDate =  new Date();
          let semester2Date = new Date(this.startDate.semester2);
          console.log(semester2Date);
          console.log();
          console.log(currentDate);
          if( +currentDate >=  +semester2Date) {
              semester = 2;
          }
          return semester;
      }
  },
  computed:{

  },
  mounted(){

      this.year = new Date().getFullYear();
      this.startDate.semester1 =  this.year + "-09-01";
      this.startDate.semester2 = (parseInt(this.year) + 1) + "-02-03";
      this.generateWeeks("semester"+ this.getSemester());
  },

};
</script>
