<template>
    <v-container>
      <h2>상품 등록</h2>
      <product-register-form @submit="onSubmit"/>
    </v-container>
  </template>
  
  <script>
  import ProductRegisterForm from '@/components/product/ProductRegisterForm'
  import { mapActions } from 'vuex'
  const productModule = 'productModule'
  export default {
      components: { ProductRegisterForm },
      name: "ProductRegisterPage",
      methods: {
          ...mapActions (productModule, [
              'requestCreateProductToSpring'
          ]),
          async onSubmit (payload) {
              await this.requestCreateProductToSpring(payload)
              await this.$router.push({
                  name: 'productPage',
              })
          }
      }
  }
  </script>
  
  <style>
  </style>