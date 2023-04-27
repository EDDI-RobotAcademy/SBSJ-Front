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
          <review-context-form :review="showReviews" />
        </li>
      </div>
        <div class="review-container" style="display: flex; justify-content: center; align-items: center;">
          <paginate :containerClass="'pagination'" v-model="syncCurrentPage" :page-count="5" :page-range="5" :margin-pages="1" :click-handler="clickCallback" :prev-text="'Previous'" :next-text="'Next'" style="display: flex;
                                            list-style: none;
                                            padding: 0;
                                            margin: 0;">
              <template slot="page" slot-scope="props"> 
                  <li v-for="(page, index) in props.pages" :key="index" :class="{ 'active': props.isActive(page), 'disabled': props.isDisabled(page)}">
                      <a href="#" @click.prevent="props.pageSelected(page)">{{ page }}</a>
                  </li>
              </template>
          </paginate>
        </div>
    </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import ReviewContextForm from "@/components/review/ReviewContextForm.vue";
import ReviewRegisterPage from '@/views/review/ReviewRegisterPage.vue';
import Paginate from 'vuejs-paginate';

const productModule = 'productModule';

export default {
  name: "ReviewListForm",
  components: { ReviewContextForm, ReviewRegisterPage, Paginate },
  data() {
    return {
      currentPage: 1,
      itemsPerPage: 5,
      cache: {},
      reviewList: []
    }
  },

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
    },
    async clickCallback(pageNumber) {
      console.log("clickCallback(): " + pageNumber)
      this.syncCurrentPage = pageNumber
      const startIndex = (pageNumber - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      
      if(!this.cache[pageNumber]) {
        const payload = {productId: this.productId, startIndex: startIndex, endIndex: endIndex}
        await this.reqReadReviewFromSpring(payload)
        this.showReviews = this.reviews
        this.cache[this.currentPage] = this.reviews
      } else {
        console.log("cache used!!")
        this.showReviews = this.cache[pageNumber]
      }
        
    }
  },

  async created() {
    const productId = Number(this.productId);
    console.log("created()")
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    console.log(startIndex + "/" + endIndex)
    const payload = {productId: this.productId, startIndex: startIndex, endIndex: endIndex}
    await this.reqReadReviewFromSpring(payload)
    this.showReviews = this.reviews
    this.cache[this.currentPage] = this.reviews
    await this.getStarRateAverage(productId);
  },
  computed: {
    ...mapState(productModule, ["reviews", "starRateAverage", "product"]),
    averageStarRate() {
      return this.starRateAverage;
    },
    showReviews: {
      get() {
        return this.reviewList
      },
      set(value) {
        this.reviewList = value
      }
    },
    syncCurrentPage: {
      get() {
        return this.currentPage
      },
      set(value) {
        this.currentPage = value
      }
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


</style>