<template>
  <div class="w-full">
    <div class="bg-white p-5 rounded-lg">
      <div class="flex flex-wrap">
        <button
          v-for="(tab, index) in tabs"
          :key="index"
          :class="[
            'px-3 py-2 m-1 rounded-lg',
            { 'bg-gray text-black': activeTab === index },
            { 'bg-gray text-gray border border-indigo-500': activeTab !== index },
          ]"
          @click="activeTab = index"
        >
          {{ tab.title }}
        </button>
      </div>
      <div class="mt-5">
        <component
          :is="tabs[activeTab].component"
          :detail="detail"
          :product="product"
          :productId="product.productId.toString()"
        ></component>
      </div>
    </div>
  </div>
</template>




  
  <script>

  import ReviewListPage from "@/views/review/ReviewListPage.vue";
  import ProductReadDetailForm from "@/components/product/ProductReadDetailForm.vue";
  import QnaBoardListPage from "@/views/board/qna/QnaBoardListPage.vue";
  
  export default {
    name:   "ProductReadTabs", 
    components: {
      ProductReadDetailForm,
      ReviewListPage,
      QnaBoardListPage,
    },
    props: {
      tabs: {
        type: Array,
        required: true,
      },
      detail: {
      type: String,
      default: "",
      },
      product: {
      type: Object,
      required: true,
     },
    },
    data() {
      return {
        activeTab: 0,
      };
    },
  };
  </script>