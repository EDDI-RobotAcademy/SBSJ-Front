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
                    <span>다음</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

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
        nextPage() {
            if(this.next){
                let lifeSurveyResult = JSON.parse(localStorage.getItem("lifeSurveyResult"));
                let life = lifeSurveyResult.life;

                if(life == "스트레스") { 
                    lifeSurveyResult.stress = this.selectQuestion;
                    lifeSurveyResult.listTitleTitle =  '<h2 data-v-76cb682e="" class="tit">스트레스 진행중?</h2><h3 data-v-76cb682e="" class="desc">참을 수 있다고 넘기지 마세요.</h3>';
                    lifeSurveyResult.listContent = '스트레스는 개인의 적응 능력보다 강도가 크거나 적절한 방법으로 해소되지 않고 축적되면, 정신적 또는 신체적 건강의 유지를 어렵게 할 수 있기 때문에 <b data-v-76cb682e="">지속적인 관리가 필요</b>합니다. 스트레스는 <b data-v-76cb682e="">다양한 질환의 원인</b>으로 알려져 있습니다. 스트레스 요인에 노출되면 신체는 스트레스 원인을 제거하기 위해 다양한 호르몬 등을 분비해서 스트레스 자극에 저항하려고 합니다.';
                    lifeSurveyResult.listTipTxt = '스트레스를 관리하기 위해서는 규칙적인 생활과 건전한 생활리듬을 유지하고, 취미생활이나 스포츠 등으로 <b data-v-76cb682e="">심신의 스트레스를 해소</b>해야 합니다. 알파파는 마음을 편안하고 안정된 상태에서 방출되는 뇌파의 일종입니다. <b data-v-76cb682e="">L-테아닌은 두뇌의 신경전달물질을 조절하여 알파파 발생을 증가</b>시키고, 그에 따라 <b data-v-76cb682e="">스트레스로 인한 긴장 완화에 도움</b>을 줄 수 있습니다.';
                }
                else if(life == "체지방") {
                    lifeSurveyResult.bodyFat = this.selectQuestion;
                    lifeSurveyResult.listTitleTitle = '<h2 data-v-76cb682e="" class="tit">체지방관리, 영원한 숙제!</h2><h3 data-v-76cb682e="" class="desc">올바른 감량이 필요해요.</h3>';
                    lifeSurveyResult.listContent = '체중과 허리둘레는 하루아침에 줄어들기 힘든 지표입니다. 체지방은 <b data-v-76cb682e="">섭취 에너지가 활동 에너지보다 더 많을 경우</b> 우리 몸에 쌓이게 됩니다. 체지방이 과도한 경우 에너지를 생성하는 호르몬에 변화가 일어나고 이로 인하여 건강에 이상을 초래할 수 있어, 적정 수준 감량을 통해 체중을 관리하는 것이 중요합니다.';
                    lifeSurveyResult.listTipTxt = '비만을 유발하는 당과 기름이 많은 음식의 섭취를 자제하고, 비교적 <b data-v-76cb682e="">열량이 낮지만 포만감을 주는 채소 등의 식품을 섭취</b>하여 섭취 에너지양을 줄이는 것이 좋습니다. 우리 몸은 활동에 필요한 에너지가 부족할 때 체지방을 에너지원으로 전환하여 사용하게 되므로, 적절한 <b data-v-76cb682e="">유산소 운동과 근력 운동의 병행</b>은 체내 근육량을 증가시켜 기초대사량을 높일 수 있습니다. 이와 함께 <b data-v-76cb682e="">미역등복합추출물(잔티젠)의 섭취는 체지방 감소에 도움</b>을 줄 수 있습니다.';
                }
                else if(life == "혈당 건강") {
                    lifeSurveyResult.bloodSugar = this.selectQuestion;
                    lifeSurveyResult.listTitleTitle = '<h2 data-v-76cb682e="" class="tit">혈당건강, 진짜 중요!</h2><h3 data-v-76cb682e="" class="desc">에너지원으로 쓰일 포도당을 지켜주세요.</h3>';
                    lifeSurveyResult.listContent = '정상적인 상태에서는 식사 후 혈당이 일시적으로 올라가지만, 인슐린에 의하여 다시 정상 수준으로 내려가게 됩니다. 그러나 췌장에서 인슐린 기능을 제대로 하지 못하거나 분비에 이상이 있는 경우 식사 후 혈당이 정상 수준으로 내려가지 않게 됩니다. 즉, 우리 몸에서 <b data-v-76cb682e="">포도당이 에너지로 쓰이지 못하고 밖으로 배출</b>하게 됩니다.';
                    lifeSurveyResult.listTipTxt = '<b data-v-76cb682e="">식이 조절</b>은 식사 후 혈당을 정상 수준으로 유지하는데 중요한 역할을 합니다. 소화 흡수가 빠른 과일, 설탕, 꿀, 청량음료 등 단순당은 혈당을 급격하게 높여 좋지 않은 반면, <b data-v-76cb682e="">식이섬유소가 풍부한 잡곡, 현미, 채소 등</b>은 당질의 흡수를 천천히 하도록 하여 혈당을 서서히 높여 혈당 조절에 도움을 줍니다. 천천히 먹는 습관, 과식하지 않는 습관 또한 정상 혈당 유지에 영향을 미칩니다. 이와 함께 <b data-v-76cb682e="">바나바잎추출물 섭취 시 식후 혈당 상승 억제에 도움</b>을 줄 수 있습니다.';
                }
                else if(life == "혈압 건강") {
                    lifeSurveyResult.bloodPressure = this.selectQuestion;
                    lifeSurveyResult.listTitleTitle = '<h2 data-v-76cb682e="" class="tit">혈압건강, 조절 필요!</h2><h3 data-v-76cb682e="" class="desc">지금도 높아지고 있어요.</h3>';
                    lifeSurveyResult.listContent = '혈압이 정상 수치보다 높아지는 원인으로는 <b data-v-76cb682e="">식습관, 유전적인 요인, 비만, 운동 부족, 흡연, 음주, 스트레스 등</b>을 들 수 있습니다. 혈압은 음식, 음주, 통증, 스트레스, 기분 등 여러 가지 원인으로 인해 수시로 달라질 수 있습니다. 혈압이 높은 상태로 지속되면 다양한 심혈관 문제가 발생할 수 있으므로 꾸준한 관리가 필요합니다.';
                    lifeSurveyResult.listTipTxt = '정상적인 혈압 유지를 위하여 평소 <b data-v-76cb682e="">식사 및 생활 습관을 개선</b>하는 것이 중요합니다. 식이요법으로는 과도한 소금과 당분 섭취를 줄이고, 동물성 지방보다 식물성 지방을 섭취하는 것이 좋습니다. 또한 규칙적인 운동으로 정상 체중을 유지하고, 과도한 술과 담배는 삼가는 것이 좋습니다. 이와 함께 <b data-v-76cb682e="">코엔자임Q10의 섭취는 높은 혈압 감소에 도움</b>을 줄 수 있습니다.';
                }
                else if(life == "피부 건강") {
                    lifeSurveyResult.skin = this.selectQuestion;
                    lifeSurveyResult.listTitleTitle = '<h2 data-v-76cb682e="" class="tit">피부건강, 내면부터</h2><h3 data-v-76cb682e="" class="desc">피부까지 끌어내 볼까요?</h3>';
                    lifeSurveyResult.listContent = '피부는 <b data-v-76cb682e="">외부 유해 물질이나 물리적인 자극으로부터 우리 몸을 보호, 신체의 열 발산을 조절하여 체온을 일정하게 유지, 체내 노폐물 배출</b> 등 다양한 기능을 합니다. 그러나 햇빛이나 자외선에 노출되면 세포가 손상되어 피부 재생 능력이 저하되고, 노화에 의해 피부 각질층이 두꺼워지고 수분 함유량이 감소하면서 주름이 생기고 탄력이 저하됩니다. 또한 불규칙한 식습관, 수면 부족, 흡연, 과음 등도 피부 노화를 촉진할 수 있기 때문에 지양하는 것이 좋습니다.';
                    lifeSurveyResult.listTipTxt = '피부 건강을 위해서는 피부 세포에 영양을 주는 식품과 함께 균형 있는 식사를 하며, 적합한 화장품을 바르는 것이 중요합니다. 피부가 건조해지지 않도록 수분을 자주 섭취하고 수분을 빼앗는 카페인 음료의 섭취는 줄이며, 적당한 운동으로 땀 배출을 시킵니다. 이와 함께 <b data-v-76cb682e="">히알루론산의 섭취는 피부 보습 및 피부 건강 유지에 도움</b>을 줄 수 있습니다.';
                }

                localStorage.setItem("lifeSurveyResult", JSON.stringify(lifeSurveyResult));
                this.$router.push({ name: 'SurveyResultPage' })
            } else {
                alert("보기의 질문 중 해당하는 모든 것을 선택 해주세요.");
            }
        }
    }
}

</script>

<style>

</style>