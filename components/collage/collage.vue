<template>
  <div class="grid grid-cols-1 lg:grid-cols-2">
    <div class=" w-100 lg:w-50 h-96 lg:h-80 border-y-2 border-y-white  bg-red-500">
        01
    </div>
    <div class="w-100 lg:w-50 h-60 lg:h-80  border-b-white lg:border-y-2 lg:border-y-white lg:border-l-white lg:border-l-2 car_info">
        09
    </div>
  </div>
</template>

<script>
export default {
  name: 'Collage',
  components: {},
  props: {},
}
</script>

<style lang="scss">

.card {
    width: 40%;
    height: 40%;
    background-color: whitesmoke;
}

.car_info{
    background-color: rgb(27, 33, 41);
}
</style>