<template>
  <v-container>
    <div class="grey lighten-3">
        <v-row class="white">
            <v-col cols="auto">
                <div class="pa-1 ms-4">
                <h2>장바구니</h2>
                </div>
            </v-col>
        </v-row>
        <v-divider color="black" class="mt-3"></v-divider>

        <div class="mt-0 pt-0 pb-10">
            
            <!-- 장바구니 상품 리스트-->
            
            <div class="item-info-if" v-if="!cartList || (Array.isArray(cartList) && cartList.length === 0)">
                <div class="d-flex justify-center">
                    <v-icon x-large>mdi-cart-variant</v-icon>
                </div>
                <p align="center" class="mt-3 mb-5"> 장바구니에 담긴 상품이 없습니다.</p>
                <div class="d-flex justify-center mb-10">
                    <v-btn color="white" elevation="1" @click="backHome">메인으로 가기</v-btn>
                </div>
            </div>
            
            <div v-else> <!-- v-else 넣어야 함 -->
                <v-row>
                    <v-col class="ms-8 mt-10">
                        <v-checkbox label="전체 선택"></v-checkbox>
                    </v-col>
                    <v-col cols="auto" class="mt-14 me-8" justify="right">
                        <v-btn text>
                            <v-icon>mdi-delete-outline</v-icon>
                            삭제
                        </v-btn>
                    </v-col>
                </v-row>
                <div class="item-info-else"> <!-- v-for="(item, index) in cartList" :key="index" -->
                    <div>
                        <v-row>
                            <v-col>
                                <v-card class="ms-8 pa-3" max-width="720" flat outlined>
                                    <v-list-item three-line>
                                        <v-list-item-content class="ms-3">
                                            <v-checkbox label=""></v-checkbox>
                                            <v-list-item-title class="headline">루테인 가나다라정 1000mg</v-list-item-title>
                                            <v-list-item-subtitle>아무튼멋진브랜드</v-list-item-subtitle>
                                        </v-list-item-content>
                                        <v-list-item-avatar tile size="200">
                                            <v-img class=""
                                                :src="require(`@/assets/uploadImgs/${imageName}`)"
                                                aspect-ratio="1"
                                                max-width="200"
                                                max-height="200"
                                                contain
                                            />
                                        </v-list-item-avatar>
                                    </v-list-item>
                                    <v-card-actions class="ms-2">
                                        <v-btn text>구매</v-btn>
                                        <v-btn text>삭제</v-btn>
                                    </v-card-actions>
                                </v-card>
                            </v-col>
                            <v-col cols="5">
                                <v-card class="ms-3 me-6 pa-3" max-width="400" flat outlined>
                                    <v-card-text>
                                        <div class="headline">결제 정보</div>
                                        <v-divider color="black"></v-divider>
                                        <div class="product-price">
                                            <span class="text--primary">상품 금액</span>
                                            <p class="headline text--primary">
                                                50,000원
                                            </p>
                                        </div>
                                        <div class="delivery-fee">
                                            <span class="text--primary">배송비</span>
                                            <p class="headline text--primary">
                                                2,000원
                                            </p>
                                        </div>
                                        <v-divider color="black"></v-divider>
                                        <div class="total-price">
                                            <span class="text--primary">총 결제 금액</span>
                                            <p class="display-1 text--primary">
                                                50,000원
                                            </p>
                                        </div>
                                    </v-card-text>
                                    <v-card-actions>
                                        <v-btn block color="primary">
                                            구매하기
                                        </v-btn>
                                    </v-card-actions>
                                </v-card>
                            </v-col>
                        </v-row>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </v-container>
  
</template>

<script>
export default {
    name: "ShoppingCartForm",
    data () {
        return {
            imageName: "blur.jpg",
            // 임의로 넣은 이미지임!!!

            totalPrice: 0,
            selectList: [],

        }
    },
    methods: {
        backHome () {
            this.$router.push({name:'home'})
        }
    }
}
</script>

<style scoped>
    .item-info-if {
        height: 100vh;
        margin-top: 300px;
        margin-bottom: 0;
    }
    .item-info-else {
        height: 100vh;
        margin-bottom: 0;
    }

</style>