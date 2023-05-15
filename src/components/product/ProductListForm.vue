<template>
    <div>
        <div v-if="this.products.length === 0">상품이 존재하지 않습니다...</div>
        <div v-else>
            <v-row class="baby-product-list">
                <v-col v-for="(product, index) in products" :key="index" class="baby-product mb-5 d-flex align-items-center" cols="3">
                    <!-- v-for="(product, index) in calData" -->
                    <v-card outlined flat
                        class="mx-auto transition-swing baby-product-hover p-4"
                        style="border-radius: 20px;"
                        width="250" height="420"
                    >
                        <div class="baby-product-wrap">
                            <div class="d-flex justify-center">
                                <router-link :to="{ name: 'ProductReadPage', params: { productId: product.productId.toString() } }">
                                    <v-img contain width="150" height="180"
                                        :src="require(`@/assets/productImgs/${product.thumbnail}`)" 
                                    />
                                </router-link>
                            </div>
                            <div class="descriptions" style="height:135px;">
                                <div class="badge d-flex justify-end">
                                    <div v-if="isInWishList(product)">
                                        <v-icon color="red" class="icon-wish" @click="removeWish(product)">mdi-heart</v-icon>
                                    </div>
                                    <div v-else>
                                        <v-icon class="icon-wish" @click="addWish(product)">mdi-heart-outline</v-icon>
                                    </div>
                                </div>
                                <div class="name d-flex justify-center h5">
                                    <router-link :to="{ name: 'ProductReadPage', params: { productId: product.productId.toString() } }">
                                        <span class="name-text" style="text-decoration: none; color: black; font-weight: bold;">
                                            {{ product.title }}
                                        </span>
                                    </router-link>
                                </div>
                                <div class="price d-flex justify-end h6 me-3">
                                    {{ new Intl.NumberFormat().format(product.price) }}원
                                </div>
                            </div>
                        </div>
                        <div class="other-info d-flex justify-center mt-5">
                            <v-btn class="directive-btn"
                                rounded
                                outlined
                                color="#692498"
                                @click="addToCart(product)"
                            >
                                <span class="directive-btn-text">장바구니</span>
                            </v-btn>
                            <v-btn
                                class="directive-btn ms-2"
                                rounded
                                dark
                                color="#692498"
                                @click="directPurchase(product)"
                            >
                                <span class="directive-btn-text">바로구매</span>
                            </v-btn>
                            
                        </div>
                    </v-card>
                </v-col>
            </v-row>
            <!-- <v-pagination
                v-model="curPageNum"
                :length="numOfPages">
            </v-pagination> -->
        </div>
    </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

const orderModule = 'orderModule'
const accountModule = 'accountModule'
const productModule = 'productModule'
  
export default {
    name: 'ProductListForm',
    data () {
        return {
            cnt: 1,
            merchant: {
                productId: 0,
                productName: "",
            },
            wishListData: [],
            // dataPerPage: 3,
            // curPageNum: 1,
        }
    },
    async created() {
        let userInfo = JSON.parse(localStorage.getItem("userInfo"));
        // console.log(userInfo);
        if(userInfo != null) {
            await this.reqMyPageWishListToSpring(userInfo.memberId);
            this.wishListData = this.wishList;
        }
    },
    destroyed() {
        localStorage.removeItem("lsWishList");
    },
    props: {
        products: {
            type: Array,
            required: true
        },
        viewCount: {
            type: Number,
            required: true
        },
        orderBy: {
            type: String,
            required: true
        }
    },
    computed: {
        ...mapState(accountModule, {
            isAuthenticated: state => state.isAuthenticated
        }),
        ...mapState(productModule, ['wishList']),
        bindViewCount: {
            get() {
                return this.viewCount
            }
        },
        bindOrderBy: {
            get() {
                return this.orderBy
            }
        },
        // startOffset() {
        //     return ((this.curPageNum - 1) * this.dataPerPage);
        // },
        // endOffset() {
        //     return (this.startOffset + this.dataPerPage);
        // },
        // numOfPages() {
        //     return Math.ceil(this.products.length / this.dataPerPage);
        // },
        // calData() {
        //     return this.products.slice(this.startOffset, this.endOffset)
        // },
    },
    methods: {
        ...mapActions(orderModule, [
            'reqAddCartToSpring',
        ]),
        ...mapActions(productModule, [
            'reqMyPageWishListToSpring'
        ]),
        ...mapActions(productModule, [
            'reqSetWishToSpring'
        ]),
        addToCart(product) { // 객체를 매개변수로 전달
                let userInfo = JSON.parse(localStorage.getItem("userInfo"));
                if(userInfo == null) {
                let loginCheck = confirm("찜은 로그인 한 회원만 가능한 기능입니다.\n로그인 하시겠습니까?");
                if(loginCheck) {
                    this.$router.push({ name: 'SignInPage' });
                }
                return;
                }
                const memberId = userInfo.memberId;
                const productId = product.productId;
                const count = this.cnt;

                this.reqAddCartToSpring({ memberId, productId, count })

                let goToCartMessage = confirm("장바구니로 이동하시겠습니까?")
                if(goToCartMessage) {
                    this.$router.push({ name:'ShoppingCartPage' })
                }
        },
        async directPurchase(product){
            // 바로 구매
            this.directTotalPrice = product.price
            this.count = this.cnt
            this.thumbnail = product.thumbnail
            this.merchant = {productId: product.productId, productName: product.title}
            this.$store.commit('orderModule/REQUEST_ORDER_INFO_FROM_SPRING',
                { orderSave: { directOrderCheck: true, product: this.merchant, 
                                count: this.count, totalPrice: this.directTotalPrice, thumbnail: this.thumbnail }})
            // console.log(this.$store.state.orderModule.orderList)
            // alert ("주문 페이지로 이동합니다.")
            await this.$router.push({ name: 'OrderInfoPage' })
        },
        isInWishList(product) {
            // console.log("isInWishList()")
            return this.wishListData.some((wish) => wish.productId === product.productId);
        },
        async addWish(product) {
            let userInfo = JSON.parse(localStorage.getItem("userInfo"));
            if(userInfo == null) {
                let loginCheck = confirm("찜은 로그인 한 회원만 가능한 기능입니다.\n로그인 하시겠습니까?");
                if(loginCheck) {
                    this.$router.push({ name: 'SignInPage' });
                }
                return;
            }
            
            let memberId = userInfo.memberId;
            let productId = product.productId;

            this.wishListData.push({ productId: product.productId });
            await this.reqSetWishToSpring({ memberId, productId });
            // alert("찜 성공");
        },
        async removeWish(product) {
            let userInfo = JSON.parse(localStorage.getItem("userInfo"));
            let memberId = userInfo.memberId;
            let productId = product.productId;
            this.wishListData = this.wishListData.filter((wish) => wish.productId !== product.productId);
            await this.reqSetWishToSpring({ memberId, productId });
            // alert("찜 취소")
        }
    }
}
  
</script>

<style scoped>
    a {
        text-decoration: none;
    }

    .baby-product-list {
        width: 1024px;
        padding-left: 35px;
        margin-left: 20px;
        margin-top: 10px;
        margin-bottom: 20px;
        list-style-type: none;
    }

    .baby-product-list::after {
        content: ".";
        display: block;
        clear: both;
        height: 0;
        visibility: hidden;
    }
 
    .baby-product-hover:hover {
        box-shadow: 0 30px 50px rgba(42, 39, 39, 0.4);
        transform: translateY(-2px);
    }
</style>
  

  