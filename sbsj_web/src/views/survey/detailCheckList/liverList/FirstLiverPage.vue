<template>
    <div>
        <div style="margin-top:3%; text-align: right; width:96%;">
            <div>
                <div style="width: 100%; text-align: right;">
                    <a href="#" style="color: #5B1A7C;" @click.prevent="showConfirmation">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                        </svg>
                    </a>
                </div>
            <first-liver :question="this.question"/>
            </div>
        </div>
    </div>
</template>
    
<script>

import FirstLiver from '@/components/survey/detailCheckList/liverList/FirstLiver.vue'
  
export default {
    name: "FirstLiverPage",
    components: { FirstLiver },
    methods: {
        showConfirmation() {
            if (confirm('설문을 종료하시겠습니까?')) {
                this.$router.push({ name: 'SurveyPage' })
            }
        },
    },
    data() {
        return {
            question: {
                firstLiverQuestion1: "눈의 흰자위나 얼굴 및 신체 피부 등에 노란색 기운이 있다.",
                firstLiverQuestion2: "피로가 심하고 전신의 쇠약감이 있다.",
                firstLiverQuestion3: "오른쪽 배 윗부분에서 불쾌한 느낌이나 통증이 느껴진다.",
                firstLiverQuestion4: "음식을 많이 먹지 않아도 소화가 잘 되지 않고, 가스가 찬 것 같은 느낌이 든다.",
                firstLiverQuestion5: "보기에 해당사항은 없으나 간건강 관리를 하고 싶다.",
            },
        }
    }
}
  </script>
  
  <style>
  </style>