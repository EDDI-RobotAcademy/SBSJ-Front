<template>
    <v-layout>
        <v-dialog v-model="dialog" persistent max-width="800" max-height="1000">
            <template v-slot:activator="{on}">
                <v-btn class="w-10" @click="deleteDelivery()">삭제</v-btn>
            </template>

            <v-form @submit.prevent="onSubmit" ref="form">
                <v-card height="850" class="rounded-xl">
                    <div class="d-flex justify-end">
                        <v-icon class="mt-6 me-6 mb-0" @click="btnCancel">mdi-close</v-icon>
                    </div>
<script>

import { mapActions } from 'vuex';

const orderModule = 'orderModule';

export default {
    name: "MyPageModifyAddressForm",
    props: {
        addressId: {
            type: Number,
            required: true
        }
    },
    data() {
        return {
        }
    },
    methods: {
        ...mapActions(orderModule, ['reqMyPageDeleteDeliveryToSpring',
                                    'reqMyPageModifyDeliveryToSpring']),
        async deleteDelivery() {
            await this.reqMyPageDeleteDeliveryToSpring(this.addressId);
            window.location.reload(true);
        },
    }
}

</script>

<style>

</style>