<template>
  <v-container>
    <div class="order-info-title grey lighten-4">
        <v-row class="white">
            <v-col cols="auto">
                <div class="pa-1 ms-4">
                    <h2>주문안내</h2>
                </div>
            </v-col>
        </v-row>
        <v-divider color="black" class="mt-3"></v-divider>

        <!-- 메인 컴포넌트 -->
        <div class="order-info-main"> 
            <v-row>

                <!-- 주문자 이름 번호 배송지 정보 -->
                <v-col cols="7">
                    <v-card class="ms-8 mb-5 pa-5" max-width="800" flat outlined>
                        <v-list-item>
                            <v-list-item-content>
                                <v-list-item-title class="headline">
                                    <p>주문자 정보</p>
                                    <v-divider class="mt-3" color="black"></v-divider>
                                </v-list-item-title>

                                <v-list-item-title class="name-phone mt-1 mb-2">
                                    <div class="mb-2"><strong>주문자</strong> &nbsp;|&nbsp; {{ member.name }}</div>
                                    <div><strong>연락처</strong> &nbsp;|&nbsp; {{ member.phoneNumber }}</div>
                                    <v-divider class="mt-5 mb-5" color="black"></v-divider>

                                    <div class="mb-2">
                                        <v-icon>mdi-map-marker</v-icon>
                                        {{ defaultDelivery.addressName }}
                                    </div>
                                    <div class="mb-2"><strong>수령인</strong> &nbsp;|&nbsp; {{ defaultDelivery.recipientName }}</div>
                                    <div><strong>연락처</strong> &nbsp;|&nbsp; {{ defaultDelivery.phoneNumber }}</div>
                                </v-list-item-title>
                                
                                <v-list-item-title class="address">
                                    <p><strong>배송지</strong> &nbsp;|&nbsp; {{ defaultDelivery.road }} {{ defaultDelivery.addressDetail }}</p>
                                    <div class="address-message">
                                        <v-select label="배송시 요청사항을 선택해주세요." 
                                                :items="deliveryMsg" 
                                                v-model="selectedOption">
                                        </v-select>
                                        <v-textarea outlined v-if="selectedOption === deliveryMsg[2]" v-model="writeDeliveryMsg"></v-textarea>
                                    </div>
                                </v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                        <v-card-actions class="d-flex justify-end">
                            <v-dialog v-model="dialog" persistent width="1024">
                                <template v-slot:activator="{ on }">
                                    <v-btn class="me-2" v-on="on" outlined color="teal">
                                        배송지 변경
                                    </v-btn>
                                </template>
                                <v-card>
                                    <v-card-title>
                                        <span class="text-h5">배송지 변경</span>
                                    </v-card-title>
                                    <v-card-text>
                                        <v-container>
                                            <v-row>
                                                <v-col cols="12" sm="6">
                                                    <v-text-field label="*배송지명" hint="ex) 즐거운나의집" required></v-text-field>
                                                </v-col>
                                                <v-col cols="12" sm="6">
                                                    <v-select
                                                    :items="['집', '직장', '학교', '기타']"
                                                    label="*배송지 타입"
                                                    hint="ex) 직장"
                                                    required
                                                    ></v-select>
                                                </v-col>
                                                <v-col cols="12" sm="6">
                                                    <v-text-field label="*수령인 이름" required></v-text-field>
                                                </v-col>
                                                <v-col cols="12" sm="6">
                                                    <v-text-field label="*전화번호" hint="하이픈(-)을 넣어 작성해주세요. ex) 010-1234-5678" required></v-text-field>
                                                </v-col>
                                                <v-col cols="12">
                                                    <v-text-field label="*기본 주소" required></v-text-field>
                                                </v-col>
                                                <v-col cols="12">
                                                    <v-text-field label="상세 주소"></v-text-field>
                                                </v-col>
                                                <v-col cols="12">
                                                    <v-text-field label="*우편번호" required></v-text-field>
                                                </v-col>
                                            </v-row>
                                        </v-container>
                                        <small>*필수 입력 정보</small>
                                    </v-card-text>
                                    <v-card-actions>
                                        <v-spacer></v-spacer>
                                        <v-btn
                                            color="blue-darken-1"
                                            variant="text"
                                            @click="dialog = false"
                                        >
                                            닫기
                                        </v-btn>
                                        <v-btn
                                            color="blue-darken-1"
                                            variant="text"
                                            @click="dialog = false"
                                        >
                                            저장
                                        </v-btn>
                                        <!-- 저장 누르면 배송지 업데이트? -->
                                    </v-card-actions>
                                </v-card>
                            </v-dialog>
                        </v-card-actions>
                    </v-card>

                    <!-- 결제 수단 정보 -->
                    <v-card class="ms-8 mb-6 pa-5" max-width="800" flat outlined>
                        <v-list-item three-line>
                            <v-list-item-content>
                                <v-list-item-title class="headline">
                                    <div class="headline">
                                        <p>결제 수단</p>
                                        <v-divider class="mt-3" color="black"></v-divider>
                                    </div>
                                    <div class="mb-3">
                                        <v-btn-toggle v-model="selectedPayment" mandatory color="teal" variant="outlined">
                                            <v-btn value="kakao">카카오페이</v-btn>
                                            <v-btn value="creditCard">신용카드</v-btn>
                                        </v-btn-toggle>
                                    </div>
                                    
                                    <v-row justify="center" v-if="selectedPayment === 'kakao'">
                                        <v-sheet class="mt-5 mb-5" border rounded :height="150" :width="180" color="yellow">
                                            <v-img
                                                :src="require(`@/assets/uploadImgs/${kakaoImageName}`)"
                                                aspect-ratio="1"
                                                contain
                                            />
                                        </v-sheet>
                                    </v-row>
                                    <v-row justify="center" v-if="selectedPayment === 'creditCard'">
                                        <v-sheet border rounded :height="180" :width="200">
                                            <v-img
                                                :src="require(`@/assets/uploadImgs/${cardImageName}`)"
                                                aspect-ratio="1"
                                                contain
                                            />
                                        </v-sheet>
                                    </v-row>
                                    
                                </v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                    </v-card>
                </v-col>

                <!-- 주문 상품 및 가격 정보 -->
                <v-col>
                    <v-card class="me-8 pa-5" flat outlined>
                        <v-list-item three-line>
                            <v-list-item-content>
                                <v-list-item-title class="headline">
                                    <div>
                                        <p>주문 상품</p>
                                        <v-divider class="mt-3" color="black"></v-divider>    
                                    </div>
                                </v-list-item-title>
                                <div v-if="orderList.orderSave.directOrderCheck">
                                    <v-row v-for="(orderItem, index) in orderList" :key="index">
                                        <v-col cols="3">
                                            <v-list-item-avatar class="d-flex justify-start" tile size="100">
                                                <v-img
                                                    :src="require(`@/assets/productImgs/${orderItem.thumbnail}`)"
                                                    aspect-ratio="1"
                                                    max-width="100"
                                                    max-height="100"
                                                    contain
                                                />
                                            </v-list-item-avatar>
                                        </v-col>
                                        <v-col>
                                            <v-card-text>
                                                <div><h5><strong>{{ orderItem.product.productName }}</strong></h5></div>
                                                <p></p>
                                                <div><h6><strong>{{ orderItem.count }}</strong>개</h6></div>
                                                <p></p>
                                                <div><h6><strong>{{ new Intl.NumberFormat().format(orderItem.totalPrice) }}</strong>원</h6></div>
                                            </v-card-text>
                                        </v-col>
                                    </v-row>
                                </div>
                                <div v-else>
                                    <v-row v-for="(orderItem, index) in orderList.orderSave.selectItems" :key="index">
                                        <v-col cols="3">
                                            <v-list-item-avatar class="d-flex justify-start" tile size="100">
                                                <v-img
                                                    :src="require(`@/assets/productImgs/${orderItem.thumbnail}`)"
                                                    aspect-ratio="1"
                                                    max-width="100"
                                                    max-height="100"
                                                    contain
                                                />
                                            </v-list-item-avatar>
                                        </v-col>
                                        <v-col>
                                            <v-card-text>
                                                <div><h5><strong>{{ orderItem.product.productName }}</strong></h5></div>
                                                <p></p>
                                                <div><h6><strong>{{ orderItem.count }}</strong>개</h6></div>
                                                <p></p>
                                                <div><h6><strong>{{ new Intl.NumberFormat().format(orderItem.price * orderItem.count) }}</strong>원</h6></div>
                                            </v-card-text>
                                        </v-col>
                                    </v-row>
                                </div>
                                <v-divider class="my-3" color="black"></v-divider>
                                <v-row>
                                    <v-col>
                                        <div class="mb-3">상품 금액</div>
                                        <div>배송비</div>
                                    </v-col>
                                    <v-col>
                                        <div class="d-flex justify-end mb-3"><strong>{{ new Intl.NumberFormat().format(orderList.orderSave.totalPrice) }}</strong>원</div>
                                        <div class="d-flex justify-end">
                                            <p v-if="orderList.orderSave.totalPrice > 49999"><strong>0</strong>원</p>
                                            <p v-else><strong>3,000</strong>원</p>
                                        </div>
                                    </v-col>
                                </v-row>
                                <v-divider class="mt-0 mb-1" color="black"></v-divider>
                                <v-row>
                                    <v-col>
                                        <div class="text-h5 mb-3">결제 총액</div>
                                    </v-col>
                                    <v-col>
                                        <div class="d-flex justify-end text-h5">
                                            <p v-if="orderList.orderSave.totalPrice > 49999">
                                                <strong>{{ new Intl.NumberFormat().format(orderList.orderSave.totalPrice) }}</strong>원
                                            </p>
                                            <p v-else>
                                                <strong>{{ new Intl.NumberFormat().format(orderList.orderSave.totalPrice + 3000) }}</strong>원
                                            </p>
                                        </div>
                                    </v-col>
                                </v-row>
                                <v-btn block color="teal" v-if="selectedPayment === 'kakao'" @click="kakaoPay">
                                    <v-icon>mdi-credit-card-check-outline</v-icon>
                                    <strong>결제하기</strong>
                                </v-btn>
                                <v-btn block color="teal" v-else-if="selectedPayment === 'creditCard'" @click="cardPay">
                                    <v-icon>mdi-credit-card-check-outline</v-icon>
                                    <strong>결제하기</strong>
                                </v-btn>
                                <v-btn block color="teal" v-else disabled>
                                    <v-icon>mdi-credit-card-check-outline</v-icon>
                                    <strong>결제하기</strong>
                                </v-btn>
                            </v-list-item-content>
                        </v-list-item>
                    </v-card>
                </v-col>
            </v-row>
        </div>
    </div>
  </v-container>
</template>

<script>
import { mapActions, mapState } from "vuex";

const orderModule = 'orderModule'
const accountModule = 'accountModule'

const IMP = window.IMP;
IMP.init("imp36761363");

export default {
    name: "OrderInfoForm",
    data() {
      return {
        selectedPayment: null,
        dialog: false,
        kakaoImageName: "카카오페이_CI_combination_with_BG.png",
        cardImageName: "credit-card.png",
        deliveryMsg: ['도착하기 전에 연락 바랍니다.', '문 앞에 놔주세요.', '직접 입력'],
        selectedOption: "",
        writeDeliveryMsg: "",
        selectedDeliveryReq: "",
        defaultDelivery: {
            addressName: '',
            addressType: '',
            road: '',
            addressDetail: '',
            zipcode: '',
            phoneNumber: '',
            recipientName: ''
        },
        merchant_uid : 'ORD2023',
        randomNumber : 0,
        usedNum : [],
      }
    },
    computed: {
        ...mapState(orderModule, [
            'orderList',
            'orderDeliveryList',
        ]),
        ...mapState(accountModule, [
            'member',
        ]),
    },
    async created() {
        let userInfo = JSON.parse(localStorage.getItem("userInfo"));
        let memberId = userInfo.memberId;
        let lsDeliveryList = JSON.parse(localStorage.getItem("lsDeliveryList"));

        console.log("멤버아이디: "+ memberId);
        await this.reqMyPageMemberInfoToSpring(memberId)

        if(lsDeliveryList === null || lsDeliveryList.length === 0) {
            await this.reqOrderPageDeliveryListToSpring(memberId);
            lsDeliveryList = JSON.parse(localStorage.getItem('lsDeliveryList'));
        } 
        
        if (lsDeliveryList && lsDeliveryList.length > 0) {
            this.defaultDelivery = lsDeliveryList[0]
            console.log("로컬스토리지에 저장된 기본 배송지: "+ this.defaultDelivery.addressName);
        } else {
            console.log("로컬스토리지에 배송지 정보가 없습니다.");
        }

    },
    methods: {
        ...mapActions(accountModule, [
            "reqMyPageMemberInfoToSpring"
        ]),
        ...mapActions(orderModule, [
            "reqOrderPageDeliveryListToSpring",
        ]),
        setDeliveryRequest() {
            this.selectedDeliveryReq = this.selectedOption === this.deliveryMsg[2] ? this.writeDeliveryMsg : this.selectedOption
            console.log(this.selectedDeliveryReq);
        },
        setSendInfo() {
            const sendInfo = {
                productId: [],
                memberId: [],
                orderCount: [],
                orderPrice: []
            };
            const orderSave = this.orderList.orderSave;
            let userInfo = JSON.parse(localStorage.getItem("userInfo"));
            let memberId = userInfo.memberId;

            if (orderSave.directOrderCheck) {
                // 직접 주문인 경우
                const product = orderSave.product;
                sendInfo.productId.push(product.productId);
                sendInfo.memberId.push(memberId);
                sendInfo.orderCount.push(orderSave.count);
                sendInfo.orderPrice.push(orderSave.totalPrice);
            } else {
                // 선택(여러개) 주문인 경우
                for (const orderItem of orderSave.selectItems) {
                    const product = orderItem.product;
                    sendInfo.productId.push(product.productId);
                    sendInfo.memberId.push(memberId);
                    sendInfo.orderCount.push(orderItem.count);
                    sendInfo.orderPrice.push(orderSave.totalPrice);
                }
            }

            this.sendInfo = sendInfo;
            console.log(sendInfo)
        },
        cardPay() {
            const totalPrice = this.orderList.orderSave.totalPrice;
            const deliveryFee = totalPrice < 50000 ? 3000 : 0;
            const amount = totalPrice + deliveryFee;

            this.randomNumber = Math.floor(Math.random() * 1000000);
            for (let i = 0; i < this.usedNum.length; i++) {
                if(this.usedNum[i] == this.randomNumber){
                    continue;
                }
            }

            let productName;
            if(this.orderList.orderSave.directOrderCheck) {
                productName = this.orderList.orderSave.product.productName
            } else {
                for (let i = 0; i < this.orderList.orderSave.selectItems.length; i++) {
                    productName = this.orderList.orderSave.selectItems[i].product.productName
                }
            }
            
            IMP.request_pay({ // param
                pg: "html5_inicis.INIBillTst",
                pay_method: "card",
                merchant_uid: this.merchant_uid + this.randomNumber,
                name: productName,
                amount: amount, // 결제금액
                buyer_email: this.member.email,
                buyer_name: this.member.name,
                buyer_tel: this.member.phoneNumber,
                buyer_addr: this.defaultDelivery.road + this.defaultDelivery.addressDetail,
                buyer_postcode: this.defaultDelivery.zipcode
            }, rsp => { // callback
                if (rsp.success) {
                    // 결제 성공 시
                    let imp_uid = rsp.imp_uid
                    this.merchant_uid += this.randomNumber
                    this.usedNum.push(this.randomNumber)

                    this.setSendInfo()
                    this.setDeliveryRequest()

                    const totalPrice = this.orderList.orderSave.totalPrice;
                    const deliveryFee = totalPrice < 50000 ? 3000 : 0;

                    const amount = totalPrice + deliveryFee;
                    const merchant_uid = this.merchant_uid
                    const sendInfo = this.sendInfo
                    const phoneNumber = this.defaultDelivery.phoneNumber
                    const recipientName = this.defaultDelivery.recipientName
                    const road = this.defaultDelivery.road
                    const addressDetail = this.defaultDelivery.addressDetail
                    const zipcode = this.defaultDelivery.zipcode
                    const selectedDeliveryReq = this.selectedDeliveryReq

                    this.$emit("payment-success", { amount, merchant_uid, sendInfo, imp_uid, phoneNumber, recipientName, road, addressDetail, zipcode, selectedDeliveryReq })
                } else {
                    // 결제 실패 시
                    alert ("결제에 실패했습니다. 다시 시도해주세요.")
                }
            });
        },
        kakaoPay() {
            const totalPrice = this.orderList.orderSave.totalPrice;
            const deliveryFee = totalPrice < 50000 ? 3000 : 0;
            const amount = totalPrice + deliveryFee;

            this.randomNumber = Math.floor(Math.random() * 1000000);
            for (let i = 0; i < this.usedNum.length; i++) {
                if(this.usedNum[i] == this.randomNumber){
                    continue;
                }
            }

            let productName;
            if(this.orderList.orderSave.directOrderCheck) {
                productName = this.orderList.orderSave.product.productName
            } else {
                for (let i = 0; i < this.orderList.orderSave.selectItems.length; i++) {
                    productName = this.orderList.orderSave.selectItems[i].product.productName
                }
            }
            
            IMP.request_pay({

                pg: "kakaopay.TC0ONETIME",
                pay_method: "card",
                merchant_uid: this.merchant_uid + this.randomNumber,
                name: productName,
                amount: amount, // 결제금액
                buyer_email: this.member.email,
                buyer_name: this.member.name,
                buyer_tel: this.member.phoneNumber,
                buyer_addr: this.defaultDelivery.road + this.defaultDelivery.addressDetail,
                buyer_postcode: this.defaultDelivery.zipcode

            }, rsp => { // callback
                if (rsp.success) {
                    // 결제 성공 시
                    let imp_uid = rsp.imp_uid
                    this.merchant_uid += this.randomNumber
                    this.usedNum.push(this.randomNumber)

                    this.setSendInfo()
                    this.setDeliveryRequest()

                    const totalPrice = this.orderList.orderSave.totalPrice;
                    const deliveryFee = totalPrice < 50000 ? 3000 : 0;

                    const amount = totalPrice + deliveryFee;
                    const merchant_uid = this.merchant_uid
                    const sendInfo = this.sendInfo
                    const phoneNumber = this.defaultDelivery.phoneNumber
                    const recipientName = this.defaultDelivery.recipientName
                    const road = this.defaultDelivery.road
                    const addressDetail = this.defaultDelivery.addressDetail
                    const zipcode = this.defaultDelivery.zipcode
                    const selectedDeliveryReq = this.selectedDeliveryReq

                    this.$emit("payment-success", { amount, merchant_uid, sendInfo, imp_uid, phoneNumber, recipientName, road, addressDetail, zipcode, selectedDeliveryReq })
                } else {
                    // 결제 실패 시
                    alert ("결제에 실패했습니다. 다시 시도해주세요.")
                }
            });
        }
      

    }
}
</script>

<style scoped>
    .order-info-title {
        margin-bottom: 0;
    }
</style>