<template>
  <div class="mt-5 ml-5">
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
                  <v-text-field v-model="member.id" label="아이디" readonly
                    :rules="id_rule" :disabled="true" required outlined color="green" prepend-icon="mdi-account-outline"/>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <div class="d-flex">
                    <v-text-field v-model="member.name" label="이름" class="v-text-fields" readonly ref="name"
                      :rules="name_rule" required outlined color="green" prepend-icon="mdi-account-outline"/>
                  </div>
                </v-col>
                <v-col cols="2">
                  <v-btn class="w-100 h-50" id="name"
                   @click="modify($event.target, 0)">수정</v-btn>
                </v-col>
              </v-row>
              <v-row>
                <v-col class="text-h5">
                  <v-text-field v-model="member.birthday" label="생년월일(8자리) ex)19001111" ref="birthday"
                   class="v-text-fields" readonly :rules="birthday_rule"
                    required outlined color="green" prepend-icon="mdi-cake-variant"/>
                </v-col>
                <v-col cols="2">
                  <v-btn class="w-100 h-50" id="birthday"
                    @click="modify($event.target, 1)">수정</v-btn>
                </v-col>
              </v-row>
              <v-row>
                <v-col class="text-h5">
                  <v-text-field v-model="member.email" label="이메일 ex) gildong@naver.com" ref="email"
                   class="v-text-fields" readonly :rules="email_rule" :disabled="false"
                   required outlined color="green" prepend-icon="mdi-email"/>
                </v-col>
                <v-col cols="2">
                  <v-btn class="w-100 h-50" id="email"
                   @click="modify($event.target, 2)">수정</v-btn>
                </v-col>
              </v-row>
              <v-row>
                <v-col class="text-h5">
                  <v-text-field v-model="member.phoneNumber" label="전화번호 ex) 010-1234-5678" ref="phoneNumber"
                   class="v-text-fields" readonly :rules="phoneNumber_rule" :disabled="false"
                   required outlined color="green" prepend-icon="mdi-phone-outline"/>
                </v-col>
                <v-col cols="2">
                  <v-btn class="w-100 h-50" id="phoneNumber"
                   @click="modify($event.target, 3)">수정</v-btn>
                </v-col>
              </v-row>

              <my-page-password-modify-form @passwordConfirm="passwordConfirm"/> 
              <br><br>

              <v-btn type="submit"
                      block
                      x-large
                      style="height: 55px"
                      color="#c7d6cd"
                      >
                      변경
              </v-btn>

              </v-form> 
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

const accountModule = 'accountModule';

export default {
  name: "MyPageProfileForm",
  components: { MyPagePasswordModifyForm },
  methods: {
    ...mapActions(accountModule, 
      ['reqSignUpCheckEmailToSpring', 'reqSignUpCheckPhoneNumberToSpring', 'reqMyPageUpdateMemberInfoToSpring', 'reqSignOutToSpring']),

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
        }
      } else {
        text.getElementsByTagName("input")[0].readOnly = false;
        element.innerText = "수정 완료";
        this.modifyMode[id] = true;
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
  },
  computed: {
    ...mapState(accountModule, ['member'])
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
      modifyMode: { name: false, birthday: false, email: false, phoneNumber: false},
      email_rule: [
        v => !!v || '이메일을 입력해주세요.',
        v => {
          const replaceV = v.replace(/(\s*)/g, '')
          const pattern = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/
          return pattern.test(replaceV) || '이메일 형식으로 입력하세요.'
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