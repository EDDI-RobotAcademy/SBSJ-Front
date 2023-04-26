<template>
  <ReviewModifyForm :product="product" />
</template>

<script>
import ReviewModifyForm from '@/components/review/ReviewModifyForm.vue';

export default {
  name: 'ReviewModifyPage',
  components: {
    ReviewModifyForm,
  },
  props: {
    productId: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      product: {
        productId: this.productId,
        // 기타 필요한 상품 정보
      },
    };
  },
};
</script>

  
  <style>
  
  </style>