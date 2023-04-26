<template>
  <review-list-form :page-count="pageCount" :productId="productId" />
</template>
<script>
import ReviewListForm from '@/components/review/ReviewListForm.vue';
import { mapState, mapGetters } from 'vuex';

export default {
  name: 'ReviewListPage',
  components: {
    ReviewListForm,
  },
  props: {
    productId: {
      type: String,
      required: true,
    },
  },
  computed: {
  ...mapState('productModule', ['reviews']),
  pageCount() {
    const reviewsPerPage = 10;
    const pageCount = Math.ceil(this.reviews.length / reviewsPerPage);
    return pageCount;
      },
    },
  }
</script>

<style>

</style>