<template>
  <div class="OverflowScreen main mx-6 sm:mx-0">
    <h2 class="mb-10 maven">
      I`m a Frontend Developer &
      <br class="sm:visible" />
      Media Designer
    </h2>

    <div class="mb-10 w-8/12">
      <ButtonArrow link="/about/" title="About me" icon="ArrowRight" />
    </div>
    <div class="mb-10 w-8/12">
      <ButtonArrow
        link="/skills/digital/"
        title="Digital Skills!"
        icon="ArrowRight"
      />
    </div>
    <div class="mb-10 w-8/12">
      <ButtonArrow
        link="/skills/print/"
        title="Print Skills!"
        icon="ArrowRight"
      />
    </div>
    <div class="flex w-full justify-between">
      <IconLink link="/" icon="home" />
      <ButtonArrow link="/resume" title="Resume!" icon="ArrowRight" />
    </div>
  </div>
</template>

<script>
import IconLink from '@/components/IconLink.vue'
import ButtonArrow from '@/components/ButtonArrow.vue'

export default {
  name: 'OverflowScreen',
  components: {
    ButtonArrow,
    IconLink,
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div.OverflowScreen {
  padding: clamp(20px, 4vw, 50px) 0;
  box-sizing: border-box;
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

img {
  max-width: 50%;
}

h2 {
  font-size: clamp(1em, 4vw, 2em);
  line-height: clamp(1.61em, 4vw, 2em);
}
</style>
