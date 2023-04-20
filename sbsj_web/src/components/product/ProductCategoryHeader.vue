<template>
    <div class="product-main-category-header">
      <h3 class="product-list-title">{{ selectedTitle }}</h3>
      <div class="search-utilities">
        <div class="search-sorting">
          <div class="search-sorting-order">
            <v-btn class="sort-btn" v-on:click="priceDesc">높은가격순</v-btn>
            <v-btn class="sort-btn" v-on:click="priceAsc">낮은가격순</v-btn>
            <v-btn class="sort-btn" v-on:click="wishCountDesc">찜 순</v-btn>
          </div>
          <div class="search-sorting-list">
            <label for="viewCount">Select a viewCount:</label>
            <select id="viewCount" v-model="selectedCount" v-on:change="viewCount">
              <option disabled value="">Please select one</option>
              <option v-for="count in viewCountList" :key="viewCountList.id" :value="count.count">{{ count.count }}</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  </template>

  <style scoped>
    .sort-btn {
      display: inline-block;
    }
    .search-utilities {
      max-width: 100%;
      height: 32px;
      margin-bottom: 15px;
      margin-top: 15px;
      background-color: yellow;
      display: block;
    }

    .search-sorting-order {
      float: left;
      background-color: rgb(180, 234, 236);
      width: 550px;
    }

    .search-sorting-list {
      float: right;
    }
  </style>
  
  <script>

  
  export default {
    name: 'ProductCategoryHeader',
    data() {
      return {
        viewCountList: [{id: 1, count: 1}, {id: 2, count: 2}, {id: 3, count: 3}],
        selectedCount: 2
      }
    },
    props: {
      selectedTitle: {
        type: String
      }
    },
    methods: {
      priceDesc() {
        console.log("priceDesc() in Component")
        this.$emit('priceDesc')
      },
      priceAsc() {
        console.log("priceAsc() in Component")
        this.$emit('priceAsc')
      },
      wishCountDesc() {
        console.log("wishCountDesc() in Component")
        this.$emit('wishCountDesc')
      },
      viewCount(event) {
        console.log("viewCount() in Component")
        this.selectedCount = event.target.value
        console.log("selected viewCount in Component is: " + this.selectedCount)
        this.$emit('viewCount', this.selectedCount)
      }
    }
  }
    
  
  </script>
  