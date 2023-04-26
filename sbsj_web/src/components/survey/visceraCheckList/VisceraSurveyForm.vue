<template>
  <div style="padding-inline: 10%; margin-top:3%;">
    <viscera-tabs-form/>
    <div>
      <div style="font-size: xx-large;">
        <div style="margin-top:5%; height:100%; width:100%; display:flex; justify-content:center; align-items:center; font-weight: 100;">
            <div style=" font-weight: bold; ">개선</div>하고싶은 곳을 선택해주세요.
        </div>
      </div>
      <div style="text-align: center; margin-top:3%;">주요장기 관련</div>
    </div>
    
    <form>
      <div style="text-align:center; width:100%; height:50%; display:flex; justify-content:center; align-items:center;">
        <div class="form-radio2" style="margin-top: 5%;">
          <ul class="ul">
            <li>
              <input type="radio" name="viscera" id="brain" value="뇌 건강" v-model="viscera" @click="selectViscera">
              <label class="form-check-label" for="brain">뇌 건강</label>
            </li>
            <li>
              <input type="radio" name="viscera" id="eye" value="눈 건강" v-model="viscera" @click="selectViscera">
              <label class="form-check-label" for="eye">눈 건강</label>
            </li>
            <li>
              <input type="radio" name="viscera" id="bone" value="뼈 건강" v-model="viscera" @click="selectViscera">
              <label class="form-check-label" for="bone">뼈 건강</label>
            </li>
            <li>
              <input type="radio" name="viscera" id="liver" value="간 건강" v-model="viscera" @click="selectViscera">
              <label class="form-check-label" for="liver">간 건강</label>
            </li>
            <li>
              <input type="radio" name="viscera" id="intestine" value="장 건강" v-model="viscera" @click="selectViscera">
              <label class="form-check-label" for="intestine">장 건강</label>
            </li>
          </ul>
        </div>
      </div>
    </form>

    <div style="display:flex; justify-content:center; align-items:center; height:100px; padding-inline: 15%; text-align: center;">
      <div style="width:100%; display:flex; padding-inline: 20%;">
        <div style="width:40%; display:flex; ">
          <router-link :to="{ name: 'ExercisingCheckPage' }" type="submit" class="btn btn-primary" 
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

import VisceraTabsForm from '@/components/survey/visceraCheckList/VisceraTabsForm.vue';

export default {
  name: 'VisceraSurveyForm',
  components: { VisceraTabsForm },
  data() {
    return {
      visceraSurveyResult: {},
      viscera: '',
      next: false
    };
  },
  mounted() {
    let visceraSurveyResult = JSON.parse(localStorage.getItem('visceraSurveyResult'));
    if(visceraSurveyResult != null) {
      this.visceraSurveyResult = visceraSurveyResult;
      this.viscera = this.visceraSurveyResult.viscera;
      if(this.viscera == null || this.viscera == '' || this.viscera == undefined) {
        this.viscera = '';
      } else {
        this.next = true;
      }
    }
  },
  methods: {
    selectViscera() {
      this.next = true;
    },
    nextPage() {
      if(this.next) {
        // 뼈 건강 -> 질문 선택 후 다음 -> 다시 뇌 건강 갔을 때 뼈 건강 질문 선택한 거 지우기
        if(this.visceraSurveyResult.viscera != this.viscera) {
          localStorage.removeItem('visceraSurveyResult');
          this.visceraSurveyResult = {};
        }

        this.visceraSurveyResult.viscera = this.viscera;
        localStorage.setItem('visceraSurveyResult', JSON.stringify(this.visceraSurveyResult));
        
        let url = this.getNextPage();
        this.$router.push({ name: url })
      } else {
        alert("장기를 선택해주세요.");
      }
    },
    getNextPage() {
      switch (this.viscera) {
        case '뇌 건강':
          return 'BrainCheckPage';
        case '눈 건강':
          return 'EyeCheckPage';
        case '뼈 건강':
          return 'BoneCheckPage';
        case '간 건강':
          return 'LiverCheckPage';
        case '장 건강':
          return 'IntestineCheckPage';
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