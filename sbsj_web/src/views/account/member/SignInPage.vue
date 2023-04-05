<template>
  <div>
    <sign-in-form @submit="onSubmit"></sign-in-form>
  </div>
</template>

<script>

import SignInForm from "@/components/member/SignInForm.vue";
import { mapActions, mapState } from 'vuex';

const accountModule = 'accountModule'

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
  computed: {
    ...mapState(accountModule, ['isAuthenticated']),
  },
  updated() {
    console.log("signin updated");
    if (this.isAuthenticated === true) {
      this.isLogin = true;
    } else {
      this.isLogin = false;
    }
  },
  methods: {
    ...mapActions(accountModule, ['reqSignInToSpring']),

    onSubmit(payload) {
      if (!this.isLogin) {
        (async () => {
          await this.reqSignInToSpring(payload);
        })()
      } else {
        alert("이미 로그인이 되어 있습니다!");
      }
    },
  }
}

</script>

<style scoped>

</style>