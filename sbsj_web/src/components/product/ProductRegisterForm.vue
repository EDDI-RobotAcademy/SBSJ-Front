<template>
    <form @submit.prevent="onSubmit">
    <table>
      <tr>
        <td>상품명</td>
        <td>
          <input type="text" v-model="productName"/>
        </td>
      </tr>
      <tr>
        <td>서브상품명</td>
        <td>
          <input type="text" v-model="productSubName"/>
        </td>
      </tr>
      <tr>
        <td>가격</td>
        <td>
          <input type="number" v-model="price"/>
        </td>
      </tr>
      <tr>
        <td>상품옵션</td>
        <td>
            <div>
                <select v-model="selectedOption">
                  <option value="">Select an option</option>
                  <option v-for="(productOption, index) in productOptions" :key="index" :value="productOption">{{ productOption }}</option>
                </select>
                <v-btn @click="addItem">Add Selection</v-btn>
                <ul>
                    <li v-for="(category, index) in categories" :key="index">
                        {{ category }}
                        <v-btn @click="removeItem(index)">Remove</v-btn>
                    </li>
                </ul>
            </div>
        </td>
      </tr>
      <tr>
        <td>썸네일이미지</td>
        <td>
          <input type="file"  ref="thumbnail"
            @change="handleThumbnail" multiple/>
        </td>
        <td>상세이미지</td>
        <td>
          <input type="file"  ref="detailImage"
            @change="handleDetailImage"/>
        </td>
      </tr>
    </table>

    <div>
      <button type="submit">등록</button>
      <router-link :to="{ name: 'ProductListPage' }">
        취소
      </router-link>
    </div>
    </form>
  </template>
  
  <script>

import { mapActions, mapState } from 'vuex';
const productModule = 'productModule'

  
  
  export default {
    name: 'ProductRegisterForm',
    data() {
        return {
            productName: '상품네임을 입력하세요.',
            productSubName: '상품서브네임 입력하세요.',
            price: 0,
            thumbnail: '',
            detailImage: '',
            imageFileList: [],
            selectedOption: "",
            categories: [],
        }
    },
    props: {

    },
    computed: {
        ...mapState(productModule, {
            productOptions: state => state.productOptions
        })
    },
    mounted() {
        this.requestProductOptionListToSpring()
    },
    methods: {
        ...mapActions(productModule, [
            'requestProductOptionListToSpring'
        ]),
        onSubmit () {
            let formData = new FormData()
            // this.imageFileList.push(this.thumbnail)
            // this.imageFileList.push(this.detailImage)
            for(let i = 0; i < this.thumbnail.length; i++) {
                formData.append('imageFileList', this.thumbnail[i])
            }

            const { productName, productSubName, price, categories } = this
            let productInfo = {
                productName: productName,
                productSubName: productSubName,
                price: price,
                categories: categories
            }
            console.log('productInfo: ' + JSON.stringify(productInfo))
            formData.append(
                "productInfo",
                new Blob([JSON.stringify(productInfo)], { type: "application/json" })
            )
            console.log('imageFileList: ' + JSON.stringify(this.imageFileList))
            this.$emit('submit', formData)
        },
        handleThumbnail () {
            console.log("handleThumbnail()")
            this.thumbnail = this.$refs.thumbnail.files
            console.log(this.thumbnail);
        },
        handleDetailImage () {
            console.log("handleDetailImage()")
            this.detailImage = this.$refs.detailImage.files[0];
            console.log(this.detailImage)
        },
        addItem() {
            if (this.selectedOption !== "" && !this.categories.includes(this.selectedOption)) {
                this.categories.push(this.selectedOption);
                this.selectedOption = "";
            }
        },
        removeItem(index) {
            this.categories.splice(index, 1);
        },
    },
  }
  
  </script>
  
  <style>

  </style>