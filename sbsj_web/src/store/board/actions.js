import {
    REQUEST_QNA_BOARD_LIST_TO_SPRING,
    REQUEST_QNA_BOARD_TO_SPRING,
    REQUEST_QNA_COMMENT_LIST_FROM_SPRING,

    REQUEST_FREE_BOARD_LIST_TO_SPRING,
    REQUEST_FREE_BOARD_TO_SPRING,
    REQUEST_FREE_COMMENT_LIST_FROM_SPRING,
} from './mutation-types'

import axiosInst from '@/utility/axiosObject.js'

export default {
    requestCreateQnaBoardToSpring({ }, payload) {
        const { title, content, inquiryType, writer, password, privateCheck } = payload;
        return axiosInst.post('/qna/register', { title, content, inquiryType, writer, password, privateCheck })
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
    },
    requestQnaCommentListFromSpring({commit}, qnaBoardId ){
        return axiosInst.get(`/qna/read/comments/${qnaBoardId}`)
        .then((res) => {
            commit(REQUEST_QNA_COMMENT_LIST_FROM_SPRING, res.data)
        })
    },
    requestQnaCommentRegisterToSpring({}, payload) {
        const { writer, comment, qnaBoardId} = payload
        return axiosInst.post(`http://localhost:7777/qna/read/register`, { writer, comment, qnaBoardId })
        .then(() => {
            alert('댓글 등록을 완료하였습니다.')
        })
        .catch(() =>{
            alert('댓글 등록 실패.')
        })
    },
    requestQnaCommentDeleteToSpring({}, { qnaCommentId }) {
        return axios.delete(`http://localhost:7777/qna/read/${qnaCommentId}`)
            .then(() => {
                alert('댓글 삭제 완료');
            })
            .catch(() => {
                alert('댓글 삭제 실패');
            });
    },
    requestCreateFreeBoardToSpring({ }, payload) {
        const { title, content, writer } = payload;
        return axiosInst.post('/free/register', { title, content, writer })
            .then((res) => {
                alert('게시물 등록 성공!');
                return res.data
            })
            .catch(() => {
                alert('문제 발생!')
            })
    },
    requestFreeBoardListToSpring({ commit }) {
        return axiosInst.get('/free/list')
            .then((res) => {
                const freeBoards = res.data;
                commit(REQUEST_FREE_BOARD_LIST_TO_SPRING, freeBoards);
            })
            .catch((res) => {
                alert("문제 발생! " + res.data);
            });
    },
    requestFreeBoardToSpring({ commit }, freeBoardId) {
        console.log("requestFreeBoardToSpring: "+ freeBoardId)
        return axiosInst.get(`/free/read/${freeBoardId}`)
            .then((res) => {
                commit(REQUEST_FREE_BOARD_TO_SPRING, res.data)
            })
            .catch(() => {
                alert("requestFreeBoardToSpring 문제 발생!")
            })
    },
    requestFreeBoardDeleteToSpring({}, freeBoardId) {
        return axiosInst.get(`/free/delete/${freeBoardId}`)
            .then(() => {
                alert("삭제 성공")
            })
            .catch(() => {
                alert('문제 발생!')
            })
    },
    requestFreeBoardModifyToSpring({}, payload) {
        const { freeBoardId, title, content } = payload
        console.log("수정: "+ freeBoardId +", "+ title +", "+ content)
        return axiosInst.post(`/free/modify/${freeBoardId}`, { title, content })
            .then(() => {
                alert("수정 성공")
            })
            .catch(() => {
                alert('문제 발생!')
            })
    },
    requestFreeCommentListFromSpring({commit}, freeBoardId ){
        return axiosInst.get(`/free/read/comments/${freeBoardId}`)
        .then((res) => {
            commit(REQUEST_FREE_COMMENT_LIST_FROM_SPRING, res.data)
        })
    },
    requestFreeCommentRegisterToSpring({}, payload) {
        const { writer, comment, freeBoardId} = payload
        return axiosInst.post(`http://localhost:7777/free/read/register`, { writer, comment, freeBoardId })
        .then(() => {
            alert('댓글 등록을 완료하였습니다.')
        })
        .catch(() =>{
            alert('댓글 등록 실패.')
        })
    },
    requestFreeCommentDeleteToSpring({}, { freeCommentId }) {
        return axios.delete(`http://localhost:7777/free/read/${freeCommentId}`)
            .then(() => {
                alert('댓글 삭제 완료');
            })
            .catch(() => {
                alert('댓글 삭제 실패');
            });
    },
}