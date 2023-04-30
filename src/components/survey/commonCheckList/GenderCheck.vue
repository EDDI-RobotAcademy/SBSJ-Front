<template>
  <div style="padding-inline: 10%; margin-top:3%;">
    <common-tabs-form/>
    <form style="padding-inline: 30%;">
      <div>
        <div style="font-size: xx-large;">
          <div style="margin-top:10%; height:100%; width:100%; display:flex; justify-content:start; align-items:center; font-weight: 100;">
            <p style="margin-top:3%; font-weight: bold;">성별</p>을 알려주세요.
          </div>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
        <symbol id="info-fill" fill="currentColor" viewBox="0 0 16 16">
          <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
        </symbol>
      </svg>
      <div class="alert alert-primary d-flex align-items-center" role="alert" style="width:80%; ">
        <svg class="bi flex-shrink-0 me-2" width="20" height="20" role="img" aria-label="Info:"><use xlink:href="#info-fill"/></svg>
        <div style="font-size: small;">성별 및 연령에 따라 추천 영양성분이 달라집니다.</div>
      </div>
      <div class="form-radio" style=" margin-top:8%;">
        <ul>
          <li>
            <input type="radio" name="gender" id="male" value="남성" v-model="gender" @click="genderCheck" checked="checked">
            <label for="male">
              <img src="@/assets/survey/chk_img_male.png">
              <p class="text">남성</p>
          </label>
          </li>
          <li>
            <input type="radio" name="gender" id="female" value="여성" v-model="gender" @click="genderCheck">
            <label for="female">
              <img src="@/assets/survey/chk_img_female.png">
              <p class="text">여성</p>
            </label>
          </li>
        </ul>
      </div>
      <div style="margin-top:20%; border-bottom: 1px solid #5B1A7C; opacity: 0.2;"></div>
    </form>

    <div style="display:flex; justify-content:center; align-items:center; height:100px; padding-inline: 15%; text-align: center;">
      <div style="width:100%; display:flex; padding-inline: 20%;">
        <div style="width:40%; display:flex; ">
          <router-link :to="{ name: 'UsernameCheckPage' }" type="submit" class="btn btn-primary" 
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
  name: "GenderCheck",
  components: { CommonTabsForm },
  data() {
    return {
      commonSurveyResult: {},
      gender: '',
      next: false
    }
  },
  mounted() {
    let commonSurveyResult = JSON.parse(localStorage.getItem('commonSurveyResult'));
    if(commonSurveyResult != null) {
      this.commonSurveyResult = commonSurveyResult;
      if(this.commonSurveyResult.gender === "남성") {
        this.gender = "남성";
        this.next = true;
      } else if (this.commonSurveyResult.gender === "여성") {
        this.gender = "여성";
        this.next = true;
      }
    }
  },
  methods: {
    genderCheck() {
      this.next = true;
    },
    nextPage() {
      if(this.gender == "male" || this.gender == "female") {
        this.next = true;
      }
      
      if(this.next){
        this.commonSurveyResult.gender = this.gender;
        localStorage.setItem('commonSurveyResult', JSON.stringify(this.commonSurveyResult));
        this.$router.push({ name: 'AgeCheckPage' })
      } else {
        alert("성별 체크를 해주세요.");
      }
    }
  },
}

</script>

<style>

  .form-radio li {
    padding: 0;
    list-style-type: none;
    margin: auto;
  }
  .form-radio ul {
    display: grid;
    gap: 12px;
    grid-template-columns: repeat(2, 1fr);
  }
  .form-radio img {
    width: 40px;
  }
  .form-radio ul input[type="radio"] + label {
    padding: 15px 70px 0px 70px;
  }
</style>