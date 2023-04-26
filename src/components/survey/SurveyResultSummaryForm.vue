<template>
    <div>
        <div class="inner">
            <div class="summary_div">
                <div class="line">
                    <div class="title">
                        <p>관리가 필요해요.</p>
                        <span class="desc">전문가와 상담을 통해 점검해 보세요.</span>
                    </div>
                    <div class="list_div">
                        <div class="result_tab_div result_tab on">
                            <div class="inner">
                                <div class="swiper-container swiper-container-initialized swiper-container-horizontal swiper-container-free-mode">
                                    <div class="swiper-wrapper result_tab_nav" style="transform: translate3d(0px, 0px, 0px); transition-duration: 0ms;">
                                        <a class="swiper-slide active swiper-slide-active" @click="selectSlide($event.target, 0)"
                                            style="margin-right: 8px;"><p>{{ viscera }}</p></a>
                                        <a class="swiper-slide swiper-slide-next" @click="selectSlide($event.target, 1)"
                                            style="margin-right: 8px;"><p>{{ life }}</p></a>
                                    </div>
                                    <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="inner">
            <div class="detail_result">
                <div class="list_div">
                    <div class="list" style="display: block">
                        <div class="title listTitleTitle">
                        </div>
                        <p class="content listContent"></p>
                        <div class="tip">
                            <h4 class="tit">이렇게 관리해 보세요!</h4>
                            <p class="txt listTipTxt"></p>
                        </div>
                    </div>
                    <div class="list" style="display: none">
                        <div class="title listTitleTitle">
                        </div>
                        <p class="content listContent"></p>
                        <div class="tip">
                            <h4 class="tit">이렇게 관리해 보세요!</h4>
                            <p class="txt listTipTxt"></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'SurveyResultSummaryForm',
    data() {
        return {
            commonSurveyResult: {},
            visceraSurveyResult: {},
            lifeSurveyResult: {},
            viscera: '',
            life: ''
        }
    },
    mounted() {
        this.commonSurveyResult = JSON.parse(localStorage.getItem("commonSurveyResult"));
        this.visceraSurveyResult = JSON.parse(localStorage.getItem("visceraSurveyResult"));
        this.lifeSurveyResult = JSON.parse(localStorage.getItem("lifeSurveyResult"));

        this.viscera = this.visceraSurveyResult.viscera;
        this.life = this.lifeSurveyResult.life;

        document.getElementsByClassName("listTitleTitle")[0].innerHTML = this.visceraSurveyResult.listTitleTitle;
        document.getElementsByClassName("listContent")[0].innerHTML = this.visceraSurveyResult.listContent;
        document.getElementsByClassName("listTipTxt")[0].innerHTML = this.visceraSurveyResult.listTipTxt;

        document.getElementsByClassName("listTitleTitle")[1].innerHTML = this.lifeSurveyResult.listTitleTitle;
        document.getElementsByClassName("listContent")[1].innerHTML = this.lifeSurveyResult.listContent;
        document.getElementsByClassName("listTipTxt")[1].innerHTML = this.lifeSurveyResult.listTipTxt;

        let viscera = this.viscera;
        if(viscera == "뼈 건강") document.getElementsByClassName("swiper-slide")[0].classList.add("icn_bone");
        else if(viscera == "뇌 건강") document.getElementsByClassName("swiper-slide")[0].classList.add("icn_brain");
        else if(viscera == "눈 건강") document.getElementsByClassName("swiper-slide")[0].classList.add("icn_eye");
        else if(viscera == "간 건강") document.getElementsByClassName("swiper-slide")[0].classList.add("icn_liver");
        else if(viscera == "장 건강") document.getElementsByClassName("swiper-slide")[0].classList.add("icn_intestine");
        
        let life = this.life;
        if(life == "스트레스") document.getElementsByClassName("swiper-slide")[1].classList.add("icn_stress");
        else if(life == "체지방") document.getElementsByClassName("swiper-slide")[1].classList.add("icn_body_fat");
        else if(life == "혈당 건강") document.getElementsByClassName("swiper-slide")[1].classList.add("icn_blood_sugar");
        else if(life == "혈압 건강") document.getElementsByClassName("swiper-slide")[1].classList.add("icn_blood_pressure");
        else if(life == "피부 건강") document.getElementsByClassName("swiper-slide")[1].classList.add("icn_skin");
    },
    methods: {
        selectSlide(element, index) {
            let first = "";
            let second = "";

            if(index == 0) {
                first = element;
                second = document.getElementsByClassName("swiper-slide")[1];
                first.classList.add("active");
                second.classList.remove("active");

                document.getElementsByClassName("list_div")[1].getElementsByClassName("list")[0].style.setProperty("display", "block");
                document.getElementsByClassName("list_div")[1].getElementsByClassName("list")[1].style.setProperty("display", "none");
            } else if(index == 1) {
                first = document.getElementsByClassName("swiper-slide")[0];
                second = element;
                first.classList.remove("active");
                second.classList.add("active");

                document.getElementsByClassName("list_div")[1].getElementsByClassName("list")[0].style.setProperty("display", "none");
                document.getElementsByClassName("list_div")[1].getElementsByClassName("list")[1].style.setProperty("display", "block");
            }
        }
    }
}

</script>

<style scoped>
    /* 관리가 필요해요 부터 */
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

    .survey_result_new.rslt3 .summary_div {
        margin-top: 80px;
    }
    .survey_result_new.rslt3 .summary_div .line {
        position: relative;
    }

    .survey_result_new.rslt3 .summary_div .line .title p {
        font-weight: 550;
        font-size: 24px;
        line-height: 36px;
        color: #e62423;
        background: url(@/assets/survey/icon/icn_siren_red.svg) no-repeat left center;
        padding-left: 38px;
    }
    .survey_result_new.rslt3 .summary_div .line .title .desc {
        letter-spacing: -1px;
        word-spacing: 2px;
        display: block;
        font-size: 16px;
        font-weight: 400;
        line-height: 0px;
        color: #555;
        margin-top: -7px;
        margin-bottom: 40px;
    }

    .survey_result_new.rslt3 .summary_div .line .list_div {
        margin-top: 31px;
    }
    .survey_result_new.rslt3 .summary_div .result_tab_div {
        position: relative;
    }
    .survey_result_new.rslt3 .result_tab {
        width: 100%;
        background: #fff;
        transition: all 0.3s;
    }
    .survey_result_new.rslt3 .result_tab:after {
        content: '';
        display: block;
        clear: both;
    }
    
    .survey_result_new.rslt3 .summary_div .result_tab_div .swiper-container {
        height: 96px;
    }
    .swiper-container {
        margin-left: auto;
        margin-right: auto;
        position: relative;
        overflow: hidden;
        list-style: none;
        padding: 0;
        z-index: 1;
    }

    .survey_result_new.rslt3 .result_tab .swiper-container .swiper-wrapper, .survey_result_new.rslt3 .result_tab .swiper-container .swiper-slide {
        height: auto;
    }
    .swiper-container-free-mode > .swiper-wrapper {
        -webkit-transition-timing-function: ease-out;
        -o-transition-timing-function: ease-out;
        transition-timing-function: ease-out;
        margin: 0 auto;
    }
    .swiper-container-android .swiper-slide, .swiper-wrapper {
        -webkit-transform: translate3d(0px, 0, 0);
        transform: translate3d(0px, 0, 0);
    }
    .swiper-wrapper {
        position: relative;
        width: 100%;
        height: 100%;
        z-index: 1;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-transition-property: -webkit-transform;
        transition-property: -webkit-transform;
        -o-transition-property: transform;
        transition-property: transform;
        transition-property: transform, -webkit-transform;
        -webkit-box-sizing: content-box;
        box-sizing: content-box;
    }

    .survey_result_new.rslt3 .summary_div .result_tab_div .result_tab_nav > a.active {
        position: relative;
        opacity: 1;
        font-weight: 500;
        background-color: #d6c4ff;
    }


    .survey_result_new.rslt3 .summary_div .result_tab_div .result_tab_nav > a {
        position: relative;
        display: block;
        width: 98px;
        height: 88px;
        letter-spacing: -0.2px;
        padding: 52px 8px 14px 8px;
        border-radius: 10px;
        background-color: #f9f9f9;
        text-align: center;
        background-repeat: no-repeat;
        background-size: 40px;
        background-position: top 8px center;
    }
    .survey_result_new.rslt3 .result_tab a {
        display: block;
        padding: 8px 20px;
        width: auto;
        border-radius: 22px;
        font-size: 16px;
        line-height: 24px;
        text-align: center;
    }
    a:hover, a:focus, a:active {
        text-decoration: none;
        outline: none;
    }
    .swiper-slide {
        -webkit-flex-shrink: 0;
        -ms-flex-negative: 0;
        flex-shrink: 0;
        width: 100%;
        height: 100%;
        position: relative;
        -webkit-transition-property: -webkit-transform;
        transition-property: -webkit-transform;
        -o-transition-property: transform;
        transition-property: transform;
        transition-property: transform, -webkit-transform;
    }
    a {
        text-decoration: none;
        color: #555;
        border: none;
    }
    .survey_result_new.rslt3 .summary_div .result_tab_div .result_tab_nav > a.active::after {
        content: '';
        position: absolute;
        left: calc(50% - 7px);
        bottom: -10px;
        width: 14px;
        height: 10px;
        background: url(@/assets/survey/icon/result_tab_arrow_pur.svg) no-repeat center / 14px 10px;
    }
    .survey_result_new.rslt3 .summary_div .result_tab_div .result_tab_nav > a.active p {
        opacity: 1;
        color: #5b1a7c;
        font-weight: 500;
    }
    .survey_result_new.rslt3 .summary_div .result_tab_div .result_tab_nav > a p {
        opacity: 0.3;
        font-size: 14px;
        line-height: 10px;
        color: #5b1a7c;
        font-weight: 400;
    }

    /* 아이콘 모음 */
    .survey_result_new.rslt3 .summary_div .result_tab_div .result_tab_nav > a.active.icn_blood_pressure {
        background-image: url(@/assets/survey/health/icn_blood_pressure.svg);
    }
    .survey_result_new.rslt3 .summary_div .result_tab_div .result_tab_nav > a.icn_blood_pressure {
        background-image: url(@/assets/survey/health/icn_blood_pressure_off.svg);
    }

    .survey_result_new.rslt3 .summary_div .result_tab_div .result_tab_nav > a.active.icn_blood_sugar {
        background-image: url(@/assets/survey/health/icn_blood_sugar.svg);
    }
    .survey_result_new.rslt3 .summary_div .result_tab_div .result_tab_nav > a.icn_blood_sugar {
        background-image: url(@/assets/survey/health/icn_blood_sugar_off.svg);
    }

    .survey_result_new.rslt3 .summary_div .result_tab_div .result_tab_nav > a.active.icn_body_fat {
        background-image: url(@/assets/survey/health/icn_body_fat.svg);
    }
    .survey_result_new.rslt3 .summary_div .result_tab_div .result_tab_nav > a.icn_body_fat {
        background-image: url(@/assets/survey/health/icn_body_fat_off.svg);
    }

    .survey_result_new.rslt3 .summary_div .result_tab_div .result_tab_nav > a.active.icn_bone {
        background-image: url(@/assets/survey/health/icn_bone.svg);
    }
    .survey_result_new.rslt3 .summary_div .result_tab_div .result_tab_nav > a.icn_bone {
        background-image: url(@/assets/survey/health/icn_bone_off.svg);
    }

    .survey_result_new.rslt3 .summary_div .result_tab_div .result_tab_nav > a.active.icn_brain {
        background-image: url(@/assets/survey/health/icn_brain.svg);
    }
    .survey_result_new.rslt3 .summary_div .result_tab_div .result_tab_nav > a.icn_brain {
        background-image: url(@/assets/survey/health/icn_brain_off.svg);
    }

    .survey_result_new.rslt3 .summary_div .result_tab_div .result_tab_nav > a.active.icn_eye {
        background-image: url(@/assets/survey/health/icn_eye.svg);
    }
    .survey_result_new.rslt3 .summary_div .result_tab_div .result_tab_nav > a.icn_eye {
        background-image: url(@/assets/survey/health/icn_eye_off.svg);
    }

    .survey_result_new.rslt3 .summary_div .result_tab_div .result_tab_nav > a.active.icn_intestine {
        background-image: url(@/assets/survey/health/icn_intestine.svg);
    }
    .survey_result_new.rslt3 .summary_div .result_tab_div .result_tab_nav > a.icn_intestine {
        background-image: url(@/assets/survey/health/icn_intestine_off.svg);
    }

    .survey_result_new.rslt3 .summary_div .result_tab_div .result_tab_nav > a.active.icn_liver {
        background-image: url(@/assets/survey/health/icn_liver.svg);
    }
    .survey_result_new.rslt3 .summary_div .result_tab_div .result_tab_nav > a.icn_liver {
        background-image: url(@/assets/survey/health/icn_liver_off.svg);
    }

    .survey_result_new.rslt3 .summary_div .result_tab_div .result_tab_nav > a.active.icn_skin {
        background-image: url(@/assets/survey/health/icn_skin.svg);
    }
    .survey_result_new.rslt3 .summary_div .result_tab_div .result_tab_nav > a.icn_skin {
        background-image: url(@/assets/survey/health/icn_skin_off.svg);
    }

    .survey_result_new.rslt3 .summary_div .result_tab_div .result_tab_nav > a.active.icn_stress {
        background-image: url(@/assets/survey/health/icn_stress.svg);
    }
    .survey_result_new.rslt3 .summary_div .result_tab_div .result_tab_nav > a.icn_stress {
        background-image: url(@/assets/survey/health/icn_stress_off.svg);
    }

    .survey_result_new.rslt3 .result_tab .swiper-container .swiper-slide:last-child {
        margin-right: 0 !important;
    }

    .swiper-container .swiper-notification {
        position: absolute;
        left: 0;
        top: 0;
        pointer-events: none;
        opacity: 0;
        z-index: -1000;
    }


    /* 선택한 slide 에 보이는 내용들 */
    .survey_result_new.rslt3 .detail_result .list_div {
        margin-top: 25px;
        border: 1px solid #ddd;
        border-radius: 16px;
    }

    .survey_result_new.rslt3 .detail_result .list_div .list {
        position: relative;
        padding: 50px 40px;
        border-bottom: 1px solid #eee;
    }
    .survey_result_new.rslt3 .detail_result .list_div .list .title {
        line-height: 36px;
    }
    .survey_result_new.rslt3 .detail_result .list_div .list .title .tit {
        font-weight: 600;
        font-size: 26px;
        line-height: 36px;
        color: #7b23a8;
    }
    .survey_result_new.rslt3 .detail_result .list_div .list .title .desc {
        font-weight: 400;
        font-size: 26px;
        line-height: 36px;
        color: #000;
    }
    .survey_result_new.rslt3 .detail_result .list_div .list .content {
        margin-top: 24px;
        font-size: 18px;
        line-height: 32px;
        color: #000;
        font-weight: 300;
    }
    .survey_result_new.rslt3 .detail_result .list_div .list .content b {
        font-weight: 600;
        color: #303030de;
        /* color: #313131; */
    }
    .survey_result_new.rslt3 .detail_result .list_div .list .tip {
        margin-top: 28px;
        padding-top: 28px;
        border-top: 1px dashed #ddd;
    }
    .survey_result_new.rslt3 .detail_result .list_div .list .tip .tit {
        padding-left: 44px;
        font-weight: 600;
        font-size: 18px;
        line-height: 28px;
        color: #7b23a8;
        background: url(@/assets/survey/icon/icn_recommend.png) no-repeat left center;
        background-size: 36px 28px;
    }
    .survey_result_new.rslt3 .detail_result .list_div .list .tip .txt {
        margin-top: 16px;
        font-size: 18px;
        line-height: 32px;
        color: #000;
        font-weight: 300;
    }
    .survey_result_new.rslt3 .detail_result .list_div .list .tip .txt b {
        font-weight: 600;
        color: #303030de;
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