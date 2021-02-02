<template>
  <div class="BurgerMenu">
    <div class="close" v-show="NavActive" v-on:click="CloseNav">
      <svg
        class="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
        ></path>
      </svg>
    </div>
    <transition name="fade">
      <ul class="mobile">
        <li
          v-for="route in routes"
          v-bind:key="route.name"
          v-on:click="CloseNav"
        >
          <router-link :to="'/' + route.url">{{ (route.name) }}</router-link>
        </li>
      </ul>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'BurgerMenu',
  props: {
    routes: Array,
  },
  data: function () {
    return {
      NavActive: true,
    }
  },
  methods: {
    CloseNav: function () {
      this.$emit('CloseNav')
    },
  },
}
</script>

<style scope>
.BurgerMenu {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(28, 37, 54, 0.96);

  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
}
ul.mobile li {
  font-size: 1.5em;
  font-weight: bold;
  color: white;
  letter-spacing: clamp(0.15em, 1px, 1vw);
  padding: 5px;
}

.close {
  position: fixed;
  top: 0;
  right: 0;
}
.close > svg {
  height: 50px;
  width: 50px;
  cursor: pointer;
  margin: 50px;
}
</style>
