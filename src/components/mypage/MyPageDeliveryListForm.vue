<template>
    <div class="mt-10 mx-5 grey lighten-4 p-5">
        <div v-if="!localDeliveryList || (Array.isArray(localDeliveryList) && localDeliveryList.length === 0)">
            <div class="d-flex justify-end mb-5">
                <my-page-register-address-form @submit="onSubmit"/>
            </div>
            <v-card outlined flat height="300">
                <div class="d-flex justify-center align-center h2 empty-msg">
                    등록된 배송지가 없습니다.
                </div>
            </v-card>
        </div>
        <div v-else>
            <div class="d-flex justify-end mb-5 me-8">
                <my-page-register-address-form @submit="onSubmit"/>
            </div>
            <v-card v-for="delivery in localDeliveryList" :key="delivery.addressId" class="mb-5 mx-5 rounded-xl p-4" flat outlined>
                
                <v-card-title style="font-size: 20px;">
                    <strong>[{{ delivery.addressType }}]&nbsp;{{ delivery.addressName }}</strong>
                </v-card-title>
                <div v-if="delivery.defaultAddress" style="font-size: 15px;">
                    <span class="ms-4 px-2 py-1 border border-1 border-secondary rounded-pill w-10">기본배송지</span>
                </div>
                
                <v-card-text style="font-size: 18px;">
                    <div class="mb-1">수령인 : {{ delivery.recipientName }}</div>
                    <div class="mb-1">연락처 : {{ delivery.phoneNumber }}</div>
                    <div class="mb-1">주소지 : {{ delivery.road }} {{ delivery.addressDetail }} ({{ delivery.zipcode }})</div>
                </v-card-text>
                <v-card-actions class="ms-2 pb-5 pt-0">
                    <my-page-delivery-modify-form :delivery="delivery"/>
                </v-card-actions>
            </v-card>
        </div>
    </div>
</template>
  
<script>

import MyPageRegisterAddressForm from "@/components/mypage/MyPageRegisterAddressForm.vue"
import MyPageDeliveryModifyForm from '@/components/mypage/MyPageDeliveryModifyForm.vue';
import {mapActions, mapState} from "vuex";

const orderModule = 'orderModule';

export default {
    name: "MyPageDeliveryListForm",
    components: { MyPageRegisterAddressForm, MyPageDeliveryModifyForm },
    data() {
        return {
            localDeliveryList: []
        }
    },
    async created() {
        let userInfo = JSON.parse(localStorage.getItem("userInfo"));
        let memberId = userInfo.memberId;

        let lsDeliveryList = JSON.parse(localStorage.getItem("lsDeliveryList"));

        // DB 에 데이터가 하나도 없을 때
        if(lsDeliveryList == '') {
            alert("배송지가 하나도 없습니다. 추가해주세요.");
        }

        // localStorage 에 lsDeliveryList 가 없을 때
        if(lsDeliveryList == null) {
            await this.reqMyPageDeliveryListToSpring(memberId);
            lsDeliveryList = JSON.parse(localStorage.getItem("lsDeliveryList"));
        }
        
        // localStorage 에 있는 lsDeliveryList 기본 배송지가 제일 위로 가게 정렬
        lsDeliveryList = lsDeliveryList.sort((a, b) => {
            if(a.defaultAddress.length < b.defaultAddress.length) return 1;
            if(a.defaultAddress.length > b.defaultAddress.length) return -1;
            return 0;
        })
        localStorage.setItem("lsDeliveryList", JSON.stringify(lsDeliveryList));

        this.localDeliveryList = lsDeliveryList;
    },
    methods:{
        ...mapActions(orderModule, ['reqMyPageRegisterDeliveryToSpring',
                                    'reqMyPageDeliveryListToSpring']),

        async onSubmit(payload) {
            let successRegister = await this.reqMyPageRegisterDeliveryToSpring(payload);

            let lsDeliveryList = JSON.parse(localStorage.getItem("lsDeliveryList"));
            if(lsDeliveryList == null) {
                if(successRegister != null) {
                    localStorage.setItem("lsDeliveryList", JSON.stringify(successRegister));
                }
            } else {
                lsDeliveryList.push(successRegister);
                localStorage.setItem("lsDeliveryList", JSON.stringify(lsDeliveryList));
            }
            window.location.reload(true);
        }
    },
}
</script>

<style scoped>

    .empty-msg {
        margin-top: 130px;
    }

</style>