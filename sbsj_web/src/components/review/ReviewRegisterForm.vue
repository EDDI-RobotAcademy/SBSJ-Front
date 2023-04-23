<template>
    <div class="grey lighten-5" style="font-family: 'Noto Sans KR', sans-serif" >
      <v-container class="white" style="width: 1240px">
        <v-row justify="center">
          <v-col cols="auto" style="padding-bottom: 90px" >
            <div class="text-h4 font-weight-black mb-10" >
              <div class="btn back" onclick="history.go(-1); return false;">뒤로가기</div>
              <v-card align="center">
              <!-- <div>
                <p>{{ product.name }}</p>
                <v-img
                    :src="require(`@/assets/productImg/${product.productInfo.thumbnailFileName}`)"
                    max-width="200"
                    max-height="150"
                    contain
                ></v-img>
              </div> -->
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
                ></v-file-input>
              </div>
              <div v-for="(image, index) in preview" :key="index">
                <v-img :src="image" max-height="200" max-width="200" contain></v-img>
              </div>
              <v-divider></v-divider>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn type="submit" width="200px" large rounded
                      class="mt-1" color="primary" @click="submit"
                      >
                      리뷰 등록
                </v-btn>
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
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
    context_rule: [
      v => !!v || '필수 입력 사항입니다.',
      v => !(v && v.length < 10) || '10자 이상 입력해 주세요.',
    ],
    images: [], // Add this line
      }
    },
  props: {
    product: {
      type: Object,
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
    async submit() {
    let reviewRegisterRequest = {
      memberId: 3,
      productId: 1,
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
      const memberId = 3;
      const productId = 1;
      await this.reqRegisterReviewToSpring({ memberId, productId, starRate, context });
    }
    this.$router.go(this.$router.currentRoute);
  },
  },
  computed: {
    ...mapState(["member"]),
  },
};
</script>

<style scoped>
</style>