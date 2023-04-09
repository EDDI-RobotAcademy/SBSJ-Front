import {
    REQUEST_CART_ITEM_TO_SPRING,
    REQUEST_MY_PAGE_DELIVERY_LIST_TO_SPRING,
} from "./mutation-types";

import axiosInst from "@/utility/axiosObject";

export default { 

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
        return axiosInst.post("/delivery/register", 
               { memberId, addressName, addressType, recipientName, phoneNumber, 
                 city, street, addressDetail, zipcode, defaultAddress })
            .then(() => {
                alert("배송지 등록 완료!")
            })
            .catch(() => {
                alert('문제 발생!')
            })
    },
    reqMyPageDeleteDeliveryToSpring({}, addressId) {
        return axiosInst.get(`/delivery/delete/${addressId}`)
            .then((res) => {
                alert(addressId +", 배송지 삭제 완료! "+ res.data);
            })
            .catch((res) => {
                alert("문제 발생! "+ res.data);
            })
    },
    reqMyPageCheckDefaultAddressToSpring({}, defaultAddress) {
        return axiosInst.get(`/delivery/register/check-defaultAddress/${defaultAddress}`)
            .then((res) => {
                return res.data
            })
            .catch(() => {
                alert("문제 발생!")
            })
    },
    }

}