<template>
  <v-container>
    <v-autocomplete
        v-model="searchText"
        solo-inverted
        flat
        hide-details
        :items="searchResults"
        :loading="loadingPersons"
        :search-input.sync="search"
        hide-no-data
        clearable
        cache-items
        hide-no-data
        hide-details
        return-object
        item-text="name"
        item-value="id"
        label="Cauta"
        prepend-inner-icon="mdi-search"
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
      results: [],
      search: null,
      loading: false,

    }),
  watch: {
    search (val) {
      val && val !== this.select && this.querySelections(val)
    },
  },
  methods: {
    querySelections (v) {
      this.loading = true
        this.$store.dispatch("fetchResults", { self: this }) 
        this.loading = false
      }
    },
    filterResults(){
      this.items = this.this.$store.getters.getResults.filter(e => {
          return (e || '').toLowerCase().indexOf((v || '').toLowerCase()) > -1
        })
    }
  },
  
};
</script>
