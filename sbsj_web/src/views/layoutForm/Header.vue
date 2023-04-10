<template>
    <nav>
        <!-- <div class="header-main" style="height: 200px;
                margin: auto;
                display: flex; position: relative;
                background-color: lightblue;
                width: 1300px;
                ">
            <router-link :to="{ name: 'home' }" style="margin: auto; position: relative; width: auto;">
                    <v-img class="mx-2" src="@/assets/logo.png"
                            max-height="150" max-width="150" contain/>
            </router-link>
        </div>
        <v-app-bar id="myElement" color="dark" class="flex-grow-0" app dark style="width: 1300px; margin: auto;" :style="{ top: adjust }" align-center> -->
        <v-app-bar color="white" class="flex-grow-0" width="auto" app dark>
            <v-app-bar-nav-icon v-on:click="activeSidebar"/>
            <router-link :to="{ name: 'home' }">
                <v-img class="mx-2" src="@/assets/logo.png"
                        max-height="40" max-width="40" contain/>
            </router-link>
            <transition name="sidebar-dropdown">
                <div v-if="showSidebar" class="sidebar">
                    <div class="main__category-box" style="width: 700px;">
                        <div class="main__category-list" style="width: 200px; background-color: black;">
                            <li v-for="(item, index1) in items" :key="index1" class="hover-highlight" style="line-height: 44px; text-align: center;">
                                <router-link :to="{ name: 'productPage'}">
                                    <p>{{ item.mainTitle }}</p>
                                </router-link>
                                <div class="second-category hidden">
                                    <div class="first-inline-category" style="background-color: aqua;">
                                        <ul style="position: absolute; padding-left: 0;">
                                            <li v-for="(subTitle, index1) in item.subTitles" :key="index1" class="hover-highlight" style="line-height: 44px; text-align: center; width: 249px;">
                                                <a href="#">
                                                    <p>{{ subTitle.sub }}</p>
                                                </a>
                                                <div class="third-category hidden">
                                                    <div class="second-inline-category" style="background-color: yellowgreen;">
                                                        <ul style="position: absolute; padding-left: 0;">
                                                            <li v-for="(content, index3) in subTitle.contents" :key="index3" class="hover-highlight" style="line-height: 44px; text-align: center; width: 249px;">
                                                                <a href="#">
                                                                    <p>{{ content }}</p>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                        </div>
                    </div>
                </div>
            </transition>
            <router-link :to="{ name: 'home' }" style="color: black; text-decoration: none;">
                <v-toolbar-title class="text--darken-4">
                    <span>Pick Your Energy</span>
                </v-toolbar-title>
            </router-link>
            <v-spacer></v-spacer>
            <v-text-field class="green--text" v-model="search" append-icon="mdi-magnify" label="placeholder" single-line hide-details></v-text-field>
            <v-btn v-if="isAuthenticated == true" text color="grey" style="height: 64px;" class="mypage">
                <router-link :to="{ name: 'MyPagePasswordCheckPage' }" style="color: grey; text-decoration: none;">
                    <span>My Page</span>
                    <v-icon right>mdi-login</v-icon>
                </router-link>
                <div class="mypage-hidden">
                    <ul class="mypage-contents" style="padding-left: 0;  margin: 0;">
                        <li class="mypage-hover-highlight">
                            <a href="#">Test 4</a>
                        </li>
                        <li class="mypage-hover-highlight">
                            <a href="#">Test 5</a>
                        </li>
                        <li class="mypage-hover-highlight">
                            <v-btn v-if="isAuthenticated == true" text color="grey" v-on:click="resign">
                                <span>회원 탈퇴</span>
                                <v-icon right>mdi-login</v-icon>
                            </v-btn>
                        </li>
                    </ul>
                </div>
            </v-btn>
            <router-link :to="{ name: 'SignAgreePage' }" style="text-decoration: none;">
                <v-btn v-if="isAuthenticated == false" text color="grey" style="height: 64px;">
                    <span>Sign Up</span>
                    <v-icon right>mdi-account-plus-outline</v-icon>
                </v-btn>
            </router-link>
            <router-link :to="{ name: 'SignInPage' }" style="text-decoration: none;">
                <v-btn v-if="isAuthenticated == false" text color="grey" style="height: 64px;">
                    <span>Sign In</span>
                    <v-icon right>mdi-login</v-icon>
                </v-btn>
            </router-link>
            <v-btn v-if="isAuthenticated == true" text color="grey" v-on:click="logout" style="height: 64px;">
                <span>Sign Out</span>
                <v-icon right>mdi-exit-to-app</v-icon>
            </v-btn>
            
            <v-btn text color="grey" class="shoppingCart" style="height: 64px;">
                <router-link :to="{ name: 'ShoppingCartPage'}" style="color: grey; text-decoration: none;">
                    <span>Shopping Cart</span>
                </router-link>
                <v-icon right>mdi-cart-outline</v-icon>
                <div class="shopping-cart-hidden">
                    <ul class="shopping-cart-contents" style="padding-left: 0;  margin: 0;">
                        <li class="shopping-cart-hover-highlight">
                            <a href="#">Test 1</a>
                        </li>
                        <li class="shopping-cart-hover-highlight">
                            <a href="#">Test 2</a>
                        </li>
                        <li class="shopping-cart-hover-highlight">
                            <a href="#">Test 3</a>
                        </li>
                    </ul>
                </div>
            </v-btn>
        </v-app-bar>    
    </nav>
</template>


<script>
import { mapActions, mapState } from "vuex";

const accountModule = 'accountModule';

export default {
    name: "Header",
    data() {
        return {
            search: "",
            scrollY: 0,
            showSidebar: false,
            isTrue: false,
            items: [
                { mainTitle: "베스트 상품", subTitles: [{ sub: "sub1", contents: ["link1", "link2", "link3"] }, { sub: "sub2", contents: ["link4", "link5", "link6"] }
                    ] },
                { mainTitle: "추천 상품", subTitles: [{ sub: "sub21", contents: ["link7", "link8", "link9"] }, { sub: "sub22", contents: ["link10", "link11", "link12"] }
                    ] },
                { mainTitle: "브랜드별 상품", subTitles: [{ sub: "sub31", contents: ["link13", "link14", "link15"] }, { sub: "sub32", contents: ["link16", "link17", "link18"] }
                    ] }
            ],
        }
    },
    methods: {
        ...mapActions(accountModule, ['commitIsAuthenticated', 'reqSignOutToSpring', 'reqResignToSpring']),

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
            
            this.reqResignToSpring(userInfo);
        },
        async logout () {
            let userInfo = JSON.parse(localStorage.getItem("userInfo"));

            await this.reqSignOutToSpring(userInfo);
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

<style>
.shopping-cart-hover-highlight {
    line-height: 40px;
    width: 179px;
    height: 40px;
    text-align: center;
}


.shopping-cart-hidden {
    display: none;
    position: absolute;
    top: 42px;
    width: 179px;
    background-color: aqua;
    box-sizing: border-box;
}

.shoppingCart:hover .shopping-cart-hidden {
    display: inline-block;
}

.shoppingCart .shopping-cart-hover-highlight:hover {
    background-color: green;
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
    background-color: aqua;
    box-sizing: border-box;
}

.mypage:hover .mypage-hidden {
    display: inline-block;
}

.mypage .mypage-hover-highlight:hover {
    background-color: green;
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
    background-color: lightgreen;
}

.third-category .hover-highlight:hover {
    background-color: lightgreen;
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

</style>