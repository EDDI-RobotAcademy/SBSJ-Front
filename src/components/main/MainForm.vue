<template>
  <div id="home" class="mt-2">
    <carousel-form/>
    <div class="container">
      <div style="margin-top: 75px; margin-bottom: 25px;">
        <best-product-form/>
      </div>
      <v-divider color="black"></v-divider>
      <div style="margin-top: 25px; margin-bottom: 50px;">
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
