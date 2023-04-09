<template>
    <div>
        <div style="margin-top:3%; text-align: right; width:96%;">
            <router-link :to="{ name: 'SurveyPage' }" style="color: #5B1A7C;">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                </svg>
            </router-link>
            <first-bone :question="this.question"/>
        </div>
    </div>
</template>
    
<script>
import FirstBone from '@/components/survey/detailCheckList/boneList/FirstBone.vue'

export default {
    components: { FirstBone },
    name: "FirstBonePage",
    component: {FirstBone},
    data() {
        return {
            question: {
                firstBoneQuestion1: "발목을 삐끗하거나 뼈가 부러지는 경우가 많다.",
                firstBoneQuestion2: "스테로이드 계통의 약물을 3개월 이상 섭취 혹은 투약하고 있다.",
                firstBoneQuestion3: "예전 보다 손톱이 약해졌거나 쉽게 부러진다.",
                firstBoneQuestion4: "다이어트를 자주 하고, 단일 식품으로 다이어트를 하거나 굶는 경우가 많다.",
                firstBoneQuestion5: "보기에 해당사항은 없으나 뼈건강 관리를 하고 싶다.",
            },
        }
    }
}
  </script>
  
  <style>
  </style>