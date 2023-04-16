import {
    REQUEST_BOARD_LIST_TO_SPRING,
    REQUEST_BOARD_TO_SPRING
} from "./mutation-types";
    REQUEST_QNA_BOARD_LIST_TO_SPRING,

import axiosInst from '@/utility/axiosObject';

export default { 
    
export default {
    requestQnaBoardListToSpring({ commit }) {
        return axiosInst.get('/qna/list')
            .then((res) => {
                const qnaBoards = res.data;
                commit(REQUEST_QNA_BOARD_LIST_TO_SPRING, qnaBoards);
            })
            .catch((res) => {
                alert("문제 발생! " + res.data);
            });
    },
    }
}