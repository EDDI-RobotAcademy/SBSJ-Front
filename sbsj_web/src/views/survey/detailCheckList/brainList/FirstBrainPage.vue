<template>
    <div>
        <div style="margin-top:3%; text-align: right; width:96%;">
            <router-link :to="{ name: 'SurveyPage' }" style="color: #5B1A7C;">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                </svg>
            </router-link>
            <first-brain :question="this.question"/>
        </div>
    </div>
</template>
    
<script>
import FirstBrain from '@/components/survey/detailCheckList/brainList/FirstBrain.vue'
  
export default {
    components: { FirstBrain },
    name: "FirstBrainPage",
    component: {FirstBrain},
    data() {
        return {
            question: {
                firstBrainQuestion1: "요즘 깜빡깜빡하는 건망증이 자주 나타난다.",
                firstBrainQuestion2: "지인들과 대화를 하거나 TV를 볼 때 내용이 잘 이해가 되지 않는 경우가 종종 있다.",
                firstBrainQuestion3: "자주 사용하던 단어가 잘 생각나지 않을 때가 많다.",
                firstBrainQuestion4: "최근 머리가 멍한 느낌이 있고 집중이 잘 안되는 경우가 많다.",
                firstBrainQuestion5: "학업이나 업무에 열중할 일이 많나요?",
            },
        }
    }
}
  </script>
  
  <style>
  </style>