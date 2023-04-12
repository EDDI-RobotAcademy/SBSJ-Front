<template>
    <div>
        <tr>
            <th width="1400"><h3>이상품에 대한 리뷰 목록입니다.</h3></th>
            <th>
                <router-link style="text-decoration: none; color: black;" :to="{ name: 'ReviewRegisterPage' }">
                리뷰 등록하기
                </router-link>
            </th>
        </tr>
        <!-- <v-row no-gutters class="mb-4">
        <v-col cols="6" class="mt-8">
          <p>총 {{ reviews.length }}개의 상품 후기가 있습니다.</p>
        </v-col>
        <v-col cols="6">
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
        </v-col>
      </v-row> -->
      <table>
        <tr>
          <th align="center" width="300">리뷰사진</th>  
          <th align="center" width="200">리뷰고유ID</th>
          <th align="center" width="640">본문내용</th>
          <th align="center" width="300">등록일자</th>
          <th align="center" width="300">수정일자</th>
        </tr>
        <tr v-if="!reviews || (Array.isArray(reviews) && boards.length === 0)">
          <td colspan="4">
              현재 등록된 리뷰가 없습니다!
          </td>
        </tr>
        <tr v-else v-for="review in reviews" :key="review.reviewId">
          <td align="center">
            <v-col v-for="(imagePath, idx) in reviewImages" :key="idx" cols="12">
            <v-img :src="require(`@/assets/uploadImgs/${imagePath.reviewImagePath}`)" aspect-ratio="1" class="grey lighten-2">
                <template v-slot:placeholder>
                    <v-row class="fill-height ma-0" align="center" justify="center">
                    <v-progress-circular indeterminate color="grey lighten-5"/>
                    </v-row>
                </template>
            </v-img>
            </v-col>
          </td> 
          <td align="center">
            {{ review.reviewId }}
          </td>
          <td align="center">
              {{ review.context }}
          </td>
          <td align="center">
            {{ review.createDate }}
          </td>
          <td align="center">
            {{ review.updateDate }}
          </td>
        </tr>
        <th>
            <router-link style="text-decoration: none; color: black;" :to="{ name: 'ReviewRegisterPage' }">
                리뷰 등록하기
            </router-link>
        </th>
      </table>
      
    </div>
    
  </template>
  
  <script>
  
  export default {
      name: "ReviewList",
      props: {
          reviews: {
              type: Array
          }
      }
  }
  
  </script>
  
  <style>
  
  </style>