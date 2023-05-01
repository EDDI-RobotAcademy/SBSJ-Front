<template>
  <ReviewModifyForm :review="review" />
</template>

<script>
import ReviewModifyForm from '@/components/review/ReviewModifyForm.vue';

export default {
  name: 'ReviewModifyPage',
  components: {
    ReviewModifyForm,
  },
  props: {
    review: {
      type: Object,
      required: true,
    },
  },
};

</script>

  
  <style>
  
  </style>