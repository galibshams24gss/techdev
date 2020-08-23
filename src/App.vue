<template>
<v-app>
    <v-app-bar
      color="indigo darken-4"
      dark
    >
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <v-toolbar-title>Tech-Assessment</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-avatar tile>
        <img src="@/assets/go1_logo.png" id="go_one_logo">
      </v-avatar>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
      class="lime accent-4"
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          active-class="teal--text text--darken-4"
        >
          <v-list-item exact>
            <v-list-item-icon>
              <v-icon color="#006064">mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title><router-link to="/">Home</router-link></v-list-item-title>
          </v-list-item>

          <v-list-item exact>
            <v-list-item-icon>
              <v-icon color="#006064">mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title><router-link to="/about">About</router-link></v-list-item-title>
          </v-list-item>

        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <router-view></router-view>
    </v-main>

    <v-footer
    dark
    padless
  >
    <v-card
      class="flex"
      flat
      tile
    >
      <v-card-title class="blue">

        <v-spacer></v-spacer>

        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4"
          dark
          icon
        >
          <v-icon size="24px">{{ icon }}</v-icon>
        </v-btn>
        <v-spacer></v-spacer>
      </v-card-title>

      <v-card-text class="py-2 white--text text-center">
        &copy;{{ new Date().getFullYear() }} — <strong>Copyright</strong>
      </v-card-text>
    </v-card>
  </v-footer>
  </v-app>
</template>

<script>
  export default {
    data: () => ({
      drawer: false,
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
      tile: false
    }),

    methods: {
        detectBrowser(){
            this.result = navigator.userAgent;
            if(navigator.userAgent.indexOf("Firefox") !=-1){
                console.log("Mozilla Firefox");
            }
        }
    },

    mounted(){
        this.detectBrowser()
    },
  }
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

#go_one_logo {
  border-radius: 10px;
}
</style>
