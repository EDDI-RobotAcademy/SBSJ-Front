<template>
    <div style="padding-inline: 10%; margin-top:3%;">
        <viscera-tabs-form/>
        <div style="padding-inline: 20%;">
            <div style="margin-top:7%; height:100%; width:100%; text-align: center; font-size:large; display:flex; justify-content:center; align-items:center;">
                <p style="margin-top:2%; font-weight: bold; align-items:center; font-size:x-large;">눈건강</p>에 대해 해당되는 내용을 모두 선택해주세요.
            </div>
        </div>
        <v-row>
            <v-col cols="4"></v-col>
            <v-col>
                <div class="viscera-check-question-form">
                    <div class="list-group" v-for="(question, index) in questions" :key=index>
                        <div class="list-group-item" style="border:none;" @click="eyeCheck">
                            <input class="form-check-input me-2" type="checkbox" :id="'id_question'+index" :value="question" v-model="eye">
                            <label class="form-check-label" :for="'id_question'+index">
                                {{ question.question }}</label>
                        </div>
                    </div>
                </div>
            </v-col>
        </v-row>
        <viscera-action-form @nextPage="nextPage" :selectQuestion="this.eye" :next="this.next"/>
    </div>
</template>

<script>

import VisceraTabsForm from '@/components/survey/visceraCheckList/VisceraTabsForm.vue'
import VisceraActionForm from '@/components/survey/visceraCheckList/VisceraActionForm.vue'

export default {
    name: "EyeCheck",
    components: { VisceraTabsForm, VisceraActionForm },
    props: {
        questions: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            visceraSurveyResult: {},
            eye: [],
            next: false
        }
    },
    mounted() {
        let visceraSurveyResult = JSON.parse(localStorage.getItem('visceraSurveyResult'));
        if(visceraSurveyResult != null) {
            this.visceraSurveyResult = visceraSurveyResult;

            let eye = this.visceraSurveyResult.eye;
            if(eye == null || eye == '' || eye == undefined) {
                this.eye = [];
            } else {
                this.eye = eye;
                this.next = true;
            }
        } else {
            this.eye = [];
        }
    },
    methods: {
        eyeCheck() {
            this.next = true;
        },
        nextPage() {
        }
    }
}

</script>

<style>
</style>