<template>
  <div id="home" class="mt-2">
    <carousel-form/>
      </div>
      <div class="row">
        <div class="col-md elevation-1 ma-3 pa-3">
          <best-product-form/>
        </div>
        <div class="col-md elevation-1 ma-3 pa-3">
          <recommend-product-form/>
        </div>
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
