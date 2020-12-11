<template>
  <div class="button">
    <router-link :to="link" class="flex">
      <div class="btnContainer px-6 py-3">
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

a img {
  height: 20px;
}
</style>
