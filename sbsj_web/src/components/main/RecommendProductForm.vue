<template>
    <v-row>
        <h3>맞춤 상품</h3>
        <v-col v-if="!images || (Array.isArray(images) && images.length === 0)" class="blur">
            <div class="d-flex justify-content-center">
                <button class="blur-btn btn btn-primary">맞춤 영양제 찾기</button>
            </div>
        </v-col>
        <v-col v-else v-for="(image, index) in images" :key="index" cols="3">
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
    name: "RecommendProductForm",
    data() {
        return {
            imageBlur: 'blur.jpg',
            images: [
                { imagePath: require('@/assets/productImgs/[BHT 베터헬씨투모로우] 슈퍼 밀크씨슬.jpg'),
                  imageName: "[BHT 베터헬씨투모로우] 슈퍼 밀크씨슬" },
                { imagePath: require('@/assets/productImgs/나우푸드 실리마린 스트렝스.jpg'),
                  imageName: " 나우푸드 실리마린 스트렝스" },
                { imagePath: require('@/assets/productImgs/나우푸드 실리마린.jpg'),
                  imageName: "나우푸드 실리마린" },
                { imagePath: require('@/assets/productImgs/닥터엘리자베스 간에 좋은 밀크씨슬.jpg'),
                  imageName: "닥터엘리자베스 간에 좋은 밀크씨슬" },
            ]
        }
    }
}

</script>

<style>
    .blur {
        background-image: url("@/assets/uploadImgs/blur.jpg");
        background-repeat: no-repeat;
        background-position: center center;
        
        width: 100px;
        height: 200px;
        background-size: cover;
    }
    .blur-btn {
        /* background-image: url("@/assets/uploadImgs/blur.jpg"); */
        /* background-color: purple; */
        /* background-position: center center; */

        border-width: 0;
        border-style: none;
        margin-top: 70px;
    }
</style>