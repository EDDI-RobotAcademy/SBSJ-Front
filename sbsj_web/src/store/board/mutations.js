import {
    REQUEST_QNA_BOARD_LIST_TO_SPRING,
    REQUEST_QNA_BOARD_TO_SPRING,
} from "./mutation-types"

export default { 
    [REQUEST_QNA_BOARD_LIST_TO_SPRING] (state, passingData) {
        state.qnaBoards = passingData
    },
    [REQUEST_QNA_BOARD_TO_SPRING] (state, passingData) {
        state.qnaBoard = passingData
    },
}