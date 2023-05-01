<template>
    <div class="mt-10 mx-5 grey lighten-4 p-5">
        <div v-if="!completeOrderList || (Array.isArray(completeOrderList) && completeOrderList.length === 0)">
            <v-card outlined flat height="300">
                <div class="d-flex justify-center align-center h2 empty-msg">
                    주문 내역이 존재하지 않습니다.
                </div>
            </v-card>
        </div>
        <div v-else>
            <v-card v-for="completeOrder in completeOrderList" :key="completeOrder.orderId" class="m-5 p-5 rounded-xl" flat outlined>
                <div>
                    <v-chip class="ms-3">결제완료</v-chip>
                    <v-row>
                        <v-col cols="8">
                            <v-card-text>
                                <v-row>
                                    <v-col class="mt-1">
                                        <div><strong>주문번호</strong></div>
                                        <div>{{ completeOrder.orderNo }}</div>
                                    </v-col>
                                    <v-col>
                                        <div><strong>주문일시</strong></div>
                                        <div>{{ completeOrder.orderDate | formatDate }}</div>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col>
                                        <div><strong>주문상품</strong></div>
                                        <div class="h4">
                                            {{ completeOrder.orderTotalCount === 1 ? completeOrder.orderItemList[0].productName : `${completeOrder.orderItemList[0].productName} 외 ${completeOrder.orderTotalCount - 1}건` }}
                                        </div>
                                    </v-col>
                                    <v-col>
                                        <div><strong>결제금액</strong></div>
                                        <div class="h4">
                                            {{ new Intl.NumberFormat().format(completeOrder.amount) }}원
                                        </div>
                                    </v-col>
                                </v-row>
                            </v-card-text>
                        </v-col>
                        <v-col>
                            <v-img
                                :src="require(`@/assets/productImgs/${completeOrder.orderItemList[0].thumbnail}`)"
                                aspect-ratio="1"
                                max-width="200"
                                max-height="200"
                                contain
                            />
                        </v-col>
                    </v-row>
                </div>
                <v-card-actions class="ms-2 pb-5 pt-0 justify-end">
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

<style scoped>

    .empty-msg {
        margin-top: 130px;
    }

</style>