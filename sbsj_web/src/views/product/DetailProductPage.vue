<template>
  <div class="container">
    <detail-product-form :product="product"/>
  </div>
</template>

<script>

import DetailProductForm from '@/components/product/DetailProductForm.vue'
import { mapActions, mapState } from 'vuex';

const productModule = 'productModule';

export default {
  components: { DetailProductForm },
  name: "DetailProductPage",
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
  async created() {
    let userInfo = JSON.parse(localStorage.getItem("userInfo"));
    let memberId = 0;
    if(userInfo != null) {
      memberId = userInfo.memberId; 
    }
    let productId = this.productId;

    await this.requestProductToSpring({ memberId, productId });
  }
}

</script>

<style>   

</style>