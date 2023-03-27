<template>
    <div class="product-main-category-header">
      <h3 class="product-list-title">Selected Category Title here</h3>
      <div class="search-utilities">
        <div class="search-sorting">
          <div class="search-sorting-order">Search Sorting here</div>
          <div class="search-sorting-list">Search Sorting List here</div>
        </div>
      </div>
    </div>
  </template>

  <style scoped>
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
      background-color: red;
    }
  </style>
  
  <script>

  
  export default {
    name: 'ProductCategoryHeader',
  }
  
  </script>
  