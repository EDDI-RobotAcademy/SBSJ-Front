<template>
  <div>
    <order-info-form/>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import OrderInfoForm from '@/components/order/OrderInfoForm.vue'

const orderModule = 'orderModule'

export default {
    name: "OrderInfoPage",
    components: { OrderInfoForm },
    computed: {
        ...mapState(orderModule, {
            
        }),
    },
    methods: {
        ...mapActions(orderModule, [
            
        ]),
    }

}
</script>

<style>

</style>