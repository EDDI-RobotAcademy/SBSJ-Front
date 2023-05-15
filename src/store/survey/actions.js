import {
    SET_COMMON_SURVEY_RESULT,
    SET_VISCERA_SURVEY_RESULT,
    SET_LIFE_SURVEY_RESULT
} from "./mutation-types";

import mainRequest from '@/api/mainRequest';

export default {

    setSurveyResult({ commit }, payload) {
        // console.log(payload);
        commit(SET_COMMON_SURVEY_RESULT, payload[0]);
        commit(SET_VISCERA_SURVEY_RESULT, payload[1]);
        commit(SET_LIFE_SURVEY_RESULT, payload[2]);
    },

    // 설문조사 가져오기
    reqReadSurveyResultToSpring({ dispatch }, memberId) {
        return mainRequest.post('/survey/read', { memberId })
        .then((res) => {
            let response = res.data
            if(response == '') {
                return null;
            } else {
                let commonSurveyResult = {
                    "username": response.username, 
                    "gender": response.gender,
                    "age": response.age,
                    "height": response.height,
                    "weight": response.weight
                }
                let visceraSurveyResult = { "viscera" : response.viscera }
                let lifeSurveyResult = { "life" : response.life }

                dispatch('setSurveyResult', [commonSurveyResult, visceraSurveyResult, lifeSurveyResult]);
            }
        })
        .catch((error) => {
            // alert("설문조사 읽기 에러가 발생했습니다: " + error.message);
        })
    },

    // 설문조사 결과 저장
    reqRegisterSurveyResultToSpring({}, payload) {
        return mainRequest.post('/survey/register', payload)
        .then((res) => {
            if(res.data) {
                alert("설문조사 등록 성공");
            }
        })
        .catch((error) => {
            // alert("설문조사 등록 에러가 발생했습니다: " + error.message);
        })
    },
    
}