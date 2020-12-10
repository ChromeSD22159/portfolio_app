<template>
  <div class="mx-auto">
    <router-link :to="link" class="flex p-3" :target="target">
      <div class="btnContainer">
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
  height: clamp(20px, 3vw, 4em);
}
</style>
