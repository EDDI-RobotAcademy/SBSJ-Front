import Vue from 'vue'
import Vuex from 'vuex'

import mutations from "@/store/board/mutations";
import productstates from "@/store/product/productstates"
import actions from "@/store/product/actions";

Vue.use(Vuex)

const ProductModule = {
    namespaced: true,
    mutations,   
    productstates,
    actions,
}

export default ProductModule