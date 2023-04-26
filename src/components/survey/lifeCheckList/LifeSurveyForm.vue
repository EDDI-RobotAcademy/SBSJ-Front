<template>
  <div style="padding-inline: 10%; margin-top:3%;">
    <life-tabs-form />
    <div>
      <div style="font-size: xx-large;">
        <div style="margin-top:5%; height:100%; width:100%; display:flex; justify-content:center; align-items:center; font-weight: 100;">
            <div style=" font-weight: bold; ">개선</div>하고싶은 곳을 선택해주세요.
        </div>
      </div>
      <div style="text-align: center; margin-top:3%;">일상생활 관련</div>
    </div>
    
    <form>
      <div style="text-align:center; width:100%; height:50%; display:flex; justify-content:center; align-items:center;">
        <div class="form-radio2" style="margin-top: 5%;">
          <ul class="ul">
            <li>
              <input type="radio" name="life" id="stress" value="스트레스" v-model="life" @click="selectLife">
              <label class="form-check-label" for="stress">스트레스 건강</label>
            </li>
            <li>
              <input type="radio" name="life" id="bodyFat" value="체지방" v-model="life" @click="selectLife">
              <label class="form-check-label" for="bodyFat">체지방 건강</label>
            </li>
            <li>
              <input type="radio" name="life" id="bloodSugar" value="혈당 건강" v-model="life" @click="selectLife">
              <label class="form-check-label" for="bloodSugar">혈당 건강</label>
            </li>
            <li>
              <input type="radio" name="life" id="bloodPressure" value="혈압 건강" v-model="life" @click="selectLife">
              <label class="form-check-label" for="bloodPressure">혈압 건강</label>
            </li>
            <li>
              <input type="radio" name="life" id="skin" value="피부 건강" v-model="life" @click="selectLife">
              <label class="form-check-label" for="skin">피부 건강</label>
            </li>
          </ul>
        </div>
      </div>
    </form>

    <div style="display:flex; justify-content:center; align-items:center; height:100px; padding-inline: 15%; text-align: center;">
      <div style="width:100%; display:flex; padding-inline: 20%;">
        <div style="width:40%; display:flex; ">
          <div class="btn btn-primary" @click="prevPage" style="font-weight:bold; border-color: white; 
            height:100%; background-color: white; color: #5B1A7C; display:flex; justify-content:center; align-items:center;">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
            </svg>
            &nbsp;이전
          </div>
        </div>
        <div style="width:100%;">
          <div class="btn btn-primary" @click="nextPage"
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

import LifeTabsForm from '@/components/survey/lifeCheckList/LifeTabsForm.vue';

export default {
  name: 'LifeSurveyForm',
  components: { LifeTabsForm },
  data() {
    return {
      lifeSurveyResult: {},
      life: '',
      next: false
    };
  },
  mounted() {
    let lifeSurveyResult = JSON.parse(localStorage.getItem('lifeSurveyResult'));
    if(lifeSurveyResult != null) {
      this.lifeSurveyResult = lifeSurveyResult;
      this.life = this.lifeSurveyResult.life;
      if(this.life == null || this.life == '' || this.life == undefined) {
        this.life = '';
      } else {
        this.next = true;
      }
    }
  },
  methods: {
    selectLife() {
      this.next = true;
    },
    prevPage() {
      let visceraSurveyResult = JSON.parse(localStorage.getItem('visceraSurveyResult'));
      let viscera = '';
      if(visceraSurveyResult == null || visceraSurveyResult == undefined || visceraSurveyResult == '') {
          
      } else {
        viscera = visceraSurveyResult.viscera;
      }
      // if(visceraSurveyResult.viscera != null || visceraSurveyResult.viscera != undefined || visceraSurveyResult.viscera != '') {
      //   viscera = visceraSurveyResult.viscera;
      // }

      let prevUrl  = '';
      if(viscera == "뼈 건강") prevUrl = "BoneCheckPage";
      else if(viscera == "뇌 건강") prevUrl = "BrainCheckPage";
      else if(viscera == "눈 건강") prevUrl = "EyeCheckPage";
      else if(viscera == "간 건강") prevUrl = "LiverCheckPage";
      else if(viscera == "장 건강") prevUrl = "IntestineCheckPage";
      else prevUrl = "VisceraSurveyPage";

      this.$router.push({ name: prevUrl });
    },
    nextPage() {
      if(this.next) {
        // 뼈 건강 -> 질문 선택 후 다음 -> 다시 뇌 건강 갔을 때 뼈 건강 질문 선택한 거 지우기
        if(this.lifeSurveyResult.life != this.life) {
          localStorage.removeItem('lifeSurveyResult');
          this.lifeSurveyResult = {};
        }

        this.lifeSurveyResult.life = this.life;
        localStorage.setItem('lifeSurveyResult', JSON.stringify(this.lifeSurveyResult));
        
        let url = this.getNextPage();
        this.$router.push({ name: url })
      } else {
        alert("선택해주세요.");
      }
    },
    getNextPage() {
      switch (this.life) {
        case '스트레스':
          return 'StressCheckPage';
        case '체지방':
          return 'BodyFatCheckPage';
        case '혈당 건강':
          return 'BloodSugarCheckPage';
        case '혈압 건강':
          return 'BloodPressureCheckPage';
        case '피부 건강':
          return 'SkinCheckPage';
        default:
          return '';
      }
    }
  }
}

</script>

<style scoped>
  .container {
    margin-top: 30px;
  }
  p {
    color: rgb(170, 165, 165);
    text-align: center;
  }
  h1 {
    text-align: center;
  }

  .form-radio2 .ul {
    display: grid;
    gap: 8px;
    grid-template-columns: repeat(5, 1fr);
  }
  .form-radio2 li {
    padding: 0;
    list-style-type: none;
    margin: auto;
  }

  .form-radio2 input[type="radio"] {
    display: none;
  }

  .form-radio2 ul input[type="radio"] + label {
    display: inline-block;
    text-align: center;
    box-sizing: border-box;
    background-color: #ffffff;
    border: 1px solid rgba(34,34,34,0.24);
    border-radius: 8px;
    font-weight: 500;
    font-size: 14px;
    padding: 10px 40px 10px 40px;
  }

  .form-radio2 ul input[type="radio"]:checked + label {
    background: rgba(139, 79, 246, 0.1);
    border: 1px solid #8B4FF6;
    color: #8B4FF6;
  }
</style>