<template>
    <div>
        <eye-check :questions="this.questions"/>
    </div>
</template>
    
<script>

import EyeCheck from '@/components/survey/visceraCheckList/EyeCheck.vue';
  
export default {
    name: "EyeCheckPage",
    components: { EyeCheck },
    data() {
        return {
            questions: [
                { question: "최근에 안경을 착용하기 시작했거나, 시력이 점점 떨어지고 있다." },
                { question: "사물이 찌그러져 보여 구분이 안되는 경우가 종종 있다." },
                { question: "책을 읽을 때 글자나 선이 흔들려 보이거나 휘어져 보이는 경우가 있다." },
                { question: "휴대폰이나 컴퓨터를 보는 시간이 하루에 총 5시간 이상이다." },
                { question: "보기에 해당사항은 없으나 눈건강 관리를 하고 싶다." },
            ]
        }
    }
}
  </script>
  
  <style>
  </style>