<template>
  <div>
    <shopping-cart-form/>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import ShoppingCartForm from '@/components/order/ShoppingCartForm.vue'

const orderModule = 'orderModule'
const accountModule = 'accountModule'

export default {
    name: "ShoppingCartPage",
    components: { ShoppingCartForm },
    computed: {
        ...mapState(accountModule, ['isAuthenticated']),
    },
    methods:{
        ...mapActions(orderModule, [
            'reqCartItemListToSpring',
        ]),
    },
    async created () {
        console.log("CartPage created()");
        //if(this.isAuthenticated === true) {
            console.log("CartPage created2()");
            let userInfo = JSON.parse(localStorage.getItem("userInfo"));
            console.log("CartPage created3() userInfo: " + userInfo.token);
            
            await this.reqCartItemListToSpring(userInfo);
       // }
    },
}
</script>

<style scoped>

</style>