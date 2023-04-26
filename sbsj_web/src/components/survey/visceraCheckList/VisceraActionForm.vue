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

                if(viscera == "뼈 건강") { 
                    visceraSurveyResult.bone = this.selectQuestion;
                    visceraSurveyResult.listTitleTitle =  '<h2 data-v-76cb682e="" class="tit">뼈 촘촘하게</h2><h3 data-v-76cb682e="" class="desc">골밀도를 높여 보세요.</h3>';
                    visceraSurveyResult.listContent =  '골밀도는 30대 이후부터 감소하기 시작하며, <b data-v-76cb682e="">낮은 골밀도는 골다공증의 위험을 높이는 요인</b>입니다. 무리한 다이어트, 칼슘과 단백질 섭취 부족, 과체중 또는 신체 활동량 감소, 폐경으로 인한 호르몬 불균형 등으로 뼈 건강에 무리를 줄 수 있으므로, 평소 골밀도를 높이기 위한 노력이 필요합니다. 또한 나이가 들면서 근육량도 함께 감소하기 때문에 뼈를 지탱해주는 근육 건강 관리도 같이 필요합니다.';
                    visceraSurveyResult.listTipTxt = '20~30대 형성되는 <b data-v-76cb682e="">최대 골량을 최고로 만드는 것</b>이 중요합니다. 잦은 가공식품 섭취, 다량의 카페인, 탄산음료, 염분 섭취 그리고 과도한 흡연 및 음주 등의 습관은 뼈와 근육 건강에 무리를 줄 수 있으므로, 평소 칼슘이 풍부한 식품, 채소, 단백질 식품 등의 영양 섭취와 뼈와 근육에 힘을 주는 운동을 규칙적으로 하는 것이 필요합니다. 이와 함께 <b data-v-76cb682e="">칼슘과 마그네슘, 비타민D의 섭취는 골 손실을 낮추고 뼈 형성과 근육 기능 유지에 도움</b>을 줄 수 있습니다.';
                }
                else if(viscera == "뇌 건강") {
                    visceraSurveyResult.brain = this.selectQuestion;
                    visceraSurveyResult.listTitleTitle =  '<h2 data-v-76cb682e="" class="tit">두뇌건강, 깜빡깜빡?</h2><h3 data-v-76cb682e="" class="desc">무엇인가를 자주 깜빡하나요?</h3>';
                    visceraSurveyResult.listContent =  '뇌 신경세포는 30세 이후부터 감소하기 시작해서 70대가 되면 30대와 비교해 뇌세포 수가 약 15%가량 적어지는 것으로 알려져 있습니다. <b data-v-76cb682e="">지속적인 스트레스와 긴장이 뇌세포의 피로를 촉진</b>하고, 음주 및 흡연 등은 기억을 담당하는 기관인 해마를 손상시킬 수 있습니다.';
                    visceraSurveyResult.listTipTxt = '평소 적절한 <b data-v-76cb682e="">스트레스 관리와 생활 습관 형성</b>으로 꾸준한 관리가 필요합니다. 일상생활의 활동량과 뇌의 기능은 비례하기 때문에 규칙적인 운동과 신체활동은 뇌의 혈류량을 증가시켜 기억력 개선에 도움을 줄 수 있습니다. 이와 함께 <b data-v-76cb682e="">포스파티딜세린의 섭취는 저하된 인지력 개선에 도움</b>을 줄 수 있으며, 자외선에 의한 피부 손상으로부터 피부 건강 유지 및 피부 보습에도 도움을 줄 수 있습니다.';
                }
                else if(viscera == "눈 건강") {
                    visceraSurveyResult.eye = this.selectQuestion;
                    visceraSurveyResult.listTitleTitle =  '<h2 data-v-76cb682e="" class="tit">눈건강, 늦지 않게</h2><h3 data-v-76cb682e="" class="desc">미리미리 관리해야 해요.</h3>';
                    visceraSurveyResult.listContent =  '황반 색소는 자유라디칼 제거 또는 눈에 해로운 광을 차단하는 역할을 함으로써 황반의 기능을 유지하는데 도움을 줍니다. 컴퓨터와 스마트폰과 같은 전자기기를 오래 사용하거나 노화로 인하여, 눈에 있는 황반의 밀도가 점점 저하되어 사물이 휘어 보이거나 번져 보이는 현상이 나타날 수 있습니다.';
                    visceraSurveyResult.listTipTxt = '<b data-v-76cb682e="">황반의 밀도를 유지</b>하기 위해서는 눈에 직접 닿는 자외선을 차단하는 것이 기본입니다. 중간중간 눈의 휴식을 취해주고 먼 곳을 바라보는 것을 습관화하고, 어두운 곳에서 핸드폰 등의 전자기기를 보는 습관은 멀리해야 합니다. 흡연은 중단하는 것이 좋으며, 녹황색 채소를 많이 섭취하는 것이 좋습니다. 이와 함께 <b data-v-76cb682e="">루테인지아잔틴복합추출물의 섭취는 황반색소밀도를 유지하여 눈 건강에 도움</b>을 줄 수 있고, <b data-v-76cb682e="">헤마토코쿠스추출물(아스타잔틴)의 섭취는 눈의 피로도 개선에 도움</b>을 줄 수 있습니다.';
                }
                else if(viscera == "간 건강") {
                    visceraSurveyResult.liver = this.selectQuestion;
                    visceraSurveyResult.listTitleTitle =  '<h2 data-v-76cb682e="" class="tit">간건강은 꾸준한</h2><h3 data-v-76cb682e="" class="desc">관리가 필요해요.</h3>';
                    visceraSurveyResult.listContent =  '간은 체내에서 영양소 대사와 담즙 분비, 해독 작용 등 여러 가지 기능을 합니다. 하지만 과량의 알코올 섭취 및 비만, 영양불량 등 다양한 원인에 의해 간 기능 저하가 발생할 수 있습니다. 간은 장기간에 걸쳐 손상이 진행되고, 간세포가 서서히 파괴되어 <b data-v-76cb682e="">반 이상의 기능이 저하되어도 특별한 증상이 나타나지 않기 때문에</b> 평소에 간의 기능을 잘 유지하는 것이 중요합니다.';
                    visceraSurveyResult.listTipTxt = '간 건강을 위해서는 <b data-v-76cb682e="">바람직한 식생활</b>을 통해 모든 음식 골고루 섭취와 <b data-v-76cb682e="">운동, 절제하는 음주 습관</b>이 가장 좋은 방법입니다. 음주 횟수와 음주량을 줄이고 음주 후에 간이 회복될 수 있는 충분한 시간을 주는 것이 필요합니다. 이와 함께 <b data-v-76cb682e="">밀크씨슬의 섭취는 간세포를 보호하는 항산화 작용이 뛰어난 실리마린 성분이 들어있어 간 건강에 도움</b>을 줄 수 있습니다.';
                }
                else if(viscera == "장 건강") {
                    visceraSurveyResult.intestine = this.selectQuestion;
                    visceraSurveyResult.listTitleTitle = '<h2 data-v-76cb682e="" class="tit">장건강, 유익균 사수!</h2><h3 data-v-76cb682e="" class="desc">깨끗한 장 환경이 중요해요.</h3>';
                    visceraSurveyResult.listContent = '불규칙한 식습관과 잦은 알코올 섭취, 인스턴트 음식이나 기름진 형태의 식사로 인해 <b data-v-76cb682e="">장내 유익균과 유해균의 균형이 무너질</b> 수 있습니다. 장내 유해균이 많으면 대사과정의 산물로 여러 독성물질이 생성되어 복통, 복부 팽만, 변비, 설사와 같은 문제가 나타날 수 있습니다. 이러한 증상들로 인해 개인의 능력이나 일상생활에 영향을 주어 삶의 질을 저하시킬 수 있으므로 관리가 필요합니다.';
                    visceraSurveyResult.listTipTxt = '장 건강을 관리하기 위해서는 과일과 채소 등 식이섬유가 풍부한 음식의 섭취와 함께 적절한 운동을 하는 것이 중요합니다. 특히 걷기는 장의 소화 운동을 촉진하는데 매우 효과적인 운동이므로, 가벼운 산책을 하는 것이 좋습니다. 이와 함께 <b data-v-76cb682e="">프로바이오틱스의 섭취는 유익균을 증가시키고 장내 미생물의 균형을 맞춰주어, 장 건강에 도움</b>을 줄 수 있습니다.';
                }

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