import {
    REQUEST_PRODUCT_LIST_TO_SPRING,
    REQUEST_PRODUCT_TO_SPRING,
    REQUEST_PRODUCT_LIST_TO_SPRING_WITH_OPTION,
    REQUEST_PRODUCT_OPTION_LIST_TO_SPRING,

    REQUEST_WISH_LIST_TO_SPRING,
    REQUEST_READ_REVIEW_FROM_SPRING,
    REQUEST_STAR_RATE_AVERAGE,
    REQUEST_SEARCH_RESULT_PRODUCT_LIST_TO_SPRING,
    REQUEST_SPECIFIC_PRODUCT_LIST_TO_SPRING,
    REQUEST_SPECIFIC_BRAND_PRODUCT_LIST_TO_SPRING,
    REQUEST_PRODUCT_BRAND_LIST_TO_SPRING,
} from './mutation-types'

import mainRequest from '@/api/mainRequest';

const config = {
    headers: { 'Content-Type': 'multipart/form-data' }
  };

export default {
    async requestProductListToSpring({commit}, payload) {
        const { startIndex, endIndex } = payload
        return await mainRequest.get(`/category/default/${startIndex}/${endIndex}`)
            .then((res) => {
                commit(REQUEST_PRODUCT_LIST_TO_SPRING, res.data);
            }).catch((err) => {
                console.log(err);
            })
    },
    async requestProductToSpring ({ commit }, payload) {
        const { memberId, productId } = payload;
        return await mainRequest.get(`/product/detail-product-page/${productId}/${memberId}`)
            .then((res) => {
                commit(REQUEST_PRODUCT_TO_SPRING, res.data)
            })
    },
    async requestProductListToSpringWithOption({commit}, option) {
        return await mainRequest.get(`/category/${option}`)
            .then((res) => {
                commit(REQUEST_PRODUCT_LIST_TO_SPRING_WITH_OPTION, res.data);
            }).catch((err) => {
                console.log(err);
            })
    },
    async requestProductOptionListToSpring({commit}) {
        console.log("actions()");
        return await mainRequest.get('/product/productOptions')
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
            await mainRequest.post('/product/register', payload, config)
            alert("ProductCreated");
        } catch {
            console.log("error");
        }
    },

    reqMyPageWishListToSpring({ commit }, memberId) {
        return mainRequest.get(`/wish/list/${memberId}`)
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
        return mainRequest.get(`/wish/set/${productId}/${memberId}`)
            .then((res) => {
                alert("res.data: " + res.data);
                return res.data;
            })
            .catch(() => {
                console.log("찜 실패...");
            })
    },
    
    async reqRegisterReviewToSpring({}, payload) {
        console.log('리뷰 등록 요청 데이터:', payload); // 데이터 확인용 로그
        return mainRequest.post('/review/register', payload)
            .then((res) => {
                alert('리뷰등록완료.')
            })
            .catch((error) => {
                console.log(error.message);
                alert('에러가 발생했습니다: ' + error.message);
            })
    },
    async reqRegisterReviewWithImageToSpring({},formData) {
        
        return mainRequest.post('/review/registerWithImg', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        .then((res) => {
            console.log(res.data);
            alert('이미지리뷰등록완료.')
        })
        .catch((error) => {
            console.log(error.message);
            alert('에러가 발생했습니다: ' + error.message);
        });
    },
    async reqModifyReviewToSpring({}, payload) {
        console.log('리뷰 등록 요청 데이터:', payload); // 데이터 확인용 로그
        return mainRequest.put('/review/modify', payload)
            .then((res) => {
                console.log(res.data);
                alert('리뷰수정완료.')
            })
            .catch((error) => {
                console.log(error.message);
                alert('에러가 발생했습니다: ' + error.message);
            })
    },
    async reqModifyReviewWithImageToSpring({},formData) {
        console.log('리뷰 등록 요청 데이터:', formData);
        return mainRequest.put('/review/modifyWithImg', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        .then((res) => {
            console.log(res.data);
            alert('이미지리뷰수정완료.')
        })
        .catch((error) => {
            console.log(error.message);
            alert('에러가 발생했습니다: ' + error.message);
        });
    },
    async reqDeleteReviewToSpring({}, productReviewId) {
        return mainRequest.delete(`/review/deleteReview/${productReviewId}`)
            .then(() => {
                alert('리뷰삭제완료.')
            })
    },
    async reqReadReviewFromSpring({ commit }, payload) {
        const { productId, startIndex, endIndex } = payload
        try {
          const response = await mainRequest.get(`/review/list/${productId}/${startIndex}/${endIndex}`, { params: { productId } });
          commit(REQUEST_READ_REVIEW_FROM_SPRING, response.data);
          console.log(JSON.stringify(response.data));
        } catch (error) {
          console.error(error.message);
        }
    },
    async getStarRateAverage({ commit }, productId) {
        try {
          const response = await mainRequest.get(`/review/starRateAverage/${productId}`, { params: { productId } });
          console.log(JSON.stringify(response.data));
      
          if (response.data && response.data[0] && response.data[0].averageStarRate) {
            const starRateAverage = parseFloat(response.data[0].averageStarRate.toFixed(1));
            commit(REQUEST_STAR_RATE_AVERAGE, starRateAverage);
          } else {
            commit(REQUEST_STAR_RATE_AVERAGE, 0);
          }
        } catch (error) {
          console.error(error.message);
        }
      },
    async requestSpecificProductListToSpring ({ commit }, payload) {
        const { category, startIndex, endIndex } = payload;
        return await mainRequest.get(`/category/${category}/${startIndex}/${endIndex}`)
            .then((res) => {
                commit(REQUEST_SPECIFIC_PRODUCT_LIST_TO_SPRING, res.data)
            })
            .catch((error) => {
                console.log(error)
                alert(error.response.data.message);
            })
    },
    async requestProductBrandListToSpring({commit}) {
        console.log("requestProductBrandListToSpring()");
        return await mainRequest.get('/product/productBrands')
            .then((res) => {
                commit(REQUEST_PRODUCT_BRAND_LIST_TO_SPRING, res.data);
            }).catch((err) => {
                console.log(err);
            })
    },
    async requestSpecificBrandProductListToSpring({commit}, payload) {
        console.log("requestSpecificBrandProductListToSpring");
        const { brand, startIndex, endIndex } = payload
        return await mainRequest.get(`/category/brand/${brand}/${startIndex}/${endIndex}`)
            .then((res) => {
                commit(REQUEST_SPECIFIC_BRAND_PRODUCT_LIST_TO_SPRING, res.data);
            }).catch((err) => {
                console.log(err)
            })
    },
    async requestSearchResultProductListToSpring({commit}, payload) {
        console.log("requestSearchResultProductListToSpring()");
        const { query, startIndex, endIndex } = payload
        console.log(query)
        return await mainRequest.get(`/category/search/${query}/${startIndex}/${endIndex}`)
            .then((res) => {
                commit(REQUEST_SEARCH_RESULT_PRODUCT_LIST_TO_SPRING, res.data);
            }).catch((err) => {
                console.log(err);
                commit(REQUEST_SEARCH_RESULT_PRODUCT_LIST_TO_SPRING, res.data);
            })
    }
}