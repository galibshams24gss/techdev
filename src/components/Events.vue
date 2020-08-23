<template>
  <v-container>
    <v-card color="#385F73" dark id="dataholder">
    <v-card-title>
      Events
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>

    <v-data-table
    :headers="headers"
    :items="eventdData"
    :search="search"
    class="elevation-1"
  >
    <template v-slot:top>
        <v-dialog v-model="dialog" max-width="800px">
          <v-card
          :loading="loading"
          class="mx-auto my-12"
          max-width="800"
          id="dataholder"
        >
    <v-img
      height="250"
      v-bind:src="viewedItem.Image"
    ></v-img>

    <v-container>
      <v-row dense>
        <v-col cols="12">
          <v-card
            color="#006064"
            dark
          >
            <v-card-title class="headline">{{viewedItem.Title}}</v-card-title>
          </v-card>
        </v-col>

        <v-col cols="12">
          <v-card
            color="#03A9F4"
            dark
          >
            <v-card-title class="headline">Time</v-card-title>
            <v-card-subtitle>{{viewedItem.Time}}</v-card-subtitle>
          </v-card>
        </v-col>

        <v-col cols="12">
          <v-card
            color="#385F73"
            dark
          >
            <v-card-title class="headline">Location</v-card-title>
            <v-card-subtitle>{{viewedItem.City}}, {{viewedItem.State}}, {{viewedItem.Country}}</v-card-subtitle>
          </v-card>
        </v-col>

        <v-col cols="12">
          <v-card
            color="#AEEA00"
            dark
          >
            <v-card-title class="headline">Available Seats</v-card-title>

            <v-card-subtitle>
              <div class="align-center">
                <v-chip color="#006064">{{viewedItem.SeatOne}}</v-chip>
                &nbsp;
                <v-chip color="#03A9F4">{{viewedItem.SeatTwo}}</v-chip>
              </div>
            </v-card-subtitle>
          </v-card>
        </v-col>

        <v-col cols="12">
          <v-card
            color="pink"
            dark
          >
            <v-card-actions>
              <v-btn text @click="close">Close</v-btn>
            </v-card-actions>
            </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
        </v-dialog>
    </template>
    <template v-slot:item.action="{ item }">
       <div class="text-center">
        <v-btn rounded color="lime accent-4" dark @click="viewItem(item)">Event Details</v-btn>
      </div>
    </template>

    <template v-slot:no-results>
        <v-alert :value="true" color="error" icon="search">
          Your search for "{{ search }}" found no results.
        </v-alert>
      </template>
  </v-data-table>
    </v-card>
  </v-container>
</template>

<script>
  export default {
    name: 'Events',

    data: () => ({
      search: '',
      dialog: false,
      headers: [
        {
          text: 'Title',
          align: 'center',
          sortable: false,
          value: 'Title',
        },
        { text: 'Time', align: 'center', value: 'Time' },
        { text: 'Action', align: 'center', value: 'action', sortable: false },
      ],
      viewedIndex: -1,
      viewedItem: {
        Title: '',
        Time: '',
        Image: '',
        City: '',
        State: '',
        Country: '',
        SeatOne: '',
        SeatTwo: ''
      },
      defaultItem: {
        Title: '',
        Time: '',
        City: '',
        State: '',
        Country: '',
        SeatOne: '',
        SeatTwo: ''
      },
      loading: false
    }),

    computed: {
      events(){
        return this.$store.getters['datastore/events'];
      },

      eventdData(){
          const dataArr = [];
          const dataProc = this.events;
          dataProc.forEach(function(obj) {
            const title = obj.Title;
            const time = obj.Time;
            const image = obj.Image;
            const city = obj.Location.City;
            const state = obj.Location.State;
            const country = obj.Location.Country;
            const seats = obj.AvailableSeats;
            let seatOne = "NA";
            let seatTwo = "NA";
            if(typeof seats === 'undefined' || seats === null){
                seatOne = "NA";
                seatTwo = "NA";
              } else{
                seats.forEach(function(obj2){
                seatOne = obj2.id;
                seatTwo = obj2.id;
            });
          }
            dataArr.push({Title: title, Time: time, Image: image, City: city, State: state, Country: country, SeatOne: seatOne, SeatTwo: seatTwo})
          });
          return dataArr;
      }
    },

    watch: {
      dialog (val) {
        val || this.close()
      }
    },

    mounted(){
      this.events;
    },

    created () {},

    methods: {
      viewItem (item) {
        this.viewedIndex = this.eventdData.indexOf(item)
        this.viewedItem = Object.assign({}, item)
        this.dialog = true
      },

      close () {
        this.dialog = false
      }
    }
  }
</script>

<style lang="scss">
  #dataholder {
    border-radius: 20px;
  }
</style>
