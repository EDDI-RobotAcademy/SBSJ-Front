<template>
    <div style="display:flex; justify-content:center; align-items:center; width:100%; height:100px; padding-inline: 15%; text-align: center;">
        <div style="width:100%; display:flex; padding-inline: 20%;">
            <div style="width:40%; display:flex; ">
                <router-link :to="{ name: 'LifeSurveyPage' }" class="btn btn-primary" 
                    style="font-weight:bold; border-color: white; height:100%; background-color: white; color: #5B1A7C; display:flex; justify-content:center; align-items:center;">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
                    </svg>
                    &nbsp;이전
                </router-link>
            </div>
            <div style="width:100%;">
                <div class="btn btn-primary"  @click="nextPage"
                    style="font-weight:bold; display:flex; background-color:#5B1A7C; 
                    border-color: #5B1A7C; display:flex; justify-content:center; align-items:center; color:white;">
                    <span>결과 보기</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import { mapActions } from 'vuex';

const surveyModule = 'surveyModule';

export default {
    name: 'LifeActionForm',
    props: {
        selectQuestion: {
            type: Array,
            required: true
        },
        next: {
            type: Boolean,
            required: true
        }
    },
    methods: {
        ...mapActions(surveyModule, ['reqRegisterSurveyResultToSpring', 'setSurveyResult']),
        beforeCheck(key, url, message) {
            if(key == null || key == '' || key == undefined) {
                alert(message);
                this.$router.push({ name: url })
            }
        },
        nextPage() {
            if(this.next){
                let lifeSurveyResult = JSON.parse(localStorage.getItem("lifeSurveyResult"));
                let life = lifeSurveyResult.life;

                if(life == "스트레스") lifeSurveyResult.stress = this.selectQuestion;
                else if(life == "체지방") lifeSurveyResult.bodyFat = this.selectQuestion;
                else if(life == "혈당 건강") lifeSurveyResult.bloodSugar = this.selectQuestion;
                else if(life == "혈압 건강") lifeSurveyResult.bloodPressure = this.selectQuestion;
                else if(life == "피부 건강") lifeSurveyResult.skin = this.selectQuestion;
                localStorage.setItem("lifeSurveyResult", JSON.stringify(lifeSurveyResult));
                
                let commonSurveyResult = JSON.parse(localStorage.getItem("commonSurveyResult"));
                let visceraSurveyResult = JSON.parse(localStorage.getItem("visceraSurveyResult"));
                let viscera = visceraSurveyResult.viscera;
                let memberId = JSON.parse(localStorage.getItem("userInfo")).memberId;

                const { username, gender, age, height, weight } = commonSurveyResult;
                let successSurveyRegister = this.reqRegisterSurveyResultToSpring({ memberId, username, gender, age, height, weight, viscera, life });
                // console.log(JSON.stringify(commonSurveyResult));
                if(successSurveyRegister) {
                    this.setSurveyResult([commonSurveyResult, visceraSurveyResult, lifeSurveyResult]);
                    this.$router.push({ name: 'SurveyResultPage' });
                }
            } else {
                alert("보기의 질문 중 해당하는 모든 것을 선택 해주세요.");
            }
        }
    }
}

</script>

<style>

</style>