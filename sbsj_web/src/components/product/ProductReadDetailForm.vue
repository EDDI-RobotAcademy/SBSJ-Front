<template>
    <div>
        <div style="width: 100%; display: flex; justify-content: center; align-items: center;">
            <img src="@/assets/boneImgs/Point.jpg" alt="배너 사진" style="max-width: 100%;">
        </div>
    
        <div style="width: 100%; display: flex; justify-content: center; align-items: center; padding: 2rem 0;">
            <div style="width: 100%; text-align: center;">
                <img :src="imageSrc" alt="비타민 사진" style="max-width: 100%;" />
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name : "ProductReadDetailForm",
    props :{
        detail: {
            type: String,
            required : true
        }
    },
    computed: {
        imageSrc() {
            return require(`@/assets/productImgs/${this.detail}`);
        },
    },
}
</script>

<style>

</style>