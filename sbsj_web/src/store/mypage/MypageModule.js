import Vue from 'vue'
import Vuex from 'vuex'

import mutations from "@/store/mypage/mutations";
import state from "@/store/mypage/mypageStates"
import actions from "@/store/mypage/actions";

Vue.use(Vuex)

const MypageModule = {
    namespaced: true,
    mutations,   
    state,
    actions,
}

export default MypageModule