<template>
  <div v-if="reverse === 'true' ">
    <div class="flex flex-col lg:flex-row lg:w-screen">
      <img
        :src="require(`@/assets/dotsure/${car_image}`)"
        class="w-full h-96 lg:w-3/5 lg:h-96 border-y-2 border-y-white object-cover bg-center bg-no-repeat" alt=""
      />
      <div
        class="
          w-full
          px-12
          py-12
          flex flex-col
          gap-4
          h-72
          lg:px-32 lg:w-2/5 lg:h-96 lg:justify-center
          border-b-white border-b-2
          lg:border-y-2 lg:border-y-white lg:border-l-white lg:border-l-2
          car_info
        "
      >
        <span class="font-light text-sm">NEW RANGE</span>
        <span class="text-3xl font-extrabold lg:text-4xl text-white">{{
          car_model
        }}</span>
        <a href="https://flowbite.com" class="mt-3 txt-clr"> LEARN MORE > </a>
      </div>
    </div>
  </div>

  <div v-else>
    <div class="flex flex-col lg:flex-row-reverse lg:w-screen">
      <img
        :src="require(`@/assets/dotsure/${car_image}`)"
        class="
          w-full
          h-96
          lg:w-3/5 lg:h-96
          border-y-2 border-y-white
          object-cover
          bg-center bg-no-repeat
        "
        alt=""
      />
      <div
        class="
          w-full
          px-12
          py-12
          flex flex-col
          gap-4
          h-72
          lg:px-32 lg:w-2/5 lg:h-96 lg:justify-center
          border-b-white border-b-2
          lg:border-y-2 lg:border-y-white lg:border-r-white lg:border-r-2
          car_info
        "
      >
        <span class="font-light text-sm">NEW RANGE</span>
        <span class="text-3xl font-extrabold lg:text-4xl text-white">{{
          car_model
        }}</span>
        <a href="https://flowbite.com" class="mt-3 txt-clr"> LEARN MORE > </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Collage',
  components: {},
  props: {
    car_model: String,
    car_image: String,
    reverse: String,
  },
  methods: {
  mounted() {
    console.log(`the component is now mounted.`)
  }
} 
}
</script>

<style lang="scss">
.txt-clr {
  color: rgb(244, 0, 85);
}

.car_info {
  background-color: rgb(27, 33, 41);
}
</style>