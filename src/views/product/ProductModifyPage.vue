<template>
    <div class="container">
      <product-modify-form :productId="bindProductId" @submit="submit"/>
    </div>
  </template>
  
  <script>
  
  import ProductModifyForm from '@/components/product/ProductModifyForm.vue'
  import { mapActions } from 'vuex';
  
  const productModule = 'productModule';
  
  export default {
    components: { ProductModifyForm },
    name: "ProductModifyPage",
    data() {
        return {
            tempId: ""
        }
    },
    props: {
      productId: {
        type: Number,
        required: true,
      }
    },
    computed: {
        bindProductId: {
            get() {
                return this.tempId
            },
            set(value) {
                this.tempId = value
            }
        }
    },
    async created() {
        let userInfo = JSON.parse(localStorage.getItem("userInfo"));
        // console.log(userInfo);
        if(userInfo != null) {
            if(userInfo.memberId != 1) {
                alert("권한없는 접근");
                this.$router.push({name: 'home'});
            }
        } else {
            alert("권한없는 접근");
            this.$router.push({name: 'home'});
        }
        // console.log("Modify Page productId: " + this.productId)
        this.bindProductId = this.productId
        
    },
    methods: {
      ...mapActions(productModule, ['requestProductModifyToSpring']),
      async submit(payload) {
        // console.log("submit triggered in modify page")
        await this.requestProductModifyToSpring(payload);
        this.$router.push({name: 'ProductRegisterPage'})
      }
    },
    
    
    // ...
  };
  
  </script>
  
  <style>   
  
  </style>