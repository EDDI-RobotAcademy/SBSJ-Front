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
            <p v-else style="font-size: 20px">리뷰 평점 {{ averageStarRate }}</p>
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
    <div class="review-register-btn">
      <v-btn color="primary" to="/review">리뷰 등록하러가기</v-btn>
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
import ReviewContextForm from "@/components/review/ReviewContextForm";
import { mapActions, mapState } from "vuex";
import Vue from 'vue';
import Paginate from 'vuejs-paginate';
const productModule = 'productModule';

Vue.component('paginate', Paginate);


export default {
  name: "ReviewListForm",
  components: { ReviewContextForm  },

  props: {
    product: {
      type: Object,
      required: true,
    },
    pageCount: {
      type: Number,
      default: 0, // 기본 값으로 0을 설정
    },
  },
  methods: {
    ...mapActions(productModule, ["reqReadReviewFromSpring", "getStarRateAverage"]),
  },
  async created() {
    const productId = 1;
    await this.reqReadReviewFromSpring(productId);
    await this.getStarRateAverage(productId);
    
  },
  computed: {
    ...mapState(productModule, ["reviews", "starRateAverage"]),
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
.review-register-btn {
  text-align: right;
}

</style>