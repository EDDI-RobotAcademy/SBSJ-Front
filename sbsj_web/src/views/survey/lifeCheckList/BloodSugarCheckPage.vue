<template>
    <div>
        <blood-sugar-check :questions="this.questions"/>
    </div>
</template>
    
<script>

import BloodSugarCheck from '@/components/survey/lifeCheckList/BloodSugarCheck.vue';
  
export default {
    name: "BloodSugarCheckPage",
    components: { BloodSugarCheck },
    data() {
        return {
            questions: [
                { question: "건강검진 결과, 일상에서 혈당관리가 필요하다는 얘기를 듣는다." },
                { question: "평소 사탕, 초콜릿, 과자, 빵, 케익, 과일쥬스, 탄산음료, 탄수화물 등 당이 많은 음식을 자주 먹는다." },
                { question: "과식을 자주 하고, 외식이나 배달음식을 주로 먹는다." },
                { question: "비만이 유지된지 오래되었거나, 혈당과 관련한 가족력이 있다." },
                { question: "보기에 해당사항은 없으나 혈당 관리를 하고 싶다." },
            ]
        }
    }
}
  </script>
  
  <style>
  </style>