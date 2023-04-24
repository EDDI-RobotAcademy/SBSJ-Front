<template>
    <div class="mt-10 mx-5">
        <div v-if="!completeOrderList || (Array.isArray(completeOrderList) && completeOrderList.length === 0)">
            <div class="d-flex justify-center">
                <h1 class="mt-10">아무것도 없음</h1>
            </div>
        </div>
        <div v-else>
            <v-card v-for="completeOrder in completeOrderList" :key="completeOrder.orderId" class="mb-5 rounded-xl">
                <v-card-text>
                    <div class="mb-1">주문번호: {{ completeOrder.orderNo }}</div>
                    <div class="mb-1">주문일시: {{ completeOrder.orderDate | formatDate }}</div>
                    <div class="mb-1">
                        주문상품: {{ completeOrder.orderTotalCount === 1 ? completeOrder.orderItemList[0].productName : `${completeOrder.orderItemList[0].productName} 외 ${completeOrder.orderTotalCount - 1}건` }}
                    </div>
                    <div class="mb-1">결제금액: {{ new Intl.NumberFormat().format(completeOrder.amount) }}원</div>
                </v-card-text>
                <v-card-actions class="ms-2 pb-5 pt-0">
                    <my-page-order-read-form :completeOrder="completeOrder"/>
                </v-card-actions>
            </v-card>
        </div>
    </div>
</template>

<script>
import MyPageOrderReadForm from "@/components/mypage/MyPageOrderReadForm.vue"
import {mapActions, mapState} from "vuex";

const mypageModule = 'mypageModule';

export default {
    name: "MyPageOrderListForm",
    components: { MyPageOrderReadForm },
    data() {
        return {
            
        }
    },
    async created () {
        let userInfo = JSON.parse(localStorage.getItem("userInfo"));
        let token = userInfo.token;
        console.log("MyPageOrder created() token: " + token);
        
        await this.reqCompleteOrderListToSpring(token);
        console.log(this.completeOrderList)
    },
    computed: {
        ...mapState(mypageModule, ['completeOrderList'])
    },
    methods: {
        ...mapActions(mypageModule, [
            'reqCompleteOrderListToSpring',
        ]),
    }
    
}
</script>

<style>

</style>