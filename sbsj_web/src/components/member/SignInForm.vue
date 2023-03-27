<template>
  <div class="grey lighten-5" style="font-family: 'Noto Sans KR', sans-serif">
    <v-container class="white" style="width: 1240px">
      <v-row justify="center">
        <v-col cols="auto" style="padding-bottom: 90px">
          <router-link to="/">
            <v-img
                :src="require('@/assets/logo/logo-removebg.png')"
                width="400"
                height="200"
                class="mx-auto mb-6"
            ></v-img>
          </router-link>
          <v-card width="540">
            <v-card-text class="text-center px-12 py-16">
              <v-row justify="center">
                <v-col cols="auto">
                    <v-img
                      :src="require('@/assets/banner/banner2.png')"
                      width="400"
                      height="200"
                      class="mx-auto"
                    ></v-img>
                </v-col>
              </v-row>
              <v-form @submit.prevent="onSubmit">
                <div class="text-h4 font-weight-black mb-10" >로그인</div>

                <div class="d-flex">
                  <v-text-field
                      type="memberId"
                      v-model="memberId"
                      label="아이디"
                      :rules="memberId_rule"
                      clearable
                      prepend-icon="mdi-account-outline"
                      color="orange"
                      class="mb-2"
                  />
                </div>

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
                    rounded
                    color="teal lighten-3"
                    class="mt-6"
                    :disabled="false"
                >로그인</v-btn><br/>

                <div class="mt-5">
                  <v-row>
                    <v-col>
                      <router-link :to="{ name: 'SignAgreePage' }" class="text-decoration-none purple--text mr-5">회원가입</router-link>
                    </v-col>
                    <v-col>
                      <router-link
                          class="text-decoration-none purple--text ml-5 mr-5"
                          to="/search-id"
                      >ID 찾기</router-link>
                    </v-col>
                    <v-col>
                      <router-link
                          class="text-decoration-none purple--text ml-5 mr-5"
                          to="/search-password"
                      >PW 찾기</router-link>
                    </v-col>
                  </v-row> 
                </div>    
              </v-form>
              <br>
              <br>
              <div class="btn back" onclick="history.go(-1);return false;">뒤로가기</div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
  
</template>

<script>

export default {
  name: "SignInForm",
  data() {
    return {
      memberId: "",
      password: "",
      memberId_rule:[
        v => !!v || '아이디를 입력해주세요.',
        v => {
          const replaceV = v.replace(/(\s*)/g, '')
          const pattern = /^[a-zA-Z0-9]{5,11}$/
          return pattern.test(replaceV) || '아이디는 6~12자 형식입니다.'
        }
      ],
      password_rule: [
        v => !!v || '패스워드를 입력해주세요.',
        v => this.password === 'ins' ? !!v || '패스워드는 필수 입력사항입니다.' : true,
        v => !(v && v.length < 6) || '패스워드는 6자 이상입니다.',
        v => !(v && v.length > 12) || '패스워드는 12자 미만입니다.',
      ],
    };
  },
  methods: {
    onSubmit() {
      const { memberId, password } = this;
      this.$emit("submit", { memberId, password });
    },
  },
  
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

.btn:after {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  height: 490%;
  width: 140%;
  background: #78c7d2;
  -webkit-transition: all .5s ease-in-out;
  transition: all .5s ease-in-out;
  -webkit-transform: translateX(-98%) translateY(-25%) rotate(45deg);
  transform: translateX(-98%) translateY(-25%) rotate(45deg);
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