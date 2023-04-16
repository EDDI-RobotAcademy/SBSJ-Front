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
            <p style="font-size: 20px" v-if="!reviews || (Array.isArray(reviews) && reviews.length === 0)">리뷰 평점 {{ 0 }}</p>
            <p style="font-size: 20px" v-else>리뷰 평점 {{ starRateAverage }}</p>
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
    <div class="review-container">
      <paginate tag="ul" name="reviews" :list="reviews" :per="3">
        <li v-if="!reviews || (Array.isArray(reviews) && reviews.length === 0)">
          <p class="mb-7">작성된 리뷰가 없습니다.</p>
          <v-divider width="1070px"></v-divider>
        </li>
        <li v-for="(review, idx) in paginated('reviews')" :key="idx" v-else>
          <review-context-form
              :review="review"/>
        </li>
      </paginate>
      <paginate-links for="reviews" :simple="{
          next: 'Next »',
          prev: '« Back'
        }"></paginate-links>
    </div>
          
  </div>
</template>

<script>

import ReviewContextForm from "@/components/review/ReviewContextForm";
import { mapActions, mapState } from "vuex";

export default {
  name: "ReviewListForm",
  components: { ReviewContextForm },
  data() {
    return {
      paginate: ["reviews"],
    };
  },
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  methods: {
    ...mapActions("productModule", ["reqReadReviewFromSpring"]),
  },
  created() {
    const productId = this.product.Id;
    this.reqReadReviewFromSpring(productId);
  },
  computed: {
    ...mapState("productModule", ["reviews"]),
    starRateAverage() {
      if (this.reviews && this.reviews.length) {
        const starRateAverage = this.reviews[0].starRateAverage;
        return parseFloat(starRateAverage.toFixed(1));
      }
      return 0;
    }
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