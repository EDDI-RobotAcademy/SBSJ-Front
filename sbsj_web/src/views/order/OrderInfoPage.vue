<template>
  <div>
    <order-info-form v-on:payment-success="payment"/>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import OrderInfoForm from '@/components/order/OrderInfoForm.vue'

const orderModule = 'orderModule'

export default {
    name: "OrderInfoPage",
    components: { OrderInfoForm },
    methods: {
        ...mapActions(orderModule, [
            "reqRegisterOrderToSpring"
        ]),
        async payment(payload) {
          const { amount, merchant_uid, sendInfo, imp_uid, phoneNumber, recipientName, addressId, road, addressDetail, zipcode, selectedDeliveryReq } = payload
          
          console.log(amount, merchant_uid, sendInfo, imp_uid, phoneNumber, recipientName, addressId, road, addressDetail, zipcode, selectedDeliveryReq)
          
          await this.reqRegisterOrderToSpring(payload)
          
          alert("구매가 완료 되었습니다. 감사합니다.")
          await this.$router.push("purchase-complete")
        }
    }

}
</script>

<style>

</style>