<template>
    <div class="grey lighten-5">
      <v-container class="white" style="width: 1240px">
        <v-row justify="center">
          <v-col cols="auto" style="padding-bottom: 90px">
            <router-link to="/">
              <v-img
                  :src="require('@/assets/logo/energenie_logo5_800x400.png')"
                  width="400"
                  class="mx-auto mb-6"
              ></v-img>
            </router-link>
            <v-card width="540" v-if="!isPass">
              <v-card-text class="text-center px-12 py-16">
                <v-form>
                  <div class="text-h4 font-weight-black mb-10">ID 찾기</div>
                  <div class="d-flex">
                    <v-text-field
                        v-model="name"
                        label="이름"
                        :rules="name_rule"
                        clearable
                        prepend-icon="mdi-account-outline"
                        color="#692498"
                    />
                  </div>
                  <div class="d-flex">
                  <v-text-field
                      v-model="phoneNumber"
                      label="휴대폰 번호"
                      :rules="phoneNumber_rule"
                      clearable
                      prepend-icon="mdi-phone-outline"
                      color="#692498"
                  />
                </div>
                <v-btn
                    block
                    x-large
                    rounded dark
                    color="#692498"
                    class="mt-6"
                    @click="findAccountInfo()"
                    :disabled="false"
                >ID 찾기</v-btn>
                </v-form>
              <v-btn
                  block
                  x-large
                  rounded
                  dark
                  color="#FFCD4A"
                  class="mt-6"
                  :disabled="false"
                  :to="{ name: 'SignInPage' }"
              >로그인</v-btn>
              </v-card-text>
            </v-card>
            <v-card width="460" v-if="isPass">
                  <v-card-text>
                    <div class="text-h5 font-weight-black mb-7" style="text-align: center;">
                      ID 찾기 결과
                    </div>
                    <div v-if="matchingUserId" style="text-align: center;">
                      <v-card flat outlined class="justify-center align-center" height="200">
                        <div style="font-weight: bold; margin-top: 60px;">
                          입력하신 정보와 일치하는 아이디는<br>
                          <h4>{{ matchingUserId }}</h4> 입니다. 다시 로그인을 시도하세요.
                        </div>
                      </v-card>
                      <v-btn
                        block
                        x-large
                        rounded
                        dark
                        color="#692498"
                        class="mt-6"
                        :disabled="false"
                        :to="{ name: 'SignInPage' }"
                      >
                      로그인
                      </v-btn>
                      <v-btn
                        block
                        x-large
                        rounded
                        dark
                        color="#FFCD4A"
                        class="mt-6"
                        :disabled="false"
                        :to="{ name: 'SearchPasswordPage' }"
                      >
                      패스워드 찾기
                      </v-btn>
                    </div>
                  </v-card-text>
            </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>

import { mapActions } from 'vuex';

const accountModule = 'accountModule';

export default {
  name: "SearchIdForm",
  data() {
    return {
      name: "",
      phoneNumber: "",
      isPass: false,
      matchingUserId: null,
      
      name_rule:[
        v => !!v || '가입한 이름을 입력해주세요.',
        v => {
        const replaceV = v.replace(/(\s*)/g, '')
        const pattern = /^[가-힣]{2,}$/
        return pattern.test(replaceV) || '한글 이름을 작성해주세요.'
        }
      ],
      phoneNumber_rule: [
        v => !!v || '가입한 전화번호를 입력 해주세요.',
        v => {
          const replaceV = v.replace(/(\s*)/g, '')
          const pattern = /^(010|011|016|017|018|019)-[0-9]{3,4}-[0-9]{4}$/
          return pattern.test(replaceV) || '010-1234-5678 형식의 번호를 입력해주세요.'
        }
      ],
    }
  },
  methods: {
    ...mapActions(accountModule, [
      'reqfindMatchingUserIdToSpring'
    ]),
    async findAccountInfo() {
        const result = await this.reqfindMatchingUserIdToSpring({
          name: this.name,
          phoneNumber: this.phoneNumber
        });

        if (result) {
          alert("인증이 완료되었습니다.");
          this.isPass = true;
          this.matchingUserId = result;
        } else {
          alert("입력한 정보와 일치하는 계정이 없습니다.");
          this.isPass = false;
          this.matchingUserId = "";
        }
      },
  },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Amatic+SC');

body {
  margin: 0;
  height: 100%;
  background-image: linear-gradient(to top, #d9afd9 0%, #692498 100%);
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
  background: #692498;
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