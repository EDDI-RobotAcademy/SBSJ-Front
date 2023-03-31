import Vue from 'vue'
import Vuex from 'vuex'

import accountModule from '@/store/account/AccountModule.js'
import boardModule from "@/store/board/BoardModule.js"
import productModule from "@/store/product/ProductModule.js"
import orderModule from "@/store/order/OrderModule.js"

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    accountModule: accountModule,
    boardModule: boardModule,
    productModule: productModule,
    orderModule: orderModule,
  },
})

export default store