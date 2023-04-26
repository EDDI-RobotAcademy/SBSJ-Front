<template>
    <div>
        <blood-pressure-check :questions="this.questions"/>
    </div>
</template>
    
<script>

import BloodPressureCheck from '@/components/survey/lifeCheckList/BloodPressureCheck.vue';
  
export default {
    name: "BloodPressureCheckPage",
    components: { BloodPressureCheck },
    data() {
        return {
            questions: [
                { question: "혈압 관리가 필요해서 주의하는 편이다." },
                { question: "음식을 먹을 때 소금이나 간장으로 추가 간을 하는 경우가 많다." },
                { question: "평소 규칙적으로 하는 운동은 거의 없으며, 가끔 운동을 하더라도 20분을 넘지 않은 경우가 많다." },
                { question: "흡연을 하고 있다. (전자담배 포함)" },
                { question: "보기에 해당사항은 없으나 혈압 관리를 하고 싶다." },
            ]
        }
    }
}
  </script>
  
  <style>
  </style>