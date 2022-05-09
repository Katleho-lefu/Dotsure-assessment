<template>
  <div>
    <Navbar />
    <HomePage />
    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import HomePage from './home.vue'

export default Vue.extend({
  name: 'IndexPage',
  components: {
    HomePage,
  },
})
</script>

<style lang="scss">
body {
  margin: 0 auto;
  box-sizing: border-box;
  width: 100vw;
}
</style>


