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
                        <v-list-item three-line>
                            <v-list-item-content>
                                <v-list-item-title class="headline">
                                    <p>주문자 정보</p>
                                    <v-divider class="mt-3" color="black"></v-divider>
                                </v-list-item-title>
                                <v-list-item-title class="name-phone">
                                    <p>
                                        <v-icon>mdi-map-marker</v-icon>
                                        학원
                                    </p>
                                    <p>서예인 010-1234-5678</p>
                                </v-list-item-title>
                                <v-list-item-title class="address">
                                    <p>서울시 강남구 테헤란로 남도빌딩 3층 H강의실</p>
                                    <div class="address-message">
                                        <select class="form-select form-select-sm" aria-label=".form-select-sm example">
                                            <option selected>배송시 요청사항을 선택해주세요.</option>
                                            <option value="1">도착하기 전에 연락 바랍니다.</option>
                                            <option value="2">문 앞에 놔주세요.</option>
                                            <option value="3">직접 입력</option>
                                            <!-- 직접 입력 선택시 밑에 텍스트 에어리어 생기도록 해보자 -->
                                        </select>
                                    </div>
                                </v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                        <v-card-actions>
                            <v-dialog v-model="dialog" persistent width="1024">
                                <template v-slot:activator="{ on }">
                                    <v-btn class="ms-2" v-on="on" outlined color="teal">
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
                    <v-card class="ms-8 mb-3 pa-5" max-width="800" flat outlined>
                        <v-list-item three-line>
                            <v-list-item-content>
                                <v-list-item-title class="headline">
                                    <div class="headline">
                                        <p>결제 수단</p>
                                        <v-divider class="mt-3" color="black"></v-divider>
                                    </div>
                                    <v-expansion-panels class="p-3">
                                        <v-expansion-panel>
                                            <v-expansion-panel-header>간편 결제</v-expansion-panel-header>
                                            <v-expansion-panel-content>
                                                <v-row justify="center">
                                                    <v-sheet border rounded :height="160" :width="200" color="yellow">
                                                        <v-img
                                                            :src="require(`@/assets/uploadImgs/${imageName}`)"
                                                            aspect-ratio="1"
                                                            contain
                                                        />
                                                    </v-sheet>
                                                </v-row>
                                                <v-row justify="center">
                                                    <v-card class="mt-1 mb-5" outlined :height="35" :width="200">
                                                        <v-list-item-title class="d-flex justify-center mt-2">카카오페이</v-list-item-title>
                                                    </v-card>
                                                </v-row>
                                            </v-expansion-panel-content>
                                        </v-expansion-panel>

                                        <v-expansion-panel>
                                            <v-expansion-panel-header>일반 결제</v-expansion-panel-header>
                                            <v-expansion-panel-content>
                                                신용카드
                                            </v-expansion-panel-content>
                                        </v-expansion-panel>

                                        <v-expansion-panel>
                                            <v-expansion-panel-header>무통장 입금</v-expansion-panel-header>
                                            <v-expansion-panel-content>
                                                어떤 은행
                                            </v-expansion-panel-content>
                                        </v-expansion-panel>
                                    </v-expansion-panels>

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
                                <v-btn block color="teal">
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

export default {
    name: "OrderInfoForm",
    data() {
      return {
        dialog: false,
        imageName: "카카오페이_CI_combination_with_BG.png",
      }
    },
    computed: {
        ...mapState(orderModule, [
            'orderList',
        ]),
    },
    methods: {
        ...mapActions(orderModule, [
            
        ]),
    }
}
</script>

<style scoped>
    .order-info-title {
        
        margin-bottom: 0;
    }
</style>