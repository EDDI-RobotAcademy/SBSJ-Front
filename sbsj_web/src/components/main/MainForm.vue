<template>
  <v-container>
    <div id="home">
      <div class="row">
        <div class="col-md elevation-1 ma-3 pa-3">
          <carousel-form/>
        </div>
      </div>
      <div class="row">
        <div class="col-md elevation-1 ma-3 pa-3">
          <best-product-form/>
        </div>
        <div class="col-md elevation-1 ma-3 pa-3">
          <recommend-product-form/>
        </div>
      </div>
      <div class="col-md ma-5 pa-5"></div>
    </div>
  </v-container>
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
