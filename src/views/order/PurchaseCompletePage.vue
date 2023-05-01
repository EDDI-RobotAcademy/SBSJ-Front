<template>
  <div class="purchase-complete-msg">
    <div class="h2 d-flex justify-center">
      구매가 완료되었습니다.
    </div>
    <div class="h6 d-flex justify-center">
      구매해주셔서 감사합니다!
    </div>
    <div class="d-flex justify-center mt-5">
      <v-btn color="#692498" dark elevation="1" @click="backHome">메인으로 가기</v-btn>
    </div>
  </div>
</template>

<script>
export default {
    name: "PurchaseCompletePage",
    methods: {
      backHome () {
            this.$router.push({ name:'home' })
        },
    }
}
</script>

<style scoped>
  .purchase-complete-msg {
    margin-top: 200px;
    margin-bottom: 200px;
  }
</style>