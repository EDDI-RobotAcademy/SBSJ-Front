import Vue from 'vue'
import Vuex from 'vuex'

import mutations from "@/store/order/mutations";
import orderstates from "@/store/order/orderstates"
import actions from "@/store/order/actions";

Vue.use(Vuex)

const OrderModule = {
    namespaced: true,
    mutations,   
    orderstates,
    actions,
}

export default OrderModule