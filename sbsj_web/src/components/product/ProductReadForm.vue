<template>
    <div style="padding-inline:10%; display:flex; justify-content:center; align-items:center; font-weight: 100;">
        <div style="width:95%; margin-top:10%;">
            <div style="width:20%; height:2%; font-size:small; display:flex; opacity: 0.8;">Home > 성분별 > 뼈</div>
            <div style="display:flex;">
                <div style=" width:80%; hegiht:100%; display:flex; justify-content:center; align-items:center; ">
                    <div>
                        <div>
                            <v-img :src="require(`@/assets/productImgs/${product.thumbnail}`)" aspect-ratio="1" class="grey lighten-2" />
                        </div>
                        <div id="carouselDetail" class="carousel slide" data-bs-ride="carousel">
                            <div class="carousel-inner" style="height:125px;">
                                <div class="carousel-item active carousel">
                                    <img src="https://dummyimage.com/800x400/000/fff&text=Slide+1" class="d-block w-100">
                                </div>
                                <div class="carousel-item">
                                    <img src="https://dummyimage.com/800x400/000/fff&text=Slide+2" class="d-block w-100">
                                </div>
                            </div>
                            <div class="carousel-indicators">
                                <button type="button" data-bs-target="#carouselDetail" data-bs-slide-to="0" class="indicator active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselDetail" data-bs-slide-to="1" class="indicator" aria-label="Slide 2"></button>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselDetail" data-bs-slide="prev" @click="pass">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselDetail" data-bs-slide="next" @click="pass">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>

                <div style=" width:100%; padding-inline:3%;  height:600px;">    
                    <div style=" height:100%; ">
                        <div style=" height:10%; display:flex; justify-content:flex-start; align-items:center; font-weight: bold; font-size:xx-large; ">{{product.productName }}</div>
                            <P style="font-size: medium; opacity: 0.8; ">{{ product.productSubName }}</P>

                        <div style="border-bottom: 2px solid "></div><br>

                        <div style=" height:15%; width: 100%; display:flex; ">

                            <div style=" width:30%; display:flex; justify-content:center; align-items:center; ">
                                <div style="font-size:xx-large; font-weight: bold; ">36%</div>
                            </div>
                            <div style=" width:40%; margin-left:5%;  margin-top:1%;">
                                <div class="text-decoration-line-through" style=" font-size:medium; display:flex; justify-content:start; align-items:center; opacity: 0.4; color:red; ">56,000</div>
                                <div style=" font-size:x-large; color: red; font-weight: bold; display:flex; justify-content:start; align-items:center; ">{{ new Intl.NumberFormat().format(product.price) }} 원</div>
                            </div>
                            <div style=" width:100%; display:flex; ">
                                <div style=" width:40%; font-size:x-small; display:flex; justify-content:center; align-items:center;">
                                    <button type="button" class="btn btn-outline-primary" style="font-size: x-small; --bs-btn-padding-y: .2rem; --bs-btn-padding-x: .3rem; --bs-btn-font-size: .6rem;">쿠폰다운</button>
                                </div>
                                <div style="width: 57%; display:flex; justify-content:end; align-items:center; ">
                                    <div style="width:30%;">
                                        <div v-if="!this.checkedWish" @click="changeIcon">
                                            <v-icon x-large>mdi-heart-outline</v-icon>
                                        </div>
                                        <div v-else @click="changeIcon">
                                            <v-icon x-large color="red">mdi-heart</v-icon>
                                        </div>
                                    </div>
                                    <button class="wishCountDiv">{{ product.wishCount }}</button>
                                </div>
                            </div>
                        </div><br>  

                        <div style="border-bottom: 2px solid;"></div>
                        <div style=" width:100%; height:7%;">
                            <div style=" display:flex;  height:100%;  border-bottom: 1px solid #DBDBDB;">

                                <div style="width:30%; display:flex; justify-content:start; align-items:center; font-size:small; font-weight:bold; ">적립금</div>

                                <div style="width:70%; display:flex; justify-content:end; align-items:center; font-size:small;">
                                    <div style=" width:40%; display:flex; justify-content:center; align-items:center; font-size:small; font-weight: bold; ">366p</div>
                                </div>
                            </div>
                        </div>

                        <div style="width:100%; height:7%;">
                            <div style="display:flex; height:100%; border-bottom: 1px solid #DBDBDB;">
                                <div style=" width:30%; height:100%; display:flex; justify-content:start; align-items:center; font-size:small; font-weight:bold; ">배송비</div>

                                <div style=" width:70%; display:flex; justify-content:end; align-items:center; font-size:small;">
                                    <span>(5만원 이상 주문시 무료배송)</span> &nbsp;<span style="font-weight:bold;">3,000원</span>
                                </div>
                            </div>
                        </div>

                        <div style="width:100%; height:7%;">
                            <div style="display:flex; height:100%; border-bottom: 1px solid #DBDBDB;">
                                <div style="width:30%; height:100%; display:flex; justify-content:start; align-items:center; font-size:small; font-weight:bold; ">간편결제</div>

                                <div style="width:70%; display:flex; justify-content:end; align-items:center; font-size:small; font-weight: bold;"></div>
                            </div>
                        </div>
                        
                        <div style="width:100%; height:15%;  border-bottom: 1px solid #DBDBDB; ">
                            <div style="display:flex; height:100%;">
                                <div style="width:30%; height:100%; display:flex; justify-content:start; align-items:center; font-size:small; font-weight:bold; ">수량</div>
                                <div style="width: 70%; display:flex; justify-content:center; align-items:center;">
                                    <select class="form-select" v-model="selectCount" aria-label="Default select example">
                                        <option :value="null" selected>수량을 선택하세요.</option>
                                        <option value="1">1박스</option>
                                        <option value="2">2박스</option>
                                        <option value="3">3박스</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div style="width:100%; height:5%; background-color:#F9F9FB; ">
                            <div style=" display:flex; width:100%; height:100%;">
                                <div style=" width:30%; height:100%; display:flex; justify-content:start; align-items:center; font-size:small; font-weight:bold;">총 결제 금액</div>
                            </div>
                        </div>
                        <div style="width:100%; height:10%; background-color:#F9F9FB; ">
                            <div style=" display:flex; width:100%; height:100%; border-bottom: 1px solid #DBDBDB;">
                                <div style=" width:30%; height:100%; display:flex; justify-content:start; align-items:center; font-size:small; font-weight:bold;"></div>
                            </div>
                        </div>
                        <div style="width:100%; height:12%; display: flex; ">
                            <div style=" width:50%; display:flex; justify-content:center; align-items:center; ">
                                <button type="button" 
                                    class="btn btn-primary btn-lg" 
                                    style="font-weight: bold;"
                                    @click="addToCart"
                                >
                                장바구니</button>
                            </div>
                            <div style="width:50%; display:flex; justify-content:center; align-items:center; ">
                                <button type="button" 
                                    class="btn btn-dark btn-lg" 
                                    style="font-weight: bold;"
                                    @click="directPurchase(product)"
                                >바로구매</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                
            <div style="margin-top: 20%; font-weight: bold; width:100%;">
                <ul class="nav nav-pills nav-fill">
                    <li class="nav-item" style="color:black; border: 1px solid #DBDBDB;">
                        <a class="nav-link" style="color:black;" href="#">상세보기</a>
                    </li>
                    <li class="nav-item" style="color:black; border: 1px solid #DBDBDB;">
                        <a class="nav-link" style="color:black;" href="#">상품평</a>
                    </li>
                    <li class="nav-item" style="color:black; border: 1px solid #DBDBDB;">
                        <a class="nav-link" style="color:black;" href="#">상품문의</a>
                    </li>
                </ul>
            </div>

            <div div style=" width:100%; display:flex; justify-content:center; align-items:center;">
                <img src="@/assets/boneImgs/Point.jpg" alt="배너 사진">
            </div>

            <div style="width:100%; display:flex; justify-content:center; align-items:center;">
                <div style="width:50%;">
                    <v-img :src="require(`@/assets/productImgs/${product.detail}`)" alt="비타민 사진" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import { mapActions, mapState } from "vuex";

const orderModule = 'orderModule';
const productModule = 'productModule';

export default {
    name: "ProductReadForm",
    data() {
        return {            
            checkedWish: false,
            thumbnail: '',
            detail: '',
            selectCount: null,
        };
    },
    props: {
        product: {
            type: Object,
            required: true
        },
    },
	methods: {
        ...mapActions(orderModule, ['reqAddCartToSpring']),
        ...mapActions(productModule, [
            'reqSetWishToSpring', 'requestProductToSpring'
        ]),

		pass() {
			let carousel1 = document.getElementsByClassName("carousel-item")[0];
			let carousel2 = document.getElementsByClassName("carousel-item")[1];

			let indicator1 = document.getElementsByClassName("indicator")[0];
			let indicator2 = document.getElementsByClassName("indicator")[1];

			if(carousel1.classList.contains("active")) {
				carousel1.classList.remove("active");
				carousel2.classList.add("active");
				indicator1.classList.remove("active");
				indicator2.classList.add("active");
			} else {
				carousel1.classList.add("active");
				carousel2.classList.remove("active");
				indicator1.classList.add("active");
				indicator2.classList.remove("active");
			}
		},
        async changeIcon() {
            let userInfo = JSON.parse(localStorage.getItem("userInfo"));
            if(userInfo == null) {
                let loginCheck = confirm("찜은 로그인 한 회원만 가능한 기능입니다.\n로그인 하시겠습니까?");
                if(loginCheck) {
                    this.$router.push({ name: 'SignInPage' });
                }
                return;
            }
            
            let memberId = userInfo.memberId;
            let productId = this.product.productId;

            if(this.checkedWish === true) {
                this.checkedWish = false
            } else {
                this.checkedWish = true
            }

            let getWishCount = await this.reqSetWishToSpring({ memberId, productId });
            await this.requestProductToSpring({ memberId, productId });
            
            let wishCount = document.getElementsByClassName("wishCountDiv")[0];
            if(getWishCount != -1) {
                wishCount.innerText = getWishCount;
            }
        },
        addToCart() {
            if (!this.selectCount) {
                alert("수량을 선택해주세요.");
                return;
            }
            let userInfo = JSON.parse(localStorage.getItem("userInfo"));
            const memberId = userInfo.memberId;
            const productId = this.product.productId;
            const count = this.selectCount;
            console.log(memberId + ', ' + productId +', '+ count)

            this.reqAddCartToSpring({memberId, productId, count})
            
            let goToCartMessage = confirm("장바구니로 이동하시겠습니까?")
            if(goToCartMessage) {
                this.$router.push({ name:'ShoppingCartPage' })
            }
        },
        async directPurchase(product){
            // 바로 구매
            if(!this.selectCount){
                alert("수량을 선택해주세요.")
                return;
            }
            this.count = this.selectCount
            this.directTotalPrice = product.price * this.selectCount
            this.thumbnail = product.thumbnail
            this.$store.commit('orderModule/REQUEST_ORDER_INFO_FROM_SPRING',
                { orderSave: { directOrderCheck: true, product: product, 
                                count: this.count, totalPrice: this.directTotalPrice, thumbnail: this.thumbnail }})
            console.log(this.$store.state.orderModule.orderList)
            alert ("주문 페이지로 이동합니다.")
            await this.$router.push({ name: 'OrderInfoPage' })
        },
	},
    updated() {
        if(this.product.wishId == null) {
            this.checkedWish = false;
        } else if(this.product.wishId != null) {
            this.checkedWish = true;
        }
    }
}
</script>

<style>

</style>