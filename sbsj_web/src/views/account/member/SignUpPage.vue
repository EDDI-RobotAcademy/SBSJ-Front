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
      const { name, id, password, email, birthday, phoneNumber  } = payload;

      axios.post("http://localhost:7777/member/sign-up", {
        name, id, password, email, birthday, phoneNumber 
      })
          .then((res) => {
            alert("회원 가입 완료!")
            this.$router.push("/sign-in")
          })
          .catch((res) => {
            // alert("회원 가입 실패!\n다시 시도해주세요!"+ res.response.data.message)
            alert("회원 가입 실패!\n다시 시도해주세요!"+ res.data)
          })
    }
  }
}
</script>

<style scoped>

</style>