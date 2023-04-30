<template>
    <v-sheet color="grey lighten-4 p-5">
        <v-row class="mb-5 justify-center">
            <div class="mb-5">
                <v-chip outlined color="#692498">맞춤 추천 상품</v-chip>
            </div>
            <v-col v-if="!images || (Array.isArray(images) && images.length === 0)" class="blur">
                <div class="d-flex justify-content-center">
                    <button class="blur-btn btn btn-primary">맞춤 영양제 찾기</button>
                </div>
            </v-col>
            <v-col v-for="(image, index) in images" :key="index" cols="3">
                <v-card class="mx-auto p-3" max-width="250" height="400" outlined>
                    <div class="p-4">
                        <v-img
                        class="align-center justify-center"
                        :src="image.imagePath"
                        cover
                        >
                        </v-img>
                    </div>
                    <v-card-subtitle class="pt-4">
                        <div style="font-weight: bold;">
                            <router-link :to="{ name: 'ProductReadPage', params: { productId: image.productId.toString() } }" style="color: black; text-decoration: none;">
                                {{ image.brand }}
                            </router-link>
                        </div>
                        <div>
                            <router-link :to="{ name: 'ProductReadPage', params: { productId: image.productId.toString() } }" style="color: black; text-decoration: none;">
                                {{ image.imageName }}
                            </router-link>
                        </div>
                    </v-card-subtitle>
                    <v-card-text>
                        <div>{{ image.price }}</div>
                    </v-card-text>
                    <v-card-actions class="justify-center">
                        <div>
                            <v-btn outlined color="#692498">
                                장바구니
                            </v-btn>
                            <v-btn class="text-white ms-1" elevation="0" color="#692498">
                                바로 구매
                            </v-btn>
                        </div>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-sheet>
</template>

<script>

export default {
    name: "RecommendProductForm",
    data() {
        return {
            imageBlur: 'blur.jpg',
            images: [
                { imagePath: require('@/assets/productImgs/닥터엘리자베스 간에 좋은 밀크씨슬.jpg'),
                  brand: "닥터엘리자베스", imageName: "간에 좋은 밀크씨슬", productId: 1, price: "10,000원" },
                { imagePath: require('@/assets/productImgs/닥터엘리자베스 알티지 오메가3.jpg'),
                  brand: "닥터엘리자베스", imageName: "알티지 오메가3", productId: 1, price: "10,000원" },
                { imagePath: require('@/assets/productImgs/레이델 밀크씨슬 실리마린.jpg'),
                  brand: "레이델", imageName: "밀크씨슬 실리마린", productId: 1, price: "10,000원" },
                { imagePath: require('@/assets/productImgs/[BHT 베터헬씨투모로우] 슈퍼 밀크씨슬.jpg'),
                  brand: "BHT 베터헬씨투모로우", imageName: "슈퍼 밀크씨슬", productId: 1, price: "10,000원" },
            ]
        }
    }
}

</script>

<style scoped>
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