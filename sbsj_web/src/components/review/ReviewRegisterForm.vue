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
                    :src="require(`@/assets/products/uploadImg/${product.productInfo.thumbnailFileName}`)"
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
                ></v-file-input>
                <v-img
                    :src="preview"
                    max-height="200"
                    max-width="200"
                    contain
                />
              </div>
              <v-divider></v-divider>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn type="submit" width="200px" large rounded
                      class="mt-1" color="#c7d6cd"
                      :disabled="this.OrderPass == false">
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
export default {
  name: "ReviewRegisterForm",
  data() {
  return {
    starRate: 0,
    context: '',
    image: '',
    preview: '',
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
    orderInfo : {
      type: Object,
      required: true,
    },
  },
  methods: {
    ...mapActions([
      'reqRegisterReviewToSpring',
      'reqRegisterReviewWithImageToSpring'
    ]),
    selectFile(file) {
      this.image = file;
      const fileData = (data) => {
        this.preview = data;
      };
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.addEventListener("load", function() {
        fileData(reader.result);
      }, false);
    },
    removeFile(e) {
      e.target.file = null
      this.preview = ''
    },
    async submit() {
      if (this.image.length > 0) {
        let formData = new FormData()
        formData.append('image', this.image);
        let fileInfo = {
          memberId: this.resMember.id,
          productId: this.product.productId,
          starRate: this.starRate,
          context: this.context,
          orderId: this.orderInfo.orderId
        }
        formData.append("info", new Blob([JSON.stringify(fileInfo)], {type: "application/json"}))
        await this.reqRegisterReviewWithImageToSpring(formData)
      } else {
        const {starRate, context} = this
        const memberId = this.resMember.id
        const productId = this.product.producId
        const orderId = this.orderInfo.orderID
        await this.reqRegisterReviewToSpring({memberId, productId, starRate, context , orderId})
      }
      this.$router.go(this.$router.currentRoute)
    },
  },
  computed: {
    ...mapState([
      'resMember'
    ])
  },
}
</script>

<style scoped>
</style>