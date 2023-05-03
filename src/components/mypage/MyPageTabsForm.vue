<template>
  <v-container>
    <div>

    </div>
    <v-tabs
      v-model="active_tab"
      fixed-tabs
      background-color="white"
      color="#692498"
    >  
      <v-tab
        :key="i"
        v-for="(item, i) in navi"
        v-on:click="currentTab = item.tab"
      >
        {{ item.menu }}
      </v-tab>
    </v-tabs>

    <keep-alive>
      <component :is="componentLoader"></component>
    </keep-alive>
  </v-container>
</template>

<script>
export default {
  name: "MyPageTabsForm",
  props: {
    name: {
      type: String,
      default: "",
    },
    index: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      currentTab: "MyPageSurveyResultForm",
      active_tab: 0,
      navi: [
        { menu: "맞춤 추천 결과", tab: "MyPageSurveyResultForm" },
        { menu: "주문관리", tab: "MyPageOrderListForm" },
        { menu: "리뷰관리", tab: "MyPageReviewForm" },
        { menu: "찜한상품", tab: "MyPageWishListForm" },
        { menu: "배송지관리", tab: "MyPageDeliveryListForm" },
        { menu: "회원정보수정", tab: "MyPageProfileForm" },
        
        
        
        
        
      ],
    };
  },
  mounted() {
    this.active_tab = this.index;
    console.log("navi : " + this.currentTab);
  },
  computed: {
    componentLoader() {
      const tab = this.currentTab;
      return () => import(`@/components/mypage/${tab}`);
    },
  },
  methods: {},
};
</script>