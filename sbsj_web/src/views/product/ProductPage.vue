<template>
    <section class="contents">
        <div class="header"></div>
        <div class="product-container">
            <div class="product-body">
                <div class="product-main">
                    <div class="product-list">
                        <div class="product-main-category-header">
                            <product-category-header></product-category-header>
                        </div>
                        <div class="clear-fix"></div>
                        <jpa-product-list v-bind:products="products"></jpa-product-list>
                    </div>
                </div>
                <div class="product-nav">
                    <product-search-filter></product-search-filter>
                </div>
            </div>
        </div>
    </section>
  </template>
  
  <script>
import { mapActions, mapState } from 'vuex';
import JpaProductList from '@/components/product/JpaProductList.vue';
import ProductSearchFilter from '@/components/product/JpaSearchFilter.vue';
import ProductCategoryHeader from '@/components/product/ProductCategoryHeader.vue';
  
  export default {
    name: "ProductPage",
    components: [JpaProductList, ProductSearchFilter, ProductCategoryHeader],
    computed: {
        ...mapState([
            'products'
            ]),
    },
    mounted () {
        this.requestProductListtoSpring()
    },
    methods: {
        ...mapActions([
            'requestProductListtoSpring'
        ])
    }
  }
  
  </script>
  
  <style>
  
  </style>