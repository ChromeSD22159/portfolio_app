import Vue from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import router from './router'
import SequentialEntrance from 'vue-sequential-entrance'
import 'vue-sequential-entrance/vue-sequential-entrance.css'

Vue.use(SequentialEntrance)

Vue.config.productionTip = false

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app')
