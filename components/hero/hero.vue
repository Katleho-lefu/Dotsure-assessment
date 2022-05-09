<template>
  <div class="flex hero_bg">
    <div class="text-left mx-5 hero_content">
      <span class="text-5xl font-extrabold text-white">GOOSEBUMPS</span>
      <span class="text-3xl font-bold txt">COME STANDARD</span> <br>
      <span class="text-sm font-light text-slate-300 tracking-[.10em]">
        Discover the benefits of DRIVECLUB Trade-in and get a free vehicle
        evaluation.
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Hero',
  components: {},
  props: {},
}
</script>
<style lang="scss" scoped>
.hero_bg {
  background-image: url('@/assets/dotsure/hero-home.jpg');
  min-height: 55vh;
  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  /* Needed to position the navbar */
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;
}

.hero_content {
  display: flex;
  flex-direction: column;
}

.txt {
  -webkit-text-stroke:1px rgb(180, 180, 180);
  -webkit-text-fill-color: transparent;
}
</style>