import {
    REQUEST_QNA_BOARD_LIST_TO_SPRING,
    REQUEST_QNA_BOARD_TO_SPRING,
} from './mutation-types'

import axiosInst from '@/utility/axiosObject.js'

export default {
    requestCreateQnaBoardToSpring({ }, payload) {
        const { title, content, writer, password, privateCheck } = payload;
        return axiosInst.post('/qna/register', { title, content, writer, password, privateCheck })
            .then((res) => {
                alert('게시물 등록 성공!');
                return res.data
            })
            .catch(() => {
                alert('문제 발생!')
            })
    },
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
    requestQnaBoardDeleteToSpring({}, qnaBoardId) {
        return axiosInst.get(`/qna/delete/${qnaBoardId}`)
            .then(() => {
                alert("삭제 성공")
            })
            .catch(() => {
                alert('문제 발생!')
            })
    },
    requestQnaBoardModifyToSpring({}, payload) {
        const { qnaBoardId, title, content } = payload
        console.log("수정: "+ qnaBoardId +", "+ title +", "+ content)
        return axiosInst.post(`/qna/modify/${qnaBoardId}`, { title, content })
            .then(() => {
                alert("수정 성공")
            })
            .catch(() => {
                alert('문제 발생!')
            })
    }
}