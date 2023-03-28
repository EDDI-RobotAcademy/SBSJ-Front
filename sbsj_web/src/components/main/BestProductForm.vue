<template>
    <v-row class="mb-5">
        <h3>베스트 상품</h3>
        <v-col v-for="(image, index) in images" :key="index" cols="3">
            <v-card style="height: 450px;">
                <v-img :src="image.imagePath" aspect-ratio="1" class="grey lighten-2"/>
                <v-card-title style="font-size: 15px;">
                    <router-link :to="{ name: 'DetailProductPage'}" style="color: black; text-decoration: none;">
                        {{ image.imageName }}
                    </router-link>
                </v-card-title>
                <v-card-subtitle>50,000</v-card-subtitle>
            </v-card>
        </v-col>
    </v-row>
</template>

<script>

export default {
    name: "BestProductForm",
    data() {
        return {
            images: [
                { imagePath: require('@/assets/productImgs/닥터엘리자베스 간에 좋은 밀크씨슬.jpg'),
                  imageName: "닥터엘리자베스 간에 좋은 밀크씨슬" },
                { imagePath: require('@/assets/productImgs/닥터엘리자베스 알티지 오메가3.jpg'),
                  imageName: " 닥터엘리자베스 알티지 오메가3" },
                { imagePath: require('@/assets/productImgs/레이델 밀크씨슬 실리마린.jpg'),
                  imageName: "레이델 밀크씨슬 실리마린" },
                { imagePath: require('@/assets/productImgs/[BHT 베터헬씨투모로우] 슈퍼 밀크씨슬.jpg'),
                  imageName: "[BHT 베터헬씨투모로우] 슈퍼 밀크씨슬" },
            ]
        }
    }
}

</script>

<style>
    
</style>