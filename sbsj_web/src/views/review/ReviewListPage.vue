<template>
  <review-list-form :page-count="pageCount" :product="product" />
</template>
<script>
import ReviewListForm from '@/components/review/ReviewListForm.vue';
import { mapState, mapGetters } from 'vuex';

export default {
  name: 'ReviewListPage',
  components: {
    ReviewListForm,
  },
  data() {
    return {
      product: {
        productId: '1',
      },
    };
  },
  computed: {
  ...mapState('productModule', ['reviews']),
  pageCount() {
    const reviewsPerPage = 10; // 페이지당 표시할 리뷰의 수를 설정합니다.
    const pageCount = Math.ceil(this.reviews.length / reviewsPerPage);
    return pageCount;
      },
    },
  }

</script>

<style>

</style>