import Vue from 'vue'
import Vuex from 'vuex'

import mutations from "@/store/board/mutations";
import state from "@/store/product/productStates"
import actions from "@/store/product/actions";

Vue.use(Vuex)

const ProductModule = {
    namespaced: true,
    mutations,   
    state,
    actions,
}

export default ProductModule