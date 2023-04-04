<template>
    <div>
      <detail-product-form :productId="productId"></detail-product-form>
    </div>
</template>

<script>

import DetailProductForm from '@/components/product/DetailProductForm.vue'

  export default {
    components: { DetailProductForm },
    name: "DetailProductPage",
    props: {
      productId: {
        type: Number,
        required: true,
      }
    },
    mounted() {
      console.log(this.productId)
    }
}
</script>

<style>

</style>