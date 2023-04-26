<template>
    <div style="padding-inline: 10%; margin-top:3%;">
        <life-tabs-form/>
        <div style="padding-inline: 20%;">
            <div style="margin-top:7%; height:100%; width:100%; text-align: center; font-size:large; display:flex; justify-content:center; align-items:center;">
                <p style="margin-top:2%; font-weight: bold; align-items:center; font-size:x-large;">혈당 건강</p>에 대해 해당되는 내용을 모두 선택해주세요.
            </div>
        </div>
        <v-row>
            <v-col cols="4"></v-col>
            <v-col>
                <div class="life-check-question-form">
                    <div class="list-group" v-for="(question, index) in questions" :key=index>
                        <div class="list-group-item" style="border:none;" @click="bloodSugarCheck">
                            <input class="form-check-input me-2" type="checkbox" :id="'id_question'+index" :value="question" v-model="bloodSugar">
                            <label class="form-check-label" :for="'id_question'+index">
                                {{ question.question }}</label>
                        </div>
                    </div>
                </div>
            </v-col>
        </v-row>
        <life-action-form @nextPage="nextPage" :selectQuestion="this.bloodSugar" :next="this.next"/>
    </div>
</template>

<script>

import LifeTabsForm from '@/components/survey/lifeCheckList/LifeTabsForm.vue'
import LifeActionForm from '@/components/survey/lifeCheckList/LifeActionForm.vue'

export default {
    name: "BloodSugarCheck",
    components: { LifeTabsForm, LifeActionForm },
    props: {
        questions: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            lifeSurveyResult: {},
            bloodSugar: [],
            next: false
        }
    },
    mounted() {
        let lifeSurveyResult = JSON.parse(localStorage.getItem('lifeSurveyResult'));
        if(lifeSurveyResult != null) {
            this.lifeSurveyResult = lifeSurveyResult;

            let bloodSugar = this.lifeSurveyResult.bloodSugar;
            if(bloodSugar == null || bloodSugar == '' || bloodSugar == undefined) {
                this.bloodSugar = [];
            } else {
                this.bloodSugar = bloodSugar;
                this.next = true;
            }
        } else {
            this.bloodSugar = [];
        }
    },
    methods: {
        bloodSugarCheck() {
            this.next = true;
        },
        nextPage() {
        }
    }
}

</script>

<style>
</style>