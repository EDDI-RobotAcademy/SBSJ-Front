<template>
    <my-page-password-check-form @submit="onSubmit"/>
</template>

<script>
import MyPagePasswordCheckForm from "@/components/mypage/MyPagePasswordCheckForm.vue"
import router from '@/router';
import { mapActions } from 'vuex';

const accountModule = 'accountModule'

export default {
  name: 'MyPagePasswordCheckPage',
  components: {
    MyPagePasswordCheckForm
  },
  methods: {
    ...mapActions(accountModule, ['reqMyPageCheckPasswordToSpring']),
    onSubmit(password) {
      console.log("이거는 비밀번호 체크: "+ password)
      
      let userInfo = JSON.parse(localStorage.getItem("userInfo"));
      let memberNo = userInfo.memberNo;
      
      (async () => {
        let checkPassword = await this.reqMyPageCheckPasswordToSpring({ memberNo, password })
        console.log("체크 페이지에서 보는 "+ checkPassword);
  
        if(checkPassword) {
          router.push('/mypage');
        }
      })()
      
    },
  },
};
</script>

<style scoped>

</style>



