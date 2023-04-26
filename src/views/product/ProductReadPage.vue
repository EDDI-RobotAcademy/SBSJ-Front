<template>
  <div class="container">
    <product-read-form :product="product"/>
  </div>
</template>

<script>

import ProductReadForm from '@/components/product/ProductReadForm.vue'
import { mapActions, mapState } from 'vuex';

const productModule = 'productModule';

export default {
  components: { ProductReadForm },
  name: "ProductReadPage",
  props: {
    productId: {
      type: String,
      required: true,
    }
  },
  methods: {
    ...mapActions(productModule, ['requestProductToSpring']),
  },
  computed: {
    ...mapState(productModule, ['product'])
  },
  created() {
    let userInfo = JSON.parse(localStorage.getItem("userInfo"));
    let memberId = 0;
    if (userInfo != null) {
      memberId = userInfo.memberId;
    }
    let productId = this.productId;

    this.requestProductToSpring({ memberId, productId });
    
  },
  // ...
};

</script>

<style>   

</style>