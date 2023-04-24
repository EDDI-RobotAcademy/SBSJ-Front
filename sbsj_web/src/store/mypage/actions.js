import {
    REQUEST_COMPLETE_ORDER_LIST_TO_SPRING,
    REQUEST_COMPLETE_ORDER_TO_SPRING
} from "./mutation-types";

import axiosInst from "@/utility/axiosObject";

export default { 

    // 주문내역 목록 조회
    async reqCompleteOrderListToSpring({commit}, token) {
        console.log("reqCompleteOrderListToSpring 토큰: " + token);

        return await axiosInst.post("/order/list", { token })

        .then((res) => {
            commit(REQUEST_COMPLETE_ORDER_LIST_TO_SPRING, res.data)
        })
    },

    
}