<template>
  <review-register-form :product="product" />
</template>

<script>

import ReviewRegisterForm from '@/components/review/ReviewRegisterForm.vue';

export default {
  name: "ReviewRegisterPage",
  components: {
      ReviewRegisterForm
  },
  data() {
    return {
      product: {
        productId: '12345',
        // 기타 필요한 상품 정보
      },
    };
  },
}
</script>

<style>

</style>