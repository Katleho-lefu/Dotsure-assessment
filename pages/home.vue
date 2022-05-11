<template>
<div>
  <Hero />
  <Collage car_model="MODEL S" car_image="car-2.jpg" reverse="false" />
  <Collage car_model="LA FERRARI" car_image="car-1.jpg" reverse="true" />
</div>

</template>

<script>
// console.log("reverse",reverse);
import Hero from '../components/hero/hero.vue'
import Collage from '../components/collage/collage.vue'

export default {
  name: 'HomePage',
  components: {
    Hero,
    Collage,
  },
}
</script>

<style lang="scss">
</style>
