<template>
    <div style="display:flex; justify-content:center; align-items:center; width:100%; height:100px; padding-inline: 15%; text-align: center;">
        <div style="width:100%; display:flex; padding-inline: 20%;">
            <div style="width:40%; display:flex; ">
                <router-link :to="{ name: 'VisceraSurveyPage' }" class="btn btn-primary" 
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
                    <span>다음</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'VisceraActionForm',
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
        nextPage() {
            if(this.next){
                let visceraSurveyResult = JSON.parse(localStorage.getItem("visceraSurveyResult"));
                let viscera = visceraSurveyResult.viscera;

                if(viscera == "뼈 건강") visceraSurveyResult.bone = this.selectQuestion;
                else if(viscera == "뇌 건강") visceraSurveyResult.brain = this.selectQuestion;
                else if(viscera == "눈 건강") visceraSurveyResult.eye = this.selectQuestion;
                else if(viscera == "간 건강") visceraSurveyResult.liver = this.selectQuestion;
                else if(viscera == "장 건강") visceraSurveyResult.intestine = this.selectQuestion;

                localStorage.setItem("visceraSurveyResult", JSON.stringify(visceraSurveyResult));
                this.$router.push({ name: 'LifeSurveyPage' })
            } else {
                alert("보기의 질문 중 해당하는 모든 것을 선택 해주세요.");
            }
        }
    }
}

</script>

<style>

</style>