<template>
    <div v-if="dataLoaded">
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
            <td>상품브랜드</td>
            <td>
                <div>
                    <select v-model="selectedBrand">
                      <option value="">Select an Brand</option>
                      <option v-for="(brand, index) in productBrand" :key="index" :value="brand">{{ brand }}</option>
                    </select>
                    <v-btn @click="addBrand">Add Selection</v-btn>
                    <ul>
                        <li>
                            {{ brand }}
                        </li>
                    </ul>
                </div>
            </td>
          </tr>
          <tr>
            <td>썸네일이미지</td>
            <td>
                <v-img contain width="150" height="180"
                                    :src="require(`@/assets/productImgs/${this.productModifyForm.thumbnail}`)"
                                />
              <input type="file"  ref="thumbnail"
                @change="handleThumbnail"/>
            </td>
            <td>상세이미지</td>
            <td>
                <v-img contain width="150" height="180"
                                    :src="require(`@/assets/productImgs/${this.productModifyForm.detail}`)"
                                />
              <input type="file"  ref="detail"
                @change="handleDetailImage"/>
            </td>
          </tr>
        </table>
  
        <div>
          <button type="submit">등록</button>
          <router-link :to="{ name: 'ProductRegisterPage' }">
            취소
          </router-link>
        </div>
      </form>
    </div>
    </template>
    
    <script>
  
  import { mapActions, mapState } from 'vuex';
  const productModule = 'productModule'
  
    
    
    export default {
      name: 'ProductModifyForm',
      data() {
          return {
              productName: '',
              productSubName: '',
              price: '',
              thumbnail: null,
              detail: null,
              selectedOption: "",
              categories: [],
              brand: '',
              selectedBrand: "",
              temp: [],
              dataLoaded: false,
          }
      },
      props: {
        productId: {
            type: Number,
            required: true
        }
      },
      computed: {
          ...mapState(productModule, [
              'productOptions',
              'productBrands',
              'products',
              'productModifyForm'
          ]),
          productBrand: {
            get() {
              return this.temp;
            },
            set(value) {
              this.temp = value;
            }
          },
    },

      async created() {
          await this.requestProductOptionListToSpring()
          await this.requestProductBrandListToSpring()
          // console.log("ModifyForm productId: " + this.productId)
          await this.requestProductModifyFormToSpring({ productId: this.productId })
          this.productName = this.productModifyForm.productName
          this.price = this.productModifyForm.price
          this.productSubName = this.productModifyForm.productSubName
          this.categories = this.productModifyForm.categories
          this.brand = this.productModifyForm.brand
          this.productBrand = this.productBrands
          this.dataLoaded = true
          // console.log("created end")
      },

      methods: {
          ...mapActions(productModule, [
              'requestProductOptionListToSpring',
              'requestProductBrandListToSpring',
              'requestProductModifyFormToSpring',
          ]),
          onSubmit () {
              let formData = new FormData()
              if(this.thumbnail != null) {
                  formData.append('thumbnail', this.thumbnail)
              }
              if(this.detail != null) {
                  formData.append('detail', this.detail)
              }
              
  
              const { productName, productSubName, price, categories, brand } = this
              let productInfo = {
                  productName: productName,
                  productSubName: productSubName,
                  price: price,
                  categories: categories,
                  brand: brand,
                  productId: this.productId
              }
              // console.log('productInfo: ' + JSON.stringify(productInfo))
              formData.append(
                  "productInfo",
                  new Blob([JSON.stringify(productInfo)], { type: "application/json" })
              )
              this.$emit('submit', formData)
          },
  
  
          handleThumbnail () {
              // console.log("handleThumbnail()")
              this.thumbnail = this.$refs.thumbnail.files[0]
              // console.log(this.thumbnail);
          },
          handleDetailImage () {
              // console.log("handleDetailImage()")
              this.detail = this.$refs.detail.files[0];
              // console.log(this.detail)
          },

          addItem() {
              if (this.selectedOption !== "" && !this.categories.includes(this.selectedOption)) {
                  this.categories.push(this.selectedOption);
                  this.selectedOption = "";
              }
          },
          addBrand() {
            this.brand = this.selectedBrand;
          },
          removeItem(index) {
              this.categories.splice(index, 1);
          },
      },
    }
    
    </script>
    
    <style>
  
    </style>