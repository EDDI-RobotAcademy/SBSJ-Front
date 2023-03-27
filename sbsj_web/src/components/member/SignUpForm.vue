<template>
  <div class="grey lighten-5" style="font-family: Arial">
    <v-row justify="center">
      <v-col cols="auto" style="padding-bottom: 90px">
        <router-link to="/">
          <v-img
              :src="require('@/assets/logo/logo-removebg.png')" width="400" height="200" class="mx-auto mb-6"/>
        </router-link>
        <v-card width="540">
          <v-card-text class="text-center px-12 py-16">
            <v-form @submit.prevent="onSubmit" ref="form">
              <div class="text-h4 font-weight-black mb-10">회원 가입</div>

              <div class="d-flex">
                  <v-text-field v-model="memberName" label="이름" 
                  :rules="memberName_rule" :disabled="false" required outlined color="green" prepend-icon="mdi-account-outline" class="mb-2"/>
              </div>

              <div class="d-flex">
                <v-text-field v-model="memberId" label="아이디" @change="memberIdValidation"
                              :rules="memberId_rule" :disabled="false" required outlined color="green" prepend-icon="mdi-account-outline" class="mb-2"/>
                <v-btn text large outlined style="font-size: 15px"
                       class="mt-1 ml-5" color="teal lighten-1"
                       @click="checkDuplicatememberId"
                       :disabled="!memberIdPass">
                  아이디 <br/>중복 확인
                </v-btn>
              </div>

              <div class="d-flex">
                <v-text-field v-model="password" label="비밀번호" type="password"
                              :rules="password_rule" :disabled="false" required outlined color="green" prepend-icon="mdi-lock-outline" class="mb-2"/>
              </div>

              <div class="d-flex">
                <v-text-field v-model="passwordConfirm" label="비밀번호 확인" type="password"
                              :rules="passwordConfirm_rule" :disabled="false" required outlined color="green" prepend-icon="mdi-lock-outline" class="mb-2"/>
              </div>

              <div class="d-flex">
                <v-text-field v-model="email" label="이메일 ex) gildong@naver.com" @change="emailValidation"
                              :rules="email_rule" :disabled="false" required outlined color="green" prepend-icon="mdi-email" class="mb-2"/>
                <v-btn text large outlined style="font-size: 15px"
                       class="mt-1 ml-5" color="teal lighten-1"
                       @click="checkDuplicateEmail"
                       :disabled="!emailPass">
                  이메일 <br/>중복 확인
                </v-btn>
              </div>

              <div class="d-flex">
                  <v-text-field v-model="birthday" label="생년월일(8자리) ex)19001111" 
                  :disabled="false" :rules="birthday_rule"
                                required outlined color="green" prepend-icon="mdi-cake-variant" class="mb-2"/>
              </div>

              <div class="d-flex">
                <v-text-field v-model="phoneNumber" label="휴대폰 번호 ex) 010-1234-5678" @change="phoneNumberValidation"
                              :rules="phoneNumber_rule" :disabled="false" required outlined color="green" prepend-icon="mdi-phone-outline" class="mb-2"/>
                <v-btn text large outlined style="font-size: 15px"
                       class="mt-1 ml-5" color="teal lighten-1" 
                       @click="checkDuplicatephoneNumber"
                       :disabled="!phoneNumberPass">
                  휴대폰번호 <br/>중복 확인
                </v-btn>
              </div>

              <v-btn type="submit" block x-large rounded
                     class="mt-6" color="teal lighten-3" :disabled="(emailPass, memberIdPass, phoneNumberPass ) == false">
                가입하기
              </v-btn>

            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "SignUpForm",
  data () {
    return {
      memberName: "",
      memberId: "",
      password: "",
      passwordConfirm: "",
      email: "",
      birthday: "",
      phoneNumber: "",
      
      emailPass: false,
      memberIdPass: false,
      phoneNumberPass: false,
      
      memberName_rule:[
        v => !!v || '이름을 입력해주세요.',
        v => {
        const replaceV = v.replace(/(\s*)/g, '')
        const pattern = /^[가-힣]{2,}$/
        return pattern.test(replaceV) || '한글 이름을 작성해주세요.'
        }
      ],
      memberId_rule:[
        v => !!v || '아이디를 입력해주세요.',
        v => {
          const replaceV = v.replace(/(\s*)/g, '')
          const pattern = /^[a-zA-Z][0-9a-zA-Z]{5,11}$/
          return pattern.test(replaceV) || '영문 대소문자와 숫자포함 6~12자 아이디를 입력해주세요'
        }
      ],
      email_rule: [
        v => !!v || '이메일을 입력해주세요.',
        v => {
          const replaceV = v.replace(/(\s*)/g, '')
          const pattern = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/
          return pattern.test(replaceV) || '이메일 형식으로 입력하세요.'
        }
      ],
      password_rule: [
        v => !!v || '패스워드를 입력해주세요.',
        v => this.password === 'ins' ? !!v || '패스워드는 필수 입력사항입니다.' : true,
        v => !(v && v.length < 6) || '패스워드는 6자 이상 입력해야 합니다.',
        v => !(v && v.length > 12) || '패스워드는 12자 이상 입력할 수 없습니다.',
      ],
      passwordConfirm_rule: [
        v => !!v || '패스워드를 확인해주세요.',
        v => !(v && v.length < 6) || '패스워드는 6자 이상 입력해야 합니다.',
        v => !(v && v.length > 12) || '패스워드는 12자 이상 입력할 수 없습니다.',
        v => v === this.password || '패스워드가 일치하지 않습니다.'
      ],
      birthday_rule: [
        v => !!v || '생년월일 8자리를 입력해주세요.',
        v => {
          const replaceV = v.replace(/(\s*)/g, '')
          const pattern = /^(19[0-9][0-9]|20\d{2})(0[0-9]|1[0-2])(0[1-9]|[1-2][0-9]|3[0-1])$/
          return pattern.test(replaceV) || 'ex)19001111 형식으로 입력하세요.'
        }
      ],
      phoneNumber_rule: [
        v => !!v || '전화번호를 입력 해주세요.',
        v => {
          const replaceV = v.replace(/(\s*)/g, '')
          const pattern = /^(010|011|016|017|018|019)-[0-9]{3,4}-[0-9]{4}$/
          return pattern.test(replaceV) || '010-1234-5678 형식의 번호를 입력해주세요.'
        }
      ]
    }
  },
  methods: {
    onSubmit () {
      if (this.$refs.form.validate()) {
        const { memberName, memberId, password, email, birthday, phoneNumber} = this
        this.$emit("submit", { memberName, memberId, password, email, birthday, phoneNumber })
      } else {
        alert('올바른 정보를 입력하세요!')
      }
    },
    memberIdValidation () {
      const memberIdValid = this.memberId.match(
          /^[a-zA-Z0-9]{5,11}$/
      );
      if (memberIdValid) {
        this.memberIdPass = true
      }
    },
    checkDuplicatememberId () {
      const memberId = this.memberId.match(
        /^[a-zA-Z0-9]{5,11}$/
      );

      if (memberId) {
        const {memberId} = this
        axios.post(`http://localhost:7777/member/check-memberId/${memberId}`)
            .then((res) => {
              if (res.data) {
                alert("사용 가능한 아이디입니다.")
                this.memberIdPass = true
              } else {
                alert("중복된 아이디입니다!")
                this.memberIdPass = false
              }
            })
      }
    },
    emailValidation () {
      const emailValid = this.email.match(
          /^(([^<>()[\]\\.,;:\s@]+(\.[^<>()[\]\\.,;:\s@]+)*)|(.+))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );

      if (emailValid) {
        this.emailPass = true
      }
    },
    checkDuplicateEmail () {
      const emailValid = this.email.match(
          /^(([^<>()[\]\\.,;:\s@]+(\.[^<>()[\]\\.,;:\s@]+)*)|(.+))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );

      if (emailValid) {
        const {email} = this
        axios.post(`http://localhost:7777/member/check-email/${email}`)
            .then((res) => {
              if (res.data) {
                alert("사용 가능한 이메일입니다.")
                this.emailPass = true
              } else {
                alert("중복된 이메일입니다!")
                this.emailPass = false
              }
            })
      }
    },
    phoneNumberValidation () {
      const phoneNumberValid = this.phoneNumber.match(
        /^(010|011|016|017|018|019)-[0-9]{3,4}-[0-9]{4}$/
      );
      if (phoneNumberValid) {
        this.phoneNumberPass = true
      }
    },
    checkDuplicatephoneNumber () {
      const phoneNumberValid = this.phoneNumber.match(
        /^(010|011|016|017|018|019)-[0-9]{3,4}-[0-9]{4}$/
      );

      if (phoneNumberValid) {
        const {phoneNumber} = this
        axios.post(`http://localhost:7777/member/check-phoneNumber/${phoneNumber}`)
            .then((res) => {
              if (res.data) {
                alert("사용 가능한 번호입니다.")
                this.phoneNumber = true
              } else {
                alert("이미 가입된 번호입니다!")
                this.phoneNumber = false
              }
        })
      }
    },
  }
}
</script>

<style scoped>

</style>