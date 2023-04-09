<template>
    <div>
        <div style="margin-top:3%; text-align: right; width:96%;">
            <router-link :to="{ name: 'SurveyPage' }" style="color: #5B1A7C;">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                </svg>
            </router-link>
            <first-eye :question="this.question"/>
        </div>
    </div>
</template>
    
<script>
import FirstEye from '@/components/survey/detailCheckList/eyeList/FirstEye.vue'
  
export default {
    components: { FirstEye },
    name: "FirstEyePage",
    component: {FirstEye},
    data() {
        return {
            question: {
                firstEyeQuestion1: "최근에 안경을 착용하기 시작했거나, 시력이 점점 떨어지고 있다.",
                firstEyeQuestion2: "사물이 찌그러져 보여 구분이 안되는 경우가 종종 있다.",
                firstEyeQuestion3: "책을 읽을 때 글자나 선이 흔들려 보이거나 휘어져 보이는 경우가 있다.",
                firstEyeQuestion4: "전자기기나 책 등을 집중해서 보고 나면 시야가 흐릿하게 느껴진다.",
                firstEyeQuestion5: "보기에 해당사항은 없으나 눈건강 관리를 하고 싶다.",
            },
        }
    }
}
  </script>
  
  <style>
  </style>