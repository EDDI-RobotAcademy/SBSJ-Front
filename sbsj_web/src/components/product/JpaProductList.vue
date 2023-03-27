<template>
    <ul class="baby-product-list">
        <li v-for="(i, index) in 30" :keys="index" class="baby-product">
            <a href="#" class="baby-product-link">
                <dl class="baby-product-wrap">
                    <dt class="image">
                        <v-img :src="require(`@/assets/uploadImgs/blur.jpg`)" 
                            :width="212" class="grey lighten-2"/>
                    </dt>
                    <dl class="descriptions">
                        <div class="badge"></div>
                        <div class="name">Test Title</div>
                        <div class="price-area">
                            <div class="price-wrap">
                                <div class="price">1,000,000</div>
                            </div>
                        </div>
                        <div class="other-info">ranking</div>
                    </dl>
                </dl>
            </a>
        </li>
    </ul>
  </template>

<style scoped>
    .baby-product-list {
        display: block;
        width: 1098px;
        padding-left: 0px;
        list-style-type: none;
    }

    .baby-product-list::after {
        content: ".";
        display: block;
        clear: both;
        height: 0;
        visibility: hidden;
    }
 
    .baby-product {
        position: relative;
        float: left;
        width: 274px;
        padding: 20px 20px 20px 20px;
        border-bottom: 1px solid #ddd;
        display: list-item;
    }

    .baby-product-link {
        display: block;
        box-sizing: border-box;
        width: 216px;
        cursor: pointer;
    }
    .baby-product-wrap {
        width: 212px;
        display: block;
        
    }
    .image {
        width: 212px;
    }
</style>
  
  <script>

  
  export default {
    name: 'JpaProductList',
    props: {
        products: {
            type: Array
        }
    }
  }
  
  </script>
  