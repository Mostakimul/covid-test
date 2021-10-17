<template>
  <div class="bg-white text-center mb-5 rounded shadow-lg py-5 m-4">
    <h3>Chart</h3>
    <p>Data from: ({{ currentDate }} - {{ nientyDaysAgo }})</p>
    <area-chart :data="chartData"></area-chart>
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
  methods: {
    fethPreviousData() {
      this.allDates.map((date) => {
        this.fetchApi(date)
      })
    },
    fetchApi(date) {
      fetch(`${this.url}/reports/total?date=${date}&iso=${this.iso}`)
        .then((res) => res.json())
        .then((data) => this.extractData(data.data))
    },
    extractData(data) {
      const { date, confirmed } = data
      this.chartData[date] = confirmed
    }

  },
  mounted() {
    this.currentDate = Moment().subtract(1, "days").format("YYYY-MM-DD")
    this.nientyDaysAgo = Moment().subtract(90, "days").format("YYYY-MM-DD")

    // compute range of 90 days
    const moment = extendMoment(Moment);
    const range = moment.range(this.nientyDaysAgo, this.currentDate);
    const days = Array.from(range.by("days"));
    days.map((d) => this.allDates.push(d.format("YYYY-MM-DD")));
  },
  updated() {
    // fetching previous 90days data
    this.fethPreviousData()
  },
}
</script>

<style lang="scss" scoped>
</style>