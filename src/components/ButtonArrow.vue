<template>
  <div class="button mx-auto px-6 py-3">
    <router-link :to="link" class="flex" :target="target">
      <div class="btnContainer">
        <span>{{ title }}</span>
        <img
          :src="require('@/assets/images/' + icon + '.svg')"
          type="image/svg+xml"
          alt=""
        />
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'ButtonArrow',
  props: {
    title: String,
    icon: String,
    link: String,
    target: String,
  },
  methods: {
    checkPrefix(url) {
      return /\.(?:pdf|svg)/.test(url)
    },
  },
}
</script>

<style scoped>
a {
  text-transform: uppercase;
}
a .btnContainer {
  display: flex;
  justify-content: center;
  width: 100%;
}
a span {
  margin-right: 10px;
  line-height: 20px;
}
a img {
  height: 20px;
}
</style>
