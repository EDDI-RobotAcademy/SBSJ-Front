<template>
    <ul class="baby-product-list">
        <li v-for="(product, index) in products" :key="index" class="baby-product mb-5">
            <div
                class="mx-auto transition-swing baby-product-hover elevation-2"
                style="border-radius: 20px;"
            >
                    <dl class="baby-product-wrap">
                        <router-link :to="{ name: 'ProductReadPage', params: { productId: product.productId.toString() } }">
                            <dt class="image">
                                <v-img :src="require(`@/assets/productImgs/${product.thumbnail}`)" 
                                    cover class="grey lighten-2" style="border-radius: 20px; width: 234px; height: 234px;"/>
                            </dt>
                        </router-link>
                        <dd class="descriptions" >
                            <div class="badge">
                                <div v-if="isInWishList(product)">
                                    <v-icon  class="icon-wish" @click="removeWish(product)">mdi-heart</v-icon>
                                </div>
                                <div v-else>
                                    <v-icon  class="icon-wish" @click="addWish(product)">mdi-heart-outline</v-icon>
                                </div>
                            </div>
                            <router-link :to="{ name: 'ProductReadPage', params: { productId: product.productId.toString() } }">
                                <div class="name">
                                    <span class="name-text" style="text-decoration: none;">
                                        {{ product.title }}
                                    </span>
                                </div>
                            </router-link>
                            <router-link :to="{ name: 'ProductReadPage', params: { productId: product.productId.toString() } }">
                                <div class="price-area">
                                    <div class="price-wrap">
                                        <div class="price">
                                            <span class="price-text">
                                                {{ new Intl.NumberFormat().format(product.price) }}원
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </router-link>
                        </dd>
                    </dl>
                <div class="other-info">
                    <v-btn
                        class="directive-btn"
                        rounded
                        style="margin-right: 10px;"
                        @click="directPurchase(product)"
                    >
                        <span class="directive-btn-text">바로구매</span>
                    </v-btn>
                    <v-btn class="directive-btn" @click="addToCart(product)" rounded>
                        <span class="directive-btn-text">장바구니</span>
                        <v-icon>mdi-cart</v-icon>
                    </v-btn>
                </div>
            </div>
        </li>
    </ul>
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
        }
    },
    async created() {
        let userInfo = JSON.parse(localStorage.getItem("userInfo"));
        console.log(userInfo);
        let memberId = userInfo.memberId;
        if(memberId !== null) {
            await this.reqMyPageWishListToSpring(memberId);
            this.wishListData = this.wishList;
        }
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
            console.log(this.$store.state.orderModule.orderList)
            alert ("주문 페이지로 이동합니다.")
            await this.$router.push({ name: 'OrderInfoPage' })
        },
        isInWishList(product) {
            console.log("isInWishList()")
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
            alert("찜 성공");
        },
        async removeWish(product) {
            let userInfo = JSON.parse(localStorage.getItem("userInfo"));
            let memberId = userInfo.memberId;
            let productId = product.productId;
            this.wishListData = this.wishListData.filter((wish) => wish.productId !== product.productId);
            await this.reqSetWishToSpring({ memberId, productId });
            alert("찜 취소")
        }
    }
}
  
</script>

<style scoped>
    .directive-btn-text {
        font-weight: bolder;
    }
    .directive-btn {
        width: 100px;
    }
    .price-text {
        font-size: 23px;
        font-weight: 600;
        color: black;
    }

    a {
        text-decoration: none;
    }

    .icon-wish {
        height: 30px;
    }

    .badge {
        text-align: right;
        height: 30px;
        width: 100%;
    }
    .name-text {
        line-height: 45px;
        font-style: none;
        font-size: 23px;
        font-weight: bold;
        color: black;
    }

    .other-info {
        height: 45px;
        text-align: center;
    }
    .name {
        text-align: center;
        height: 40px;
    }

    .price {
        text-align: right;
        height: 45px;
        padding-right: 10px;
        margin-bottom: 10px;
    }
    .baby-product-list {
        display: block;
        width: 1098px;
        padding-left: 0px;
        list-style-type: none;
    }

    .baby-product-list::after {
        content: ".";
        display: block;
        clear: both;
        height: 0;
        visibility: hidden;
    }
 
    .baby-product {
        position: relative;
        float: left;
        width: 274px;
        padding: 20px 20px 20px 20px;
        border-bottom: 1px solid #ddd;
        display: list-item;
        height: 450px;
    }

    .baby-product-link {
        display: block;
        box-sizing: border-box;
        width: 234px;
        cursor: pointer;
        height: 365px;
    }
    .baby-product-wrap {
        width: 234px;
        display: block;
        
    }
    .image {
        width: 234px;
        height: 234px;
    }
    .baby-product-hover:hover {
        box-shadow: 0 30px 50px rgba(42, 39, 39, 0.4);
        transform: translateY(-2px);
    }
</style>
  

  