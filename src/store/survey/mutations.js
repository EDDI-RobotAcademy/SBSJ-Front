import {
    SET_COMMON_SURVEY_RESULT,
    SET_VISCERA_SURVEY_RESULT,
    SET_LIFE_SURVEY_RESULT
} from "./mutation-types";

export default { 

    [SET_COMMON_SURVEY_RESULT](state, passingData) {
        state.commonSurveyResult = passingData
    },
    [SET_VISCERA_SURVEY_RESULT](state, passingData) {
        state.visceraSurveyResult = passingData
    },
    [SET_LIFE_SURVEY_RESULT](state, passingData) {
        state.lifeSurveyResult = passingData
    }
    
}