<template>
    <v-row>
        <h3>맞춤 상품</h3>
        <v-col v-if="!images || (Array.isArray(images) && images.length === 0)" class="blur">
            <div class="d-flex justify-content-center">
                <button class="blur-btn btn btn-primary">맞춤 영양제 찾기</button>
            </div>
        </v-col>
        <v-col v-else v-for="image in images" :key="image" cols="4">
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
    name: "RecommendProductForm",
    data() {
        return {
            imageBlur: 'blur.jpg',
            images: [
                require('@/assets/uploadImgs/img1.jpg'),
                require('@/assets/uploadImgs/img2.jpg'),
                require('@/assets/uploadImgs/img3.jpg'),
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