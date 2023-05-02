import Vue from 'vue'
import Vuex from 'vuex'

import mutations from "@/store/survey/mutations";
import state from "@/store/survey/surveyStates"
import actions from "@/store/survey/actions";

Vue.use(Vuex)

const SurveyModule = {
    namespaced: true,
    mutations,   
    state,
    actions,
}

export default SurveyModule