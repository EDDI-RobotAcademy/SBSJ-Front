<template>
    
    <body style="padding-inline:10%; display:flex; justify-content:center; align-items:center; font-weight: 100;">
            <div style="width:95%; margin-top:10%;">

                <div style="width:20%; height:2%; font-size:small; display:flex; opacity: 0.8;">Home > 성분별 > 뼈</div>

                <div style="display:flex;">
                    <div style=" width:80%; hegiht:100%; display:flex; justify-content:cneter; align-items:center; ">
                        <div>
                            <div>

                                <div>
                                    <img src="@/assets/boneImgs/PERNIT.jpg" alt="비타민 사진" class="img-fluid">
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
                    </div>

                    <div style=" width:100%; padding-inline:3%;  height:600px;">    
                        <div style=" height:100%; ">
                            <div style=" height:10%; display:flex; justify-content:flex-start; align-items:center; font-weight: bold; font-size:xx-large; ">남유네 유산균 & 비타민</div>
                             <P style="font-size: medium; opacity: 0.8; ">건조한 외부환경에서도 촉촉한 피부 보습 유지를 위한 히알루론산 건강기능식품</P> 

                            <div style="border-bottom: 2px solid "></div><br>

                            <div style=" height:15%; width: 100%; display:flex; ">

                                <div style=" width:30%; display:flex; justify-content:center; align-items:center; ">
                                    <div style="font-size:xx-large; font-weight: bold; ">36%</div>
                                </div>
                                <div style=" width:40%; margin-left:5%;  margin-top:1%;">
                                    <div class="text-decoration-line-through" style=" font-size:medium; display:flex; justify-content:start; align-items:center; opacity: 0.4; color:red; ">56,000</div>
                                    <div style=" font-size:x-large; color: red; font-weight: bold; display:flex; justify-content:start; align-items:center; ">36,000원</div>
                                </div>
                                <div style=" width:100%; display:flex; ">
                                    <div style=" width:40%; font-size:x-small; display:flex; justify-content:center; align-items:center;">
                                        <button type="button" class="btn btn-outline-primary" style="font-size: x-small; --bs-btn-padding-y: .2rem; --bs-btn-padding-x: .3rem; --bs-btn-font-size: .6rem;">쿠폰다운</button>
                                    </div>
                                    <div style="width: 60%; display:flex; justify-content:end; align-items:center; ">
                                        <div style=" width:30%;">
                                            <button v-if="this.showIcon" @click="changeIcon">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                                                    <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                                                </svg>
                                            </button>
                                            <button v-else @click="changeIcon">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16" style="color:red;">
                                                    <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                                                </svg>
                                            </button>
                                        </div>
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

                                    <div style=" width:70%; display:flex; justify-content:end; align-items:center; font-size:small; font-weight: bold;">무료배송(우체국택배)</div>
                                </div>
                            </div>

                            <div style="width:100%; height:7%;">
                                <div style="display:flex; height:100%; border-bottom: 1px solid #DBDBDB;">
                                    <div style="width:30%; height:100%; display:flex; justify-content:start; align-items:center; font-size:small; font-weight:bold; ">간편결제</div>

                                    <div style="width:70%; display:flex; justify-content:end; align-items:center; font-size:small; font-weight: bold;"></div>
                                </div>
                            </div>
                            
                            <div style="width:100%; height:15%;  border-bottom: 1px solid #DBDBDB; ">
                                <div style="display:flex; height:100%; ">
                                    <div style="width:30%; height:100%; display:flex; justify-content:start; align-items:center; font-size:small; font-weight:bold; ">수량</div>
                                    
                                        <div style="width: 70%; display:flex; justify-content:center; align-items:center;">
                                            <select class="form-select" aria-label="Default select example">
                                                <option selected style="font-size:medium; --bs-btn-padding-x: 4rem;">수량을 선택하세요.</option>
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
                                    <button type="button" class="btn btn-dark btn-lg" style="font-weight: bold;">바로구매</button>
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
                    <img src="@/assets/boneImgs/Point.jpg" alt="비타민 사진" class="img-fluid">
                </div>

                <div style="width:100%; display:flex; justify-content:center; align-items:center;">
                    <div style="width:50%;">
                        <img src="@/assets/boneImgs/PERNIT 상세.jpg" alt="비타민 사진" class="img-fluid">
                    </div>
                </div>
            </div>
    </body>
</template>


<script >
import { mapActions } from "vuex";

const orderModule = 'orderModule'

export default {
    name: "DetailProductForm",
    data() {
        return {
            showIcon:true,
        };
    },
    props: {
        productId: {
            type: Number,
            required: true,
        },
    },
	methods: {
        ...mapActions(orderModule, [
            'reqAddCartToSpring',
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
        changeIcon() {
            if(this.showIcon === true) {
                this.showIcon = false
            } else {
                this.showIcon = true
            }
        },
        addToCart() {
            let userInfo = JSON.parse(localStorage.getItem("userInfo"));
            const memberId = userInfo.memberId;
            const { productId, count } = this
            console.log(memberId + ', ' + productId +', '+ count)

            this.reqAddCartToSpring({memberId, productId, count})
            
            let goToCartMessage = confirm("장바구니로 이동하시겠습니까?")
            if(goToCartMessage) {
                this.$router.push({ name:'ShoppingCartPage' })
            }
            
        },
        

	}
}
</script>

<style>

</style>