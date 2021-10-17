<template>
  <div>
    <h2>Hello Vue</h2>
    <line-chart :data="{'2017-05-13': 2, '2017-05-14': 5}"></line-chart>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

