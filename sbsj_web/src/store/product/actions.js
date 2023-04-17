import {
    REQUEST_PRODUCT_LIST_TO_SPRING,
    REQUEST_PRODUCT_TO_SPRING,
    REQUEST_PRODUCT_LIST_TO_SPRING_WITH_OPTION,
    REQUEST_PRODUCT_OPTION_LIST_TO_SPRING,

    REQUEST_WISH_LIST_TO_SPRING,
    REQUEST_READ_REVIEW_FROM_SPRING,
} from './mutation-types'

import axiosInst from '@/utility/axiosObject'
const config = {
    headers: { 'Content-Type': 'multipart/form-data' }
  };

export default {
    async requestProductListToSpring({commit}) {
        return await axiosInst.get('/category/default')
            .then((res) => {
                commit(REQUEST_PRODUCT_LIST_TO_SPRING, res.data);
            }).catch((err) => {
                console.log(err);
            })
    },
    async requestProductToSpring ({ commit }, payload) {
        const { memberId, productId } = payload;
        return await axiosInst.get(`/product/detail-product-page/${productId}/${memberId}`)
            .then((res) => {
                commit(REQUEST_PRODUCT_TO_SPRING, res.data)
            })
    },
    async requestProductListToSpringWithOption({commit}, option) {
        return await axiosInst.get(`/category/${option}`)
            .then((res) => {
                commit(REQUEST_PRODUCT_LIST_TO_SPRING_WITH_OPTION, res.data);
            }).catch((err) => {
                console.log(err);
            })
    },
    async requestProductOptionListToSpring({commit}) {
        console.log("actions()");
        return await axiosInst.get('/product/productOptions')
            .then((res) => {
                commit(REQUEST_PRODUCT_OPTION_LIST_TO_SPRING, res.data);
            }).catch((err) => {
                console.log(err);
            })
    },
    async requestCreateProductToSpring({}, payload) {
        console.log("ProductCreate()");
        for (let key of payload.keys()) {
            console.log(key, ": ", payload.get(key))
        }
        try {
            await axiosInst.post('/product/register', payload, config)
            alert("ProductCreated");
        } catch {
            console.log("error");
        }
    },

    reqMyPageWishListToSpring({ commit }, memberId) {
        return axiosInst.get(`/wish/list/${memberId}`)
            .then((res) => {
                if(res.data === "") {
                    alert("리뷰가 하나도 없습니다.");
                    return;
                }
                commit(REQUEST_WISH_LIST_TO_SPRING, res.data);
            })
            .catch(() => {
                alert("리뷰 리스트 가져오기 실패");
            })
    },
    reqSetWishToSpring({}, payload) {
        const { memberId, productId } = payload;
        console.log(productId, memberId);
        return axiosInst.get(`/wish/set/${productId}/${memberId}`)
            .then((res) => {
                alert("res.data: " + res.data);
                return res.data;
            })
            .catch(() => {
                console.log("찜 실패...");
            })
    },
    
    async reqRegisterReviewToSpring(_, payload) {
        return axiosInst.post('/review/register', payload)
            .then(() => {
            })
            .catch((error) => {
                console.log(error.message);
                alert('에러가 발생했습니다: ' + error.message);
            })
    },
    async reqRegisterReviewWithImageToSpring(_, payload) {
        return axiosInst.post('/review/register', payload, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then((res) => {
                console.log(res.data);
            })
            .catch((error) => {
                console.log(error.message);
                alert('에러가 발생했습니다: ' + error.message);
            })
    },
    async reqReadReviewFromSpring({commit}, productId) {
        return axiosInst.post(`/review/read/${productId}`)
            .then((res) => {
                commit(REQUEST_READ_REVIEW_FROM_SPRING, res.data)
            })
    },

}