<template>
    <v-layout>
        <v-dialog v-model="dialog" persistent max-width="800">
            <template v-slot:activator="{on}">
                <v-btn class="w-10 me-2" outlined color="#692498" v-on="on">상세 보기</v-btn>
            </template>

            <v-form ref="form">
                <v-card class="rounded-xl p-3">
                    <div class="d-flex justify-end">
                        <v-icon class="mt-6 me-6 mb-0" @click="btnCancel()">mdi-close</v-icon>
                    </div>
                    <v-card-title class="h4 d-flex justify-center">
                        주문 상세 내역
                    </v-card-title>
                    <br>
                    <v-card-text class="order-read-main mb-5">
                        <div class="mb-1"><strong>주문번호</strong> | {{ completeOrder.orderNo }}</div>
                        <div class="mb-1"><strong>주문일시</strong> | {{ completeOrder.orderDate | formatDate }}</div>
                        <v-divider color="black"></v-divider>
                        <div class="mb-1"><strong>수령인</strong> | {{ completeOrder.recipientName }}</div>
                        <div class="mb-1"><strong>연락처</strong> | {{ completeOrder.phoneNumber }}</div>
                        <div class="mb-1"><strong>배송지</strong> | {{ completeOrder.road }} {{ completeOrder.addressDetail }}</div>
                        <div class="mb-1"><strong>배송 시 요청사항</strong> | {{ completeOrder.selectedDeliveryReq }}</div>
                        <v-divider color="black"></v-divider>
                        <div class="mb-1"> <strong>주문상품</strong>
                            <div class="mb-2 p-3" outlined v-for="(item, index) in completeOrder.orderItemList" :key="index">
                                <v-row>
                                    <v-col cols="2">
                                        <v-img
                                            :src="require(`@/assets/productImgs/${item.thumbnail}`)"
                                            aspect-ratio="1"
                                            max-width="100"
                                            max-height="100"
                                            contain
                                        />
                                    </v-col>
                                    <v-col>
                                        <div class="mb-1">상품명: {{ item.productName }}</div>
                                        <div class="mb-1">수량: {{ item.orderItemCount }}개</div>
                                    </v-col>
                                </v-row>
                            </div>
                            <strong>합계금액</strong> | {{ new Intl.NumberFormat().format(completeOrder.orderItemList[0].orderItemPrice) }}원
                        </div>
                        <v-divider color="black"></v-divider>
                        <div class="mb-1"><strong>결제번호</strong> | {{ completeOrder.merchant_uid }}</div>
                        <div class="mb-1"><strong>결제일시</strong> | {{ completeOrder.regData | formatDate }}</div>
                        <div class="mb-1"><strong>결제총액</strong> | {{ new Intl.NumberFormat().format(completeOrder.amount) }}원</div>
                    </v-card-text>
                </v-card>
            </v-form>
        </v-dialog>
    </v-layout>
</template>

<script>

import {mapState} from "vuex";

const mypageModule = 'mypageModule';

export default {
    name: "MyPageOrderReadForm",
    props: {
        completeOrder: {
            type: Object,
            required: true,
        },
    },
    data() {
        return {
            dialog: false,
        }
    },
    async created () {
        
    },
    computed: {
        ...mapState(mypageModule, [])
    },
    methods: {
        btnCancel() {
            this.dialog = false;
        },
    }
    
}
</script>

<style scoped>
.order-read-main {
    padding: 0 100px 0 100px;
}
</style>