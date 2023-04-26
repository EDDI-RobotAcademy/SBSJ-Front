<template>
    <div style="padding-inline: 10%; margin-top:3%;">
        <life-tabs-form/>
        <div style="padding-inline: 20%;">
            <div style="margin-top:7%; height:100%; width:100%; text-align: center; font-size:large; display:flex; justify-content:center; align-items:center;">
                <p style="margin-top:2%; font-weight: bold; align-items:center; font-size:x-large;">체지방 건강</p>에 대해 해당되는 내용을 모두 선택해주세요.
            </div>
        </div>
        <v-row>
            <v-col cols="4"></v-col>
            <v-col>
                <div class="life-check-question-form">
                    <div class="list-group" v-for="(question, index) in questions" :key=index>
                        <div class="list-group-item" style="border:none;" @click="bodyFatCheck">
                            <input class="form-check-input me-2" type="checkbox" :id="'id_question'+index" :value="question" v-model="bodyFat">
                            <label class="form-check-label" :for="'id_question'+index">
                                {{ question.question }}</label>
                        </div>
                    </div>
                </div>
            </v-col>
        </v-row>
        <life-action-form @nextPage="nextPage" :selectQuestion="this.bodyFat" :next="this.next"/>
    </div>
</template>

<script>

import LifeTabsForm from '@/components/survey/lifeCheckList/LifeTabsForm.vue'
import LifeActionForm from '@/components/survey/lifeCheckList/LifeActionForm.vue'

export default {
    name: "BodyFatCheck",
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
            bodyFat: [],
            next: false
        }
    },
    mounted() {
        let lifeSurveyResult = JSON.parse(localStorage.getItem('lifeSurveyResult'));
        if(lifeSurveyResult != null) {
            this.lifeSurveyResult = lifeSurveyResult;

            let bodyFat = this.lifeSurveyResult.bodyFat;
            if(bodyFat == null || bodyFat == '' || bodyFat == undefined) {
                this.bodyFat = [];
            } else {
                this.bodyFat = bodyFat;
                this.next = true;
            }
        } else {
            this.bodyFat = [];
        }
    },
    methods: {
        bodyFatCheck() {
            this.next = true;
        },
        nextPage() {
        }
    }
}

</script>

<style>
</style>