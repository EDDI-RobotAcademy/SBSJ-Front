<template>
    <v-container fluid>
    <div class="grey lighten-4">
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

            <div class="item-info-no" v-if="!cartItems || (Array.isArray(cartItems) && cartItems.length === 0)">
                <div class="d-flex justify-center">
                    <v-icon x-large>mdi-cart-variant</v-icon>
                </div>
                <p align="center" class="mt-3 mb-5">장바구니에 담긴 상품이 없습니다.</p>
                <div class="d-flex justify-center mb-10">
                    <v-btn color="#692498" dark elevation="1" @click="backHome">메인으로 가기</v-btn>
                </div>
            </div>
            
            <div v-else>
                <v-row align-items="center">
                    <v-col class="itemCheck ms-8 mt-1">
                        <v-checkbox
                            class="allCheckbox"
                            v-model="allChecked"
                            label="전체 선택"
                            color="#692498"
                        />
                    </v-col>
                    <v-col cols="auto" class="me-8 mt-4 justify-end align-center">
                        <v-btn text @click="deleteSelectItem()">
                            <v-icon>mdi-delete-outline</v-icon>
                            선택 삭제
                        </v-btn>
                    </v-col>
                </v-row>
                <div class="item-info-yes"> 
                    <v-row>
                        <v-col>
                            <v-card class="ms-8 mb-3 pa-5" v-for="(cartItem, index) in cartItems" :key="index"
                                max-width="720" flat outlined>
                                <v-list-item three-line>
                                    <v-list-item-content class="ms-1">
                                        <div class="itemCheck" align="left">
                                           <v-checkbox
                                                class="itemCheckbox"
                                                v-model="checkedValues"
                                                :value="cartItem.cartItemId"
                                                color="#692498"
                                            />
                                        </div>
                                        <v-list-item-title class="item-name headline" @click="productView(cartItem)">
                                            <a>{{ cartItem.product.productName }}</a>
                                        </v-list-item-title>

                                        <v-spacer></v-spacer>

                                        <v-list-item-title>
                                            <div class="mt-5 text-h6">
                                                {{  new Intl.NumberFormat().format(cartItem.count * cartItem.price) }}원
                                            </div>
                                        </v-list-item-title>

                                    </v-list-item-content>
                                    
                                    <v-list-item-avatar tile size="150">
                                        <v-img
                                            :src="require(`@/assets/productImgs/${cartItem.thumbnail}`)"
                                            aspect-ratio="1"
                                            max-width="200"
                                            max-height="200"
                                            contain
                                        />
                                    </v-list-item-avatar>
                                    
                                </v-list-item>

                                <v-card-actions>
                                    <div class="qtyBtn">
                                        <v-btn 
                                            class="minusBtn"
                                            x-small
                                            elevation="0"
                                            color="white"
                                            @click="countDecrease(cartItem)"
                                        >
                                            <v-icon>mdi-minus</v-icon>
                                        </v-btn>
                                        {{  cartItem.count }}
                                        <v-btn
                                            class="plusBtn ms-1"
                                            x-small
                                            elevation="0"
                                            color="white"
                                            @click="countIncrease(cartItem)"
                                        >
                                            <v-icon>mdi-plus</v-icon>
                                        </v-btn>
                                    </div>

                                    <v-spacer></v-spacer>
                                        
                                    <v-btn 
                                        class="me-2" 
                                        outlined 
                                        color="#692498"
                                        @click="directPurchase(cartItem, index)"
                                    >
                                    구매
                                    </v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-col>
                        
                        <!-- 금액 합계 부분-->

                        <v-col cols="5">
                            <v-card class="ms-3 me-6 pa-3" max-width="400" flat outlined>
                                <v-card-text>
                                    <div class="headline">결제 정보</div>
                                    <v-divider color="black"></v-divider>
                                    <div class="product-price">
                                        <span class="text--primary">선택 상품 금액</span>
                                        <p class="text-h6 text--primary">
                                            {{ new Intl.NumberFormat().format(this.totalPrice) }}원
                                        </p>
                                    </div>
                                    <div class="delivery-fee">
                                        <span class="text--primary">배송비</span>
                                        <div class="text-h6 text--primary">
                                            <p v-if="this.totalPrice > 49999"> 0원</p>
                                            <p v-else>3,000원</p>
                                        </div>
                                    </div>
                                    <v-divider color="black"></v-divider>
                                    <div>
                                        <span class="text--primary">예상 결제 금액</span>
                                        <div class="display-1 text--primary">
                                            <p v-if="this.totalPrice > 49999"> {{ new Intl.NumberFormat().format(this.totalPrice) }}원</p>
                                            <p v-else> {{ new Intl.NumberFormat().format(this.totalPrice + 3000) }}원</p>
                                        </div>
                                    </div>
                                </v-card-text>
                                <v-card-actions>
                                    <v-btn 
                                        block
                                        color="#692498"
                                        dark
                                        @click="selectPurchase"
                                    >
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
    </v-container>
</template>

<script>

import { mapActions, mapState } from "vuex";

const orderModule = 'orderModule'

export default {
    name: "ShoppingCartForm",
    data () {
        return {
            checkedValues: [], 
            // 체크박스 v-model에 작성되어 있음

            selectTotalPrice: 0,
        }
    },
    computed: {
        ...mapState(orderModule, [
            'cartItems',
            'resCountRequest'
        ]),
        totalPrice() {
            let totalPrice = 0;
            for (let i = 0; i < this.cartItems.length; i++) {
                if (this.checkedValues.includes(this.cartItems[i].cartItemId)) {
                    totalPrice += this.cartItems[i].price * this.cartItems[i].count;
                }
            }
            return totalPrice;
        },
        allChecked: {
            get() {
                return this.checkedValues.length === this.cartItems.length;
            },
            set(value) {
                this.toggleAll(value);
            }
        },
    },
    created() {
        console.log("cartItems: " + JSON.stringify(this.cartItems));
    },
    methods: {
        ...mapActions(orderModule, [
            'reqCartItemCountChangeToSpring',
            'reqDeleteCartItemFromSpring'
        ]),

        backHome () {
            this.$router.push({ name:'home' })
        },

        toggleAll(value) {
            this.checkedValues = value ? this.cartItems.map(cartItem => cartItem.cartItemId) : [];
        },
        
        productView(cartItem){
            alert("상품 상세 페이지로 이동합니다.")
            this.$router.push({ name: 'ProductReadPage', params: { productId: cartItem.product.productId.toString() }})
        },

        async deleteSelectItem() {
            let deleteCartMessage = confirm("선택한 상품을 삭제하시겠습니까?")
            if (deleteCartMessage) {
                let selectCartItemId = []
                for (let i = 0; i < this.cartItems.length; i++) {
                    if (this.checkedValues.includes(this.cartItems[i].cartItemId)) {
                        selectCartItemId.push(this.cartItems[i].cartItemId)
                    }
                }
                console.log("selectCartItemId: " + selectCartItemId)

                await this.reqDeleteCartItemFromSpring({ selectCartItemId })
                window.location.reload(true);
            }
        },

        async countDecrease(cartItem) {
            if (cartItem.count > 1) {
                cartItem.count--
            } else {
                cartItem.count = 1
            }
            
            var payload =  {
                'cartItemId': cartItem.cartItemId, 
                'count': cartItem.count
            }
            await this.reqCartItemCountChangeToSpring(payload);
            this.res = this.resCountRequest;

            if (this.res === 1) {
                console.log("수량 변경 성공")
            } else {
                console.log("실패")
            }
        },

        async countIncrease(cartItem) {
            cartItem.count++
            
            var payload =  {
                'cartItemId':cartItem.cartItemId, 
                'count':cartItem.count
            }
            await this.reqCartItemCountChangeToSpring(payload);
            this.res = this.resCountRequest;

            if (this.res === 1) {
                console.log("수량 변경 성공")
            } else {
                console.log("실패")
            }
        },

        async directPurchase(cartItem, index){
            // 바로 구매 (낱개 구매)
            this.directTotalPrice = cartItem.count * cartItem.price
            this.directCartItem = this.cartItems[index]
            this.count = this.cartItems[index].count
            this.cartItemId =  this.cartItems[index].cartItemId
            this.thumbnail = this.cartItems[index].thumbnail
            this.$store.commit('orderModule/REQUEST_ORDER_INFO_FROM_SPRING',
                { orderSave: { directOrderCheck: true, cartItemId: this.cartItemId, product:this.cartItems[index].product,
                                count: this.count, totalPrice: this.directTotalPrice, thumbnail: this.thumbnail }})
            console.log(this.$store.state.orderModule.orderList)
            alert ("주문 페이지로 이동합니다.")
            await this.$router.push({ name: 'OrderInfoPage' })
        },

        async selectPurchase() {
            // 선택 상품 구매 (여러개 구매 or 전체 구매 가능)
            let selectItem = []
            for (let i = 0; i < this.cartItems.length; i++) {
                if (this.checkedValues.includes(this.cartItems[i].cartItemId)) {
                    selectItem.push(this.cartItems[i])
                }
            }
            this.$store.commit('orderModule/REQUEST_ORDER_INFO_FROM_SPRING',
                { orderSave: { directOrderCheck: false, selectItems: selectItem, totalPrice: this.totalPrice }})
            console.log(this.$store.state.orderModule.orderList)
            if(selectItem.length > 0) {
                alert ("주문 페이지로 이동합니다.")
            await this.$router.push({ name: 'OrderInfoPage' })
            } else {
                alert ("선택한 상품이 없습니다.")
            }
            

        },
    },    
}

</script>

<style scoped>

    .item-info-no {
        height: 50vh;
        margin-top: 300px;
        margin-bottom: 0;
    }
    .item-info-yes {
        height: 100%;
        margin-bottom: 0;
    }

</style>