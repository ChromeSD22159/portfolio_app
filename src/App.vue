<template>
  <div id="app">
    <div class="container mx-auto lg:px-0">
      <SiteHeader />
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
      <SiteFooter />
    </div>
  </div>
</template>

<script>
import SiteHeader from '@/components/SiteHeader.vue'
import SiteFooter from '@/components/SiteFooter.vue'
export default {
  components: {
    SiteHeader,
    SiteFooter,
  },
}
</script>

<style>
body {
  background: var(--primary-color);
  position: relative;
}
body:before {
  content: '';
  background: var(--secondary-color);
  position: absolute;
  top: 0;
  right: 50%;
  left: 0;
  bottom: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height: 100vh;
  width: 100vw;
}

div.container {
  max-width: 800px;
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  flex-direction: column;
  justify-content: space-between;
}

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
