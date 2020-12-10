import Vue from 'vue'
import VueRouter from 'vue-router'
import StartScreen from '../views/StartScreen.vue'
import AboutScreen from '../views/AboutScreen.vue'
import ContactScreen from '../views/ContactScreen.vue'
import ResumeScreen from '../views/ResumeScreen.vue'
import SkillsDigital from '../views/SkillsDigital.vue'
import SkillsPrint from '../views/SkillsPrint.vue'
import ExploreScreen from '../views/ExploreScreen.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'StartScreen',
    component: StartScreen,
  },
  {
    path: '/about',
    name: 'AboutScreen',
    component: AboutScreen,
  },
  {
    path: '/resume',
    name: 'ResumeScreen',
    component: ResumeScreen,
  },
  {
    path: '/contact',
    name: 'ContactScreen',
    component: ContactScreen,
  },
  {
    path: '/skills/digital',
    name: 'SkillsDigital',
    component: SkillsDigital,
  },
  {
    path: '/skills/print',
    name: 'SkillsPrint',
    component: SkillsPrint,
  },
  {
    path: '/explore',
    name: 'ExploreScreen',
    component: ExploreScreen,
  },
  {
    path: '/cv',
    beforeEnter() {
      location.href = 'http://github.com'
    },
  },
  {
    path: '/phone',
    beforeEnter() {
      location.href = 'tel:015147141009'
    },
  },
  {
    path: '/mail',
    beforeEnter() {
      location.href = 'mailto:info@frederikkohler.de'
    },
  },
  {
    path: '/github',
    beforeEnter() {
      location.href = 'http://github.com'
    },
  },
  {
    path: '/xing',
    beforeEnter() {
      location.href = 'http://xing.com'
    },
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
