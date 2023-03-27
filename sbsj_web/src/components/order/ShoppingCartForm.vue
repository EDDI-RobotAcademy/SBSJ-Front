<template>
  <v-container>
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
            
            <div class="item-info-no" v-if="!cartList || (Array.isArray(cartList) && cartList.length === 0)">
                <div class="d-flex justify-center">
                    <v-icon x-large>mdi-cart-variant</v-icon>
                </div>
                <p align="center" class="mt-3 mb-5"> 장바구니에 담긴 상품이 없습니다.</p>
                <div class="d-flex justify-center mb-10">
                    <v-btn color="white" elevation="1" @click="backHome">메인으로 가기</v-btn>
                </div>
            </div>
            
            <div> <!-- 주석 해제할 때 v-else 넣어야 함 -->
                <v-row>
                    <v-col class="itemCheck ms-8 mt-16">
                        <input type="checkbox"
                            v-model="allSelected" 
                            value="all" 
                        />
                        <label for="all">&nbsp;전체 선택</label>
                    </v-col>
                    <v-col cols="auto" class="mt-14 me-8" justify="right">
                        <v-btn text @click="btnDeleteCartItem">
                            <v-icon>mdi-delete-outline</v-icon>
                            선택 삭제
                        </v-btn>
                    </v-col>
                </v-row>
                <div class="item-info-yes"> 
                    <v-row>
                        <v-col>
                            <v-card class="ms-8 pa-5" max-width="720" flat outlined> <!-- 추후 수정~ v-for="(item, index) in cartList" :key="index" -->
                                <v-list-item three-line>
                                    <v-list-item-content class="ms-1">
                                        <div class="itemCheck" align="left">
                                           <input
                                                type="checkbox"
                                                :id="item"
                                                :value="item"
                                                v-model="selectList"
                                                :key="index"
                                            />
                                            <!-- @change="selectItem(item.product.price, item.count)" --> 
                                        </div>
                                        <v-list-item-title class="item-name headline" @click="productViewBtn(item)">
                                            상품명 상품명 상품명 <!-- {{ item.product.name }} -->
                                        </v-list-item-title>
                                        <v-list-item-subtitle class="item-brand" @click="productViewBtn(item)">
                                            브랜드 브랜드 브랜드 <!-- {{ item.product.brand }} -->
                                        </v-list-item-subtitle>

                                        <v-spacer></v-spacer>

                                        <v-list-item-title>
                                            <div class="mt-5 text-h6">
                                                10,000원 <!--{{  getCurrencyFormat(item.count * item.product.price) }} 원 -->
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
                                            :src="require(`@/assets/product/uploadImg/${item.product.productInfo.thumbnailFileName}`)" -->
                                    </v-list-item-avatar>
                                </v-list-item>

                                <v-card-actions>
                                    <div class="qtyBtn">
                                        <v-btn 
                                            class="minusBtn"
                                            x-small
                                            elevation="0"
                                            color="white"
                                            @click="qtyDecrease(item)"
                                        >
                                            <v-icon>mdi-minus</v-icon>
                                        </v-btn>
                                        수량<!--{{  item.count }}-->
                                        <v-btn
                                            class="plusBtn ms-1"
                                            x-small
                                            elevation="0"
                                            color="white"
                                            @click="qtyIncrease(item)"
                                        >
                                            <v-icon>mdi-plus</v-icon>
                                        </v-btn>
                                    </div>

                                    <v-spacer></v-spacer>
                                        
                                    <v-btn 
                                        class="me-2" 
                                        outlined 
                                        color="teal"
                                        @click="btnDirectPurchase(item, index)"
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
                                            30,000원 <!-- {{ getCurrencyFormat(this.totalPrice) }} 원 -->
                                        </p>
                                    </div>
                                    <div class="delivery-fee">
                                        <span class="text--primary">배송비</span>
                                        <p class="text-h6 text--primary">
                                            3,000원
                                            <!-- 5만원 이상 무료배송으로 가정
                                                 <p v-if="this.totalPrice > 49999">0 원</p>
                                                 <p v-else>3,000 원</p> -->
                                        </p>
                                    </div>
                                    <v-divider color="black"></v-divider>
                                    <div class="total-price">
                                        <span class="text--primary">총 결제 금액</span>
                                        <p class="display-1 text--primary">
                                            33,000원
                                            <!-- <p v-if="this.totalPrice > 49999">{{ getCurrencyFormat(this.totalPrice) }} 원</p>
                                                 <p v-else>{{ getCurrencyFormat(this.totalPrice + 3000) }} 원</p>-->
                                        </p>
                                    </div>
                                </v-card-text>
                                <v-card-actions>
                                    <v-btn 
                                        block
                                        color="teal" 
                                        @click="btnSelectPurchase"
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
import { mapState, mapActions } from "vuex";

export default {
    name: "ShoppingCartForm",
    data () {
        return {
            imageName: "img1.jpg",
            // 임의로 넣은 테스트용 이미지임!!! 디비 불러오고나면 삭제할 것

            totalPrice: 0,
            selectList: [],

            //async
            orderListCheck: false,

            //바로 구매
            directTotalPrice: 0,
            directTmpOrderNo: [],
            directCartList: [],

            //주문 페이지 전달
            selectTotalPrice: 0,

            //카트 아이템 삭제
            selectCartItemNo: []

        }
    },
    computed: {
        ...mapState([
        'cartList'
        ]),
        allSelected: {
            //getter
            get: function() {
                return this.cartList.length === this.selectList.length;
            },
            //setter
            set: function(e) {
                this.selectList = e ? this.cartList : [];
            }
        },
    },
    methods: {
        backHome () {
            this.$router.push({ name:'home' })
        },
        /*
        productViewBtn(item){
            alert("상품 상세 페이지로 이동합니다.")
            this.$router.push({ name: 'ProductDetailPage', params: { productNo: item.product.productNo }})
        },

        ...mapActions([
            'reqCartItemCountChangeToSpring'
        ]),

        getCurrencyFormat(value) {
            // 가격을 n,000 원 단위 포맷으로 가공
            return this.$currencyFormat(value);
        },

        selectItem(price, count){
            console.log("가격과 수량: " + price + count)
            console.log("선택한 상품 목록: " + this.selectList)
            this.totalPrice = this.totalPrice + (price * count)
        },

        async qtyDecrease(item) {
            if (item.count > 1) {
                item.count--
            } else {
                item.count = 1
            }
            var payload =  {
                'itemNo': item.itemNo, 
                'count': item.count, 
                'selectedProductAmount': item.product.price * item.count
            }
            await this.reqCartItemCountChangeToSpring(payload);
            this.res = this.$store.state.resMyRequest;

            if (this.res === 1) {
                console.log("수량 변경 성공");
            } else {
                console.log("실패")
            }
        },

        async qtyIncrease(item) {
            item.count++
            
            var payload =  {
                'itemNo':item.itemNo, 
                'count':item.count, 
                'selectedProductAmount': item.product.price * item.count
            }
            await this.reqCartItemCountChangeToSpring(payload);
            this.res = this.$store.state.resMyRequest;

            if (this.res === 1) {
                console.log("수량 변경 성공");
            } else {
                console.log("실패")
            }
        },

        btnDeleteCartItem(){
            let deleteCartMessage = confirm("선택한 상품을 삭제하시겠습니까?")
            if(deleteCartMessage){
                for (let i = 0; i < this.selectList.length; i++) {
                    this.selectCartItemNo[i] = this.selectList[i].itemNo
                }
                this.$emit('deleteCartItem', this.selectCartItemNo)
            }
        },

        async btnDirectPurchase(item, index){
            // 바로 구매 (낱개 구매)
            this.directTotalPrice = item.count * item.product.price
            this.directTmpOrderNo = index
            this.directCartList = this.cartList[index]
            this.quantity = this.cartList[index].count
            this.cartNo = this.cartList[index].cart.cartNo
            this.cartItemNo =  this.cartList[index].itemNo
            this.$store.commit('REQUEST_ORDER_LIST_FROM_SPRING',
                { orderSave: { directOrderCheck:true ,cartInfoCheck:true, tmpCartItemOrderNo: this.cartItemNo, cartNo: this.cartNo,
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
            for (let i = 0; i < this.selectList.length; i++) {
                this.selectTotalPrice = this.selectTotalPrice + (this.selectList[i].product.price * this.selectList[i].count)
            }
            this.$store.commit('REQUEST_ORDER_LIST_FROM_SPRING',
                { orderSave: { directOrderCheck:false, cartOrderCheck:true, selectList: this.selectList, totalPrice: this.selectTotalPrice }})
            alert ("주문 페이지로 이동합니다.")
            this.orderListCheck = true
            if(this.orderListCheck) {
                await this.$router.push({ name: 'OrderInfoPage' })
                this.orderListCheck = false
            }
        },
        
    },    
    
    beforeUpdate() {
        this.totalPrice = 0
        for (let i = 0; i < this.selectList.length; i++) {
        this.totalPrice = this.totalPrice + this.selectList[i].product.price * this.selectList[i].count
        }
    },
    */
}
}
</script>

<style scoped>

    .item-info-no {
        height: 100vh;
        margin-top: 300px;
        margin-bottom: 0;
    }
    .item-info-yes {
        height: 100vh;
        margin-bottom: 0;
    }
    .itemCheck {
        accent-color: teal;
    }

</style>