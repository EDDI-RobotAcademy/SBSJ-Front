import {
    REQUEST_CART_ITEM_LIST_TO_SPRING,
    RESPONSE_COUNT_REQUEST,
    
    REQUEST_MY_PAGE_DELIVERY_LIST_TO_SPRING,

    REQUEST_ORDER_INFO_FROM_SPRING
} from "./mutation-types"

export default { 
    [REQUEST_CART_ITEM_LIST_TO_SPRING](state, passingData) {
        state.cartItems = passingData
    },
    [RESPONSE_COUNT_REQUEST](state, passingData) {
        state.resCountRequest = passingData
    },
    [REQUEST_MY_PAGE_DELIVERY_LIST_TO_SPRING](state, passingData) {
        state.deliveryList = passingData;
    },
    [REQUEST_ORDER_INFO_FROM_SPRING](state, passingData) {
        state.orderList = passingData
    }
}