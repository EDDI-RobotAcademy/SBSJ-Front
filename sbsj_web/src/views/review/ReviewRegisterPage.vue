<template>
  <ReviewRegisterForm :productId="productId" />
</template>

<script>
import ReviewRegisterForm from '@/components/review/ReviewRegisterForm.vue';

export default {
  name: 'ReviewRegisterPage',
  components: {
    ReviewRegisterForm,
  },
  props: {
    productId: {
      type: String,
      required: true,
    },
  },
};
</script>

<style>

</style>