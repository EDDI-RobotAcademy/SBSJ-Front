<template>
  <section class="profile-section">
    <div class="my-info-box">
      <div>
        <p class="head-text"></p>
        <p class="email"></p>
      </div>
      <!-- <button-white
        small
        width="64px"
        style="padding: 0 16px 0 10px; font-size: 13px"
        btn-name="회원탈퇴"
      /> -->
    </div>
    <ul>
      <li>
        <p class="head-text">주문내역</p>
        <p class="content-text">{{ localCompleteOrderList.length }} 건</p>
      </li>
      <li>
        <p class="head-text">리뷰내역</p>
        <p class="content-text">{{ localReviewList.length }} 건</p>
      </li>
      <li>
        <p class="head-text">찜한내역</p>
        <p class="content-text">
          {{ localWishList.length }} 건
        </p>
      </li>
    </ul>
  </section>
</template>

<script>
import { mapActions, mapState } from "vuex";
import router from "@/router";

const accountModule = 'accountModule';
const productModule = 'productModule';
const mypageModule = 'mypageModule';

export default {
  name: "MyPageProfileSection",
  computed: {
    ...mapState(accountModule, ["isAuthenticated"]),
    ...mapState(productModule, ["wishList"]),
    ...mapState(mypageModule, ["completeOrderList", "reviewList"]),
  },
  data() {
    return {
      localCompleteOrderList: [],
      localReviewList: [],
      localWishList: []
    }
  },
  async mounted() {
    if (this.isAuthenticated === true) {
      let userInfo = JSON.parse(localStorage.getItem("userInfo"));
      let memberId = userInfo.memberId;
      let token = userInfo.token;

      let lsCompleteOrderList = JSON.parse(localStorage.getItem("lsCompleteOrderList"));
      if(!lsCompleteOrderList || (Array.isArray(lsCompleteOrderList) && lsCompleteOrderList.length === 0)) {
        await this.reqCompleteOrderListToSpring(token);
      }
      let lsReviewList = JSON.parse(localStorage.getItem("lsReviewList"));
      if(!lsReviewList || (Array.isArray(lsReviewList) && lsReviewList.length === 0)) {
        await this.requestMypageReviewListToSpring(memberId);
      }
      let lsWishList = JSON.parse(localStorage.getItem("lsWishList"));
      if(!lsWishList || (Array.isArray(lsWishList) && lsWishList.length === 0)) {
        await this.reqMyPageWishListToSpring(memberId);
      }
      
      lsCompleteOrderList = JSON.parse(localStorage.getItem("lsCompleteOrderList"));
      lsReviewList = JSON.parse(localStorage.getItem("lsReviewList"));
      lsWishList = JSON.parse(localStorage.getItem("lsWishList"));
      
      this.localCompleteOrderList = lsCompleteOrderList;
      this.localReviewList = lsReviewList;
      this.localWishList = lsWishList;
      // console.log("ProfilePage mounted: "+ memberId);
    } else {
      // alert("로그인 상태가 아닙니다.");
      // router.push("/sign-in");
    }
  },
  destroyed() {
    localStorage.removeItem("lsCompleteOrderList");
    localStorage.removeItem("lsReviewList");
    localStorage.removeItem("lsWishList");
  },
  methods: {
    ...mapActions(productModule, [
      "reqMyPageWishListToSpring"
    ]),
    ...mapActions(mypageModule, [
      "reqCompleteOrderListToSpring",
      "requestMypageReviewListToSpring",
    ])
  },
};
</script>

<style scoped>
.profile-section{
  width: 1160px;
  margin: 0 auto 30px;
  padding: 20px 30px 13px;
  border-radius: 20px;
  border: 1px solid #692498;
}

.profile-section .my-info-box{
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  padding: 0 8px;
  align-items: center;
}
.profile-section .my-info-box > div{
  display: flex;
  justify-content: flex-start;
}
.profile-section .my-info-box > div > p {
  margin: 0 20px 0 0;
}

.profile-section > ul {
  display: flex;
  justify-content: space-between;
  padding: 0 0 10px !important;
}
.profile-section > ul > li {
  display: flex;
  justify-content: space-between;
  width: 32%;
  border-radius: 12px;
  padding: 14px 20px;
  background-color: #692498;
  opacity: 80%;
}
.profile-section > ul > li > p {
  margin-top: 4px;
  margin-bottom: 0;
  color: #f1f6f3;
  font-size: 14px;
}

.head-text {
  font-size: 16px;
  font-weight: bold;
  color: #222;
  margin-bottom: 6px !important;
}
</style>