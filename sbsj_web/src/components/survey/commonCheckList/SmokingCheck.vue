<template>
  <div style="padding-inline: 10%; margin-top:3%;">
    <common-tabs-form/>
    <form style="padding-inline: 30%;">
      <div>
        <div style="font-size: xx-large;">
          <div style="margin-top:10%; display:flex; justify-content:center; align-items:center; font-weight: 100;">
            <p style="margin-top:3%; font-weight: bold; ">흡연</p>을 하시나요?
          </div>
        </div>
      </div>
      <div class="form-radio" style=" margin-top:8%;">
        <ul class="ul">
          <li>
            <input type="radio" name="smoking" id="true" value="true" v-model="smoking" @click="smokingCheck">
            <label class="form-check-label" for="true">네</label>
          </li>
          <li>
            <input type="radio" name="smoking" id="false" value="false" v-model="smoking" @click="smokingCheck">
            <label class="form-check-label" for="false">아니요</label>
          </li>
        </ul>
      </div>
      <div v-if="smoking == 'true'">
        <div class="form-group" style="margin-top:10%; margin-left:20%; width:80%;">
          <label>하루 기준 몇 갑(개비)을 피우시나요?</label>
          <div class="form-check" style="margin-top:5%;">
            <input class="form-check-input" id="smokingAmount1" type="radio" value="5개비 이하" v-model="smokingAmount" @click="smokingAmountCheck">
            <label class="form-check-label" for="smokingAmount1">5개비 이하</label>
          </div>
          <div class="form-check">
            <input class="form-check-input" id="smokingAmount2" type="radio" value="10개비 이하" v-model="smokingAmount" @click="smokingAmountCheck">
            <label class="form-check-label" for="smokingAmount2">10개비 이하</label>
          </div>
          <div class="form-check">
            <input class="form-check-input" id="smokingAmount3" type="radio" value="1갑 이상" v-model="smokingAmount" @click="smokingAmountCheck">
            <label class="form-check-label" for="smokingAmount3">1갑 이상</label>
          </div>
        </div>
      </div>
      <div style="width:80%; margin-left:10%; margin-top:20%; border-bottom: 1px solid #5B1A7C; opacity: 0.2;"></div>
    </form>

    <div style="display:flex; justify-content:center; align-items:center; width:100%; height:100px; padding-inline: 25%; text-align: center;">
      <div style="width:100%; display:flex; padding-inline: 20%;">
        <div style="width:40%; display:flex; ">
          <router-link :to="{ name: 'WeightCheckPage' }" type="submit" class="btn btn-primary" 
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
  </div>
</template>

<script>

import CommonTabsForm from '@/components/survey/commonCheckList/CommonTabsForm.vue';

export default {
  name: 'SmokingCheck',
  components: { CommonTabsForm },
  data() {
    return {
      commonSurveyResult: {},
      smoking: "",
      smokingAmount: '',
      next: { smoking: false, smokingAmount: false }
    }
  },
  mounted() {
    let commonSurveyResult = JSON.parse(localStorage.getItem('commonSurveyResult'));
    if(commonSurveyResult != null) {
      this.commonSurveyResult = commonSurveyResult;

      let smoking = this.commonSurveyResult.smoking;
      if(!(smoking == null || smoking == '' || smoking == undefined)) {
        this.next.smoking = true;
        this.smoking = smoking;
      }
      
      let smokingAmount = this.commonSurveyResult.smokingAmount;
      if(!(smokingAmount == null || smokingAmount == '' || smokingAmount == undefined)) {
        this.next.smokingAmount = true;
        this.smokingAmount = smokingAmount;
      }
    }
    
    this.beforeCheck(this.commonSurveyResult.gender, "GenderCheckPage", "성별 선택이 제대로 되지 않았습니다.\n성별 선택 페이지로 이동합니다.");
    this.beforeCheck(this.commonSurveyResult.age, "AgeCheckPage", "나이 선택이 제대로 되지 않았습니다.\n나이 선택 페이지로 이동합니다.");
    this.beforeCheck(this.commonSurveyResult.weight, "BodyCheckPage", "몸무게 입력이 제대로 되지 않았습니다.\n몸무게 입력 페이지로 이동합니다.");
    this.beforeCheck(this.commonSurveyResult.height, "BodyCheckPage", "키 입력이 제대로 되지 않았습니다.\n키 입력 페이지로 이동합니다.");
  },
  methods: {
    beforeCheck(key, url, message) {
      if(key == null || key == '' || key == undefined) {
        alert(message);
        this.$router.push({ name: url })
      }
    },
    smokingCheck() {
      this.next.smoking = true;
    },
    smokingAmountCheck() {
      this.next.smokingAmount = true;
    },
    nextPage() {
      if(this.next.smoking == false) {
        alert("흡연 여부를 체크해주세요.");
        return;
      }
      if(this.smoking == "true" && this.next.smokingAmount == false) {
        alert("흡연량을 체크해주세요.");
        return;
      }

      this.commonSurveyResult.smoking = this.smoking;
      if(this.smoking == "false") this.commonSurveyResult.smokingAmount = "";
      else this.commonSurveyResult.smokingAmount = this.smokingAmount;
      localStorage.setItem('commonSurveyResult', JSON.stringify(this.commonSurveyResult));
      this.$router.push({ name: "DrinkingCheckPage" });
    }
  }
}

</script>

<style scoped>
  .form-radio ul {
    display: grid;
    gap: 12px;
    grid-template-columns: repeat(2, 1fr);
  }
  .form-radio ul input[type="radio"] + label {
    padding: 10px 70px 10px 70px;
  }
</style>