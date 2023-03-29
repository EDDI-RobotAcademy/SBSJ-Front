import Vue from 'vue'
import Vuex from 'vuex'

import mutations from "@/store/board/mutations";
import boardstates from "@/store/board/boardstates "
import actions from "@/store/board/actions";

Vue.use(Vuex)

const BoardModule = {
    namespaced: true,
    mutations,   
    boardstates ,
    actions,
}

export default BoardModule