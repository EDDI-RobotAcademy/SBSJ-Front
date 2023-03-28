<template>
  <div>
    <sign-in-form @submit="onSubmit"></sign-in-form>
  </div>
</template>

<script>

import SignInForm from "@/components/member/SignInForm.vue";
import Vue from "vue";
import axios from "axios";
import cookies from "vue-cookies";

Vue.use(cookies);

export default {
  name: "SignInPage",
  components: {
    SignInForm
  },
  data() {
    return {
      isLogin: false,
    };
  },
  mounted() {
    if (this.$store.state.isAuthenticated === true) {
      this.isLogin = true;
    } else {
      this.isLogin = false;
    }
  },
  methods: {
    onSubmit(payload) {
      if (!this.isLogin) {
        const { id, password } = payload;
        axios.post("http://localhost:7777/member/sign-in", { id, password })
            .then((res) => {
              if(res.data === '틀림') {
                  alert("아이디 혹은 비밀번호가 틀렸습니다.");
              } else if(res.data === '없음') {
                  alert("가입되지 않은 사용자입니다.");
              } else {
                  alert("로그인 성공!");
                  this.$store.state.isAuthenticated = true;
                  this.$cookies.set("userInfo", res.data, 3600);
                  localStorage.setItem("userInfo", JSON.stringify(res.data));
                  this.isLogin = true;
                  this.$router.push("/");
              }
          })
          .catch((res) => {
            alert("로그인에 실패했습니다.\n다시 시도해주세요."+ res.response.data.message);
          });
      } else {
        alert("이미 로그인이 되어 있습니다!");
      }
    },
  },
}

</script>

<style scoped>

</style>