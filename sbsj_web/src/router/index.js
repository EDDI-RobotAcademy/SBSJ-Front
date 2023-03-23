import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

import SurveyPage from '@/views/survey/SurveyPage'
import DetailSurveyPage from '@/views/survey/DetailSurveyPage'
import AfterCheckPage from '@/views/survey/AfterCheckPage'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/survey-page',
    name: 'SurveyPage',
    component: SurveyPage
  },
  {    
    path: '/detail-survey-page',
    name: 'DetailSurveyPage',
    component: DetailSurveyPage
  },
  {    
    path: '/after-check-page',
    name: 'AfterCheckPage',
    component: AfterCheckPage
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router