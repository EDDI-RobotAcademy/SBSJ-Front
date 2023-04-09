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
                    <v-btn color="white" elevation="1" @click="backHome">메인으로 가기</v-btn>
                </div>
            </div>
            
            <div v-else>
                <v-row>
                    <v-col class="itemCheck ms-8 mt-14">
                        <v-checkbox
                            class="allCheckbox"
                            @change="allSelect"
                            label="전체 선택" 
                        />
                    </v-col>
                    <v-col cols="auto" class="mt-16 me-8" justify="right">
                        <v-btn text @click="deleteCartItemBtn">
                            <v-icon>mdi-delete-outline</v-icon>
                            선택 삭제
                        </v-btn>
                    </v-col>
                </v-row>
                <div class="item-info-yes"> 
                    <v-row>
                        <v-col>
                            <v-card class="ms-8 pa-5" v-for="(cartItem, index) in cartItems" :key="index"
                                max-width="720" flat outlined>
                                <v-list-item three-line>
                                    <v-list-item-content class="ms-1">
                                        <div class="itemCheck" align="left">
                                           <v-checkbox
                                                class="itemCheckbox"
                                                v-model="checkedValues"
                                                value="1"
                                            />
                                        </div>
                                        <v-list-item-title class="item-name headline" @click="productView()">
                                            <a>상품명</a><!-- {{ cartItem.product.productName }} -->
                                        </v-list-item-title>

                                        <v-spacer></v-spacer>

                                        <v-list-item-title>
                                            <div class="mt-5 text-h6">
                                                10,000원 <!--{{  cartItem.count * cartItem.product.price }} 원 -->
                                            </div>
                                        </v-list-item-title>

                                    </v-list-item-content>

                                    <v-list-item-avatar tile size="150">
                                        <v-img
                                            :src="require(`@/assets/uploadImgs/${imageName}`)"
                                            aspect-ratio="1"
                                            max-width="200"
                                            max-height="200"
                                            contain
                                        /> <!-- 현재는 테스트용 코드. 디비에 저장된 상품 썸네일 가져오는 방식으로 변경해야함 
                                            :src="require(`@/assets/uploadImg/${cartItem.product.thumbnail}`)" -->
                                    </v-list-item-avatar>
                                </v-list-item>

                                <v-card-actions>
                                    <div class="qtyBtn">
                                        <v-btn 
                                            class="minusBtn"
                                            x-small
                                            elevation="0"
                                            color="white"
                                            @click="qtyDecrease(cartItem)"
                                        >
                                            <v-icon>mdi-minus</v-icon>
                                        </v-btn>
                                        {{  cartItem.count }} <!--{{  cartItem.count }}-->
                                        <v-btn
                                            class="plusBtn ms-1"
                                            x-small
                                            elevation="0"
                                            color="white"
                                            @click="qtyIncrease(cartItem)"
                                        >
                                            <v-icon>mdi-plus</v-icon>
                                        </v-btn>
                                    </div>

                                    <v-spacer></v-spacer>
                                        
                                    <v-btn 
                                        class="me-2" 
                                        outlined 
                                        color="teal"
                                        @click="btnDirectPurchase(cartItem, index)"
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
                                        <span class="text--primary">상품 금액</span>
                                        <p class="text-h6 text--primary">
                                            {{ this.totalPrice }} 원
                                        </p>
                                    </div>
                                    <div class="delivery-fee">
                                        <span class="text--primary">배송비</span>
                                        <div class="text-h6 text--primary">
                                            <p v-if="this.totalPrice > 49999"> 0 원</p>
                                            <p v-else>3,000 원</p>
                                        </div>
                                    </div>
                                    <v-divider color="black"></v-divider>
                                    <div>
                                        <span class="text--primary">총 결제 금액</span>
                                        <div class="display-1 text--primary">
                                            <p v-if="this.totalPrice > 49999"> {{ this.totalPrice }} 원</p>
                                            <p v-else> {{ this.totalPrice + 3000 }} 원</p>
                                        </div>
                                    </div>
                                </v-card-text>
                                <v-card-actions>
                                    <v-btn 
                                        block
                                        color="teal" 
                                        
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
            imageName: "img1.jpg",
            // 임의로 넣은 테스트용 이미지임!!! 디비 불러오고나면 삭제할 것

            totalPrice: 0,
            
            checkedValues: [], 
            // 체크박스 v-model에 작성되어 있음

            allChecked: false, 
            // 전체선택 관련 메서드 allSelect에서 쓰임

            selectCartItemId: [],
            //카트 아이템 삭제
        }
    },
    computed: {
        ...mapState(orderModule, [
            'cartItems',
            'resCountRequest'
        ]),
    },
    mounted() {
        console.log("cartItems: " + JSON.stringify(this.cartItems));
        console.log("첫번째 카트아이템: " + this.cartItems[0]);
        console.log("배열 길이를 알려줘: " + this.cartItems.length);
        
    },
    methods: {
        ...mapActions(orderModule, [
            'reqCartItemCountChangeToSpring',
        ]),

        backHome () {
            this.$router.push({ name:'home' })
        },

        allSelect () {
            const { allChecked } = this
            if(allChecked == false) {
                this.checkedValues = []
                this.checkedValues.push("1")
                this.allChecked = true
            } else {
                while(this.checkedValues.length > 0) {
                    this.checkedValues.pop()
                }
                this.allChecked = false
            }
        },
        
        productView(){
            alert("상품 상세 페이지로 이동합니다.")
            this.$router.push({ name: 'DetailProductPage'})
            // 상품 상세 페이지가 구체화되면 name 뒤에 , params: { productNo: cartItem.product.productId } 추가하여 수정
            // 그렇게 되면 메서드 () 안에 item이나 product 넣어야 할 지도 생각해야 함
        },

        deleteCartItemBtn(){
            let deleteCartMessage = confirm("선택한 상품을 삭제하시겠습니까?")
            if(deleteCartMessage){
                for (let i = 0; i < this.checkedValues.length; i++) {
                    this.selectCartItemId[i] //= this.checkedValues[i].cartItemId
                }
                this.$emit('deleteCartItem', this.selectCartItemId)
            }
        },

        selectItem(price, count){
            console.log("가격과 수량: " + price + count)
            console.log("선택한 상품 목록: " + this.checkedValues)
            this.totalPrice = this.totalPrice + (price * count)
        },

        async qtyDecrease(cartItem) {
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
            this.res = this.$store.state.orderModule.resCountRequest;

            if (this.res === 1) {
                console.log("수량 변경 성공");
            } else {
                console.log("실패")
            }
        },

        async qtyIncrease(cartItem) {
            cartItem.count++
            
            var payload =  {
                'cartItemId':cartItem.cartItemId, 
                'count':cartItem.count
            }
            await this.reqCartItemCountChangeToSpring(payload);
            this.res = this.$store.state.orderModule.resCountRequest;

            if (this.res === 1) {
                console.log("수량 변경 성공");
            } else {
                console.log("실패")
            }
        },

        /*

        async btnDirectPurchase(item, index){
            // 바로 구매 (낱개 구매)
            this.directTotalPrice = item.count * item.product.price
            this.directTmpOrderNo = index
            this.directCartList = this.cartList[index]
            this.quantity = this.cartList[index].count
            this.cartNo = this.cartList[index].cart.cartNo
            this.cartitemId =  this.cartList[index].itemId
            this.$store.commit('REQUEST_ORDER_LIST_FROM_SPRING',
                { orderSave: { directOrderCheck:true ,cartInfoCheck:true, tmpCartItemOrderNo: this.cartitemId, cartNo: this.cartNo,
                                    product:this.directCartList.product , quantity: this.quantity, totalPrice: this.directTotalPrice }})
            alert ("주문 페이지로 이동합니다.")
            this.orderListCheck = true
            if(this.orderListCheck) {
                await this.$router.push({ name: 'OrderInfoPage' })
                this.orderListCheck = false
            }
        },

        async btnSelectPurchase() {
            // 선택 상품 구매 (여러개 구매 or 전체 구매 가능)
            for (let i = 0; i < this.checkedValues.length; i++) {
                this.selectTotalPrice = this.selectTotalPrice + (this.checkedValues[i].product.price * this.checkedValues[i].count)
            }
            this.$store.commit('REQUEST_ORDER_LIST_FROM_SPRING',
                { orderSave: { directOrderCheck:false, cartOrderCheck:true, checkedValues: this.checkedValues, totalPrice: this.selectTotalPrice }})
            alert ("주문 페이지로 이동합니다.")
            this.orderListCheck = true
            if(this.orderListCheck) {
                await this.$router.push({ name: 'OrderInfoPage' })
                this.orderListCheck = false
            }
        },
        
    },    
    */
    }
}

</script>

<style scoped>

    .item-info-no {
        height: 100%;
        margin-top: 200px;
        margin-bottom: 0;
    }
    .item-info-yes {
        height: 100%;
        margin-bottom: 0;
    }

</style>