<template>
    <ul class="baby-product-list">
        <li v-for="(product, index) in products" :key="index" class="baby-product">

            <v-hover>
                <template  v-slot="{ hover }">
                    <div
                        :class="`elevation-${hover ? 24 : 3}`"
                        class="mx-auto transition-swing"
                        style="border-radius: 20px"
                    >
                        <router-link :to="{ name: 'DetailProductPage', params: {productId: product.productId}}" class="baby-product-link" />
                        <dl class="baby-product-wrap">
                            <dt class="image">
                                <v-img :src="require(`@/assets/productImgs/${product.thumbnail}`)" 
                                    cover class="grey lighten-2" style="border-radius: 20px"/>
                            </dt>
                            <dd class="descriptions" >
                                <div class="badge">
                                    <v-icon class="icon-wish">mdi-heart-outline</v-icon>
                                    <span class="total-wish">
                                        {{ product.wish }}
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
                        <div class="other-info">
                            <v-btn class="directive-btn" rounded style="margin-right: 10px;">
                                <span class="directive-btn-text">바로구매</span>
                            </v-btn>
                            <v-btn class="directive-btn" @click="addToCart(product)" rounded>
                                <span class="directive-btn-text">장바구니</span>
                                <v-icon>mdi-cart</v-icon>
                            </v-btn>
                        </div>
                    </div>
                </template>
            </v-hover>
        </li>
    </ul>
</template>

<script>
import { mapActions, mapState } from "vuex";

const orderModule = 'orderModule'
const accountModule = 'accountModule'
  
export default {
    name: 'JpaProductList',
    props: {
        products: {
            type: Array
        },
    },
    computed: {
        ...mapState(accountModule, {
            isAuthenticated: state => state.isAuthenticated
        }),
    },
    methods: {
        ...mapActions(orderModule, [
            'reqAddCartToSpring',
        ]),
        addToCart(product) { // 객체를 매개변수로 전달
            if(this.isAuthenticated === true) {
                let userInfo = JSON.parse(localStorage.getItem("userInfo"));
                const memberId = userInfo.memberId;
                const productId = product.productId;
                const count = 1

                this.reqAddCartToSpring( { memberId, productId, count } )

                let goToCartMessage = confirm("장바구니로 이동하시겠습니까?")
                if(goToCartMessage) {
                    this.$router.push({ name:'ShoppingCartPage' })
                }
            } else {
                alert("로그인 후 사용가능합니다.")
                this.$router.push({ name: 'SignInPage' })
            }
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
        height: 410px;
    }
    .baby-product-wrap {
        width: 234px;
        display: block;
        
    }
    .image {
        width: 234px;
        height: 234px;
    }
</style>
  

  