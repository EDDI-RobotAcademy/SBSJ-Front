import Vue from 'vue'
import Vuex from 'vuex'

import mutations from "@/store/account/mutations";
import state from "@/store/account/accountStates"
import actions from "@/store/account/actions";

Vue.use(Vuex)

const AccountModule = {
    namespaced: true,
    mutations,
    state,
    actions,
}

export default AccountModule