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
    
          <v-row v-for="lesson in schedule" 
              :key="lesson.name"
              justify="center" 
              no-gutters
              >
            
            <v-col v-for="subgroup in lesson.subgroup"
                   >
               <v-card    
                    outlined
                              
                >
      <div class=" centered-text lesson-name text-field" >{{subgroup.lesson}}</div>
      <v-card-text class="pb-0 mb-0 classroom text-field"><span v-if="subgroup.lesson"> Auditoriu : {{subgroup.auditorium}}</span></v-card-text>
      <v-card-text class="group-name text-field">{{subgroup.name}}</v-card-text>
        
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
export default {
  data: () => ({
      schedule: [
        {
          subgroup:[
            {
              name : "Subgrupa 1",
              auditorium: "101",
              lesson : "Programare Web"
            },
            {
              name : "Subgrupa 1",
              auditorium: "101",
              lesson : "Programare Web"
            },
          ]
        },
        {
          subgroup:[
            {
              name : "Subgrupa 1",
              auditorium: "101",
              lesson : "Programare Web"
            }
            
          ]
        },
        {
          subgrup:[
            {}
            
          ]
        },
       
      ]
    })
  
};
</script>
