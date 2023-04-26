<template>
    <body>
        <div id="content" style="padding-top: 126px;">
            <div class="survey_result_new rslt3">
                <div class="top_area">
                    <div class="inner">
                        <div class="info_box">
                            <div class="title_text"><span>{{ commonSurveyResult.username }}</span>님의 <h2>건강설문 결과</h2></div>
                            <p class="text">※ 본 결과는 의사의 처방을 대신하지 않습니다.</p>
                        </div>
                        <div class="graph_box">
                            <div class="graph_info">
                                <div class="graph_div lv4">
                                    <div class="graph">
                                        <canvas id="canvas" width="440" height="440"></canvas>
                                        <canvas id="canvas_line" width="440" height="440"></canvas>
                                    </div>
                                    <div class="info_text">
                                        <p class="grade">양호</p><!-- 점수에 따라 텍스트 변경 -->
                                        <p class="num"><span class="number">86</span>점</p>
                                    </div>
                                </div>
                                <div class="graph_right_div">
                                    <div class="mem_info_div">         
                                        <div class="info_text">
                                            <div class="list">
                                                <p> {{ commonSurveyResult.age }} {{ commonSurveyResult.gender }} </p>
                                                <p> {{ commonSurveyResult.height }}cm </p>
                                                <p> {{ commonSurveyResult.weight }}kg</p>
                                                <div class="bmi_tit tool">
                                                    <p class="tit">BMI</p>
                                                    <p class="bmi">{{ this.bmi }}</p>
                                                    <div class="tooltip_div">
                                                        ({{ this.bmiText }})
                                                    </div>      
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="text_div">
                                        <p class="txt">당신의 건강은<br/>성실한 모범생형</p><!-- 점수에 따라 텍스트 변경 -->
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <survey-result-summary-form/>
                </div>
                <div>
                    <survey-result-recommend-form/>
                </div>
            </div>
        </div>
    </body>
</template>

<script>
import SurveyResultSummaryForm from '@/components/survey/SurveyResultSummaryForm.vue';
import SurveyResultRecommendForm from '@/components/survey/SurveyResultRecommendForm.vue';

export default {
    name: 'SurveyResultForm',
    components: { SurveyResultSummaryForm, SurveyResultRecommendForm },
    data() {
        return {
            commonSurveyResult: {},
            visceraSurveyResult: {},
            lifeSurveyResult: {},
            bmi: 0,
            bmiText: ''
        }
    },
    created() {
        this.commonSurveyResult = JSON.parse(localStorage.getItem("commonSurveyResult"));
        this.visceraSurveyResult = JSON.parse(localStorage.getItem("visceraSurveyResult"));
        this.lifeSurveyResult = JSON.parse(localStorage.getItem("lifeSurveyResult"));

        if(!(Array.isArray(this.commonSurveyResult) && this.commonSurveyResult.length === 0)) {
            let height_m = this.commonSurveyResult.height / 100;
            let weight = this.commonSurveyResult.weight;
            this.bmi = Math.floor((weight / (height_m * height_m)) * 100) / 100;
            if(this.bmi < 0) {
                alert("키와 몸무게를 잘 못 입력하셨습니다. 다시 입력해주세요.");
            } else if(this.bmi < 18.5) {
                this.bmiText = "저체중";
            } else if(this.bmi < 23) {
                this.bmiText = "정상";
            } else if(this.bmi < 25) {
                this.bmiText = "과체중";
            } else if(this.bmi >= 25) {
                this.bmiText = "비만";
            }
        }
    }
}

</script>

<style scoped>
    .survey_result_new.rslt3 {
        position: relative;
    }
    .survey_result_new.rslt3 .top_area {
        position: relative;
        padding-top: 40px;
    }

    .survey_result_new.rslt3 .top_area:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 380px;
        background: rgb(91,26,124);
        background: linear-gradient(90deg, rgba(91,26,124,1) 0%, rgba(91,26,124,1) 0%, rgba(127,65,158,1) 100%);
    }

    .survey_result_new.rslt3 .top_area .info_box {
        background: url(@/assets/survey/rslt_bg.png) no-repeat right top / 193px 105.6px;
        padding-top: 20px;
    }
    .survey_result_new.rslt3 .top_area .info_box .title_text {
        position: relative;
        font-weight: 300;
        font-size: 40px;
        line-height: 50px;
        color: #fff;
        z-index: 1;
        margin-bottom: 28px;
    }
    .survey_result_new.rslt3 .top_area .info_box .title_text span {
        font-weight: 700;
    }
    .survey_result_new.rslt3 .top_area .info_box .title_text h2 {
        display: inline;
        font-weight: 300;
        font-size: 40px;
        line-height: 50px;
    }
    .survey_result_new.rslt3 .top_area .text {
        font-weight: 400;
        font-size: 15px;
        line-height: 20px;
        color: #fff;
    }

    .survey_result_new.rslt3 .top_area .graph_box {
        margin-top: 20px;
        position: relative;
        height: 285px;
        padding: 48px 82px 50px 74px;
        border-radius: 16px;
        background: #fff;
        box-shadow: 0 0 40px 0 rgba(0, 0, 0, 0.1);
        z-index: 1;
    }
    .survey_result_new.rslt3 .top_area .graph_box .graph_info {
        display: flex;
        align-items: center;
    }
    .survey_result_new.rslt3 .top_area .graph_box .graph_info:after {
        content: '';
        display: block;
        clear: both;
    }
    .survey_result_new.rslt3 .top_area .graph_box .graph_info .graph_div {
        position: relative;
        width: 220px;
        margin-right: 40px;
        margin-top: 6px;
        float: left;
    }
    .survey_result_new.rslt3 .top_area .graph_box .graph_info .graph_div .graph {
        position: relative;
        margin: 0 auto;
        width: 220px;
        height: 170px;
    }
    .survey_result_new.rslt3 .top_area .graph_box .graph_info .graph_div .graph #canvas {
        transform: rotate(29deg) scale(0.5);
    }
    .survey_result_new.rslt3 .top_area .graph_box .graph_info .graph_div .graph canvas {
        position: absolute;
        top: 50%;
        left: 50%;
        margin: -195px 0 0 -220px;
    }
    .survey_result_new.rslt3 .top_area .graph_box .graph_info .graph_div .graph #canvas_line {
        transform: rotate(151deg) scale(0.5);
    }
    .survey_result_new.rslt3 .top_area .graph_box .graph_info .graph_div.lv4 .info_text {
        background: conic-gradient(from 0.28turn, #04d09d, #64f29f 0.39turn, #04d09d);
    }
    .survey_result_new.rslt3 .top_area .graph_box .graph_info .graph_div .info_text {
        position: absolute;
        top: -20px;
        left: 50%;
        transform: translateX(-50%);
        padding-top: 38px;
        width: 190px;
        height: 190px;
        border-radius: 100%;
        background: #fff;
        box-shadow: 0 0 40px 0 rgba(0, 0, 0, 0.1);
        text-align: center;
    }
    .survey_result_new.rslt3 .top_area .graph_box .graph_info .graph_div.lv4 .grade {
        color: #00b185;
        background: #e5f6ec;
    }
    .survey_result_new.rslt3 .top_area .graph_box .graph_info .graph_div .info_text .grade {
        margin: 15px auto 0 auto;
        width: 48px;
        height: 26px;
        font-weight: 500;
        font-size: 13px;
        line-height: 26px;
        text-align: center;
        border-radius: 13px;
    }
    .survey_result_new.rslt3 .top_area .graph_box .graph_info .graph_div .info_text .num {
        margin-top: 10px;
        font-weight: 500;
        font-size: 28px;
        line-height: 32px;
        color: #2a204e;
    }
    .survey_result_new.rslt3 .top_area .graph_box .graph_info .graph_div .info_text .num span {
        display: inline-block;
        font-weight: 700;
        font-size: 32px;
        vertical-align: top;
    }

    .survey_result_new.rslt3 .top_area .graph_box .mem_info_div .list {
        display: flex;
        align-items: center;
        width: 450px;
    }
    .survey_result_new.rslt3 .top_area .graph_box .mem_info_div .info_text .list>p:first-child {
        padding-left: 0;
    }
    .survey_result_new.rslt3 .top_area .graph_box .mem_info_div .info_text .list>p {
        position: relative;
        padding-left: 23px;
        font-size: 16px;
        line-height: 22px;
        color: #000;
        letter-spacing: -0.2px;
    }
    .survey_result_new.rslt3 .top_area .graph_box .mem_info_div .info_text .list>p:first-child:before {
        display: none;
    }
    .survey_result_new.rslt3 .top_area .graph_box .mem_info_div .info_text .list>p:not(.bmi):before {
        content: '';
        position: absolute;
        top: 50%;
        left: 10px;
        width: 3px;
        height: 3px;
        border-radius: 100%;
        background-color: #bfbfbf;
    }
    .survey_result_new.rslt3 .top_area .graph_box .mem_info_div .info_text .list .bmi_tit {
        display: flex;
        align-items: center;
        padding-left: 59px;
        position: relative;
        letter-spacing: -0.2px;
    }
    .survey_result_new.rslt3 .top_area .graph_box .mem_info_div .info_text .list .bmi_tit .tit {
        position: relative;
        padding-right: 6px;
        font-size: 16px;
        line-height: 22px;
        color: #c291dc;
    }
    .survey_result_new.rslt3 .top_area .graph_box .mem_info_div .info_text .list p.bmi {
        font-size: 16px;
        line-height: 22px;
        color: #000;
    }

    .tooltip {
        position: absolute;
        display: none;
        background: #fff;
        width: 280px;
        border: 1px solid #eee;
        z-index: 2;
    }

    .survey_result_new.rslt3 .top_area .graph_box .graph_info .text_div {
        position: relative;
        padding-top: 31px;
    }
    .survey_result_new.rslt3 .top_area .graph_box .graph_info .graph_div.lv4 ~ .graph_right_div .text_div .txt {
        background-image: url(@/assets/survey/icon/icn_graph_info_lv4.png);
    }
    .survey_result_new.rslt3 .top_area .graph_box .graph_info .text_div .txt {
        display: inline-block;
        font-weight: 700;
        font-size: 28px;
        line-height: 36px;
        color: #000;
        padding-right: 58px;
        background-position: bottom right;
        background-size: 52px;
        background-repeat: no-repeat;
    }
    .survey_result_new.rslt3 .top_area .graph_box .graph_info:after {
        content: '';
        display: block;
        clear: both;
    }

    .survey_result_new.rslt3 .inner {
        width: 800px;
    }
    .inner {
        position: relative;
        margin: 0 auto;
        width: 1080px;
    }
    .inner:after {
        content: "";
        display: block;
        clear: both;
    }


    a:-webkit-any-link {
        cursor: pointer;
    }
    canvas {
        overflow-clip-margin: content-box;
        overflow: clip;
    }
    p {
        display: block;
        margin-block-start: 1em;
        margin-block-end: 1em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
    }
    h2 {
        display: block;
        font-size: 1.5em;
        margin-block-start: 0.83em;
        margin-block-end: 0.83em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
        font-weight: bold;
    }
    h3 {
        display: block;
        font-size: 1.17em;
        margin-block-start: 1em;
        margin-block-end: 1em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
        font-weight: bold;
    }
    h4 {
        display: block;
        margin-block-start: 1.33em;
        margin-block-end: 1.33em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
        font-weight: bold;
    }
    #wrap {
        position: relative;
        word-break: keep-all;
        min-width: 1400px;
    }
    #content {
        position: relative;
        padding: 180px 0 120px;
        min-height: calc(100vh - 276px);
        min-height: -webkit-calc(100vh - 276px);
    }
    body {
        position: relative;
        font-family: "SpoqaNeo", "맑은 고딕", "Malgun Gothic", sans-serif;
        font-weight: 400;
        font-size: 16px;
        color: #797979;
        letter-spacing: -0.5px;
        height: 100%;
        -webkit-text-size-adjust: 100%;
        line-height: 1;
    }
    th, b, strong {
        font-weight: normal;
    }
    body, div, h1, h2, h3, h4, h5, h6, ul, ol, li, dl, dt, dd, p, form, fieldset, table, tr, th, td {
        margin: 0;
        padding: 0;
    }
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    div {
        display: block;
    }
    p {
        display: block;
        margin-block-start: 1em;
        margin-block-end: 1em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
    }
    :before, :after {
        box-sizing: border-box;
    }
</style>