<template>
    <ul class="baby-product-list">
        <li v-for="(product, index) in products" :key="index" class="baby-product mb-5">
            <div
                class="mx-auto transition-swing baby-product-hover elevation-2"
                style="border-radius: 20px;"
            >
                <router-link :to="{ name: 'ProductReadPage', params: { productId: product.productId.toString() } }" class="baby-product-link">
                    <dl class="baby-product-wrap">
                        <dt class="image">
                            <v-img :src="require(`@/assets/productImgs/${product.thumbnail}`)" 
                                cover class="grey lighten-2" style="border-radius: 20px; width: 234px; height: 234px;"/>
                        </dt>
                        <dd class="descriptions" >
                            <div class="badge">
                                <v-icon class="icon-wish">mdi-heart-outline</v-icon>
                                <span class="total-wish">
                                    {{ product.wishCount }}
                                </span>
                            </div>
                            <div class="name">
                                <span class="name-text" style="text-decoration: none;">
                                    {{ product.title }}
                                </span>
                            </div>
                            <div class="price-area">
                                <div class="price-wrap">
                                    <div class="price">
                                        <span class="price-text">
                                            {{ new Intl.NumberFormat().format(product.price) }}원
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </dd>
                    </dl>
                </router-link>        
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
  
export default {
    name: 'ProductListForm',
    data () {
        return {
            cnt: 1,
            merchant: {
                productId: 0,
                productName: "",
            }
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
        bindViewCount: {
            get() {
                return this.viewCount
            }
        },
        bindOrderBy: {
            get() {
                return this.orderBy
            }
        }
    },
    methods: {
        ...mapActions(orderModule, [
            'reqAddCartToSpring',
        ]),
        addToCart(product) { // 객체를 매개변수로 전달
            //if(this.isAuthenticated === true) {
                let userInfo = JSON.parse(localStorage.getItem("userInfo"));
                const memberId = userInfo.memberId;
                const productId = product.productId;
                const count = this.cnt;

                this.reqAddCartToSpring({ memberId, productId, count })

                let goToCartMessage = confirm("장바구니로 이동하시겠습니까?")
                if(goToCartMessage) {
                    this.$router.push({ name:'ShoppingCartPage' })
                }
            // } else {
            //     alert("로그인 후 사용가능합니다.")
            //     this.$router.push({ name: 'SignInPage' })
            // }
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

    .total-wish {
        line-height: 30px;
        text-align: center;
        font-size: 15px;
        font-weight: 500;
        color: black;
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
  

  