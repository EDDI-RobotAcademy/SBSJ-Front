import {
    REQUEST_CART_ITEM_TO_SPRING,
    REQUEST_CART_ITEM_LIST_TO_SPRING,
    RESPONSE_MY_REQUEST,
    
    REQUEST_MY_PAGE_DELIVERY_LIST_TO_SPRING
} from "./mutation-types"

export default { 
    [REQUEST_CART_ITEM_TO_SPRING](state, passingData) {
        state.cartItem = passingData
    },
    [REQUEST_CART_ITEM_LIST_TO_SPRING](state, passingData) {
        state.cartItems = passingData
    },
    [RESPONSE_MY_REQUEST](state, passingData) {
        state.resMyRequest = passingData
    },
    [REQUEST_MY_PAGE_DELIVERY_LIST_TO_SPRING](state, passingData) {
        state.deliveryList = passingData;
    }
}