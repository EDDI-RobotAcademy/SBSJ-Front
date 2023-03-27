<template>
    <div class="grey lighten-5" style="font-family: 'Noto Sans KR', sans-serif">
      <v-container class="white" style="width: 1240px">
        <v-row justify="center">
          <v-col cols="auto" style="padding-bottom: 90px">
            <router-link to="/">
              <v-img
                  :src="require('@/assets/logo/logo-removebg.png')"
                  width="400"
                  class="mx-auto mb-6"
              ></v-img>
            </router-link>
            <v-card width="540" v-if="!isPass">
              <v-card-text class="text-center px-12 py-16">

                <v-form>
                  <div class="text-h4 font-weight-black mb-10">PW 찾기</div>

                  <div class="d-flex">
                    <v-text-field
                        v-model="memberId"
                        label="아이디"
                        :rules="memberId_rule"
                        clearable
                        prepend-icon="mdi-account-outline"
                        color="orange"
                    />
                  </div>
                  <div class="d-flex">
                    <v-text-field
                        v-model="phoneNumber"
                        label="휴대폰 번호"
                        :rules="phoneNumber_rule"
                        clearable
                        prepend-icon="mdi-phone-outline"
                        color="orange"
                    />
                  </div>

                  <v-btn
                      block
                      x-large
                      rounded
                      color="teal lighten-3"
                      class="mt-6"
                      @click="findAccountmemberId, findAccountPhone"
                      :disabled="false"
                  >PW 찾기</v-btn>
                </v-form>
                <br>
              <br>
              <div class="btn back" onclick="history.go(-1);return false;">뒤로가기</div>
              </v-card-text>
            </v-card>

            <v-card width="460" v-if="isPass">
              <v-card-text class="text-center px-12 py-16">

                <v-form>
                  <div class="text-h4 font-weight-black mb-10">비밀번호 재설정</div>

                  <div class="d-flex">
                    <v-text-field
                        type="password"
                        v-model="password"
                        label="비밀번호"
                        :rules="password_rule"
                        clearable
                        prepend-icon="mdi-lock-outline"
                        :counter="15"
                        color="orange"
                    />
                  </div>

                  <div>
                    <v-text-field
                        type="password"
                        v-model="passwordConfirm"
                        label="비밀번호 확인"
                        :rules="passwordConfirm_rule"
                        clearable
                        prepend-icon="mdi-lock-check-outline"
                        :counter="15"
                        color="orange"
                    />
                  </div>

                  <v-btn
                      type="submit"
                      block
                      x-large
                      rounded
                      color="orange lighten-1"
                      class="mt-6"
                      @click="resetPw"
                      :disabled="false"
                  >비밀번호 변경</v-btn>
                </v-form>
                
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
</template>

<script>

import axios from "axios";

export default {
  name: "SearchMemberPasswordForm",
  data() {
    return {
      memberId: "",
      phoneNumber: "",
      isPass: false,
      password: "",
      passwordConfirm: "",
      memberId_rule:[
        v => !!v || '아이디를 입력해주세요.',
        v => {
          const replaceV = v.replace(/(\s*)/g, '')
          const pattern = /^[a-zA-Z][0-9a-zA-Z]{5,11}$/
          return pattern.test(replaceV) || '영문 대소문자와 숫자포함 6~12자 아이디를 입력해주세요'
        }
      ],
      phoneNumber_rule: [
        v => !!v || '전화번호를 입력 해주세요.',
        v => {
          const replaceV = v.replace(/(\s*)/g, '')
          const pattern = /^(010|011|016|017|018|019)-[0-9]{3,4}-[0-9]{4}$/
          return pattern.test(replaceV) || '010-1234-5678 형식의 번호를 입력해주세요.'
        }
      ],
      password_rule: [
        v => !!v || '패스워드를 입력해주세요.',
        v => this.state === 'ins' ? !!v || '패스워드는 필수 입력사항입니다.' : true,
        v => !(v && v.length < 6) || '패스워드는 6자 이상 입력해야 합니다.',
        v => !(v && v.length > 12) || '패스워드는 12자 이상 입력할 수 없습니다.',
      ],
      passwordConfirm_rule: [
        v => !!v || '패스워드를 확인해주세요.',
        v => this.state === 'ins' ? !!v || '패스워드는 필수 입력사항입니다.' : true,
        v => !(v && v.length < 6) || '패스워드는 6자 이상 입력해야 합니다.',
        v => !(v && v.length > 12) || '패스워드는 12자 이상 입력할 수 없습니다.',
        v => v === this.password || '패스워드가 일치하지 않습니다.'
      ],
    };
  },
  methods: {
    findAccountmemberId() {
      const { memberId } = this;
      axios
          .post("http://localhost:7777/member/memberIdMatch", { memberId })
          .then((res) => {
            if (res.data) {
              alert("인증이 완료되었습니다.");
              this.isPass = true;
            } else {
              alert("입력한 아이디로 가입된 정보가 없습니다.");
              this.isPass = false;
            }
          })
          .catch((error) => {
          console.error(error);
          alert("요청에 실패했습니다. 다시 시도해주세요.");
        });
    },
    findAccountPhone() {
      const { phoneNumber } = this;
      axios
          .post("http://localhost:7777/member/phoneNumberMatch", { phoneNumber })
          .then((res) => {
            if (res.data) {
              alert("인증이 완료되었습니다.");
              this.isPass = true;
            } else {
              alert("입력한 휴대폰번호로 가입된 정보가 없습니다.");
              this.isPass = false;
            }
          })
          .catch((error) => {
          console.error(error);
          alert("요청에 실패했습니다. 다시 시도해주세요.");
        });
    },
    resetPw() {
      const { memberId, password } = this;
      axios
          .post("http://localhost:7777/member/applyNewPassword/", {
            memberId, password
          })
          .then(() => {
            alert("비밀번호가 변경되었습니다.");
          })
          .catch((error) => {
          console.error(error);
          alert("요청에 실패했습니다. 다시 시도해주세요.");
        });
    },
  },
}

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