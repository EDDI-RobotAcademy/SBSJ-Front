import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

import ShoppingCartPage from "@/views/order/shoppingCart/ShoppingCartPage.vue"
import ProductPage from "@/views/product/ProductPage.vue"
import DetailProductPage from '@/views/product/DetailProductPage'

import SignUpPage from "@/views/account/member/SignUpPage";
import SignInPage from "@/views/account/member/SignInPage";
import SearchPasswordPage from "@/views/account/member/SearchPasswordPage";
import SearchUserIdPage from "@/views/account/member/SearchUserIdPage";
import SignAgreePage from "@/views/account/member/SignAgreePage";
import AgreementPage from "@/views/information/AgreementPage";
import CompanyPage from "@/views/information/CompanyPage";
import PrivacyPolicyPage from "@/views/information/PrivacyPolicyPage";
import InformationUsePage from "@/views/information/InformationUsePage";

import MyPage from '@/views/mypage/MyPage';
import MyPagePasswordCheckPage from "@/views/mypage/MyPagePasswordCheckPage";

import SurveyPage from '@/views/survey/SurveyPage'
import DetailSurveyPage from '@/views/survey/DetailSurveyPage'
import AfterCheckPage from '@/views/survey/AfterCheckPage'
import FirstCheckPage from '@/views/survey/commonCheckList/FirstCheckPage'
import SecondCheckPage from '@/views/survey/commonCheckList/SecondCheckPage'
import ThirdCheckPage from '@/views/survey/commonCheckList/ThirdCheckPage'
import FourthCheckPage from '@/views/survey/commonCheckList/FourthCheckPage'
import FifthCheckPage from '@/views/survey/commonCheckList/FifthCheckPage'
import SixthCheckPage from '@/views/survey/commonCheckList/SixthCheckPage'

import FirstBonePage from '@/views/survey/detailCheckList/boneList/FirstBonePage'
import SecondBonePage from '@/views/survey/detailCheckList/boneList/SecondBonePage'
import FirstBrainPage from '@/views/survey/detailCheckList/brainList/FirstBrainPage'
import FirstEyePage from '@/views/survey/detailCheckList/eyeList/FirstEyePage'
import FirstIntestinePage from '@/views/survey/detailCheckList/intestineList/FirstIntestinePage'
import FirstLiverPage from '@/views/survey/detailCheckList/liverList/FirstLiverPage'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/shopping-cart',
    name: 'ShoppingCartPage',
    component: ShoppingCartPage
  },
  {
    path: '/product',
    name: 'productPage',
    component: ProductPage
  },
  {
    path: '/detail-product-page/:productId',
    name: 'DetailProductPage',
    component: DetailProductPage,
    props: true
  },
  {
    path: '/sign-up',
    name: 'SignUpPage',
    component: SignUpPage
  },
  {
    path: '/sign-in',
    name: 'SignInPage',
    component: SignInPage
  },
  {
    path: '/search-id',
    name: 'SearchUserIdPage',
    component: SearchUserIdPage
  },
  {
    path: '/search-password',
    name: 'SearchPasswordPage',
    component: SearchPasswordPage
  },
  {
    path: '/agree-pass',
    name: 'SignAgreePage',
    component: SignAgreePage
  },
  {
    path: '/agreement',
    name: 'AgreementPage',
    component: AgreementPage
  },
  {
    path: '/company',
    name: 'CompanyPage',
    component: CompanyPage
  },
  {
    path: '/privacy-policy',
    name: 'PrivacyPolicyPage',
    component: PrivacyPolicyPage
  },
  {
    path: '/information-use',
    name: 'InformationUsePage',
    component: InformationUsePage
  },

  {
    path: '/mypage',
    name: 'MyPage',
    component: MyPage
  },
  {
    path: '/mypage/check-password',
    name: 'MyPagePasswordCheckPage',
    component: MyPagePasswordCheckPage
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
  {    
    path: '/fourth-check-page',
    name: 'FourthCheck',
    component: FourthCheckPage
  },
  {    
    path: '/Fifth-check-page',
    name: 'FifthCheck',
    component: FifthCheckPage
  },
  {    
    path: '/Sixth-check-page',
    name: 'SixthCheck',
    component: SixthCheckPage
  },
  {    
    path: '/First-bone-page',
    name: 'FirstBone',
    component: FirstBonePage,
  },
  {    
    path: '/Second-bone-page',
    name: 'SecondBone',
    component: SecondBonePage,
  },
  {    
    path: '/First-brain-page',
    name: 'FirstBrain',
    component: FirstBrainPage
  },
  {    
    path: '/First-eye-page',
    name: 'FirstEye',
    component: FirstEyePage
  },
  {    
    path: '/First-intestine-page',
    name: 'FirstIntestine',
    component: FirstIntestinePage
  },
  {    
    path: '/First-liver-page',
    name: 'FirstLiver',
    component: FirstLiverPage
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router