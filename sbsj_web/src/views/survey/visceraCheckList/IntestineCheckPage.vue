<template>
    <div>
        <intestine-check :questions="this.questions"/>
    </div>
</template>
    
<script>

import IntestineCheck from '@/components/survey/visceraCheckList/IntestineCheck.vue';
  
export default {
    name: "IntestineCheckPage",
    components: { IntestineCheck },
    data() {
        return {
            questions: [
                { question: "평소 설사를 하거나 변비 증상이 1주일에 3일 이상 있다." },
                { question: "배변 할 때 힘이 많이 들고, 배변 시간이 대부분 10분이상 걸린다." },
                { question: "속이 더부룩 하거나 가스가 자주 차서 불편감이 자주 있다." },
                { question: "채소류의 음식을 하루에 2회 이하로 먹는다." },
                { question: "보기에 해당사항은 없으나 장건강 관리를 하고 싶다." },
            ]
        }
    }
}
  </script>
  
  <style>
  </style>