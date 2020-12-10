<template>
  <div class="AboutScreen main">
    <div class="my-10 flex space-x-4 flex-col sm:flex-row">
      <div class="left flex-1">
        <div class="p-4">
          <img src="@/assets/images/frederikkohler.png" alt="" />
        </div>
      </div>
      <div class="right flex-1 flex-col">
        <transition name="slide-fade" mode="out-in">
          <h2 class="text-center" :key="word">{{ word }}!</h2>
        </transition>
        <p>Lorem iosum</p>
      </div>
    </div>
  </div>
</template>

<script>
const words = ['Hallo', 'Hola', 'Servus', 'Grüezi', 'Aloha', 'Hoi', 'Moin']

export default {
  data: function () {
    return {
      word: '',
    }
  },
  name: 'AboutScreen',

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
  font-size: clamp(20px, 10vw, 80px);
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
