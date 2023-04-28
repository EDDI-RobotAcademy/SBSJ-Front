import {
    REQUEST_CART_ITEM_LIST_TO_SPRING,
    REQUEST_MY_PAGE_DELIVERY_LIST_TO_SPRING,
    RESPONSE_COUNT_REQUEST,
    REQUEST_ORDER_PAGE_DELIVERY_LIST_TO_SPRING,

} from "./mutation-types";

import mainRequest from '@/api/mainRequest';

export default { 

    // 장바구니에 추가
    reqAddCartToSpring({}, payload) {
        const { memberId, productId, count } = payload;
        console.log(memberId + ', ' + productId +', '+ count)

        return mainRequest.post("/cart/addCartItem", { memberId, productId, count })
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
        return await mainRequest.post("/cart/list", userInfo)
            .then((res) => {
                console.log("res.data: " + res.data.cartItemId)
                localStorage.setItem("lsCartItems", JSON.stringify(res.data));
                commit(REQUEST_CART_ITEM_LIST_TO_SPRING, res.data)
            })
    },

    // 장바구니에 든 상품 수량 변경
    reqCartItemCountChangeToSpring({commit}, payload) {
        console.log("reqCartItemCountChangeToSpring: "+ JSON.stringify(payload));
        return mainRequest.post("/cart/changeCartItemCount", payload)
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

        await mainRequest.post("/cart/deleteCartItem", {
            selectCartItemId: payload.selectCartItemId,
        }).then(() => {
            console.log("장바구니에서 삭제되었습니다.")
        }).catch(() => {
            console.log("문제가 발생하여 삭제되지 않았습니다.")
        });
    },

    reqMyPageDeliveryListToSpring({}, memberId) {
        return mainRequest.get(`/delivery/list/${memberId}`)
            .then((res) => {
                localStorage.setItem("lsDeliveryList", JSON.stringify(res.data));
            })
            .catch(() => {
                alert('문제 발생!')
            })
    },

    reqMyPageRegisterDeliveryToSpring({}, payload) {
        const { memberId, addressName, addressType, recipientName, phoneNumber, 
                road, addressDetail, zipcode, defaultAddress } = payload
        return mainRequest.post("/delivery/register", 
               { memberId, addressName, addressType, recipientName, phoneNumber, 
                road, addressDetail, zipcode, defaultAddress })
            .then((res) => {
                alert("배송지 등록 완료!");
                return res.data;
            })
            .catch(() => {
                alert('문제 발생!')
            })
    },
    reqMyPageDeleteDeliveryToSpring({}, addressId) {
        return mainRequest.get(`/delivery/delete/${addressId}`)
            .then((res) => {
                alert(addressId +", 배송지 삭제 완료! "+ res.data);
            })
            .catch((res) => {
                alert("문제 발생! "+ res.data);
            })
    },
    reqMyPageCheckDefaultAddressToSpring({}, payload) {
        const { memberId, defaultAddress } = payload;
        return mainRequest.get(`/delivery/register/check-defaultAddress/${memberId}/${defaultAddress}`)
            .then((res) => {
                return res.data
            })
            .catch(() => {
                alert("기본 배송지 체크 문제 발생!")
            })
    },
    reqMyPageModifyDeliveryToSpring({}, payload) {
        const { addressId, memberId, addressName, addressType, recipientName, phoneNumber, 
                road, addressDetail, zipcode, defaultAddress } = payload
        return mainRequest.post("/delivery/modify", 
                { addressId, memberId, addressName, addressType, recipientName, phoneNumber, 
                    road, addressDetail, zipcode, defaultAddress })
            .then(() => {
                alert("배송지 수정 완료!")
            })
            .catch(() => {
                alert('문제 발생!')
            })
    },

    // 주문 페이지에서 보는 배송지 목록
    reqOrderPageDeliveryListToSpring({ commit }, memberId) {
        return mainRequest.get(`/delivery/list/${memberId}`)
            .then((res) => {
                let returnData = JSON.stringify(res.data);
                console.log("리턴 데이터: "+ returnData);
                
                localStorage.setItem("lsDeliveryList", JSON.stringify(res.data));
                commit(REQUEST_ORDER_PAGE_DELIVERY_LIST_TO_SPRING, res.data);
            })
            .catch(() => {
                alert('문제 발생!')
            })
    },

    // 결제 성공하면 주문 정보 저장
    reqRegisterOrderToSpring({}, payload) {
        const { amount, merchant_uid, sendInfo, imp_uid, phoneNumber, recipientName, addressId, road, addressDetail, zipcode, selectedDeliveryReq } = payload
        return mainRequest.post("/order/register",
            { amount, merchant_uid, sendInfo, imp_uid, phoneNumber, recipientName, addressId, road, addressDetail, zipcode, selectedDeliveryReq })
            .then((res) => {
                console.log(res)
            })
            .catch(() => {
                alert('문제 발생!')
            })
    },
    
}