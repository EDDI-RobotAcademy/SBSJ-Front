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

import { mapState } from 'vuex';

const surveyModule = 'surveyModule';

export default {
    name: 'SurveyResultSummaryForm',
    data() {
        return {
            localCommonSurveyResult: {},
            localVisceraSurveyResult: {},
            localLifeSurveyResult: {},
            viscera: '',
            life: '',
            visceraList: {
                listTitleTitle: '',
                listContent: '',
                listTipTxt: ''
            },
            lifeList: {
                listTitleTitle: '',
                listContent: '',
                listTipTxt: ''
            }
        }
    },
    computed: {
        ...mapState(surveyModule, ['commonSurveyResult', 'visceraSurveyResult', 'lifeSurveyResult'])
    },
    mounted() {
        this.localCommonSurveyResult = JSON.parse(localStorage.getItem("commonSurveyResult"));
        this.localVisceraSurveyResult = JSON.parse(localStorage.getItem("visceraSurveyResult"));
        this.localLifeSurveyResult = JSON.parse(localStorage.getItem("lifeSurveyResult"));

        this.viscera = this.localVisceraSurveyResult.viscera;
        this.life = this.localLifeSurveyResult.life;

        this.getSummary(this.viscera, this.life);

        document.getElementsByClassName("listTitleTitle")[0].innerHTML = this.visceraList.listTitleTitle;
        document.getElementsByClassName("listContent")[0].innerHTML = this.visceraList.listContent;
        document.getElementsByClassName("listTipTxt")[0].innerHTML = this.visceraList.listTipTxt;

        document.getElementsByClassName("listTitleTitle")[1].innerHTML = this.lifeList.listTitleTitle;
        document.getElementsByClassName("listContent")[1].innerHTML = this.lifeList.listContent;
        document.getElementsByClassName("listTipTxt")[1].innerHTML = this.lifeList.listTipTxt;

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
        getSummary(viscera, life) {
            if(viscera == "뼈 건강") { 
                this.visceraList.listTitleTitle =  '<h2 data-v-76cb682e="" class="tit">뼈 촘촘하게</h2><h3 data-v-76cb682e="" class="desc">골밀도를 높여 보세요.</h3>';
                this.visceraList.listContent =  '골밀도는 30대 이후부터 감소하기 시작하며, <b data-v-76cb682e="">낮은 골밀도는 골다공증의 위험을 높이는 요인</b>입니다. 무리한 다이어트, 칼슘과 단백질 섭취 부족, 과체중 또는 신체 활동량 감소, 폐경으로 인한 호르몬 불균형 등으로 뼈 건강에 무리를 줄 수 있으므로, 평소 골밀도를 높이기 위한 노력이 필요합니다. 또한 나이가 들면서 근육량도 함께 감소하기 때문에 뼈를 지탱해주는 근육 건강 관리도 같이 필요합니다.';
                this.visceraList.listTipTxt = '20~30대 형성되는 <b data-v-76cb682e="">최대 골량을 최고로 만드는 것</b>이 중요합니다. 잦은 가공식품 섭취, 다량의 카페인, 탄산음료, 염분 섭취 그리고 과도한 흡연 및 음주 등의 습관은 뼈와 근육 건강에 무리를 줄 수 있으므로, 평소 칼슘이 풍부한 식품, 채소, 단백질 식품 등의 영양 섭취와 뼈와 근육에 힘을 주는 운동을 규칙적으로 하는 것이 필요합니다. 이와 함께 <b data-v-76cb682e="">칼슘과 마그네슘, 비타민D의 섭취는 골 손실을 낮추고 뼈 형성과 근육 기능 유지에 도움</b>을 줄 수 있습니다.';
            }
            else if(viscera == "뇌 건강") {
                this.visceraList.listTitleTitle =  '<h2 data-v-76cb682e="" class="tit">두뇌건강, 깜빡깜빡?</h2><h3 data-v-76cb682e="" class="desc">무엇인가를 자주 깜빡하나요?</h3>';
                this.visceraList.listContent =  '뇌 신경세포는 30세 이후부터 감소하기 시작해서 70대가 되면 30대와 비교해 뇌세포 수가 약 15%가량 적어지는 것으로 알려져 있습니다. <b data-v-76cb682e="">지속적인 스트레스와 긴장이 뇌세포의 피로를 촉진</b>하고, 음주 및 흡연 등은 기억을 담당하는 기관인 해마를 손상시킬 수 있습니다.';
                this.visceraList.listTipTxt = '평소 적절한 <b data-v-76cb682e="">스트레스 관리와 생활 습관 형성</b>으로 꾸준한 관리가 필요합니다. 일상생활의 활동량과 뇌의 기능은 비례하기 때문에 규칙적인 운동과 신체활동은 뇌의 혈류량을 증가시켜 기억력 개선에 도움을 줄 수 있습니다. 이와 함께 <b data-v-76cb682e="">포스파티딜세린의 섭취는 저하된 인지력 개선에 도움</b>을 줄 수 있으며, 자외선에 의한 피부 손상으로부터 피부 건강 유지 및 피부 보습에도 도움을 줄 수 있습니다.';
            }
            else if(viscera == "눈 건강") {
                this.visceraList.listTitleTitle =  '<h2 data-v-76cb682e="" class="tit">눈건강, 늦지 않게</h2><h3 data-v-76cb682e="" class="desc">미리미리 관리해야 해요.</h3>';
                this.visceraList.listContent =  '황반 색소는 자유라디칼 제거 또는 눈에 해로운 광을 차단하는 역할을 함으로써 황반의 기능을 유지하는데 도움을 줍니다. 컴퓨터와 스마트폰과 같은 전자기기를 오래 사용하거나 노화로 인하여, 눈에 있는 황반의 밀도가 점점 저하되어 사물이 휘어 보이거나 번져 보이는 현상이 나타날 수 있습니다.';
                this.visceraList.listTipTxt = '<b data-v-76cb682e="">황반의 밀도를 유지</b>하기 위해서는 눈에 직접 닿는 자외선을 차단하는 것이 기본입니다. 중간중간 눈의 휴식을 취해주고 먼 곳을 바라보는 것을 습관화하고, 어두운 곳에서 핸드폰 등의 전자기기를 보는 습관은 멀리해야 합니다. 흡연은 중단하는 것이 좋으며, 녹황색 채소를 많이 섭취하는 것이 좋습니다. 이와 함께 <b data-v-76cb682e="">루테인지아잔틴복합추출물의 섭취는 황반색소밀도를 유지하여 눈 건강에 도움</b>을 줄 수 있고, <b data-v-76cb682e="">헤마토코쿠스추출물(아스타잔틴)의 섭취는 눈의 피로도 개선에 도움</b>을 줄 수 있습니다.';
            }
            else if(viscera == "간 건강") {
                this.visceraList.listTitleTitle =  '<h2 data-v-76cb682e="" class="tit">간건강은 꾸준한</h2><h3 data-v-76cb682e="" class="desc">관리가 필요해요.</h3>';
                this.visceraList.listContent =  '간은 체내에서 영양소 대사와 담즙 분비, 해독 작용 등 여러 가지 기능을 합니다. 하지만 과량의 알코올 섭취 및 비만, 영양불량 등 다양한 원인에 의해 간 기능 저하가 발생할 수 있습니다. 간은 장기간에 걸쳐 손상이 진행되고, 간세포가 서서히 파괴되어 <b data-v-76cb682e="">반 이상의 기능이 저하되어도 특별한 증상이 나타나지 않기 때문에</b> 평소에 간의 기능을 잘 유지하는 것이 중요합니다.';
                this.visceraList.listTipTxt = '간 건강을 위해서는 <b data-v-76cb682e="">바람직한 식생활</b>을 통해 모든 음식 골고루 섭취와 <b data-v-76cb682e="">운동, 절제하는 음주 습관</b>이 가장 좋은 방법입니다. 음주 횟수와 음주량을 줄이고 음주 후에 간이 회복될 수 있는 충분한 시간을 주는 것이 필요합니다. 이와 함께 <b data-v-76cb682e="">밀크씨슬의 섭취는 간세포를 보호하는 항산화 작용이 뛰어난 실리마린 성분이 들어있어 간 건강에 도움</b>을 줄 수 있습니다.';
            }
            else if(viscera == "장 건강") {
                this.visceraList.listTitleTitle = '<h2 data-v-76cb682e="" class="tit">장건강, 유익균 사수!</h2><h3 data-v-76cb682e="" class="desc">깨끗한 장 환경이 중요해요.</h3>';
                this.visceraList.listContent = '불규칙한 식습관과 잦은 알코올 섭취, 인스턴트 음식이나 기름진 형태의 식사로 인해 <b data-v-76cb682e="">장내 유익균과 유해균의 균형이 무너질</b> 수 있습니다. 장내 유해균이 많으면 대사과정의 산물로 여러 독성물질이 생성되어 복통, 복부 팽만, 변비, 설사와 같은 문제가 나타날 수 있습니다. 이러한 증상들로 인해 개인의 능력이나 일상생활에 영향을 주어 삶의 질을 저하시킬 수 있으므로 관리가 필요합니다.';
                this.visceraList.listTipTxt = '장 건강을 관리하기 위해서는 과일과 채소 등 식이섬유가 풍부한 음식의 섭취와 함께 적절한 운동을 하는 것이 중요합니다. 특히 걷기는 장의 소화 운동을 촉진하는데 매우 효과적인 운동이므로, 가벼운 산책을 하는 것이 좋습니다. 이와 함께 <b data-v-76cb682e="">프로바이오틱스의 섭취는 유익균을 증가시키고 장내 미생물의 균형을 맞춰주어, 장 건강에 도움</b>을 줄 수 있습니다.';
            }

            if(life == "스트레스") {
                this.lifeList.listTitleTitle = '<h2 data-v-76cb682e="" class="tit">스트레스 진행중?</h2><h3 data-v-76cb682e="" class="desc">참을 수 있다고 넘기지 마세요.</h3>';
                this.lifeList.listContent = '스트레스는 개인의 적응 능력보다 강도가 크거나 적절한 방법으로 해소되지 않고 축적되면, 정신적 또는 신체적 건강의 유지를 어렵게 할 수 있기 때문에 <b data-v-76cb682e="">지속적인 관리가 필요</b>합니다. 스트레스는 <b data-v-76cb682e="">다양한 질환의 원인</b>으로 알려져 있습니다. 스트레스 요인에 노출되면 신체는 스트레스 원인을 제거하기 위해 다양한 호르몬 등을 분비해서 스트레스 자극에 저항하려고 합니다.';
                this.lifeList.listTipTxt = '스트레스를 관리하기 위해서는 규칙적인 생활과 건전한 생활리듬을 유지하고, 취미생활이나 스포츠 등으로 <b data-v-76cb682e="">심신의 스트레스를 해소</b>해야 합니다. 알파파는 마음을 편안하고 안정된 상태에서 방출되는 뇌파의 일종입니다. <b data-v-76cb682e="">L-테아닌은 두뇌의 신경전달물질을 조절하여 알파파 발생을 증가</b>시키고, 그에 따라 <b data-v-76cb682e="">스트레스로 인한 긴장 완화에 도움</b>을 줄 수 있습니다.';
            }
            else if(life == "체지방") {
                this.lifeList.listTitleTitle = '<h2 data-v-76cb682e="" class="tit">체지방관리, 영원한 숙제!</h2><h3 data-v-76cb682e="" class="desc">올바른 감량이 필요해요.</h3>';
                this.lifeList.listContent = '체중과 허리둘레는 하루아침에 줄어들기 힘든 지표입니다. 체지방은 <b data-v-76cb682e="">섭취 에너지가 활동 에너지보다 더 많을 경우</b> 우리 몸에 쌓이게 됩니다. 체지방이 과도한 경우 에너지를 생성하는 호르몬에 변화가 일어나고 이로 인하여 건강에 이상을 초래할 수 있어, 적정 수준 감량을 통해 체중을 관리하는 것이 중요합니다.';
                this.lifeList.listTipTxt = '비만을 유발하는 당과 기름이 많은 음식의 섭취를 자제하고, 비교적 <b data-v-76cb682e="">열량이 낮지만 포만감을 주는 채소 등의 식품을 섭취</b>하여 섭취 에너지양을 줄이는 것이 좋습니다. 우리 몸은 활동에 필요한 에너지가 부족할 때 체지방을 에너지원으로 전환하여 사용하게 되므로, 적절한 <b data-v-76cb682e="">유산소 운동과 근력 운동의 병행</b>은 체내 근육량을 증가시켜 기초대사량을 높일 수 있습니다. 이와 함께 <b data-v-76cb682e="">미역등복합추출물(잔티젠)의 섭취는 체지방 감소에 도움</b>을 줄 수 있습니다.';
            }
            else if(life == "혈당 건강") {
                this.lifeList.listTitleTitle = '<h2 data-v-76cb682e="" class="tit">혈당건강, 진짜 중요!</h2><h3 data-v-76cb682e="" class="desc">에너지원으로 쓰일 포도당을 지켜주세요.</h3>';
                this.lifeList.listContent = '정상적인 상태에서는 식사 후 혈당이 일시적으로 올라가지만, 인슐린에 의하여 다시 정상 수준으로 내려가게 됩니다. 그러나 췌장에서 인슐린 기능을 제대로 하지 못하거나 분비에 이상이 있는 경우 식사 후 혈당이 정상 수준으로 내려가지 않게 됩니다. 즉, 우리 몸에서 <b data-v-76cb682e="">포도당이 에너지로 쓰이지 못하고 밖으로 배출</b>하게 됩니다.';
                this.lifeList.listTipTxt = '<b data-v-76cb682e="">식이 조절</b>은 식사 후 혈당을 정상 수준으로 유지하는데 중요한 역할을 합니다. 소화 흡수가 빠른 과일, 설탕, 꿀, 청량음료 등 단순당은 혈당을 급격하게 높여 좋지 않은 반면, <b data-v-76cb682e="">식이섬유소가 풍부한 잡곡, 현미, 채소 등</b>은 당질의 흡수를 천천히 하도록 하여 혈당을 서서히 높여 혈당 조절에 도움을 줍니다. 천천히 먹는 습관, 과식하지 않는 습관 또한 정상 혈당 유지에 영향을 미칩니다. 이와 함께 <b data-v-76cb682e="">바나바잎추출물 섭취 시 식후 혈당 상승 억제에 도움</b>을 줄 수 있습니다.';
            }
            else if(life == "혈압 건강") {
                this.lifeList.listTitleTitle = '<h2 data-v-76cb682e="" class="tit">혈압건강, 조절 필요!</h2><h3 data-v-76cb682e="" class="desc">지금도 높아지고 있어요.</h3>';
                this.lifeList.listContent = '혈압이 정상 수치보다 높아지는 원인으로는 <b data-v-76cb682e="">식습관, 유전적인 요인, 비만, 운동 부족, 흡연, 음주, 스트레스 등</b>을 들 수 있습니다. 혈압은 음식, 음주, 통증, 스트레스, 기분 등 여러 가지 원인으로 인해 수시로 달라질 수 있습니다. 혈압이 높은 상태로 지속되면 다양한 심혈관 문제가 발생할 수 있으므로 꾸준한 관리가 필요합니다.';
                this.lifeList.listTipTxt = '정상적인 혈압 유지를 위하여 평소 <b data-v-76cb682e="">식사 및 생활 습관을 개선</b>하는 것이 중요합니다. 식이요법으로는 과도한 소금과 당분 섭취를 줄이고, 동물성 지방보다 식물성 지방을 섭취하는 것이 좋습니다. 또한 규칙적인 운동으로 정상 체중을 유지하고, 과도한 술과 담배는 삼가는 것이 좋습니다. 이와 함께 <b data-v-76cb682e="">코엔자임Q10의 섭취는 높은 혈압 감소에 도움</b>을 줄 수 있습니다.';
            }
            else if(life == "피부 건강") {
                this.lifeList.listTitleTitle = '<h2 data-v-76cb682e="" class="tit">피부건강, 내면부터</h2><h3 data-v-76cb682e="" class="desc">피부까지 끌어내 볼까요?</h3>';
                this.lifeList.listContent = '피부는 <b data-v-76cb682e="">외부 유해 물질이나 물리적인 자극으로부터 우리 몸을 보호, 신체의 열 발산을 조절하여 체온을 일정하게 유지, 체내 노폐물 배출</b> 등 다양한 기능을 합니다. 그러나 햇빛이나 자외선에 노출되면 세포가 손상되어 피부 재생 능력이 저하되고, 노화에 의해 피부 각질층이 두꺼워지고 수분 함유량이 감소하면서 주름이 생기고 탄력이 저하됩니다. 또한 불규칙한 식습관, 수면 부족, 흡연, 과음 등도 피부 노화를 촉진할 수 있기 때문에 지양하는 것이 좋습니다.';
                this.lifeList.listTipTxt = '피부 건강을 위해서는 피부 세포에 영양을 주는 식품과 함께 균형 있는 식사를 하며, 적합한 화장품을 바르는 것이 중요합니다. 피부가 건조해지지 않도록 수분을 자주 섭취하고 수분을 빼앗는 카페인 음료의 섭취는 줄이며, 적당한 운동으로 땀 배출을 시킵니다. 이와 함께 <b data-v-76cb682e="">히알루론산의 섭취는 피부 보습 및 피부 건강 유지에 도움</b>을 줄 수 있습니다.';
            }
        },
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