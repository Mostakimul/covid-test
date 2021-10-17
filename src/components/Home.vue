<template>
  <div class="grid grid-cols-4 gap-5">
    <div class="col-span-full md:col-span-3">
      <div class="bg-white text-center mb-5 rounded shadow-lg py-5">
        <h3>All Statictics of: {{ selectedCountry }}</h3>
        <div v-if="selectedCountryIso">
          <SingleCountry :iso="selectedCountryIso" :url="baseURL"></SingleCountry>
          <Chart v-if="selectedCountryIso" :iso="selectedCountryIso" :url="baseURL"></Chart>
        </div>
      </div>
    </div>
    <div class="col-span-full md:col-span-1">
      <div class="bg-white text-center mb-5 rounded shadow-lg py-5">
        <h3>Please Choose a Country</h3>
        <div class="p-2">
          <select @change="findISO" v-model="selectedCountry" class="bg-gray-300 py-2 px-1 rounded">
            <option disabled value>Please select a country</option>
            <option
              v-for="country in allCountries"
              :key="country.name"
              :value="country.name"
            >{{ country.name }}</option>
          </select>
        </div>
      </div>
    </div>
  </div>

  <div v-if="selectedCountryIso">
    <Moving :iso="selectedCountryIso" :url="baseURL"></Moving>
  </div>
</template>

<script>
import SingleCountry from "./SingleCountry.vue"
import Chart from "./Chart.vue"
import Moving from "./Moving.vue"
export default {
  components: {
    SingleCountry,
    Chart,
    Moving
  },
  data() {
    return {
      baseURL: 'http://localhost:8080/api',
      allCountries: [],
      selectedCountry: '',
      selectedCountryIso: ''
    }
  },
  async mounted() {
    const res = await fetch(`${this.baseURL}/regions`)
    const data = await res.json()
    this.allCountries = data.data
  },
  methods: {
    findISO() {
      let coountryDetails = this.allCountries.filter((country) => country.name == this.selectedCountry)
      // console.log(coountryDetails);
      coountryDetails.map((details) => {
        this.selectedCountryIso = details.iso;
      })
    }
  },
}
</script>

<style lang="scss" scoped>
</style>