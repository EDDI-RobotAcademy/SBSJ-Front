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
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router