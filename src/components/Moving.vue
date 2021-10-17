<template>
  <div class="bg-white text-center mb-5 rounded shadow-lg py-5 m-4">
    <h3 class="text-center">Moving Avarage: {{avarage}}</h3>
    <div class="flex justify-center items-center">
      <input v-model="firstDate" type="date"  class="m-3">
      <input v-model="secondDate" type="date" class="m-3">
      <button @click="showMoving">Calculate</button>
    </div>
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
        avarage: 0,
        firstDate: '',
        secondDate: '',
        userDates: [],
        allMovings: []
      }
    },
    methods: {
      calculateMoving() {
        this.userDates.map((date) => {
          this.fetchRangeData(date)
        })
      },
      fetchRangeData(date) {
        fetch(`${this.url}/reports/total?date=${date}&iso=${this.iso}`)
        .then((res) => res.json())
        .then((data) => this.assignData(data.data))
      },
      assignData(data) {
        const {confirmed_diff} = data
        this.allMovings.push(confirmed_diff)
      },
      showMoving() {
        this.avarage = this.allMovings.reduce(this.sumAvarage, 0);
      },
      sumAvarage(acc, a) {
        return acc + a
      }
    },
    updated () {
      const moment = extendMoment(Moment)
      const range = moment.range(this.firstDate, this.secondDate)
      const days = Array.from(range.by("days"))
      days.map((d) => this.userDates.push(d.format("YYYY-MM-DD")))
      // console.log(this.userDates)
      this.calculateMoving();
    },
  }
</script>