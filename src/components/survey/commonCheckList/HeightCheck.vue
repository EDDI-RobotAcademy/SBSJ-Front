<template>
  <div style="padding-inline: 10%; margin-top:3%;">
    <common-tabs-form/>
    <form style="padding-inline: 30%;">
      <div>
        <div style="font-size: xx-large;">
          <div style="margin-top:10%; height:100%; width:100%; display:flex; justify-content:start; align-items:center; font-weight: 100;">
            <p style="margin-top:3%; font-weight: bold;">키</p>를 알려주세요.
          </div>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
        <symbol id="info-fill" fill="currentColor" viewBox="0 0 16 16">
          <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
        </symbol>
      </svg>
      <div class="alert alert-primary d-flex align-items-center" role="alert">
        <svg class="bi flex-shrink-0 me-2" width="20" height="20" role="img" aria-label="Info:"><use xlink:href="#info-fill"/></svg>
        <div style="font-size: small; padding-right: 10px;">
          몸무게와 키는 고객님의 정확한 BMI체질량지수 계산 및 영양성분 추천에 필요합니다. (30 ~ 300 사이의 값만 입력이 가능합니다.)
        </div>
      </div>
      <div class="input-group mb-3" style="margin-top: 10%;">
        <span class="input-group-text" id="inputGroup-sizing-default">키</span>
        <input type="number" min="30" max="300" onkeydown="javascript: return event.keyCode == 69 ? false : true" class="form-control" 
          id="height" placeholder="cm단위로 입력해주세요."  v-model="height" @input="validCheck($event.target)">
      </div>  
      <div style="margin-top:20%; border-bottom: 1px solid #5B1A7C; opacity: 0.2;"></div>
    </form>

    <div style="display:flex; justify-content:center; align-items:center; height:100px; padding-inline: 15%; text-align: center;">
      <div style="width:100%; display:flex; padding-inline: 20%;">
        <div style="width:40%; display:flex; ">
          <router-link :to="{ name: 'AgeCheckPage' }" type="submit" class="btn btn-primary" 
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
  name: "HeightCheck",
  components: { CommonTabsForm },
  data() {
    return {
      commonSurveyResult: {},
      height: "",
      next: false
    };
  },
  mounted() {
    let commonSurveyResult = JSON.parse(localStorage.getItem('commonSurveyResult'));
    if(commonSurveyResult != null) {
      this.commonSurveyResult = commonSurveyResult;

      let height = this.commonSurveyResult.height;
      this.inputCheck(height);
    }
    this.beforeCheck(this.commonSurveyResult.gender, "GenderCheckPage", "성별 선택이 제대로 되지 않았습니다.\n성별 선택 페이지로 이동합니다.");
    this.beforeCheck(this.commonSurveyResult.age, "AgeCheckPage", "나이 선택이 제대로 되지 않았습니다.\n나이 선택 페이지로 이동합니다.");
  },
  methods: {
    beforeCheck(key, url, message) {
      if(key == null || key == '' || key == undefined) {
        alert(message);
        this.$router.push({ name: url })
      }
    },
    validCheck(event) {
      let id = event.id;
      if (event.value < 0) {
        if(id == 'height') this.height = '';
        alert("음수 값을 입력할 수 없습니다.");
      } else if (event.value > 300) {
        if(id == 'height') this.height = '';
        alert("300 미만 숫자만 입력 가능합니다.");
      } else {
        this.next = true;
      }
    },
    inputCheck(height) {
      if(height == null || height == '' || height == undefined) {
        this.next = false;
      } else {
        this.height = height;
        this.next = true;
      }
    },
    nextPage() {
      this.inputCheck(this.height);
      if(this.next == false) {
        alert("키를 형식에 맞게 입력해주세요.");
        return;
      }

      this.commonSurveyResult.height = this.height;
      localStorage.setItem('commonSurveyResult', JSON.stringify(this.commonSurveyResult));
      this.$router.push({ name: "WeightCheckPage" });
    },
  }
}

</script>

<style scoped>
  input[type="number"]::-webkit-outer-spin-button,
  input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
</style>