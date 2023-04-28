<template>
    <div class="mt-10 mx-5">
        <div v-if="!wishList || (Array.isArray(wishList) && wishList.length === 0)">
            <div class="d-flex justify-center">
                <h1 class="mt-10">아무것도 없음</h1>
            </div>
        </div>
        <div v-else>
            <v-card v-for="wish in wishList" :key="wish.wishId" class="mb-5 rounded-xl">
                <v-row>
                    <v-col cols="1">
                        <v-checkbox
                            color="blue"
                            hide-details
                            style="padding-top: 60px; padding-left: 50px;
                                    width: 20px;"
                        ></v-checkbox>
                    </v-col>
                    <v-col cols="2">
                        <router-link :to="{ name: 'ProductReadPage', params: { productId: wish.productId.toString() } }" class="baby-product-link">
                            <v-img :src="require(`@/assets/productImgs/${wish.thumbnail}`)" 
                                cover class="grey lighten-2" style="border-radius: 20px;"/>
                        </router-link>
                    </v-col>
                    <v-col>
                        <router-link :to="{ name: 'ProductReadPage', params: { productId: wish.productId.toString() } }"
                            class="baby-product-link" style="text-decoration: none; color: black">
                            <v-card-title style="font-size: 20px; padding-top:40px;">
                                {{ wish.productName }}
                            </v-card-title>
                            
                            <v-card-text style="font-size: 18px;">
                                <strong>{{ new Intl.NumberFormat().format(wish.price) }}원</strong>
                            </v-card-text>
                        </router-link>
                    </v-col>
                    <v-col>
                        <div class="other-info">
                            <v-btn
                                class="directive-btn"
                                rounded
                                @click="directPurchase(wish)"
                            >
                                <span class="directive-btn-text">바로구매</span>
                            </v-btn>
                            <v-btn class="directive-btn" @click="addToCart(wish)" rounded>
                                <span class="directive-btn-text">장바구니</span>
                            </v-btn>
                        </div>
                    </v-col>
                </v-row>
            </v-card>
        </div>
    </div>
</template>
  
<script>

import {mapActions, mapState} from "vuex";

const orderModule = 'orderModule';
const productModule = 'productModule';

export default {
    name: "MyPageWishListForm",
    computed : {
        ...mapState(productModule, ['wishList'])
    },
    async created() {
        let userInfo = JSON.parse(localStorage.getItem("userInfo"));
        let memberId = userInfo.memberId;
        await this.reqMyPageWishListToSpring(memberId);
    },
    methods:{
        ...mapActions(productModule, ['reqMyPageWishListToSpring']),
        ...mapActions(orderModule, ['reqAddCartToSpring']),
        addToCart(wish) {
                let userInfo = JSON.parse(localStorage.getItem("userInfo"));
                const memberId = userInfo.memberId;
                const productId = wish.productId;
                const count = 1

                this.reqAddCartToSpring({ memberId, productId, count })

                let goToCartMessage = confirm("장바구니로 이동하시겠습니까?")
                if(goToCartMessage) {
                    this.$router.push({ name:'ShoppingCartPage' })
                }
        },
        async directPurchase(wish){
            // 바로 구매
            const directTotalPrice = wish.price
            const count = 1
            const thumbnail = wish.thumbnail
            const merchant = {productId: wish.productId, productName: wish.productName}
            this.$store.commit('orderModule/REQUEST_ORDER_INFO_FROM_SPRING',
                { orderSave: { directOrderCheck: true, product: merchant, 
                                count: count, totalPrice: directTotalPrice, thumbnail: thumbnail }})
            console.log(this.$store.state.orderModule.orderList)
            alert ("주문 페이지로 이동합니다.")
            await this.$router.push({ name: 'OrderInfoPage' })
        },

    },
}
</script>

<style scoped>
    .other-info {
        float: right;
    }

    .directive-btn {
        display: block;
        margin-right: 30px;
        margin-bottom: 30px;
        margin-top: 30px;
    }
</style>