import {
    REQUEST_CART_ITEM_LIST_TO_SPRING,
    REQUEST_MY_PAGE_DELIVERY_LIST_TO_SPRING,
    RESPONSE_COUNT_REQUEST,
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

    // 장바구니 목록 조회
    async reqCartItemListToSpring({commit}, userInfo) {
        console.log("reqCartItemListToSpring userInfo: " + userInfo.token);
        return await axiosInst.post("/cart/list", userInfo)
            .then((res) => {
                console.log("res.data: " + res.data.cartItemId)
                commit(REQUEST_CART_ITEM_LIST_TO_SPRING, res.data)
            })
    },

    // 장바구니에 든 상품 수량 변경
    reqCartItemCountChangeToSpring({commit}, payload) {
        return axiosInst.post("/cart/changeCartItemCount", payload)
            .then((res) => {
                commit(RESPONSE_COUNT_REQUEST, res.data)
            })
    },

    // 장바구니에서 삭제
    async reqDeleteCartItemFromSpring({}, payload) {
        console.log("아이디: " + payload.selectCartItemId)

        if (!payload.selectCartItemId || payload.selectCartItemId.length === 0) {
            alert("선택된 아이템이 없습니다.");
            return;
        }

        await axiosInst.post("/cart/deleteCartItem", {
            selectCartItemId: payload.selectCartItemId,
        }).then(() => {
            alert("장바구니에서 삭제되었습니다.")
        }).catch(() => {
            alert("문제가 발생하여 삭제되지 않았습니다.")
        });
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
    reqMyPageCheckDefaultAddressToSpring({}, payload) {
        const { memberId, defaultAddress } = payload;
        return axiosInst.get(`/delivery/register/check-defaultAddress/${memberId}/${defaultAddress}`)
            .then((res) => {
                return res.data
            })
            .catch(() => {
                alert("기본 배송지 체크 문제 발생!")
            })
    },
    reqMyPageModifyDeliveryToSpring({}, payload) {
        const { addressId, memberId, addressName, addressType, recipientName, phoneNumber, 
                city, street, addressDetail, zipcode, defaultAddress } = payload
        return axiosInst.post("/delivery/modify", 
                { addressId, memberId, addressName, addressType, recipientName, phoneNumber, 
                  city, street, addressDetail, zipcode, defaultAddress })
            .then(() => {
                alert("배송지 수정 완료!")
            })
            .catch(() => {
                alert('문제 발생!')
            })
    }
    
}