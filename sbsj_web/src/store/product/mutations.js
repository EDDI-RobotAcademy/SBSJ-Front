import {
    REQUEST_PRODUCT_LIST_TO_SPRING,
    REQUEST_PRODUCT_LIST_TO_SPRING_WITH_OPTION,
    REQUEST_PRODUCT_TO_SPRING,
    REQUEST_PRODUCT_OPTION_LIST_TO_SPRING,
    REQUEST_SPECIFIC_PRODUCT_LIST_TO_SPRING,
    REQUEST_PRODUCT_BRAND_LIST_TO_SPRING,
    REQUEST_SPECIFIC_BRAND_PRODUCT_LIST_TO_SPRING,


    REQUEST_WISH_LIST_TO_SPRING,
    REQUEST_READ_REVIEW_FROM_SPRING,
    REQUEST_STAR_RATE_AVERAGE,
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
    },
    [REQUEST_READ_REVIEW_FROM_SPRING](state, passingData) {
        state.reviews = passingData
    },
    [REQUEST_STAR_RATE_AVERAGE](state, passingData) {
        state.starRateAverage = passingData
    },
    [REQUEST_SPECIFIC_PRODUCT_LIST_TO_SPRING] (state, passingData) {
        state.products = passingData
    },
    [REQUEST_PRODUCT_BRAND_LIST_TO_SPRING] (state, passingData) {
        state.productBrands = passingData
    },
    [REQUEST_SPECIFIC_BRAND_PRODUCT_LIST_TO_SPRING] (state, passingData) {
        state.products = passingData
    },
}
