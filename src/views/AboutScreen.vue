<template>
  <div class="AboutScreen main mx-6">
    <div class="my-10 flex space-x-4 flex-col sm:flex-row">
      <div class="left flex-1">
        <div class="p-4">
          <img src="@/assets/images/frederikkohler.png" alt="" />
        </div>
      </div>
      <div class="right flex-1 flex-col">
        <transition name="slide-fade" mode="out-in">
          <h2 class="text-center pb-4" :key="word">{{ word }}!</h2>
        </transition>
        <h3 class="sm:text-left sm:pl-4 sm:pb-4">
          Ich bin
          <strong>Frederik Kohler</strong>
          . Ich komme aus Waldshut-Tiengen und bin
          <strong>Frontend-Entwickler & Mediengestalter</strong>
          .
        </h3>
        <p class="sm:text-left sm:pl-4">
          Als Kind war ich immer von alten Computern umgeben. Ich lernte über
          das Programmieren aus einem Büchern und aus dem Internet. Ich habe
          meine Karriere sehr jung begonnen, indem ich mir alles selbst
          beigebracht habe, später folgte die Fotografie und ich begann ein Auge
          für Designs zu entwickeln. Ich wollte erst Webdesigner werden, aber
          manchmal lässt es das Leben nicht zu, dass man es auf seine Weise
          macht. 2018 begann ich nach mehr als 10 Jahren mein Hobby zum beruf zu
          machen, zog nach Hamburg und absolvierte eine Umschulung zum
          Mediengestalter.
        </p>
      </div>
    </div>
    <div class="flex w-full justify-between">
      <ButtonArrow link="/explore" title="Explore!" icon="ArrowRight" />
      <ButtonArrow link="/resume" title="Resume!" icon="ArrowRight" />
    </div>
  </div>
</template>

<script>
const words = ['Hallo', 'Hola', 'Servus', 'Grüezi', 'Aloha', 'Hoi', 'Moin']

import ButtonArrow from '@/components/ButtonArrow.vue'

export default {
  data: function () {
    return {
      word: '',
    }
  },
  name: 'AboutScreen',
  components: {
    ButtonArrow,
  },
  methods: {
    updateWord: function () {
      setInterval(() => {
        this.word = words[Math.floor(Math.random() * words.length)]
      }, 4000)

      return
    },
  },
  mounted: function () {
    this.word = words[1]
    this.updateWord()
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div.AboutScreen {
  box-sizing: border-box;
}

.flex-1 {
  display: flex;
  align-items: center;
  justify-content: center;
}

img {
  height: auto;
  max-width: 50vw;
  margin-left: auto;
  margin-right: auto;
}

h2 {
  font-size: clamp(10px, 5vw, 30px);
  font-style: italic;
  font-weight: bold;
  text-transform: uppercase;
}

.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for <2.1.8 */ {
  transform: translateX(-25px) scale(0.9);
  opacity: 0;
}
</style>
