<template>
  <div class="container">
    <AgreementForm />
    <v-row justify="center">
      <v-col cols="auto" style="padding-left: 600px; padding-bottom: 50px">
          <div class="checkbox-container">
            <input type="checkbox" v-model="agreement" class="checkbox" />
            <label for="checkbox" class="label">이용약관에 동의합니다.</label>
          </div>
          <br>
          <div style="padding-left: 25px;">
            <button @click="moveToSignUp" class="button">회원가입 페이지로 이동</button>
          </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>

import AgreementForm from "@/components/information/AgreementForm.vue";

export default {
  name: "SignAgreeForm",
  components: {
    AgreementForm
  },
  data() {
    return {
      agreement: false,
    };
  },
  methods: {
    moveToSignUp() {
      if (this.agreement) {
        this.$router.push("/sign-up");
      }
    },
  },
};
</script>
<style scoped>
.checkbox-container {
  display: flex;
  align-items: center;
}
.checkbox {
  width: 30px;
  height: 30px;
  margin-right: 10px;
}
.label {
  font-size: 20px;
}

.button {
  font-size: 1.2rem; /* 버튼 폰트 크기를 1.2rem으로 설정 */
  padding: 10px 20px; /* 버튼 내부 여백을 10px로, 외부 여백을 20px로 설정 */
}

@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400&display=swap");

</style>