<template>
  <v-container>
    <sign-up-form @submit="onSubmit"/>
  </v-container>
</template>

<script>
import SignUpForm from "@/components/member/SignUpForm.vue";
import { mapActions } from 'vuex';

const accountModule = 'accountModule';

export default {
  name: "SignUpPage",
  components: {
    SignUpForm
  },
  methods: {
    ...mapActions(accountModule, ['reqSignUpToSpring']),

    onSubmit (payload) {
      this.reqSignUpToSpring(payload)
    }
  }
}
</script>

<style scoped>

</style>