<template>
    <div class="mt-10 mx-5 grey lighten-4 p-5">
        <div v-if="!wishList || (Array.isArray(wishList) && wishList.length === 0)">
            <v-card outlined flat height="300">
                <div class="d-flex justify-center align-center h2 empty-msg">
                    찜한 상품이 존재하지 않습니다.
                </div>
            </v-card>
        </div>
        <div v-else>
            <v-row>
                <v-col v-for="wish in wishList" :key="wish.wishId" cols="4" class="d-flex align-items-center">
                    <v-card class="justify-center mb-5 mx-3 rounded-xl p-4" width="300" height="370" flat outlined>
                        <div>
                            <v-checkbox
                                color="#692498"
                                hide-details
                            ></v-checkbox>
                        </div>
                        <div class="d-flex justify-center">
                            <router-link :to="{ name: 'ProductReadPage', params: { productId: wish.productId.toString() } }" class="baby-product-link">
                                <v-img :src="require(`@/assets/productImgs/${wish.thumbnail}`)" 
                                    class="align-center justify-center"
                                    contain width="150" height="150"/>
                            </router-link>
                        </div>
                        <v-card-subtitle class="pt-4 justify-center">
                            <div class="d-flex justify-center">
                                <router-link :to="{ name: 'ProductReadPage', params: { productId: wish.productId.toString() } }"
                                    class="baby-product-link" style="text-decoration: none; color: black">
                                        <strong>{{ wish.productName }}</strong>
                                </router-link>
                            </div>
                            <div class="d-flex justify-center">
                                <router-link :to="{ name: 'ProductReadPage', params: { productId: wish.productId.toString() } }"
                                    class="baby-product-link" style="text-decoration: none; color: black">
                                        {{ new Intl.NumberFormat().format(wish.price) }}원
                                </router-link>
                            </div>
                        </v-card-subtitle>
                        <v-card-actions class="justify-center">
                            <div>
                                <v-btn outlined rounded color="#692498" @click="addToCart(wish)">
                                    장바구니
                                </v-btn>
                                <v-btn class="text-white ms-1" elevation="0" color="#692498"
                                    rounded dark @click="directPurchase(wish)"
                                >
                                    바로 구매
                                </v-btn>
                            </div>
                        </v-card-actions>
                    </v-card>
                </v-col>
            </v-row>
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
    .empty-msg {
        margin-top: 130px;
    }
</style>