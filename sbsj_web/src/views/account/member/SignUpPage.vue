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
      const { membername, memberId, password, email, birthday, phoneNumber , usePass } = payload;

      axios.post("http://localhost:7777/member/sign-up", {
        membername, memberId, password, email, birthday, phoneNumber , usePass
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