<template>
    <nav>
        <v-app-bar color="white" class="flex-grow-0" width="auto" height="130" elevation="1" app>
            <div class="navbar-menu">
                <!-- 첫번째 줄 -->
                <div class="d-flex justify-end me-8 mb-0 mt-1 pt-5 pe-4">
                    <v-btn v-if="isAuthenticated == true" text color="grey" style="height: 40px;" class="mypage">
                        <router-link :to="{ name: 'MyPagePasswordCheckPage' }" style="color: grey; text-decoration: none;">
                            <span>My Page</span>
                        </router-link>
                        <!-- <div class="mypage-hidden">
                            <ul class="mypage-contents" style="padding-left: 0;  margin: 0;">
                                <li class="mypage-hover-highlight">
                                    <v-btn v-if="isAuthenticated == true" text color="grey" v-on:click="resign">
                                        <span>회원 탈퇴</span>
                                    </v-btn>
                                </li>
                            </ul>
                        </div> -->
                    </v-btn>
                    <router-link :to="{ name: 'SignAgreePage' }" style="text-decoration: none;">
                        <v-btn v-if="isAuthenticated == false" text color="grey" style="height: 40px;">
                            <span>회원가입</span>
                        </v-btn>
                    </router-link>
                    <router-link :to="{ name: 'SignInPage' }" style="text-decoration: none;">
                        <v-btn v-if="isAuthenticated == false" text color="grey" style="height: 40px;">
                            <span>로그인</span>
                        </v-btn>
                    </router-link>
                    <v-btn v-if="isAuthenticated == true" text color="grey" v-on:click="logout" style="height: 40px;">
                        <span>로그아웃</span>
                    </v-btn>
                    <v-btn text color="grey" class="shoppingCart" style="height: 38px;">
                        <router-link :to="{ name: 'ShoppingCartPage'}" style="color: grey; text-decoration: none;">
                            <span>장바구니</span>
                        </router-link>
                    </v-btn>
                </div>
                <!-- 두번째줄-->
                <div class="d-flex pb-3 mb-3 mt-0">
                    <v-row>
                        <v-col cols="1" class="ms-7">
                            <div class="mt-4 me-0">
                                <v-app-bar-nav-icon v-on:click="activeSidebar"/>
                                <transition name="sidebar-dropdown">
                                    <div v-if="showSidebar" class="sidebar">
                                        <div class="main__category-box" style="width: 700px;">
                                            <div class="main__category-list" style="width: 200px; background-color: white; display: flex; flex-direction: column;">
                                                <li v-for="(item, index1) in items" :key="index1" class="hover-highlight" style="line-height: 44px; text-align: center; display: flex; align-items: flex-end; justify-content: center;">
                                                    <router-link :to="{ name: item.url }">
                                                        <p>{{ item.mainTitle }}</p>
                                                    </router-link>
                                                    <div class="second-category hidden">
                                                        <div class="first-inline-category" style="background-color: white;">
                                                            <ul style="position: absolute; padding-left: 0;">
                                                                <li v-for="(subTitle, index1) in item.subTitles" :key="index1" class="hover-highlight" style="line-height: 44px; text-align: center; width: 249px;">
                                                                    <a href="#">
                                                                        <p>{{ subTitle.sub }}</p>
                                                                    </a>
                                                                    <!-- <div class="third-category hidden">
                                                                        <div class="second-inline-category" style="background-color: white;">
                                                                            <ul style="position: absolute; padding-left: 0;">
                                                                                <li v-for="(content, index3) in subTitle.contents" :key="index3" class="hover-highlight" style="line-height: 44px; text-align: center; width: 249px;">
                                                                                    <a href="#">
                                                                                        <p>{{ content }}</p>
                                                                                    </a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div> -->
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </li>
                                            </div>
                                        </div>
                                    </div>
                                </transition>
                            </div>
                        </v-col>
                        <v-col cols="2">
                            <div class="logo-area ms-0 mt-2 mb-3 p-0">
                                <router-link :to="{ name: 'home' }">
                                    <v-img src="@/assets/logo/energinie_logo3.png"
                                            max-height="80" max-width="150" />
                                </router-link>
                            </div>
                        </v-col>
                        <v-col cols="5">
                            <div class="mt-3">
                                <v-row>
                                    <v-col cols="10">
                                        <v-text-field v-model="search" label="검색어를 입력하세요." single-line hide-details @keydown.enter="Search"></v-text-field>
                                    </v-col>
                                    <v-col cols="1">
                                        <v-icon id="search-icon" v-on:click="Search" >mdi-magnify</v-icon>
                                    </v-col>
                                </v-row>
                            </div>
                        </v-col>
                        <v-col>
                            <div class="community-menu mt-2 me-8 pe-5 d-flex justify-end">
                                <router-link :to="{ name: 'SurveyPage' }" style="text-decoration: none;">
                                    <v-btn outlined rounded color="purple" style="height: 40px; margin-top: 12px;">
                                        <span>맞춤 영양제 찾기</span>
                                    </v-btn>
                                </router-link>
                                <router-link :to="{ name: 'FreeBoardListPage' }" style="text-decoration: none;">
                                    <v-btn text color="black" style="height: 64px;">
                                        <span>공지사항</span>
                                    </v-btn>
                                </router-link>
                                <router-link :to="{ name: 'QnaBoardListPage' }" style="text-decoration: none;">
                                    <v-btn text color="black" style="height: 64px;">
                                        <span>Q&A</span>
                                    </v-btn>
                                </router-link>
                            </div>
                        </v-col>
                    </v-row>
                </div>
            </div>
        </v-app-bar>    
    </nav>
</template>


<script>
import { mapActions, mapState, mapMutations } from "vuex";
import ProductListPage from "../product/ProductListPage.vue";

const accountModule = 'accountModule';
const productModule = 'productModule';

export default {
    name: "Header",
    data() {
        return {
            search: '',
            scrollY: 0,
            showSidebar: false,
            isTrue: false,
            items: [
                { mainTitle: "상품", subTitles: [{ sub: "sub1", contents: ["link1", "link2", "link3"] }, 
                    { sub: "sub2", contents: ["link4", "link5", "link6"] }], url: 'ProductListPage'},
                { mainTitle: "리뷰", subTitles: [{ sub: "sub21", contents: ["link7", "link8", "link9"] }, 
                    { sub: "sub22", contents: ["link10", "link11", "link12"] }], url: 'ReviewListPage' },
                // { mainTitle: "추천 상품", subTitles: [{ sub: "sub21", contents: ["link7", "link8", "link9"] }, 
                //     { sub: "sub22", contents: ["link10", "link11", "link12"] }], url: 'ReviewListPage' },
                { mainTitle: "커뮤니티", subTitles: [{ sub: "sub31", contents: ["link13", "link14", "link15"] }, 
                    { sub: "sub32", contents: ["link16", "link17", "link18"] }], url: 'QnaBoardListPage' }
            ],
        }
    },
    methods: {
        ...mapActions(accountModule, ['commitIsAuthenticated', 'reqSignOutToSpring', 'reqResignToSpring']),
        ...mapActions(productModule, ['requestSearchResultProductListToSpring']),
        ...mapMutations(productModule, ['SEARCH_QUERY']),

        updateScrollY() {
            this.scrollY = window.scrollY;
        },
        activeSidebar() {
            if (this.showSidebar) {
                return this.hide();
            }
            return this.show();
        },
        show() {
            this.showSidebar = true;
            setTimeout(() => document.addEventListener("click", this.hide), 0);
        },
        hide() {
            this.showSidebar = false;
            document.removeEventListener("click", this.hide);
        },
        async resign () {
            let userInfo = JSON.parse(localStorage.getItem("userInfo"));
            if(confirm("정말로 회원 탈퇴 하시겠습니까?")) {
                this.reqResignToSpring(userInfo);
            }
        },
        async logout () {
            let userInfo = JSON.parse(localStorage.getItem("userInfo"));

            await this.reqSignOutToSpring(userInfo);
        },
        async Search() {
            console.log(this.sanitizedQuery.join(','));
            const query = { query: this.sanitizedQuery.join(','), startIndex: 0, endIndex: 20}
            this.$store.commit('productModule/SEARCH_QUERY', query);
            await this.requestSearchResultProductListToSpring(query)
            if(this.$route.name != 'ProductListPage') {
                this.$router.push(
                    {name: 'ProductListPage'}    
                )
            }
        }
    },
    computed: {
        ...mapState("accountModule", ["isAuthenticated"]),
        
        adjust() {
            if (this.scrollY > 200) {
                return '0px';
            } else {
                return (200 - this.scrollY) + 'px';
            }
        },
        sanitizedQuery() {
            let query = this.search.replace(/[!"#$%&'()*+,\-./:;<=>?@\[\\\]^_`{|}~]/g, '').split(' ')
            if(query.length > 2) {
                alert("단어 2개 까지 입력가능합니다.")
            } else {
                return query
            }
        }
    },
    mounted() {
        window.addEventListener('scroll', this.updateScrollY);

        if (localStorage.getItem("userInfo")) {
            this.commitIsAuthenticated(true);
        } else {
            this.commitIsAuthenticated(false);
        }
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.updateScrollY);
    },
}
</script>

<style scoped>

#search-icon:hover {
    cursor: pointer;
}
.shopping-cart-hover-highlight {
    line-height: 40px;
    width: 179px;
    height: 40px;
    text-align: center;
}

.shoppingCart:hover .shopping-cart-hidden {
    display: inline-block;
}

.shoppingCart .shopping-cart-hover-highlight:hover {
    background-color: lightgray;
}

.mypage-hover-highlight {
    line-height: 40px;
    width: 122px;
    height: 40px;
    text-align: center;
}


.mypage-hidden {
    display: none;
    position: absolute;
    top: 42px;
    width: 122px;
    background-color: white;
    box-sizing: border-box;
}

.mypage:hover .mypage-hidden {
    display: inline-block;
}

.mypage .mypage-hover-highlight:hover {
    background-color: lightgray;
}

.hover-highlight {
    padding-right: 0px;
    padding-left: 0px;
    height: 44px;
    width: 200px;
    text-decoration: none;
    box-sizing: border-box;
}

.second-category .hover-highlight:hover {
    background-color: lightgray;
}

.third-category .hover-highlight:hover {
    background-color: lightgray;
}

.second-category .first-inline-category {
    border-right: 2px;
    border-color: black;
    border-style: solid;
    border-bottom: none;
    border-top: none;
    border-left: none;
}

.second-category > div {
    width: 250px;
    display: inline-block;
    height: 399px;
    position: relative;
}

.third-category > div {
    width: 250px;
    display: inline-block;
    height: 399px;
    position: relative;
}

.hover-highlight:hover {
    background-color: lightgray;
    cursor: pointer;
    color: white;
}

li {
    padding: 0;
    list-style-type: none;
    margin: auto;
}

.hover-highlight:hover > .second-category {
    display: inline-block;
    background-color: lightgray;
    width: 250px;
    height: 399px;
    position: absolute;
    left: 200px;
    top: 0px;
}

.hover-highlight:hover > .third-category {
    display: inline-block;
    background-color: lightgray;
    width: 250px;
    height: 399px;
    position: absolute;
    left: 250px;
    top: 0px;
}

.sidebar .hidden {
    display: none;
}

.second-category > .hidden {
    display: none;
}

.sidebar {
    width: 200px;
    height: auto;
    position: absolute;
    left: 0;
    top: 65px; 
}

.sidebar span {
    position: absolute;
}

.sidebar-dropdown-enter-active,
.sidebar-dropdown-leave-active {
    transition: all 0.2s ease; 
}
.sidebar-dropdown-enter,
.sidebar-dropdown-leave-to {
    transform: translateY(-300%);
}

.navbar-menu {
    width: 100%;
}

.search-area {
    justify-content: flex-start;
}

.logo-area {
    width: 100%;
    height: 100%;
}


</style>