<template>
    <div>
        <liver-check :questions="this.questions"/>
    </div>
</template>
    
<script>

import LiverCheck from '@/components/survey/visceraCheckList/LiverCheck.vue';
  
export default {
    name: "LiverCheckPage",
    components: { LiverCheck },
    data() {
        return {
            questions: [
                { question: "눈의 흰자위나 얼굴 및 신체 피부 등에 노란색 기운이 있다." },
                { question: "피로가 심하고 전신의 쇠약감이 있다." },
                { question: "오른쪽 배 윗부분에서 불쾌한 느낌이나 통증이 느껴진다." },
                { question: "음식을 많이 먹지 않아도 소화가 잘 되지 않고, 가스가 찬 것 같은 느낌이 든다." },
                { question: "보기에 해당사항은 없으나 간건강 관리를 하고 싶다." },
            ]
        }
    }
}
  </script>
  
  <style>
  </style>