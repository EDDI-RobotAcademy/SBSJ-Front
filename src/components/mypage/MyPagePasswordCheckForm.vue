<template>
  <div class="" style="font-family: 'Noto Sans KR', sans-serif">
    <v-container class="white" style="width: 1240px">
      <v-row justify="center">
        <v-col cols="auto" style="padding-bottom: 90px">
          <div class="text-center py-12">
            <h1>비밀번호 확인이 필요합니다</h1>
            <h5 style="margin-bottom: 50px;">본인 확인을 위해 비밀번호 확인을 해주세요.</h5>
              <v-card width="540">
                <v-card-text class="text-center px-12 py-16">
                  <v-form @submit.prevent="onSubmit">
                    <div class="text-h4 font-weight-black mb-10" >비밀번호 인증</div>
                    <div class="d-flex">
                      <v-text-field
                          type="password"
                          v-model="password"
                          label="비밀번호"
                          :rules="password_rule"
                          clearable
                          prepend-icon="mdi-lock-outline"
                          color="orange"
                          class="mb-2"
                      />
                    </div>
                    <v-btn
                        type="submit"
                        block
                        x-large
                        color="#97d9e1"
                        class="mt-6"
                        :disabled="false"
                    >확인</v-btn><br/>
                  </v-form>
                </v-card-text>
              </v-card>
            </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>

export default {
  name: "MyPagePasswordCheckForm",
  data() {
    return {
      password: '',
      password_rule: [
        v => !!v || '패스워드를 확인해주세요.',
        v => !(v && v.length < 4) || '패스워드는 4자 이상입니다.',
        v => !(v && v.length > 12) || '패스워드는 12자 미만입니다.',
      ],
    };
  },
  methods: {
    onSubmit() {
      this.$emit("submit", this.password);
    },
  }
};

document.querySelectorAll('.button').forEach(button => button.innerHTML = '<div><span>' + button.textContent.trim().split('').join('</span><span>') + '</span></div>');

</script>

<style scoped>

@import url('https://fonts.googleapis.com/css?family=Amatic+SC');

body {
  margin: 0;
  height: 100%;
  background-image: linear-gradient(to top, #d9afd9 0%, #97d9e1 100%);
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
}

.button_container {
  position: absolute;
  left: 0;
  right: 0;
  top: 30%;
}

.description, .link {
  font-family: 'Amatic SC', cursive;
  text-align: center;
}

.description {
  font-size: 35px;
}

.btn {
  border: none;
  display: block;
  text-align: center;
  cursor: pointer;
  text-transform: uppercase;
  outline: none;
  overflow: hidden;
  position: relative;
  color: #fff;
  font-weight: 700;
  font-size: 15px;
  background-color: #222;
  padding: 17px 60px;
  margin: 0 auto;
  box-shadow: 0 5px 15px rgba(0,0,0,0.20);
}

.btn span {
  position: relative; 
  z-index: 1;
}

.btn:hover:after {
  -webkit-transform: translateX(-9%) translateY(-25%) rotate(45deg);
  transform: translateX(-9%) translateY(-25%) rotate(45deg);
}

.link {
  font-size: 20px;
  margin-top: 30px;
}

.link a {
  color: #000;
  font-size: 25px; 
}

@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400&display=swap");

</style>