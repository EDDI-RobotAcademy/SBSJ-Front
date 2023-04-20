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
                            <product-category-header :selected-title="selectedTitle" @priceDesc="priceDesc" @priceAsc="priceAsc" @wishCountDesc="wishCountDesc" @viewCount="viewCount"/>
                        </div>
                        <div class="clear-fix"></div>
                        <product-list-form :products="showProducts" :viewCount="bindViewCount" :orderBy="bindOrderBy"/>
                        <div class="clear-fix"></div>
                    </div>
                </div>
                <div class="product-nav">
                    <product-list-filter @filtering="filteringProduct"/>
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
    data() {
        return {
            category: 'TOTAL',
            temp: [],
            productTitle: '',
            defaultViewCount: 2,
            defaultOrderBy: 'Default'
        }
    },

    
    async created() {
        await this.requestProductListToSpring();
        this.temp = this.products
        this.productTitle = this.category
        this.defaultOrderBy = 'Default'
        console.log(this.productTitle)
        },

    computed: {
        showProducts: {
            get() {
                // console.log("showProducts() get()")
                return this.temp
            },
            set(value) {
                // console.log("showProducts() set()")
                this.temp = value
            },
        },
        selectedTitle: {
            get() {
                return this.productTitle
            },
            set(value) {
                this.productTitle = value
            }
        },
        bindViewCount: {
            get() {
                return parseInt(this.defaultViewCount)
            },
            set(value) {
                this.defaultViewCount = value
            }
        },
        bindOrderBy: {
            get() {
                return this.defaultOrderBy
            },
            set(value) {
                this.defaultOrderBy = value
            }
        },
        ...mapState(productModule, ['products']),
    },
    methods: {
        ...mapActions(productModule, [
            'requestProductListToSpring'
        ]),
        filteringProduct(productCategory) {
            // console.log("filteringProduct();")
            this.category = productCategory
            console.log(this.category)
            if(this.category === 'TOTAL') {
                console.log("total category")
                this.showProducts = this.products
            } else {
                // console.log("specific category")
                console.log(this.products.filter((product) => product.productOptions.includes(this.category)))
                this.showProducts = this.products.filter((product) => product.productOptions.includes(this.category))
            }
            this.productTitle = this.category
        },
        priceDesc() {
            console.log("princeDesc() in View page")
            this.temp.sort((a, b) => b.price - a.price)
        },
        priceAsc() {
            console.log("princeAsc() in View page")
            this.temp.sort((a, b) => a.price - b.price)
        },
        wishCountDesc() {
            console.log("wishCountDesc in View page")
            this.temp.sort((a, b) => b.wishCount - a.wishCount)
        },
        viewCount(value) {
            console.log("select viewCount is: " + value) 
            this.bindViewCount = value
        }
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