<template>
  <v-simple-table >
    <template v-slot:default>
      <thead>
      <tr>
        <th class="text-left">Zi\Lectie</th>
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
        <td>Luni</td>
        <td><span class="lessonBox red">P</span></td>
        <td><span class="lessonBox red">P</span></td>
        <td><span class="lessonBox red">S</span></td>
        <td><span class="lessonBox red">P</span></td>
        <td><span class="lessonBox red">S</span></td>
        <td><span class="lessonBox red"></span></td>

      </tr>
      <tr >
        <td>Marti</td>
        <td><span class="lessonBox red">P</span></td>
        <td><span class="lessonBox red">P</span></td>
        <td><span class="lessonBox red">S</span></td>
        <td><span class="lessonBox red">P</span></td>
        <td><span class="lessonBox red">S</span></td>
        <td><span class="lessonBox red"></span></td>

      </tr>
      <tr >
        <td>Miercuri</td>
        <td><span class="lessonBox red">P</span></td>
        <td><span class="lessonBox red">P</span></td>
        <td><span class="lessonBox red">S</span></td>
        <td><span class="lessonBox red">P</span></td>
        <td><span class="lessonBox red">S</span></td>
        <td><span class="lessonBox red"></span></td>

      </tr>
      <tr >
        <td>Joi</td>
        <td><span class="lessonBox red">P</span></td>
        <td><span class="lessonBox red">P</span></td>
        <td><span class="lessonBox yellow">S</span></td>
        <td><span class="lessonBox blue">P</span></td>
        <td><span class="lessonBox red">S</span></td>
        <td><span class="lessonBox red"></span></td>

      </tr>
      <tr >
        <td>Vineri</td>
        <td><span class="lessonBox red">P</span></td>
        <td><span class="lessonBox red">P</span></td>
        <td><span class="lessonBox red">S</span></td>
        <td><span class="lessonBox red">P</span></td>
        <td><span class="lessonBox red">S</span></td>
        <td><span class="lessonBox red"></span></td>

      </tr>
      <tr >
        <td>Sambata</td>
        <td><span class="lessonBox red">P</span></td>
        <td><span class="lessonBox red">P</span></td>
        <td><span class="lessonBox red">S</span></td>
        <td><span class="lessonBox red">P</span></td>
        <td><span class="lessonBox red">S</span></td>
        <td><span class="lessonBox red"></span></td>

      </tr>
      <tr >
        <td>Duminica</td>
        <td><span class="lessonBox green">P</span></td>
        <td><span class="lessonBox orange">P</span></td>
        <td><span class="lessonBox red">S</span></td>
        <td><span class="lessonBox red">P</span></td>
        <td><span class="lessonBox red">S</span></td>
        <td><span class="lessonBox red"></span></td>

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
    margin:0;
    color:white;
    backround: yellow;
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
