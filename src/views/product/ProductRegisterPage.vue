<template>
    <v-container>
      <h2>상품 등록</h2>
      <product-register-form @submit="onSubmit" @testSubmit="testOnSubmit"/>
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
              'requestCreateProductToSpring',
              'requestTestCreateProductToSpring'
          ]),
          async onSubmit (payload) {
              await this.requestCreateProductToSpring(payload)
              await this.$router.push({
                  name: 'ProductRegisterPage',
              })
          },
          async testOnSubmit (payload) {
              await this.requestTestCreateProductToSpring(payload)
              await this.$router.push({
                  name: 'ProductRegisterPage',
              })
          },
      },
      created() {
        let userInfo = JSON.parse(localStorage.getItem("userInfo"));
        console.log(userInfo);
        if(userInfo != null) {
            if(userInfo.memberId != 1) {
                alert("권한없는 접근");
                this.$router.push({name: 'home'});
            }
        } else {
            alert("권한없는 접근");
            this.$router.push({name: 'home'});
        }
      }
  }
  </script>
  
  <style>
  </style>