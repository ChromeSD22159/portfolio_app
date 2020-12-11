<template>
  <div class="SkillsPrint main mx-6 sm:mx-0">
    <h2 class="mb-10 maven">
      My print skills
      <br class="sm:visible" />
    </h2>

    <div class="mb-10 sm:w-8/12 w-full">
      <Skill name="HTML" stars="5" />
      <Skill name="CSS" stars="4" />
      <Skill name="php" stars="4" />
      <Skill name="JavaScript" stars="4" />
      <Skill name="Vuejs" stars="4" />
      <Skill name="react" stars="3" />
      <Skill name="Laravel" stars="2" />
      <Skill name="Tailwind CSS" stars="3" />
      <Skill name="Bootsstrap" stars="2" />
      <Skill name="Uikit" stars="2" />
      <Skill name="WordPress" stars="2" />
    </div>
    <div class="flex w-full justify-between">
      <ButtonArrow link="/explore" title="Explore!" icon="ArrowRight" />
      <ButtonArrow link="/resume" title="Resume!" icon="ArrowRight" />
    </div>
  </div>
</template>

<script>
import ButtonArrow from '@/components/ButtonArrow.vue'
import Skill from '@/components/Skill.vue'
export default {
  name: 'SkillsPrint',
  components: {
    ButtonArrow,

    Skill,
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div.SkillsPrint {
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
