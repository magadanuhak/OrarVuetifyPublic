<template>
  <v-simple-table >
    <template v-slot:default>
      <thead>
      <tr>
        <th class="text-left">Zi</th>
        <th class="text-left">1</th>
        <th class="text-left">2</th>
        <th class="text-left">3</th>
        <th class="text-left">4</th>
        <th class="text-left">5</th>
        <th class="text-left">6</th>
        <th class="text-left">7</th>
        <th class="text-left">8</th>
      </tr>
      </thead>
      <tbody>
      <tr >
        <td>L</td>
        <td>
          <v-tooltip top>
            <template v-slot:activator="{ on }">
              <v-btn class="lessonBox" light v-on="on">p</v-btn>
            </template>
            <span>
              informatii
            </span>
          </v-tooltip>
        </td>
        <td><span class="lessonBox ">P</span></td>
        <td><span class="lessonBox ">S</span></td>
        <td><span class="lessonBox ">P</span></td>
        <td><span class="lessonBox ">S</span></td>
        <td><span class="lessonBox "></span></td>

      </tr>
      <tr >
        <td>Ma</td>
        <td><span class="lessonBox ">P</span></td>
        <td><span class="lessonBox ">P</span></td>
        <td><span class="lessonBox ">S</span></td>
        <td><span class="lessonBox ">P</span></td>
        <td><span class="lessonBox ">S</span></td>
        <td><span class="lessonBox "></span></td>

      </tr>
      <tr >
        <td>Mi</td>
        <td><span class="lessonBox ">P</span></td>
        <td><span class="lessonBox ">P</span></td>
        <td><span class="lessonBox ">S</span></td>
        <td><span class="lessonBox ">P</span></td>
        <td><span class="lessonBox ">S</span></td>
        <td><span class="lessonBox "></span></td>

      </tr>
      <tr >
        <td>J</td>
        <td><span class="lessonBox ">P</span></td>
        <td><span class="lessonBox ">P</span></td>
        <td><span class="lessonBox ">S</span></td>
        <td><span class="lessonBox ">P</span></td>
        <td><span class="lessonBox ">S</span></td>
        <td><span class="lessonBox "></span></td>

      </tr>
      <tr >
        <td>V</td>
        <td><span class="lessonBox ">P</span></td>
        <td><span class="lessonBox ">P</span></td>
        <td><span class="lessonBox ">S</span></td>
        <td><span class="lessonBox ">P</span></td>
        <td><span class="lessonBox ">S</span></td>
        <td><span class="lessonBox "></span></td>

      </tr>
      <tr >
        <td>S</td>
        <td><span class="lessonBox ">P</span></td>
        <td><span class="lessonBox ">P</span></td>
        <td><span class="lessonBox ">S</span></td>
        <td><span class="lessonBox ">P</span></td>
        <td><span class="lessonBox ">S</span></td>
        <td><span class="lessonBox "></span></td>

      </tr>
      <tr >
        <td>D</td>
        <td><span class="lessonBox ">P</span></td>
        <td><span class="lessonBox ">P</span></td>
        <td><span class="lessonBox ">S</span></td>
        <td><span class="lessonBox ">P</span></td>
        <td><span class="lessonBox ">S</span></td>
        <td><span class="lessonBox "></span></td>

      </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>
<style scoped>
  .red{
    background:red;
  }
  .lessonBox{
    padding:1px;


  }
</style>

<script>
export default {
  data: () => ({
      lessons: []
    }),
  watch: {

  },
  methods: {

  },
  mounted(){

  },

};
</script>
