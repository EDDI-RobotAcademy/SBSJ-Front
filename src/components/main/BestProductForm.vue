<template>
    <v-sheet color="grey lighten-4 p-5">
        <v-row class="mb-5 justify-center">
            <div class="mb-5">
                <v-chip outlined color="#692498">베스트 셀러</v-chip>
                <!-- <v-divider class="mb-0" color="black" width="128"></v-divider>
                <v-sheet class="mb-0 pt-3 pb-2 d-flex justify-center align-center" width="130" rounded elevation="1"><h5>베스트 셀러</h5></v-sheet>
                <v-divider class="mt-0" color="black" width="128"></v-divider> -->
            </div>
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
    name: "BestProductForm",
    data() {
        return {
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

<style>
    
</style>