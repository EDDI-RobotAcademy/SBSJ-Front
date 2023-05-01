<template>
    <section class="contents">
        <!-- <div class="header">
            <div class="header-content">header here</div>
        </div> -->
        <div class="product-container">
            <div class="product-body">
                <div class="product-main">
                    <div class="product-list">
                        <div class="product-main-category-header">
                            <product-category-header :selected-title="selectedTitle" @priceDesc="priceDesc" @priceAsc="priceAsc" @wishCountDesc="wishCountDesc" @viewCount="viewCount"/>
                        </div>
                        <div class="clear-fix"></div>
                        <product-list-form :products="showProducts" :viewCount="bindViewCount" :orderBy="bindOrderBy"/>
                        <paginate :containerClass="'pagination'" v-model="syncCurrentPage" :page-count="10" :page-range="10" :margin-pages="1" :click-handler="clickCallback" :prev-text="'Previous'" :next-text="'Next'" style="display: flex;
                        list-style: none;
                        padding: 0;
                        margin: 0;">
                            <template slot="page" slot-scope="props"> 
                                <li v-for="(page, index) in props.pages" :key="index" :class="{ 'active': props.isActive(page), 'disabled': props.isDisabled(page)}">
                                    <a href="#" @click.prevent="props.pageSelected(page)">{{ page }}</a>
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
            isBrand: false,
            isQuery: {}
        }
    },
    async created() {
        this.isQuery = this.searchQuery;
    },
    async mounted() {
        console.log("mounted()")
        console.log("searchQuery: " + this.searchQuery)
        const startIndex = (this.currentPage - 1) * this.itemsPerPage;
        const endIndex = startIndex + this.itemsPerPage;
        const payload = {startIndex: startIndex, endIndex: endIndex}
        if(this.isQuery.query === undefined) {
            console.log("requestProductListToSpring()")
            await this.requestProductListToSpring(payload);
            this.showProducts = this.products
            this.cache[this.currentPage] = this.products
            this.productTitle = this.category
            this.defaultOrderBy = 'Default'
        } else {
            console.log("requestSearchResultProductListToSpring() in mounted")
            this.cache[this.currentPage] = this.searchResult;
            this.showProducts = this.searchResult
        }
        
    },
    watch: {
        '$store.state.productModule.searchResult'(newValue, oldValue) {
            console.log("searchResult Changed")
            this.cache[this.currentPage] = this.searchResult;
            console.log("cache updated")
            this.showProducts = newValue;
        },
        '$store.state.productModule.searchQuery'(newValue, oldValue) {
            this.syncCurrentPage = 1
            this.cache = {}
            console.log("initialize cache, this cache current: " + this.cache)
            console.log("searchQuery Changed")
            this.isQuery = newValue
            console.log(this.isQuery)
        },
    },
    computed: {
        syncCurrentPage: {
            get() {
                return this.currentPage
            },
            set(value) {
                this.currentPage = value
            }
        },
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
        ...mapState(productModule, ['products', 'searchResult', 'searchQuery']),
    },
    methods: {
        ...mapActions(productModule, [
            'requestProductListToSpring',
            'requestSpecificProductListToSpring',
            'requestSpecificBrandProductListToSpring',
            'requestSearchResultProductListToSpring'
        ]),
        async filteringProduct(productCategory) {
            this.cache = {}
            this.isQuery = {}
            this.syncCurrentPage = 1
            console.log("initialize Query, this Query current: " + this.isQuery.query)
            console.log("initialize cache, this cache current: " + this.cache)
            console.log("filteringProduct(): " + productCategory)
            this.category = productCategory
            this.clickCallback(this.currentPage)
            this.productTitle = this.category
        },
        filteringBrandProduct(productBrand) {
            this.cache = {}
            this.isQuery = {}
            this.syncCurrentPage = 1
            console.log("initialize Query, this Query current: " + this.isQuery.query)
            this.isBrand = true
            console.log("initialize cache, this cache current: " + this.cache)
            console.log("filteringBrandProduct(): " + productBrand)
            this.brand = productBrand
            this.clickCallback(this.currentPage)
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
            this.syncCurrentPage = pageNumber
            const startIndex = (pageNumber - 1) * this.itemsPerPage;
            const endIndex = startIndex + this.itemsPerPage;
            if(!this.cache[pageNumber]) {
                if(this.isQuery.query !== undefined) {
                    await this.getDataWithSearch(this.isQuery.query, startIndex, endIndex)
                } else if(this.isBrand) {
                    await this.getDataWithBrand(startIndex, endIndex)
                } else {
                    await this.getDataWithOption(startIndex, endIndex)
                }
                console.log(this.products)
            } else {
                console.log("cache used!!")
                console.log(this.cache)
                this.showProducts = this.cache[pageNumber];
            }
        },
        async getDataWithOption(startIndex, endIndex) {
            console.log("getDataWithOption() " + "/" + this.category + "/" + startIndex + "/" + endIndex)
            const payload = {category: this.category, startIndex: startIndex, endIndex: endIndex}
            await this.requestSpecificProductListToSpring(payload);
            this.showProducts = this.products;
            this.cache[this.currentPage] = this.products
        },
        async getDataWithBrand(startIndex, endIndex) {
            console.log("getDataWithBrand() " + "/" + this.category + "/" + startIndex + "/" + endIndex)
            const payload = {brand: this.brand, startIndex: startIndex, endIndex: endIndex}
            await this.requestSpecificBrandProductListToSpring(payload)
            this.showProducts = this.products;
            this.cache[this.currentPage] = this.products
        },
        async getDataWithSearch(query, startIndex, endIndex) {
            console.log("getDataWithSearch() " + "/" + this.category + "/" + startIndex + "/" + endIndex)
            const payload = {query: query, startIndex: startIndex, endIndex: endIndex}
            await this.requestSearchResultProductListToSpring(payload)
        }
    }
  }
  
  </script>
  
  <style scoped>
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
        width: 90%;
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
        background-color: rgb(255, 255, 255);
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

    li a:hover {
        background-color: #f5f5f5;
    }
  </style>