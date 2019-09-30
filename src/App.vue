<template>
  <v-app id="app">
    <v-app-bar
      app
      clipped-left
      color="amber"
    >
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <span class="title ml-3 mr-5">Orar&nbsp;<span class="font-weight-light"></span></span>
      <SearchForm></SearchForm>
      
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      app
      clipped
      color="grey lighten-4"
    >
      <v-list
        dense
        class="grey lighten-4"
      >
        <template v-for="(item, i) in items">
          <v-row
            v-if="item.heading"
            :key="i"
            align="center"
          >
            <v-col cols="6">
              <v-subheader v-if="item.heading">
                {{ item.heading }}
              </v-subheader>
            </v-col>
            <v-col
              cols="6"
              class="text-right"
            >
              <v-btn
                small
                text
              >edit</v-btn>
            </v-col>
          </v-row>
          <v-divider
            v-else-if="item.divider"
            :key="i"
            dark
            class="my-4"
          ></v-divider>
          <v-list-item
            v-else
            :key="i"
            @click=""
          >
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title class="grey--text">
                {{ item.text }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
    </v-navigation-drawer>

    <v-content>
      <v-container
        fluid
        class="grey lighten-4 fill-height"
      >
        <v-row
          
          align="center"
        >
          <Schedule>
          </Schedule>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
  import Schedule from './components/Schedule';
  import SearchForm from './components/SearchForm';
  export default {
    props: {
      source: String,
    },
    components: {
      Schedule,
      SearchForm,
    }

    ,
    data: () => ({
      drawer: null,
      items: [
        { icon: ' mdi-lightbulb_outline', text: 'Notes' },
        { icon: ' mdi-touch_app', text: 'Reminders' },
        { divider: true },
        { heading: 'Labels' },
        { icon: 'mdi mdi-add', text: 'Create new label' },
        { divider: true },
        { icon: 'mdi mdi-archive', text: 'Archive' },
        { icon: 'mdi-delete', text: 'Trash' },
        { divider: true },
        { icon: 'mdi-settings', text: 'Settings' },
        { icon: 'mdi-delete', text: 'Trash' },
        { icon: 'mdi-help', text: 'Help' },
        { icon: 'phonelink', text: 'App downloads' },
        { icon: 'keyboard', text: 'Keyboard shortcuts' },
      ],
    }),
  }
</script>

<style>
#keep .v-navigation-drawer__border {
  display: none
}
</style>


