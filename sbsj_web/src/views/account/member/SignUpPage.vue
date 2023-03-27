<template>
  <v-container>
    <sign-up-form @submit="onSubmit"/>
  </v-container>
</template>

<script>


import axios from "axios";
import SignUpForm from "@/components/member/SignUpForm.vue";

export default {
  name: "SignUpPage",
  components: {
    SignUpForm
  },
  methods: {
    onSubmit (payload) {
      const { memberName, memberId, password, email, birthday, phoneNumber  } = payload;

      axios.post("http://localhost:7777/member/sign-up", {
        memberName, memberId, password, email, birthday, phoneNumber 
      })
          .then((res) => {
            alert("회원 가입 완료!" + res)
            this.$router.push("/sign-in")
          })
          .catch((res) => {
            alert(res.response.data.message)
          })
    }
  }
}
</script>

<style scoped>

</style>