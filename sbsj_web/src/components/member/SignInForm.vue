<template>
  <div class="grey lighten-5" style="font-family: 'Noto Sans KR', sans-serif">
    <v-container class="white" style="width: 800px">
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
                    color="orange lighten-1"
                    class="mt-6"
                    :disabled="false"
                >로그인</v-btn><br/>

                <div class="mt-5">
                  <v-row>
                    <v-col>
                      <router-link
                          class="text-decoration-none purple--text mr-5" to="/sign-up"
                      >회원가입</router-link>
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
        v => this.state === 'ins' ? !!v || '패스워드는 필수 입력사항입니다.' : true,
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

</script>

<style scoped>

@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400&display=swap");

</style>