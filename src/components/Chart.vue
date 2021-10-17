<template>
  <div class="bg-white text-center mb-5 rounded shadow-lg py-5">
    <h3>Chart</h3>
    <area-chart :data="{'2017-01-01 00:00:00 -0800': 2, '2017-01-01 00:01:00 -0800': 5}"></area-chart>
  </div>
</template>

<script>
import Moment from "moment";
import { extendMoment } from "moment-range";
  export default {
    props: {
      iso: {
        type: String,
      },
      url: {
        type: String
      }
    },
    data() {
      return {
        allDates: [],
        chartData: {},
        currentDate: '',
        nientyDaysAgo: ''
      }
    },
    mounted () {
      this.currentDate = Moment().subtract(1, "days").format("YYYY-MM-DD")
      this.nientyDaysAgo = Moment().subtract(90, "days").format("YYYY-MM-DD")

      // compute range
      const moment = extendMoment(Moment);
      const range = moment.range(this.nientyDaysAgo, this.currentDate);
      const days = Array.from(range.by("days"));
      days.map((d) => this.allDates.push(d.format("YYYY-MM-DD")));
    },
  }
</script>

<style lang="scss" scoped>

</style>