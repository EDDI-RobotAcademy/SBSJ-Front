<template>
  <v-layout justify-end>
      <v-dialog v-model="dialog" persistent max-width="800px" max-height="1000px">
        <template v-slot:activator="{ on }">
          <v-btn color="primary" v-on="on">리뷰등록 하러가기</v-btn>
        </template>
    <div class="grey lighten-5" style="font-family: 'Noto Sans KR', sans-serif" >
      <v-container class="white">
        <v-row justify="center">
          <v-col cols="auto" style="padding-bottom: 90px" >
            <div class="text-h4 font-weight-black mb-10" >
              <v-card align="center">
                <v-form ref="form" @submit.prevent="submit">
                    <div class="d-flex justify-end">
                        <v-icon class="mt-6 me-6 mb-0" @click="btnCancel">mdi-close</v-icon>
                    </div>
              <div class="mb-3">
                <p class="mt-5 mb-3" style="font-size: 18px">상품은 만족하셨나요?</p>
                <v-rating
                    v-model="starRate"
                    :value="starRate"
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
                    :rules="[maxFileCount]"
                ></v-file-input>
              </div>
              <div v-for="(image, index) in preview" :key="index">
                <v-img :src="image" max-height="200" max-width="200" contain></v-img>
              </div>
              <v-divider></v-divider>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn type="submit" width="200px" large rounded
                      class="mt-1" color="primary" 
                      >
                      리뷰 등록
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
import {mapActions, mapState} from "vuex";

const productModule = 'productModule';

export default {
  name: "ReviewRegisterForm",
  data() {
  return {
    starRate: 0,
    context: '',
    image: '',
    preview: [],
    fileName: '',
    maxFileCount: (files) => (!files || files.length <= 4) || "최대 4개의 파일을 선택할 수 있습니다.",
    dialog: false,
    context_rule: [
      v => !!v || '필수 입력 사항입니다.',
      v => !(v && v.length < 10) || '10자 이상 입력해 주세요.',
      v => !(v && v.length > 100) || '100자 이하로 입력해 주세요.',
    ],
    
    images: [], // Add this line
      }
    },
  props: {
    productId: {
      type: String,
      required: true,
    },
  },
  methods: {
    ...mapActions(productModule, [
      "reqRegisterReviewToSpring",
      "reqRegisterReviewWithImageToSpring",
    ]),
    selectFile(files) {
      this.images = files;
      this.preview = [];

      for (let i = 0; i < files.length; i++) {
          let reader = new FileReader();
          reader.onload = (e) => {
              this.preview.push(e.target.result);
          };
          reader.readAsDataURL(files[i]);
      }
    },
    removeFile(e) {
      this.$refs.fileUpload.value = null;
      this.preview = [];
      this.images = []; 
    },
    btnCancel() {
      this.dialog = false;
      },
    async submit() {
      let userInfo = JSON.parse(localStorage.getItem("userInfo"));        
      let reviewRegisterRequest = {
        memberId : userInfo.memberId,
        productId: this.productId,
        starRate: this.starRate,
        context: this.context,
      };

    if (this.images.length > 0) {
      let formData = new FormData();
      let reviewRegisterRequestBlob = new Blob([JSON.stringify(reviewRegisterRequest)], { type: "application/json" });
      formData.append("reviewRegisterRequest", reviewRegisterRequestBlob);

      for (let i = 0; i < this.images.length; i++) {
        formData.append('imageFileList', this.images[i]);
      }
      console.log('이미지 파일 추가 완료'); // 이미지 추가 확인용 로그

      // formData 내용 확인을 위한 코드
      for (let entry of formData.entries()) {
        console.log(entry[0] + ', ' + entry[1]);
      }

      await this.reqRegisterReviewWithImageToSpring(formData);
    } else {
      const { starRate, context } = this;
      const memberId =  userInfo.memberId;
      const productId = this.productId;
      await this.reqRegisterReviewToSpring({ memberId, productId, starRate, context });
    }
    this.$router.go(this.$router.currentRoute);
  },
  },
  
};
</script>

<style scoped>
</style>