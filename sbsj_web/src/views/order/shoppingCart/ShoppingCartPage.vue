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
        ...mapState(accountModule, {
            isAuthenticated: state => state.isAuthenticated
        }),
    },
    methods:{
        ...mapActions(orderModule, [
            'reqCartItemListToSpring',
            'reqDeleteCartItemFromSpring'
        ]),
        deleteCartItem(payload){
            const selectCartItemId = payload
            this.reqDeleteCartItemFromSpring(selectCartItemId)
            this.$router.go(this.$router.currentRoute)
        }
    },
    mounted () { 
        if(this.isAuthenticated === true) {
            let userInfo = JSON.parse(localStorage.getItem("userInfo"));

            console.log(userInfo);

            this.reqCartItemListToSpring(userInfo);
        }
    },    
}
</script>

<style scoped>

</style>