<template>
    <div>
        <bone-check :questions="this.questions"/>
    </div>
</template>
    
<script>

import BoneCheck from '@/components/survey/visceraCheckList/BoneCheck.vue';

export default {
    name: "BoneCheckPage",
    components: { BoneCheck },
    data() {
        return {
            questions: [
                { question: "발목을 삐끗하거나 뼈가 부러지는 경우가 많다." },
                { question: "스테로이드 계통의 약물을 3개월 이상 섭취 혹은 투약하고 있다." },
                { question: "예전 보다 손톱이 약해졌거나 쉽게 부러진다." },
                { question: "다이어트를 자주 하고, 단일 식품으로 다이어트를 하거나 굶는 경우가 많다." },
                { question: "보기에 해당사항은 없으나 뼈건강 관리를 하고 싶다." },
            ]
        }
    }
}
  </script>
  
  <style>
  </style>