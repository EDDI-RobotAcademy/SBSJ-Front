<template>
    <div class="review-content">
      <v-row no-gutters>
        <v-col cols="4" align="right">
          <div class="mr-3">
            <p>등록일자</p>
            <p>{{ review.createDate }}</p>
            <p>수정일자</p>
            <p>{{ review.updateDate }}</p>
            <p>리뷰 ID: {{ review.productReviewId }}</p>
            <v-rating
                :value="review.starRate"
                background-color="grey"
                color="yellow darken-1"
                half-increments
                readonly
                dense
            ></v-rating>
          </div>
        </v-col>
        <v-col cols="8" align="left">
          <div class="ml-3" v-if="(!review.reviewImagePathList || review.reviewImagePathList.length === 0)" style="display: flex; justify-content: space-between;">
              <div>
                  <p>작성내용</p>
                  <p>{{ review.context }}</p>
              </div>
              <div>
                  <review-modify-form :review="review"/>
              </div>
          </div>
          <div class="ml-3" v-else>
            <div>
                  <p>작성내용</p>
                  <p>{{ review.context }}</p>
              </div>
              <div>
                  <review-modify-form :review="review"/>

              </div>
              <v-row>
                <v-col v-for="(imagePath, index) in review.reviewImagePathList" :key="index" cols="auto">
                  <v-img
                    :src="require(`@/assets/reviewImgs/${imagePath}`)"
                    height="100"
                    width="100"
                    contain
                  ></v-img>
                </v-col>
              </v-row>
          </div>
        </v-col>
      </v-row>
      <v-divider></v-divider>
    </div>
</template>

  
  <script>
  import ReviewModifyForm from "@/components/review/ReviewModifyForm.vue"

  export default {
    name: "ReviewContextForm",
    components: { ReviewModifyForm  },
    props: {
      review: {
        type: Object,
        required: true
      }
    },
  }
  </script>
  
  <style scoped>
p {
  font-size: 14px;
  line-height: 1.6;
}

.review-content {
  position: relative;
  list-style: none;
  padding: 10px;
  margin-bottom: 20px;
}

.review-content:last-child {
  margin-bottom: 0;
}

.review-content > v-row {
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
}

.review-content > v-row > v-col {
  padding: 0 10px;
}

.review-content > v-row > v-col:first-child {
  padding-left: 0;
}

.review-content > v-row > v-col:last-child {
  padding-right: 0;
}

</style>