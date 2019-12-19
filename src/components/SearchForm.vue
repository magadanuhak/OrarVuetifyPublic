<template>
  <v-container>
    <v-autocomplete
        v-model="searchText"
        solo-inverted
        flat
        hide-details
        v-bind:items="searchResults"
        :loading="loading"
        clearable
        item-text="name"
        item-value="id"
        cache-items
        label="Cauta"
        prepend-inner-icon="mdi-search"
        :select="this.setID(this.searchText)"
      >
    </v-autocomplete>
    <div class="flex-grow-1"></div>
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
    searchText: '',
    searchResults: [],
    results: [],
    search: null,
    loading: false

  }),
  methods: {
    setID (id) {
      this.$store.commit('updateID', id)
    },
    getFromStore () {
      return this.$store.state.id
    }
  },
  created () {
    let res = this
    this.loading = true
    let xhttp = new XMLHttpRequest()
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        // Typical action to be performed when the document is ready:
        res.searchResults = JSON.parse(xhttp.responseText)
        res.loading = false
      }
    }
    xhttp.open('GET', localStorage.getItem('api') + '/names', true)
    xhttp.send()
  }

}
</script>
