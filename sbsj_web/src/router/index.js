import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

import SurveyPage from '@/views/survey/SurveyPage'
import DetailSurveyPage from '@/views/survey/DetailSurveyPage'
import AfterCheckPage from '@/views/survey/AfterCheckPage'
import FirstCheckPage from '@/views/survey/detailCheckList/FirstCheckPage'
import SecondCheckPage from '@/views/survey/detailCheckList/SecondCheckPage'
import ThirdCheckPage from '@/views/survey/detailCheckList/ThirdCheckPage'

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
  {    
    path: '/first-check-page',
    name: 'FirstCheck',
    component: FirstCheckPage
  },
  {    
    path: '/second-check-page',
    name: 'SecondCheck',
    component: SecondCheckPage
  },
  {    
    path: '/third-check-page',
    name: 'ThirdCheck',
    component: ThirdCheckPage
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router