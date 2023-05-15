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
                <v-card class="mx-auto p-3" max-width="250" height="450" outlined>
                    <div class="p-4" style="width: 220px; height: 220px;">
                        <v-img
                        class="align-center justify-center"
                        :src="image.imagePath"
                        cover
                        >
                        </v-img>
                    </div>
                    <v-card-subtitle style="height: 100px">
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
                        <v-btn block outlined color="#692498">
                            <router-link :to="{ name: 'ProductReadPage', params: { productId: image.productId.toString() } }" style="color: black; text-decoration: none;">
                                상세 보기
                            </router-link>
                        </v-btn>
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
            images: [
                { imagePath: require('@/assets/productImgs/acebiom_diet_lacto_thumbnail.jpg'),
                  brand: "에이스 바이옴", imageName: "비에날씬 다이어트 유산균", productId: 1, price: "20,000원" },
                { imagePath: require('@/assets/productImgs/metebiotics_thumbnail.jpg'),
                  brand: "메타바이오틱스", imageName: "신애라 유산균", productId: 1, price: "15,000원" },
                { imagePath: require('@/assets/productImgs/vitaminvillage_perfect_probiotics_thumbnail.jpg'),
                  brand: "비타민마을", imageName: "퍼펙트바이오틱스 밀크씨슬 프로바이오틱스 유산균", productId: 1, price: "30,000원" },
                { imagePath: require('@/assets/productImgs/vitaminvillage_lutein_family_thumbnail.jpg'),
                  brand: "비타민마을", imageName: "4중복합 눈영양제 루테인 패밀리", productId: 1, price: "40,000원" },
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