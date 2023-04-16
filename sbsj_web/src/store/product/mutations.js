import {
    REQUEST_PRODUCT_LIST_TO_SPRING,
    REQUEST_PRODUCT_LIST_TO_SPRING_WITH_OPTION,
    REQUEST_PRODUCT_TO_SPRING,
    REQUEST_PRODUCT_OPTION_LIST_TO_SPRING,

    REQUEST_WISH_LIST_TO_SPRING
} from './mutation-types'

export default {
    [REQUEST_PRODUCT_LIST_TO_SPRING] (state, passingData) {
        state.products = passingData
    },

    [REQUEST_PRODUCT_TO_SPRING] (state, passingData) {
        state.product = passingData
    },
    [REQUEST_PRODUCT_LIST_TO_SPRING_WITH_OPTION] (state, passingData) {
        state.products = passingData
    },
    [REQUEST_PRODUCT_OPTION_LIST_TO_SPRING] (state, passingData) {
        state.productOptions = passingData
    },

    [REQUEST_WISH_LIST_TO_SPRING] (state, passingData) {
        state.wishList = passingData;
    }
}
