<template>
    <v-layout justify-end>
      <v-dialog v-model="dialog" persistent max-width="800px" max-height="1000px">
        <template v-slot:activator="{ on }">
          <v-btn color="primary" v-on="on">수정</v-btn>
          <v-btn class="w-10" color="primary" @click="deleteReview()">삭제</v-btn>
        </template>
        <div class="grey lighten-5" style="font-family: 'Noto Sans KR', sans-serif">
          <v-container class="white">
            <v-row justify="center">
              <v-col cols="auto" style="padding-bottom: 90px">
                <div class="text-h4 font-weight-black mb-10">
                  <v-card align="center">
                    <v-form ref="form" @submit.prevent="submit">
                    <div class="d-flex justify-end">
                        <v-icon class="mt-6 me-6 mb-0" @click="btnCancel">mdi-close</v-icon>
                    </div>
                    <div class="mb-3">
                      <p class="mt-5 mb-3" style="font-size: 18px">상품은 만족하셨나요?</p>
                      <v-rating
                        v-model="starRate"
                        background-color="grey"
                        color="yellow darken-1"
                        half-increments
                        x-large
                        hover
                        ></v-rating>
                    </div>
                    <div>
                        <v-textarea
                        v-model="context"
                        background-color="grey lighten-4"
                        style="width: 500px"
                        label="상품평을 작성해 주세요."
                        :rules="context_rule"
                        solo
                        required
                        ></v-textarea>
                    </div>
                    <div class="mb-10">
                      <v-file-input
                        ref="fileUpload"
                        @change="selectFile"
                        @click:clear="removeFile"
                        style="width: 550px"
                        color="#205C37"
                        prepend-icon="mdi-camera"
                        label="사진 추가하기"
                        multiple
                      ></v-file-input>
                    </div>
                    <div v-for="(image, index) in preview" :key="index">
                      <v-img :src="image" max-height="200" max-width="200" contain></v-img>
                    </div>
                    <v-divider></v-divider>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn
                        type="submit"
                        width="200px"
                        large
                        rounded
                        class="mt-1"
                        color="primary"
                        @click="submit"
                      >
                        리뷰 수정
                      </v-btn>
                      <v-spacer></v-spacer>
                    </v-card-actions>
                    </v-form>
                  </v-card>
                </div>
              </v-col>
            </v-row>
          </v-container>
        </div>
      </v-dialog>
    </v-layout>
  </template>
  

  <script>
  import { mapActions, mapState } from "vuex";
  const productModule = "productModule";
  
  export default {
    name: "ReviewModifyForm",
    props: {
        review: {
            type: Object,
            default: () => ({}),
        },
        },
    data() {
        return {
            starRate: this.review ? this.review.starRate : "",
            context: this.review ? this.review.context : "",
            images: [],
            preview: [],
            dialog: false,
            context_rule: [(v) => !!v || "상품평을 작성해 주세요."],
        };
    },
    methods: {
      ...mapActions(productModule, ["reqModifyReviewToSpring", "reqModifyReviewWithImageToSpring", "reqDeleteReviewToSpring"]),
        selectFile(event) {
            this.images = [...event.target.files];
            this.previewImages();
        },
        previewImages() {
            this.preview = this.images.map((file) => URL.createObjectURL(file));
        },
        removeFile() {
            this.images = [];
            this.preview = [];
        },
        async submit() {
            if (!this.$refs.form.validate()) {
            return;
            }
            let reviewModifyRequest = {
                productReviewId: this.review?.productReviewId,
                starRate: this.starRate,
                context: this.context,
            };
    
            if (this.images.length > 0) {
            let formData = new FormData();
            let reviewModifyRequestBlob = new Blob([JSON.stringify(reviewModifyRequest)], { type: "application/json" });
            formData.append("reviewModifyRequest", reviewModifyRequestBlob);
    
            for (let i = 0; i < this.images.length; i++) {
                formData.append("imageFileList", this.images[i]);
            }
    
            await this.reqModifyReviewWithImageToSpring(formData);
            } else {
            await this.reqModifyReviewToSpring(reviewModifyRequest);
            }
    
            this.dialog = false;
        },
        async deleteReview() {
                let checkDelete = confirm("이 리뷰를 삭제하시겠습니까?");
                if(checkDelete) {
                    await this.reqDeleteReviewToSpring(this.review.productReviewId);
                    // window.location.reload(true);
                }
        },
        btnCancel() {
        this.dialog = false;
        },
    },
  };
  </script>

<style scoped>
</style>