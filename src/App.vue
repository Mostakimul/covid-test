<template>
  <div class="bg-gray-200">
    <div class="px-4 sm:px-6 md:px-8 max-w-screen-lg xl:max-w-screen-xl mx-auto min-h-screen">
      <header>
      <TheHeader></TheHeader>
    </header>
    <main>
      <Home></Home>
    </main>
    </div>
  </div>
</template>

<script>
import Home from "./components/Home.vue";
import TheHeader from "./components/TheHeader.vue";
export default {
  name: 'App',
  components: {
    Home,
    TheHeader
  }
}
</script>

