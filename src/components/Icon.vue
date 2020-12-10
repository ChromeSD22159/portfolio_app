<template>
  <ul class="flex">
    <li v-for="n in getNum()" v-bind:key="n">
      <img
        :src="require('@/assets/images/' + icon + '.svg')"
        type="image/svg+xml"
        alt=""
      />
    </li>
  </ul>
</template>

<script>
export default {
  name: 'Icon',
  props: {
    icon: {
      type: String,
    },
    level: {
      type: String,
    },
  },
  methods: {
    getNum: function () {
      return parseInt(this.level)
    },
  },
}
</script>

<style scoped>
img {
  height: 20px;
}
</style>
