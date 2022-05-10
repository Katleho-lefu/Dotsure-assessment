<template>
<div>
  <Hero />
  <Collage/>
</div>

</template>

<script>
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
