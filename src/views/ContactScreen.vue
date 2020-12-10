<template>
  <div class="ContactScreen main">
    <h2 class="mb-10 maven">
      Contact me!
    </h2>
    <div class="flex">
      <ContactIcon link="/phone" icon="phone" />
      <ContactIcon link="/mail" icon="mail" />
      <ContactIcon link="/github" icon="github" target="_blank" />
      <ContactIcon link="/xing" icon="xing" target="_blank" />
    </div>
    <p class="my-10">&copy; copyright {{ getYear() }}. Frederik Kohler</p>
    <ButtonArrow
      link="/about"
      title="back to Home!"
      icon="home"
      class="mt-10"
    />
  </div>
</template>

<script>
import ButtonArrow from '@/components/ButtonArrow.vue'
import ContactIcon from '@/components/ContactIcon.vue'

export default {
  data: function () {
    return {
      year: '',
    }
  },
  name: 'ContactScreen',
  components: { ButtonArrow, ContactIcon },
  methods: {
    getYear: function () {
      let time = new Date()
      return time.getFullYear()
    },
  },
}
</script>

<style scoped>
h2 {
  font-size: clamp(1em, 4vw, 2em);
  line-height: clamp(1.61em, 4vw, 2em);
}
p {
  font-size: clamp(0.8em, 4vw, 1em);
  line-height: clamp(0.8em, 4vw, 1em);
}
</style>
