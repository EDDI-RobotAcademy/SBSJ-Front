<template>
    <div>
        <body-fat-check :questions="this.questions"/>
    </div>
</template>
    
<script>

import BodyFatCheck from '@/components/survey/lifeCheckList/BodyFatCheck.vue';
  
export default {
    name: "BodyFatCheckPage",
    components: { BodyFatCheck },
    data() {
        return {
            questions: [
                { question: "인바디나 건강검진 결과 근육(골격근량)보다 체지방량이 더 많다." },
                { question: "평소 탄수화물(빵, 떡, 면 등), 청량음료, 과자 등 섭취가 많고 섭취 욕구를 참기 힘들다. (하루에 1회 이상)" },
                { question: "음식을 먹을 때 매우 빠르게 먹는 편이다." },
                { question: "섭취하는 음식량을 줄이거나 꾸준한 운동을 해도 눈에 띄는 체중의 변화가 없다." },
                { question: "보기에 해당사항은 없으나 체지방 관리를 하고 싶다." },
            ]
        }
    }
}
  </script>
  
  <style>
  </style>