<template>
    <div class="mt-10 mx-5 grey lighten-4 p-5">
        <div v-if="!reviewList || (Array.isArray(reviewList) && reviewList.length === 0)">
            <v-card outlined flat height="300">
                <div class="d-flex justify-center align-center h2 empty-msg">
                    작성한 리뷰가 없습니다.
                </div>
            </v-card>
        </div>
        <div v-else>
            <v-card v-for="review in reviewList" :key="review.productReviewId" class="mb-5 p-3 rounded-xl" flat outlined>
                <v-row class="d-flex align-center">
                    <!-- <v-col cols="1">
                        <v-checkbox
                            color="#692498"
                            hide-details
                            class="ms-3 mb-3"
                        ></v-checkbox>
                    </v-col> -->
                    <v-col cols="2">
                        <router-link :to="{ name: 'ProductReadPage', params: { productId: review.product.productId } }" class="baby-product-link">
                            <v-img :src="require(`@/assets/productImgs/${review.thumbnail}`)" 
                                cover class="grey lighten-2" style="border-radius: 20px;"/>
                        </router-link>
                    </v-col>
                    <v-col cols="2">
                        <v-card-title>
                            <router-link :to="{ name: 'ProductReadPage', params: { productId: review.product.productId } }"
                                class="baby-product-link" style="text-decoration: none; color: black">
                                    <strong>{{ review.product.productName }}</strong>
                            </router-link>
                        </v-card-title>    
                        <v-card-text>
                            {{ new Intl.NumberFormat().format(review.price) }}원
                        </v-card-text>
                    </v-col>
                    <v-col cols="5">
                        <div class="review-info me-3">
                            <div class="review-time">
                                작성일자 : {{ review.createDate.slice(0, 10) }}
                            </div>
                            <div class="review-rate">
                                부여별점 : {{ review.starRate }}점
                            </div>
                            <v-divider color="black"></v-divider>
                            <div class="review-content h5">
                                "{{ review.context }}"
                            </div>
                        </div>
                    </v-col>
                    <v-col>
                        <div class="other-info">
                            <v-btn 
                                class="directive-btn"
                                outlined rounded color="#692498"
                                @click="modifyReview(review)"
                            >
                                변경하기
                            </v-btn>
                            <v-btn
                                class="directive-btn"
                                rounded outlined color="grey"
                                @click="deleteReview(review)"
                            >
                                삭제하기
                            </v-btn>
                        </div>
                    </v-col>
                </v-row>
            </v-card>
        </div>
    </div>
</template>
  
<script>

import {mapActions, mapState} from "vuex";

const productModule = 'productModule';
const mypageModule = 'mypageModule';

export default {
    name: "MyPageReviewForm",
    computed : {
        ...mapState(mypageModule, ['reviewList'])
    },
    async created() {
        let userInfo = JSON.parse(localStorage.getItem("userInfo"));
        let memberId = userInfo.memberId;
        await this.requestMypageReviewListToSpring(memberId);
    },
    methods:{
        ...mapActions(mypageModule, ['requestMypageReviewListToSpring']),
        ...mapActions(productModule, ["reqDeleteReviewToSpring"]),
        async deleteReview(review) {
              let checkDelete = confirm("이 리뷰를 삭제하시겠습니까?");
              if(checkDelete) {
                  await this.reqDeleteReviewToSpring(review.productReviewId);
                  window.location.reload(true);
              }
        },
        modifyReview(review) {
            this.$router.push({name: 'ReviewModifyPage', params: {review: review}})
        }
        
        

    },
}
</script>

<style scoped>
    /* .other-info {
        float: right;
    }

    .directive-btn {
        display: block;
        margin-right: 30px;
        margin-bottom: 30px;
        margin-top: 30px;
    }

    .review-info > * {
        float: left;
        display: block;
        width: 300px;
    }

    .review-time {
        width: 200px;

    } */

    .empty-msg {
        margin-top: 130px;
    }
</style>