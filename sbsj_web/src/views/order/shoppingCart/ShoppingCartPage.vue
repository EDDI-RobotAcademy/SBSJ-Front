<template>
  <div>
    <shopping-cart-form/>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import ShoppingCartForm from '@/components/order/ShoppingCartForm.vue'

const orderModule = 'orderModule'

export default {
    name: "ShoppingCartPage",
    components: { ShoppingCartForm },
    methods:{
      ...mapActions(orderModule, [
        'reqDeleteCartItemFromSpring',
      ]),
      deleteCartItem(payload) {
        const selectCartItemId = payload
        this.reqDeleteCartItemFromSpring(selectCartItemId)
      },
    },
    mounted() {
      
    },
}
</script>

<style scoped>

</style>