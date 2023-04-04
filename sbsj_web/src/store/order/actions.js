import {
    REQUEST_CART_ITEM_TO_SPRING
} from "./mutation-types";

import axiosInst from "@/utility/axiosObject";

export default { 

    // 장바구니에서 삭제
    reqDeleteCartItemFromSpring({}, payload) {
        const selectCartItemId = payload

        return axiosInst.post("/cart/deleteCartItem",
            { selectCartItemId })
            .then(() => {
                alert("장바구니에서 삭제되었습니다.")
            })
            .catch(() => {
                alert("문제가 발생하여 삭제되지 않았습니다.")
            });
    },

    // 장바구니에 추가
    reqAddCartToSpring({}, payload) {
        const { memberNo, productId, count } = payload;
        console.log(memberNo + ', ' + productId +', '+ count)

        return axiosInst.post("/cart/addCartItem",
        { memberNo, productId, count })
        .then(() => {
            alert("장바구니에 추가되었습니다.")
        })
        .catch(() => {
            alert("문제가 발생하여 장바구니에 추가되지 않았습니다.")
        });
    },

    // 장바구니 목록
    reqCartItemListToSpring({commit}, token) {
        return axiosInst.post("/cart/list",{headers: { Token: token },
            }).then((res) => {
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

    // // 디비 정보 받아오기?
    // reqCartItemToSpring({commit}, cartItemId) {
    //     return axiosInst.get(`/cart/${cartItemId}`)
    //         .then((res) => {
    //             commit(REQUEST_CART_ITEM_TO_SPRING, res.data)
    //         })
    // },


}