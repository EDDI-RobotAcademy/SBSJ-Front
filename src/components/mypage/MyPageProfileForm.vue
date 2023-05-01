<template>
  <div class="mt-5 mb-5 ml-5 p-5 grey lighten-4">
    <div class="white" style="font-family: Arial">
      <v-row justify="center">
        <v-col cols="auto" style="padding-bottom: 90px">
          <v-card width="800" elevation="0">
            <v-card-text class="text-center px-12 py-16">
              <div class="text-h4 font-weight-black mb-10">회원정보수정</div>
              <v-form @submit.prevent="onSubmit" ref="form">
                <v-divider class="mb-8" style="border-width: 1px; border-color: black"></v-divider>
                <v-row>
                  <v-col class="text-h5">
                    <v-text-field v-model="member.userId" label="아이디" readonly
                      :rules="userId_rule" :disabled="true" required outlined color="#692498" prepend-icon="mdi-account-outline"/>
                  </v-col>
                </v-row>

                <v-row>
                  <v-col>
                    <div class="d-flex">
                      <v-text-field v-model="member.password" label="비밀번호" readonly
                      :disabled="true" required outlined prepend-icon="mdi-lock-outline"/>
                    </div>
                  </v-col>
                  <v-col cols="2">
                    <my-page-password-modify-form @passwordConfirm="passwordConfirm"/>
                  </v-col>
                </v-row>

                <v-row>
                  <v-col>
                    <div class="d-flex">
                      <v-text-field v-model="member.name" label="이름" class="v-text-fields" readonly ref="name"
                        :rules="name_rule" required outlined color="#692498" prepend-icon="mdi-account-outline"/>
                    </div>
                  </v-col>
                  <v-col cols="2">
                    <v-btn height="50px" width="100px" id="name" outlined color="#692498"
                    @click="modify($event.target, 0)">수정</v-btn>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col class="text-h5">
                    <v-text-field v-model="member.birthday" label="생년월일(8자리) ex)19001111" ref="birthday"
                    class="v-text-fields" readonly :rules="birthday_rule"
                      required outlined color="#692498" prepend-icon="mdi-cake-variant"/>
                  </v-col>
                  <v-col cols="2">
                    <v-btn height="50px" width="100px" id="birthday" outlined color="#692498"
                      @click="modify($event.target, 1)">수정</v-btn>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col class="text-h5">
                    <v-text-field v-model="member.email" label="이메일 ex) gildong@naver.com" ref="email"
                    class="v-text-fields" readonly :rules="email_rule" :disabled="false"
                    required outlined color="#692498" prepend-icon="mdi-email"/>
                  </v-col>
                  <v-col cols="2">
                    <v-btn height="50px" width="100px" id="email" outlined color="#692498"
                    @click="modify($event.target, 2)">수정</v-btn>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col class="text-h5">
                    <v-text-field v-model="member.phoneNumber" label="전화번호 ex) 010-1234-5678" ref="phoneNumber"
                    class="v-text-fields" readonly :rules="phoneNumber_rule" :disabled="false"
                    required outlined color="#692498" prepend-icon="mdi-phone-outline"/>
                  </v-col>
                  <v-col cols="2">
                    <v-btn height="50px" width="100px" id="phoneNumber" outlined color="#692498"
                    @click="modify($event.target, 3)">수정</v-btn>
                  </v-col>
                </v-row>

                <v-btn type="submit"
                  block
                  x-large
                  class="h-55 mt-3"
                  color="#692498"
                  dark
                >
                  변경
                </v-btn>
              </v-form> 
            </v-card-text>
              <div class="d-flex justify-end align-end me-10">
                  <v-btn v-if="isAuthenticated == true"
                    v-on:click="resign"
                    text
                    color="grey"
                  >
                    <v-icon>mdi-account-off</v-icon>
                    회원 탈퇴
                  </v-btn>
              </div>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import MyPagePasswordModifyForm from '@/components/mypage/MyPagePasswordModifyForm.vue'
import router from '@/router';
import { mapActions, mapState } from 'vuex';

const accountModule = 'accountModule';

export default {
  name: "MyPageProfileForm",
  components: { MyPagePasswordModifyForm },
  methods: {
    ...mapActions(accountModule, 
      ['reqSignUpCheckEmailToSpring', 'reqSignUpCheckPhoneNumberToSpring', 'reqMyPageUpdateMemberInfoToSpring', 'reqSignOutToSpring', 'reqResignToSpring']),

    async modify(element, index) {
      let text = document.getElementsByClassName("v-text-fields")[index];
      var id = await element.id;
      var mode = this.modifyMode[id];
      if(Boolean(mode)) {
        if(id == "email") {
          let isEmail = await this.emailValidation();
          if(isEmail) {
            alert("중복된 이메일 입니다.");
            return;
          }
        }
        if(id == "phoneNumber") {
          let isPhoneNumber = await this.phoneNumberValidation();
          if(isPhoneNumber) {
            alert("중복된 전화번호 입니다.");
            return;
          }
        }
        
        let formCheck = await this.formValidation(id);

        if(Boolean(formCheck)) {
          text.getElementsByTagName("input")[0].readOnly = true;
          this.modifyMode[id] = false;
          element.innerText = "수정";
          alert("수정 완료!");
        } else if(Boolean(formCheck) == false) {
          alert(id + ', 형식에 맞게 입력해주세요!')
        }
      } else {
        text.getElementsByTagName("input")[0].readOnly = false;
        element.innerText = "수정 완료";
        this.modifyMode[id] = true;
      }
    },
    async formValidation(id) {
      if(id == "name"){ 
        if(!this.$refs.name.validate()) { return null;}
        else { return true; }
      }
      if(id == "birthday"){ 
        if(!this.$refs.birthday.validate()) { return null;}
        else { return true; }
      }
      if(id == "email"){ 
        if(!this.$refs.email.validate()) { return null;}
        else { return true; }
      }
      if(id == "phoneNumber"){ 
        if(!this.$refs.phoneNumber.validate()) { return null;}
        else { return true; }
      }
    },
    async emailValidation() {
      const email = this.member.email;
      if(email == this.oldEmail) {
        return false;
      }
      return await this.reqSignUpCheckEmailToSpring(email);
    },
    async phoneNumberValidation() {
      const phoneNumber = this.member.phoneNumber;
      if(phoneNumber == this.oldPhoneNumber) {
        return false;
      }
      return await this.reqSignUpCheckPhoneNumberToSpring(phoneNumber);
    },
    passwordConfirm(newPassword) {
      this.newPassword = newPassword;
    },
    async onSubmit() {
      if(this.modifyMode["name"]) {
        alert("이름 수정을 완료해주세요.");
        return;
      }
      if(this.modifyMode["birthday"]) {
        alert("생년월일 수정을 완료해주세요.");
        return;
      }
      if(this.modifyMode["email"]) {
        alert("이메일 수정을 완료해주세요.");
        return;
      }
      if(this.modifyMode["phoneNumber"]) {
        alert("전화번호 수정을 완료해주세요.");
        return;
      }

      if(this.member.name == this.oldName
         && this.member.birthday == this.oldBirthday
         && this.member.email == this.oldEmail
         && this.member.phoneNumber == this.oldPhoneNumber
         && this.newPassword == '') {
        alert("변경 사항이 없습니다.");
        return;
      }

      if(this.$refs.form.validate()) {
        let modifyCheck = confirm("지금 이대로 수정하시겠습니까?");
        if(modifyCheck) {
          const { name, birthday, email, phoneNumber } = this.member;
          let newPassword = this.newPassword;

          let userInfo = JSON.parse(localStorage.getItem("userInfo"));
          let memberId = userInfo.memberId;

          let successUpdate = await this.reqMyPageUpdateMemberInfoToSpring({ memberId, name, birthday, email, phoneNumber, newPassword })
          console.log("회원 정보 수정 잘 됐나? "+ successUpdate.data)
          if(successUpdate.data) {
            let token = userInfo.token;

            this.reqSignOutToSpring(token);
            router.push({ name: 'SignInPage' })
          } else {
            alert("회원 정보를 수정하는 데 실패하였습니다.\n다시 시도해주세요.")
          }
        }
      } else {
        alert('형식에 맞게 입력해주세요!')
      }
    },
    async resign () {
      let userInfo = JSON.parse(localStorage.getItem("userInfo"));
      if(confirm("정말로 회원 탈퇴 하시겠습니까?")) {
          this.reqResignToSpring(userInfo);
      }
    },
  },
  computed: {
    ...mapState(accountModule, ['member', 'isAuthenticated'])
  },
  created() {
    this.oldName = this.member.name;
    this.oldBirthday = this.member.birthday;
    this.oldEmail = this.member.email;
    this.oldPhoneNumber = this.member.phoneNumber;
  },
  mounted() {
    document.getElementsByClassName("w-100")[0].getElementsByTagName("span")[0].id = "name";
    document.getElementsByClassName("w-100")[1].getElementsByTagName("span")[0].id = "birthday";
    document.getElementsByClassName("w-100")[2].getElementsByTagName("span")[0].id = "email";
    document.getElementsByClassName("w-100")[3].getElementsByTagName("span")[0].id = "phoneNumber";
  },
  data() {
    return {
      newPassword: '',
      oldName: '',
      oldBirthday: '',
      oldEmail: '',
      oldPhoneNumber: '',
      
      modifyMode: { name: false, birthday: false, email: false, phoneNumber: false},

      name_rule: [
        v => !!v || '이름을 입력해주세요.',
        v => {
        const replaceV = v.replace(/(\s*)/g, '')
        const pattern = /^[가-힣]{2,}$/
        return pattern.test(replaceV) || '한글 이름을 작성해주세요.'
        }
      ],
      userId_rule:[
        v => !!v || '아이디를 입력해주세요.',
        v => {
          const replaceV = v.replace(/(\s*)/g, '')
          const pattern = /^[a-zA-Z][0-9a-zA-Z]{3,11}$/
          return pattern.test(replaceV) || '영문 대소문자와 숫자포함 4~12자 아이디를 입력해주세요'
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
    };
  },
}
</script>

<style scoped>
  
</style>