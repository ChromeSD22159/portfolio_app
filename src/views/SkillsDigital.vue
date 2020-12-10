<template>
  <div class="SkillsDigital main">
    <h2 class="mb-10 maven">
      My digital skills
    </h2>

    <div class="mb-10 w-8/12">
      <Skill name="Adobe Photoshop" stars="5" />
      <Skill name="Adobe InDesign" stars="5" />
      <Skill name="Adobe Illustrator" stars="5" />
      <Skill name="Affinity Designer" stars="5" />
      <Skill name="Affinity Photo" stars="5" />
      <Skill name="Affinity Publisher" stars="5" />
    </div>

    <div class="flex w-full">
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
div.SkillsDigital {
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
