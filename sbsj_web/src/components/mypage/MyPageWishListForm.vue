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
                        <router-link :to="{ name: 'DetailProductPage', params: { productId: wish.productId.toString() } }" class="baby-product-link">
                            <v-img :src="require(`@/assets/productImgs/${wish.thumbnail}`)" 
                                cover class="grey lighten-2" style="border-radius: 20px;"/>
                        </router-link>
                    </v-col>
                    <v-col>
                        <router-link :to="{ name: 'DetailProductPage', params: { productId: wish.productId.toString() } }"
                            class="baby-product-link" style="text-decoration: none; color: black">
                            <v-card-title style="font-size: 20px; padding-top:40px;">
                                {{ wish.productName }}
                            </v-card-title>
                            
                            <v-card-text style="font-size: 18px;">
                                <strong>{{ new Intl.NumberFormat().format(wish.price) }}원</strong>
                            </v-card-text>
                        </router-link>
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

    },
}
</script>

<style scoped>

</style>