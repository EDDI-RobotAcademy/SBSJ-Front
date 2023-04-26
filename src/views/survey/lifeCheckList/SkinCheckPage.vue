<template>
    <div>
        <skin-check :questions="this.questions"/>
    </div>
</template>
    
<script>

import SkinCheck from '@/components/survey/lifeCheckList/SkinCheck.vue';
  
export default {
    name: "SkinCheckPage",
    components: { SkinCheck },
    data() {
        return {
            questions: [
                { question: "피부가 건조하여 거칠고 각질이 많이 생기는 편이다." },
                { question: "이전보다 피부보습에 시간이 많이 걸리거나 잘 되지 않는다." },
                { question: "세수를 하고 나면 피부가 많이 당기고 건조하다." },
                { question: "피부 건강에 도움이 되는 성분을 먹고 싶다." },
                { question: "보기에 해당사항은 없으나 피부건강 관리를 하고 싶다." },
            ]
        }
    }
}
  </script>
  
  <style>
  </style>