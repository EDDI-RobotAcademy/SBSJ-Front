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
                        <paginate :page-count="10" :page-range="3" :margin-pages="1" :click-handler="clickCallback" :prev-text="'Previous'" :next-text="'Next'" style="display: flex;
                        list-style: none;
                        padding: 0;
                        margin: 0;">
                            <template slot="page" slot-scope="props">
                                <li v-for="(page, index) in props.pages" :key="index" :class="{ 'active': props.isActive(page), 'disabled': props.isDisabled(page) }">
                                    <a href="#" @click.prevent="props.pageSelected(page)" style="display: inline-block;
                                    padding: 5px 10px;
                                    background-color: #fff;
                                    border: 1px solid #ddd;
                                    border-radius: 3px;
                                    color: #333;">{{ page }}</a>
                                </li>
                            </template>
                        </paginate>
                        <div class="clear-fix"></div>
                    </div>
                </div>
                <div class="product-nav">
                    <product-list-filter @filtering="filteringProduct" @filteringBrandProduct="filteringBrandProduct"/>
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
import Paginate from 'vuejs-paginate';

const productModule = 'productModule'
  export default {
    name: "ProductListPage",
    components: {ProductListForm, ProductListFilter, ProductCategoryHeader, Paginate},
    data() {
        return {
            category: 'TOTAL',
            temp: [],
            productTitle: '',
            defaultViewCount: 20,
            defaultOrderBy: 'Default',
            currentPage: 1,
            itemsPerPage: 20,
            cache: {},
            brand: '',
            isBrand: false
        }
    },

    
    async created() {
        const startIndex = (this.currentPage - 1) * this.itemsPerPage;
        const endIndex = startIndex + this.itemsPerPage;
        const payload = {startIndex: startIndex, endIndex: endIndex}
        await this.requestProductListToSpring(payload);
        this.showProducts = this.products
        this.cache[this.currentPage] = this.products
        this.productTitle = this.category
        this.defaultOrderBy = 'Default'
        console.log(this.productTitle)
        },

    computed: {
        // totalPages() {
        //     return Math.ceil(this.temp.length / this.itemsPerPage);
        // },
        showProducts: {
            get() {
                return this.temp
            },
            set(value) {
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
            'requestProductListToSpring',
            'requestSpecificProductListToSpring',
            'requestSpecificBrandProductListToSpring'
        ]),
        filteringProduct(productCategory) {
            this.cache = {}
            console.log("initialize cache, this cache current: " + this.cache)
            console.log("filteringProduct(): " + productCategory)
            this.category = productCategory
            if(this.category === 'TOTAL') {
                console.log("total category")
                this.showProducts = this.products
                this.currentPage = 1
                this.cache[1] = this.products
            } else {
                this.clickCallback(1)
            }
            this.productTitle = this.category
        },
        filteringBrandProduct(productBrand) {
            this.cache = {}
            this.isBrand = true
            console.log("initialize cache, this cache current: " + this.cache)
            console.log("filteringBrandProduct(): " + productBrand)
            this.brand = productBrand
            if(this.productBrand === 'TOTAL') {
                console.log("total category")
                this.showProducts = this.products
                this.currentPage = 1
                this.cache[1] = this.products
            } else {
                this.clickCallback(1)
            }
            this.productTitle = this.brand
            this.isBrand = false
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
        },
        async clickCallback(pageNumber) {
            console.log("clickCallback(): " + pageNumber)
            this.currentPage = pageNumber
            const startIndex = (pageNumber - 1) * this.itemsPerPage;
            const endIndex = startIndex + this.itemsPerPage;
            if(!this.cache[pageNumber]) {
                if(this.isBrand) {
                    await this.getDataWithBrand(startIndex, endIndex)
                } else {
                    await this.getDataWithOption(startIndex, endIndex)
                }
                console.log(this.products)
                if(this.products != this.temp) {
                    this.cache[this.currentPage] = this.products;
                    console.log("cache updated")
                    this.showProducts = this.products;
                }
            } else {
                console.log("cache used!!")
                console.log(this.cache)
                this.showProducts = this.cache[pageNumber];
            }
        },
        async getDataWithOption(startIndex, endIndex) {
            console.log("getDataWithOption()")
            const payload = {category: this.category, startIndex: startIndex, endIndex: endIndex}
            await this.requestSpecificProductListToSpring(payload);
        },
        async getDataWithBrand(startIndex, endIndex) {
            console.log("getDataWithBrand()")
            const payload = {brand: this.brand, startIndex: startIndex, endIndex: endIndex}
            await this.requestSpecificBrandProductListToSpring(payload)
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


    pagination li {
        margin-right: 5px;
    }

    pagination li a {
        display: inline-block;
        padding: 5px 10px;
        background-color: #fff;
        border: 1px solid #ddd;
        border-radius: 3px;
        color: #333;
    }

    li a:hover {
        background-color: #f5f5f5;
    }
  </style>