<template>
  <header class="flex p-10">
    <div class="left flex-1 flex justify-start">
      <router-link to="/">
        <img src="@/assets/images/logo.svg" type="image/svg+xml" />
      </router-link>
    </div>
    <div class="mid flex-1 flex justify-center">
      <router-link to="/contact" class="text-center text-xl maven text-white">
        reach out
      </router-link>
    </div>
    <div class="right flex-1 flex justify-end">
      <nav v-on:click="toogleNav">
        <div class="burger top"></div>
        <div class="burger mid"></div>
        <div class="burger bottom"></div>
      </nav>
    </div>
    <transition name="fade">
      <BurgerMenu :routes="routes" v-show="MobileNav" @CloseNav="toogleNav" />
    </transition>
  </header>
</template>

<script>
import BurgerMenu from '@/components/BurgerMenu.vue'
export default {
  name: 'SiteHeader',
  components: { BurgerMenu },
  data: function () {
    return {
      MobileNav: false,
      routes: [
        { name: 'Home', url: '' },
        { name: 'Explore', url: 'explore' },
        { name: 'Contact', url: 'contact' },
      ],
    }
  },
  methods: {
    toogleNav: function () {
      this.MobileNav = !this.MobileNav
    },
  },
}
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.burger {
  height: 4px;
  width: 25px;
  background: white;
  transition: 0.2s ease-in-out;
  border-radius: 10px;
}

nav {
  display: flex;
  flex-direction: column;
  align-items: end;
  padding: 20px;
  cursor: pointer;
}

.burger.top {
  transform: translate(-6px, -5px);
}

.burger.mid {
  transform: translate(5px, 0);
}

.burger.bottom {
  transform: translate(-2px, 5px);
}

nav:hover > .burger.top,
nav.active > .burger.top {
  transform: translate(0px, -5px);
}

nav:hover > .burger.mid,
nav.active > .burger.mid {
  transform: translate(0px, 0);
}

nav:hover > .burger.bottom,
nav.active > .burger.bottom {
  transform: translate(0px, 5px);
}
</style>
