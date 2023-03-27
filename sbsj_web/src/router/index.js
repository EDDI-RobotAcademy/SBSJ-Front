import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

import ShoppingCart from "@/views/order/shoppingCart/ShoppingCartPage.vue"
import ProductPage from "@/views/product/ProductPage.vue"
import DetailProductPage from '@/views/product/DetailProductPage'

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
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router