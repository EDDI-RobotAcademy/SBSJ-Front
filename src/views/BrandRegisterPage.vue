<template>
    <div>
        <div class="container">
            <input type="text" v-model="brandName" style="border-style: solid; border-width: 2px;">
            <button type="submit" @click="onSubmit">저장</button>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';

const productModule = 'productModule';

export default {
    name: 'BrandRegisterPage',
    data() {
        return {
            brandName: ''
        }
    },
    methods: {
        ...mapActions(productModule, ['reqBrandRegisterToSpring']),
        async onSubmit() {
            await this.reqBrandRegisterToSpring(this.brandName);
        }
    }
}
</script>

<style>

</style>