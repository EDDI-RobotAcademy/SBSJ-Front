<template>
    <div>
        <div style="margin-top:3%; text-align: right; width:96%;">
            <router-link :to="{ name: 'SurveyPage' }" style="color: #5B1A7C;">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                </svg>
            </router-link>
            <first-intestine :question="this.question"/>
        </div>
    </div>
</template>
    
<script>
import FirstIntestine from '@/components/survey/detailCheckList/intestineList/FirstIntestine.vue'
  
export default {
    components: { FirstIntestine },
    name: "FirstIntestinePage",
    component: {FirstIntestine},
    data() {
        return {
            question: {
                firstIntestineQuestion1: "평소 설사를 하거나 변비 증상이 1주일에 3일 이상 있다.",
                firstIntestineQuestion2: "배변 할 때 힘이 많이 들고, 배변 시간이 대부분 10분이상 걸린다.",
                firstIntestineQuestion3: "속이 더부룩 하거나 가스가 자주 차서 불편감이 자주 있다.",
                firstIntestineQuestion4: "채소류의 음식을 하루에 2회 이하로 먹는다.",
                firstIntestineQuestion5: "보기에 해당사항은 없으나 장건강 관리를 하고 싶다.",
            },
        }
    }
}
  </script>
  
  <style>
  </style>