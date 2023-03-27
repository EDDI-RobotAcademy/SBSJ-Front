<template>
    <v-carousel cycle height="400" hide-delimiter-background show-arrows="hover">
        <v-carousel-item v-for="(picture, idx) in pictures" :key="idx">
            <v-sheet :height="height" tile>
                <div class="d-flex fill-height justify-center align-center">
                    <div class="text-h2">
                        <v-img :src="picture.img" :height="height" contain />
                    </div>
                </div>
            </v-sheet>
        </v-carousel-item>
    </v-carousel>
</template>

<script>

export default {
    name: "CarouselForm",
    data() {
        return {
            model: 0,
            pictures: [
                { img: require("@/assets/uploadImgs/img1.jpg") },
                { img: require("@/assets/uploadImgs/img2.jpg") },
                { img: require("@/assets/uploadImgs/img3.jpg") },
            ],
            cycle: true,
            interval: 3000,  // ms 단위
        }
    }
}

</script>

<style>

</style>