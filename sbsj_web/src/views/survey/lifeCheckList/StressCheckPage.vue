<template>
    <div>
        <stress-check :questions="this.questions"/>
    </div>
</template>
    
<script>

import StressCheck from '@/components/survey/lifeCheckList/StressCheck.vue';

export default {
    name: "StressCheckPage",
    components: { StressCheck },
    data() {
        return {
            questions: [
                { question: "평소 신경이 예민해 자는 중에 자주 깨고 다시 잠들기 힘든 편이다." },
                { question: "스트레스로 인한 긴장감을 자주 느낀다." },
                { question: "스트레스를 받는 환경에 자주 노출되는 편이다." },
                { question: "일상생활의 무기력함을 자주 느낀다." },
                { question: "보기에 해당사항은 없으나 스트레스 관리를 하고 싶다." },
            ]
        }
    }
}
  </script>
  
  <style>
  </style>