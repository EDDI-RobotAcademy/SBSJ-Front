<template>
  <ReviewRegisterForm :product="product" />
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
      productId: '1',
      // 기타 필요한 상품 정보
    },
  };
},
}
</script>

<style>

</style>