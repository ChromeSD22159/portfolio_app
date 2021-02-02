<template>
  <div class="ResumeScreen main mx-6 sm:mx-0">
    <h2 class="my-10 maven">
      Check out my resume!
    </h2>
    <div class="flex w-full sm:justify-center flex-col sm:flex-row">
      <ButtonArrow
        link="/explore"
        title="explore!"
        icon="ArrowRight"
        class="mb-10 sm:mt-0 mr-2"
      />
      <ButtonArrow
        :link="lebenslauf"
        title="Download!"
        icon="Download"
        target="_blank"
        class="mb-10 sm:mt-0 mr-2"
      />
    </div>
  </div>
</template>

<script>
import ButtonArrow from '@/components/ButtonArrow.vue'

export default {
  name: 'ResumeScreen',
  components: {
    ButtonArrow,
  },
  data: function () {
    return {
      lebenslauf:
        'https://github.com/ChromeSD22159/portfolio_app/blob/main/src/assets/download/resume_frederikkohler.pdf',
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div.ResumeScreen {
  padding: clamp(20px, 4vw, 80px) 0;
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
