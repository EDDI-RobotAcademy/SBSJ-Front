<template>
  <div>
    <detail-product-form :productId="productId"/>
  </div>
</template>

<script>

import DetailProductForm from '@/components/product/DetailProductForm.vue'
import { mapActions, mapState } from 'vuex';

const productModule = 'productModule'

export default {
  components: { DetailProductForm },
  name: "DetailProductPage",
  props: {
      productId: {
        type: Number,
        required: true,
      }
  },
  methods: {
    ...mapActions(productModule, [
      'requestProductToSpring'
    ])
  },
  async created() {
    await console.log('DetailProductPage productId: ' + this.productId )
  }
}

</script>

<style>   

</style>