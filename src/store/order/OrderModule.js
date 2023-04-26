import Vue from 'vue'
import Vuex from 'vuex'

import mutations from "@/store/order/mutations";
import state from "@/store/order/orderStates"
import actions from "@/store/order/actions";

Vue.use(Vuex)

const OrderModule = {
    namespaced: true,
    mutations,   
    state,
    actions,
}

export default OrderModule