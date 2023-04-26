<template>
    <div>
        <brain-check :questions="this.questions"/>
    </div>
</template>
    
<script>

import BrainCheck from '@/components/survey/visceraCheckList/BrainCheck.vue';
  
export default {
    name: "BrainCheckPage",
    components: { BrainCheck },
    data() {
        return {
            questions: [
                { question: "요즘 깜빡깜빡하는 건망증이 자주 나타난다." },
                { question: "지인들과 대화를 하거나 TV를 볼 때 내용이 잘 이해가 되지 않는 경우가 종종 있다." },
                { question: "자주 사용하던 단어가 잘 생각나지 않을 때가 많다." },
                { question: "최근 머리가 멍한 느낌이 있고 집중이 잘 안되는 경우가 많다." },
                { question: "학업이나 업무에 열중할 일이 많나요?" },
            ]
        }
    }
}
  </script>
  
  <style>
  </style>