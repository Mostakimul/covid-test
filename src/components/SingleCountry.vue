<template>
  <div>
    <div class="flex justify-around items-center my-3">
          <div class="bg-gray-200 p-2 rounded shadow-md">
            <h3>Total Confirmed</h3>
            <p>10000</p>
          </div>
          <div class="bg-gray-200 p-2 rounded shadow-md">
            <h3>Active Case</h3>
            <p>10000</p>
          </div>
          <div class="bg-gray-200 p-2 rounded shadow-md">
            <h3>Total Deaths</h3>
            <p>10000</p>
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
    mounted () {
      this.currentDate = Moment().subtract(1, "days").format("YYYY-MM-DD")
    },
  }
</script>

<style lang="scss" scoped>

</style>