import {
    
} from "./mutation-types";

import axiosInst from "@/utility/axiosObject";

export default { 

    // 장바구니에서 삭제
    reqDeleteCartItemFromSpring({}, payload) {
        const selectCartItemId = payload

        return axiosInst.post(`http://localhost:7777/cart/deleteCartItem`,
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

    // 장바구니에 든 상품 수량 변경
    reqCartItemCountChangeToSpring({commit}, payload) {
        return axiosInst.post("http://localhost:7777/cart/changeCartItemCount", payload)
            .then((res) => {
                commit(RESPONSE_MY_REQUEST, res.data);
            });
    },
}