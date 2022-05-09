<template>
  <nav>
    <div class="max-w-10xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-20">
        <div class="flex items-center">
          <div class="ml-15 lg:ml-24 text-lg flex-shrink-0 tracking-[.18em]">
            <span class="font-bold">DRIVE</span><span>CLUB</span>
          </div>
        </div>
        <div class="hidden md:block">
          <div class="flex ml-10 gap-8 text-sm font-light items-center tracking-[.08em]">
            <span class="">HOME</span>
            <span>CONTACT US</span>
          </div>
        </div>

        <div class="-mr-2 flex md:hidden">
          <!-- Mobile menu button -->
          <button
            @click="toggle"
            class="
              inline-flex
              items-center
              justify-center
              p-2
              rounded-md
              text-gray-400
              hover:text-white hover:bg-gray-700
              focus:outline-none focus:bg-gray-700 focus:text-white
            "
          >
            <svg
              :class="[isOpen ? 'hidden' : 'block', 'h-6 w-6']"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
            <svg
              :class="[isOpen ? 'block' : 'hidden', 'h-6 w-6']"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
    <div :class="[isOpen ? '' : 'hidden', 'md:hidden']">
      <div class="px-2 pt-2 pb-3 sm:px-3">
        <a
          href="#"
          class="
            block
            px-3
            py-2
            rounded-md
            text-base
            font-medium
            text-white
            focus:outline-none focus:text-white focus:bg-gray-700
          "
          >HOME</a
        >
        <a
          href="#"
          class="
            mt-1
            block
            px-3
            py-2
            rounded-md
            text-base
            font-medium
            text-gray-300
            hover:text-white
            focus:outline-none focus:text-white focus:bg-gray-700
          "
          >CONTACT US</a
        >
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      isOpen: false,
    }
  },
  methods: {
    toggle() {
      this.isOpen = !this.isOpen
    },
  },
}
</script>

<style lang='scss' scoped>
nav {
  background-color: transparent;
  position: absolute;
  width: 100%;
  z-index: 1
}
span {
  cursor: pointer;
  color: whitesmoke;
}
</style>
