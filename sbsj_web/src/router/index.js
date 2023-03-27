import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

import ShoppingCart from "@/views/order/shoppingCart/ShoppingCartPage.vue"
import ProductPage from "@/views/product/ProductPage.vue"
import DetailProductPage from '@/views/product/DetailProductPage'

import SignUpPage from "@/views/account/member/SignUpPage";
import SignInPage from "@/views/account/member/SignInPage";
import SearchMemberPasswordPage from "@/views/account/member/SearchMemberPasswordPage";
import SearchMemberIdPage from "@/views/account/member/SearchMemberIdPage";
import SignAgreePage from "@/views/account/member/SignAgreePage";
import AgreementPage from "@/views/information/AgreementPage";
import PrivacyPolicyPage from "@/views/information/PrivacyPolicyPage";
import InformationUsePage from "@/views/information/InformationUsePage";
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/shopping-cart',
    name: 'ShoppingCart',
    component: ShoppingCart
  },
  {
    path: '/product',
    name: 'productPage',
    component: ProductPage
  }
  {
    path: '/detail-product-page',
    name: 'DetailProductPage',
    component: DetailProductPage
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
    path: '/search-password',
    name: 'SearchMemberPasswordPage',
    component: SearchMemberPasswordPage
  },
  {
    path: '/search-id',
    name: 'SearchMemberIdPage',
    component: SearchMemberIdPage
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
    path: '/privacy-policy',
    name: 'PrivacyPolicyPage',
    component: PrivacyPolicyPage
  },
  {
    path: '/information-use',
    name: 'InformationUsePage',
    component: InformationUsePage
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router