<template>
    <ReviewModifyForm :product="product"/>
</template>
  
<script>
  
  import ReviewModifyForm from '@/components/review/ReviewModifyForm.vue';
  
  
  export default {
      name: "ReviewModifyPage",
      components: {
        ReviewModifyForm
   
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