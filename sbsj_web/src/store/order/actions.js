import {
    REQUEST_MY_PAGE_DELIVERY_LIST_TO_SPRING,
    REQUEST_CART_ITEM_LIST_TO_SPRING
} from "./mutation-types";

import axiosInst from "@/utility/axiosObject";

export default { 

    // 장바구니에 추가
    reqAddCartToSpring({}, payload) {
        const { memberId, productId, count } = payload;
        console.log(memberId + ', ' + productId +', '+ count)

        return axiosInst.post("/cart/addCartItem", { memberId, productId, count })
            .then(() => {
                alert("장바구니에 추가되었습니다.")
            })
            .catch(() => {
                alert("문제가 발생하여 장바구니에 추가되지 않았습니다.")
            });
    },

    // 장바구니에서 삭제
    reqDeleteCartItemFromSpring({}, payload) {
        const selectCartItemId = payload

        return axiosInst.post("/cart/deleteCartItem", { selectCartItemId })
            .then(() => {
                alert("장바구니에서 삭제되었습니다.")
            })
            .catch(() => {
                alert("문제가 발생하여 삭제되지 않았습니다.")
            });
    },


    // 장바구니 목록 조회
    reqCartItemListToSpring({commit}, userInfo) {
        console.log(userInfo)
        return axiosInst.post("/cart/list",userInfo
            ).then((res) => {
                commit(REQUEST_CART_ITEM_LIST_TO_SPRING, res.data)
            })
    },

    // 장바구니에 든 상품 수량 변경
    reqCartItemCountChangeToSpring({commit}, payload) {
        return axiosInst.post("/cart/changeCartItemCount", payload)
            .then((res) => {
                commit(RESPONSE_MY_REQUEST, res.data)
            })
    },

    reqMyPageDeliveryListToSpring({ commit }, memberId) {
        return axiosInst.get(`/delivery/list/${memberId}`)
            .then((res) => {
                commit(REQUEST_MY_PAGE_DELIVERY_LIST_TO_SPRING, res.data);
            })
            .catch(() => {
                alert('문제 발생!')
            })
    },

    reqMyPageRegisterDeliveryToSpring({}, payload) {
        const { memberId, addressName, addressType, recipientName, phoneNumber, 
                city, street, addressDetail, zipcode, defaultAddress } = payload
        console.log(memberId, addressName, addressType, recipientName, phoneNumber, 
                    city, street, addressDetail, zipcode, defaultAddress);
        return axiosInst.post("/delivery/register/", 
               { memberId, addressName, addressType, recipientName, phoneNumber, 
                 city, street, addressDetail, zipcode, defaultAddress })
            .then(() => {
                alert("배송지 등록 완료!")
            })
            .catch(() => {
                alert('문제 발생!')
            })
    },

}