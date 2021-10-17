<template>
  <div>
    <div class="flex justify-around items-center my-3">
          <div class="bg-gray-200 p-2 rounded shadow-md">
            <h3>Total Confirmed</h3>
            <p>{{singleConfirmed}}</p>
          </div>
          <div class="bg-gray-200 p-2 rounded shadow-md">
            <h3>Active Case</h3>
            <p>{{singleActive}}</p>
          </div>
          <div class="bg-gray-200 p-2 rounded shadow-md">
            <h3>Total Deaths</h3>
            <p>{{singleDeath}}</p>
          </div>
        </div>
  </div>
</template>

<script>
  import Moment from "moment";
  export default {
    props: {
      iso: {
        type: String
      },
      url: {
        type: String
      }
    },
    data() {
      return {
        singleDate: '',
        singleActive: 0,
        singleConfirmed: 0,
        singleDeath: 0,
        currentDate: ''
      }
    },
    methods: {
      async fetchSingleCountry() {
        const res = await fetch(`${this.url}/reports/total?date${this.currentDate}&iso=${this.iso}`)
        const data = await res.json()
        const {date, active, confirmed, deaths} = data.data
        this.singleDate = date
        this.singleActive = active
        this.singleConfirmed = confirmed
        this.singleDeath = deaths
      }
    },
    mounted () {
      this.currentDate = Moment().subtract(1, "days").format("YYYY-MM-DD")
    },
    updated () {
      // fetch all data from single country
      this.fetchSingleCountry()
    },
  }
</script>

<style lang="scss" scoped>

</style>