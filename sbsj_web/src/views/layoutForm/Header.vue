<template>
    <nav>
    <v-app-bar color="dark" class="flex-grow-0" app dark>
        <v-app-bar-nav-icon v-on:click="activeSidebar"/>
            <router-link :to="{ name: 'home' }">
                <v-img class="mx-2" src="@/assets/logo.png"
                        max-height="40" max-width="40" contain/>
            </router-link>
            <transition name="sidebar-dropdown">
                <div v-if="showSidebar" class="sidebar">
                    <div class="main__category-box" style="width: 700px;">
                        <div class="main__category-list" style="width: 200px; background-color: black;">
                                <li v-for="item in items" :key="item" class="hover-highlight" style="line-height: 44px; text-align: center;">
                                    <p>{{ item.mainTitle }}</p>
                                    <div class="second-category hidden">
                                        <div class="first-inline-category" style="background-color: aqua;">
                                            <ul style="position: absolute; padding-left: 0;">
                                                <li v-for="(subTitle, index) in item.subTitles" :key="index" class="hover-highlight" style="line-height: 44px; text-align: center; width: 249px;">
                                                    <a href="#">
                                                        <p>{{ subTitle.sub }}</p>
                                                    </a>
                                                    <div class="third-category hidden">
                                                        <div class="second-inline-category" style="background-color: orange;">
                                                            <ul style="position: absolute; padding-left: 0;">
                                                                <li v-for="(content, index) in subTitle.contents" :key="index" class="hover-highlight" style="line-height: 44px; text-align: center; width: 249px;">
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
            <v-toolbar-title class="text--darken-4">
                <span>Pick Your Energy</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-text-field class="green--text" v-model="search" append-icon="mdi-magnify" label="placeholder" single-line hide-details></v-text-field>
            <v-btn v-if="isAuthenticated == true" text color="grey" v-on:click="resign">
                <span>회원 탈퇴</span>
                <v-icon right>mdi-login</v-icon>
            </v-btn>
            <v-btn text color="grey" onclick="location.href='http://localhost:8080/sign-up'">
                <span>Sign Up</span>
                <v-icon right>mdi-account-plus-outline</v-icon>
            </v-btn>
            <v-btn v-if="isAuthenticated == false" text color="grey" onclick="location.href='http://localhost:8080/sign-in'">
                <span>Sign In</span>
                <v-icon right>mdi-login</v-icon>
            </v-btn>
            <v-btn v-else text color="grey" v-on:click="logout">
                <span>Sign Out</span>
                <v-icon right>mdi-exit-to-app</v-icon>
            </v-btn>
        </v-app-bar>    
    </nav>
</template>


<script>
export default {
  name: 'Header',
  data() {
        return {
            showSidebar: false,
            isTrue: false,
            items: [
                { mainTitle: '베스트 상품', subTitles: [{sub: 'sub1', contents:['link1', 'link2', 'link3']}, 
                {sub: 'sub2', contents: ['link4', 'link5', 'link6']}
            ]},
            { mainTitle: '추천 상품', subTitles: [{sub: 'sub21', contents:['link7', 'link8', 'link9']}, 
                {sub: 'sub22', contents: ['link10', 'link11', 'link12']}
            ]},
            { mainTitle: '브랜드별 상품', subTitles: [{sub: 'sub31', contents:['link13', 'link14', 'link15']}, 
                {sub: 'sub32', contents: ['link16', 'link17', 'link18']}
            ]}
            ],


            list: [1, 2, 3, 4, 5, 6],
            search: '',
        }
  },
  methods: {
      activeSidebar () {
          if (this.showSidebar) {
              return this.hide()
          }
          return this.show()
      },
      show () {
          this.showSidebar = true;
          setTimeout(() => document.addEventListener('click',this.hide), 0);
      },
      hide () {
          this.showSidebar = false;
          document.removeEventListener('click',this.hide);
      },
      resign () {
          //
      },
      logout () {
          //
      }
  },
  // computed: {
  //     …mapState(["isAuthenticated"]),
  // },
  // mounted() {
  //     if (localStorage.getItem("userInfo")) {
  //         this.$store.state.isAuthenticated = true;
  //     } else {
  //         this.$store.state.isAuthenticated = false;
  //     }
  // }
  }
</script>

<style>
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
      /* margin-top: 12px;
      margin-left: 30%; */
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