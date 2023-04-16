<template>
    <div class="review-content">
      <v-row no-gutters>
        <v-col cols="4" align="right">
          <div class="mr-3">
            <p>{{ review.createDate }}</p>
            <p>{{ review.updateDate }}</p>
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
          <div class="ml-3" v-if="(!review.reviewImageList || review.reviewImageList.length === 0)">
            <p>{{ review.reviewrId }}</p>
            <p>{{ review.context }}</p>
          </div>
          <div class="ml-3" v-else>
            <p>{{ review.reviewrId }}</p>
            <p>{{ review.context }}</p>
            <v-carousel>
              <v-carousel-item
                v-for="(image, index) in review.reviewImageList"
                :key="index"
              >
                <v-img
                  :src="require(`@/assets/reviewImgs/${image.fileName}`)"
                  height="300"
                  width="400"
                  contain
                ></v-img>
              </v-carousel-item>
            </v-carousel>
          </div>
        </v-col>
      </v-row>
      <v-divider></v-divider>
    </div>
</template>

  
  <script>
  
  export default {
    name: "ReviewContextForm",
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