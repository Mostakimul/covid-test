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
        <div class="p-5">
      <select
        class="bg-gray-300 py-2 px-3 rounded"
      >
        <option disabled value>Please select a country</option>
        <option>Choices</option>
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
        number: 10
      }
    },

  }
</script>

<style lang="scss" scoped>

</style>