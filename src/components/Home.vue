<template>
  <div class="grid grid-cols-4 gap-5">
    <div class="col-span-full md:col-span-3">
      <div class="bg-white text-center mb-5 rounded shadow-lg py-5">
        <h3>All Statictics</h3>
      </div>
    </div>
    <div class="col-span-full md:col-span-1">
      <div class="bg-white text-center mb-5 rounded shadow-lg py-5">
        <h3>Please Choose a Country</h3>
        <div class="p-2">
          <select v-model="selectedCountry" class="bg-gray-300 py-2 px-1 rounded">
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
</template>

<script>
export default {
  data() {
    return {
      baseURL: 'http://localhost:8080/api',
      allCountries: [],
      selectedCountry: ''
    }
  },
  async mounted() {
    const res = await fetch(`${this.baseURL}/regions`)
    const data = await res.json()
    this.allCountries = data.data;
  },
}
</script>

<style lang="scss" scoped>
</style>