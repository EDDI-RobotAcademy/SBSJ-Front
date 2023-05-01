<template>
    <div class="mt-10 mx-5">
        <div v-if="!reviewList || (Array.isArray(reviewList) && reviewList.length === 0)">
            <div class="d-flex justify-center">
                <h1 class="mt-10">아무것도 없음</h1>
            </div>
        </div>
        <div v-else>
            <v-card v-for="review in reviewList" :key="review.productReviewId" class="mb-5 rounded-xl">
                <v-row>
                    <v-col cols="1">
                        <v-checkbox
                            color="blue"
                            hide-details
                            style="padding-top: 60px; padding-left: 50px;
                                    width: 20px;"
                        ></v-checkbox>
                    </v-col>
                    <v-col cols="2">
                        <router-link :to="{ name: 'ProductReadPage', params: { productId: review.product.productId } }" class="baby-product-link">
                            <v-img :src="require(`@/assets/productImgs/${review.thumbnail}`)" 
                                cover class="grey lighten-2" style="border-radius: 20px;"/>
                        </router-link>
                    </v-col>
                    <v-col>
                        <router-link :to="{ name: 'ProductReadPage', params: { productId: review.product.productId } }"
                            class="baby-product-link" style="text-decoration: none; color: black">
                            <v-card-title style="font-size: 20px; padding-top:40px;">
                                {{ review.product.productName }}
                            </v-card-title>
                            
                            <v-card-text style="font-size: 18px;">
                                <strong>{{ new Intl.NumberFormat().format(review.price) }}원</strong>
                            </v-card-text>
                        </router-link>
                    </v-col>
                    <v-col>
                        <div class="review-info">
                            <div class="review-time">
                                작성일자: {{ review.createDate.slice(0, 10) }}
                            </div>
                            <div class="review-rate">
                                부여별점: {{ review.starRate }}
                            </div>
                            <div class="review-content">
                                {{ review.context }}
                            </div>
                        </div>
                    </v-col>
                    <v-col>
                        <div class="other-info">
                            <v-btn
                                class="directive-btn"
                                rounded
                                @click="deleteReview(review)"
                            >
                                <span class="directive-btn-text">삭제하기</span>
                            </v-btn>
                            <v-btn class="directive-btn" @click="modifyReview(review)" rounded>
                                <span class="directive-btn-text">변경하기</span>
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
    .other-info {
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

    }
</style>