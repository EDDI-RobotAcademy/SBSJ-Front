<template>
    <div>
      <detail-product-form :product="product"></detail-product-form>
    </div>
</template>

<script>

import DetailProductForm from '@/components/product/DetailProductForm.vue'

  export default {
    components: { DetailProductForm },
    name: "DetailProductPage",
    props: {
      product: {
        type: Object,
        required: true,
      }
    },
    mounted() {
      console.log(this.product)
    }
}
</script>

<style>

</style>