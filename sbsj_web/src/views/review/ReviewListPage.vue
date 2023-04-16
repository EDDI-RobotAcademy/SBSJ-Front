<template>
  <review-list-form :product="product" />
</template>

<script>

import ReviewListForm from '@/components/review/ReviewListForm.vue';
import { mapState } from 'vuex';

export default {
    name: "ReviewListPage",
    components: {
        ReviewListForm
 
  },
  data(){
  return{
    isCompeleteDelete: false
  }
},
props: {
  product: {
    type: Object,
    required: true
  }
},
computed: {
  ...mapState([
    'product', 'isAuthenticated'
  ])
},
}
</script>

<style>

</style>