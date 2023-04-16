import {
    REQUEST_QNA_BOARD_LIST_TO_SPRING,
    REQUEST_QNA_BOARD_TO_SPRING,
} from './mutation-types'

import axiosInst from '@/utility/axiosObject.js'

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
    requestQnaBoardToSpring({ commit }, qnaBoardId) {
        console.log("requestQnaBoardToSpring: "+ qnaBoardId)
        return axiosInst.get(`/qna/read/${qnaBoardId}`)
            .then((res) => {
                commit(REQUEST_QNA_BOARD_TO_SPRING, res.data)
            })
            .catch(() => {
                alert("requestQnaBoardToSpring 문제 발생!")
            })
    },
    }
}