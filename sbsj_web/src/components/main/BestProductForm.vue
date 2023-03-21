<template>
    <v-row class="mb-5">
        <h3>베스트 상품</h3>
        <v-col v-for="image in images" :key="image" cols="3">
            <div>
                <v-img :src="image" aspect-ratio="1" class="grey lighten-2"/>
            </div>
            <div>
                <router-link :to="{}">
                    비타민
                </router-link>
                <br>
                50,000원
            </div>
        </v-col>
    </v-row>
</template>

<script>

export default {
    name: "BestProductForm",
    data() {
        return {
            images: [
                require('@/assets/uploadImgs/gingerTea.jpg'),
                require('@/assets/uploadImgs/img3.jpg'),
                require('@/assets/uploadImgs/pumpkinTea.jpg'),
                require('@/assets/uploadImgs/jujubeTea.jpg'),
                require('@/assets/uploadImgs/citronTea.jpg'),
                require('@/assets/uploadImgs/img1.jpg'),
                require('@/assets/uploadImgs/redginsengTea.jpg'),
            ]
        }
    }
}

</script>

<style>
    
</style>