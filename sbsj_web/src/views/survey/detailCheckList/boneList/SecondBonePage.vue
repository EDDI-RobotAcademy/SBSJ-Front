<template>
    <div>
        <div style="margin-top:3%; text-align: right; width:96%;">
            <router-link :to="{ name: 'SurveyPage' }" style="color: #5B1A7C;">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                </svg>
            </router-link>
            <second-bone :question="this.question"/>
        </div>
    </div>
</template>
    
<script>
import SecondBone from '@/components/survey/detailCheckList/boneList/SecondBone.vue'
  
export default {
    components: { SecondBone },
    name: "SecondBonePage",
    component: {SecondBone},
    data() {
        return {
            question: {
                SecondBoneQuestion1: "가만히 있어도 허리와 무릎이 아플때가 있다.",
                SecondBoneQuestion2: "평소보다 오래 걸을 경우 관절 부분에 뻑뻑함과 불편함을 느낀다.",
                SecondBoneQuestion3: "음주와 함께 튀김류 안주를 자주 먹는 편이다. (일주일에 3회 이상)",
                SecondBoneQuestion4: "음식을 먹을 때, 국이나 찌개 등에 추가 간을 하거나 짠 음식을 좋아한다.",
                SecondBoneQuestion5: "당신의 가족 중 골다공증이나 다른 뼈 문제를 가진 사람이 있다."
            }
        }
    }
}
  </script>
  
  <style>
  </style>