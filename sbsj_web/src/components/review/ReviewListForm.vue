<template>
  <div class="review-wrap">
    <div class="review-header">
      <v-row no-gutters>
        <v-col cols="8">
          <div class="review-title">
            <h1>상품 리뷰</h1>
          </div>
          <p>총 {{ reviews.length }}개의 상품 후기가 있습니다.</p>
        </v-col>
        <v-col cols="4">
          <div class="rating-section">
            <p v-if="!reviews || (Array.isArray(reviews) && reviews.length === 0)" style="font-size: 20px">리뷰 평점 {{ 0 }}</p>
            <p v-else style="font-size: 20px">리뷰 평점 {{ starRateAverage }}</p>
            <v-rating
              :value="starRateAverage"
              background-color="grey"
              color="yellow darken-1"
              half-increments
              dense
              readonly
              x-large
            ></v-rating>
          </div>
        </v-col>
      </v-row>
      <v-divider></v-divider>
    </div>
    <div>
      <li>
          <review-register-page :productId="product.productId.toString()"/>
      </li>
      <!-- <v-btn color="primary" @click="reviewRegister">리뷰 등록하러가기</v-btn> -->
    </div>
      <div>
        <li v-if="!reviews || (Array.isArray(reviews) && reviews.length === 0)">
          <p class="mb-7">작성된 리뷰가 없습니다.</p>
          <v-divider width="1070px"></v-divider>
        </li>
        <li v-for="(review, idx) in reviews" :key="idx">
          <review-context-form :review="review" />
        </li>
      </div>
        <div class="review-container" style="display: flex; justify-content: center; align-items: center;">
          <paginate
            tag="ul"
            name="reviews"
            :list="reviews"
            :per="3"
            :page-count="pageCount"
          >
          </paginate>
        </div>
    </div>
</template>

<script>
import ReviewContextForm from "@/components/review/ReviewContextForm.vue";
import { mapActions, mapState } from "vuex";
import Vue from 'vue';
import Paginate from 'vuejs-paginate';
import ReviewRegisterPage from '@/views/review/ReviewRegisterPage.vue';
const productModule = 'productModule';

Vue.component('paginate', Paginate);

export default {
  name: "ReviewListForm",
  components: { ReviewContextForm, ReviewRegisterPage },

  props: {
    productId: {
      type: String,
      required: true,
    },
    pageCount: {
      type: Number,
      default: 0,
    },
  },
  methods: {
    ...mapActions(productModule, ["reqReadReviewFromSpring", "getStarRateAverage"]),
    reviewRegister(){
      let userInfo = JSON.parse(localStorage.getItem("userInfo"));
      if (userInfo == undefined){
        if(comfirm("리뷰등록은 로그인이 필요합니다. 로그인 페이지로 이동하시겠습니까?")){
          this.$router.push({ name: 'SignInPage'});
        }
      } else {
        alert(this.productId);
        this.$router.push({ name: 'ReviewRegisterPage', params: {productId: this.productId}});
      }
    }
  },

  async created() {
    const productId = Number(this.productId);
    await this.reqReadReviewFromSpring(productId);
    await this.getStarRateAverage(productId);
  },
  computed: {
    ...mapState(productModule, ["reviews", "starRateAverage", "product"]),
    averageStarRate() {
      return this.starRateAverage;
    },
  },
};
</script>


<style scoped>
* {
  list-style: none;
}

body {
  font-family: 'Noto Sans KR', sans-serif;
}

p {
  font-size: 16px;
  line-height: 1.6;
}

.review-wrap {
  padding: 30px;
  max-width: 900px;
  margin: 0 auto;
}

.review-title {
  padding-bottom: 18px;
}

.rating-section {
  text-align: right;
  margin-bottom: 10px;
}

.review-container {
  margin-top: 30px;
}


</style>