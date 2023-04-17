<template>
    <section class="contents">
        <div class="header">
            <div class="header-content">header here</div>
        </div>
        <div class="product-container">
            <div class="product-body">
                <div class="product-main">
                    <div class="product-list">
                        <div class="product-main-category-header">
                            <product-category-header/>
                        </div>
                        <div class="clear-fix"></div>
                        <product-list-form :products="products"/>
                        <div class="clear-fix"></div>
                    </div>
                </div>
                <div class="product-nav">
                    <product-list-filter/>
                </div>
            </div>
        </div>
    </section>
  </template>
<script>

import { mapActions, mapState } from 'vuex';
import ProductListForm from '@/components/product/ProductListForm.vue';
import ProductListFilter from '@/components/product/ProductListFilter.vue';
import ProductCategoryHeader from '@/components/product/ProductCategoryHeader.vue';

const productModule = 'productModule'

  export default {
    name: "ProductListPage",
    components: {ProductListForm, ProductListFilter, ProductCategoryHeader},

    computed: {
        ...mapState(productModule, [
            'products'
            ])
    },
    mounted () {
        this.requestProductListToSpring()
    },

    methods: {
        ...mapActions(productModule, [
            'requestProductListToSpring'
        ])
    }
  }
  
  </script>
  
  <style>
    .clear-fix::after {
        display: block;
        visibility: hidden;
        clear: both;
        content: ".";
        height: 0;
    }
    
    .product-nav {
        width: 190px;
    }

    .contents {
        margin: auto;
    }

    .product-main {
        width: 1080px;
        float: right;
        display: block;
        padding-top: 20px;
        background-color: none;
    }

    .header {
        height: 38px;
        position: relative;
        display: block;
        border-bottom: 1px solid #eee;
        background-color: aqua;
        margin: auto;
        width: 1300px;
    }

    .product-body {
        width: 1300px;
        margin: auto;
        display: block;
    }

    .product-main-category-header {
        display: block;
        width: 100%;
        float: left;
        margin: 0;
        padding: 0;
        background-color: blueviolet;
    }

    .product-main-category-header::after {
        content: '';
        display: block;
        clear: both;
    }

    .product-container {
        width: 1300px;
        margin: auto;
        padding: 0;
        display: block;
    }
  </style>