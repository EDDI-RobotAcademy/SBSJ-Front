<template>
  <div id="home" class="mt-2">
    <carousel-form/>
    <div class="container">
      <div style="margin-top: 75px;">
        <best-product-form/>
      </div>
      <div style="margin-top: 50px;">
        <recommend-product-form/>
      </div>
    </div>
  </div>
</template>

<script>

import CarouselForm from "@/components/main/CarouselForm.vue"
import BestProductForm from '@/components/main/BestProductForm.vue';
import RecommendProductForm from '@/components/main/RecommendProductForm.vue';

export default {
  name: 'MainForm',
  components: {
    CarouselForm,
    BestProductForm,
    RecommendProductForm
  },
}

</script>
