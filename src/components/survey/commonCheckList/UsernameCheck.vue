<template>
    <div style="padding-inline: 10%; margin-top:3%;">
      <common-tabs-form/>
      <form style="padding-inline: 30%;">
        <div>
          <div style="font-size: xx-large;">
            <div style="margin-top:10%; height:100%; width:100%; display:flex; justify-content:start; align-items:center; font-weight: 100;">
              <p style="margin-top:3%; font-weight: bold;">이름</p>을 알려주세요.
            </div>
          </div>
        </div>
        <div class="input-group mb-3" style="margin-top: 10%;">
          <span class="input-group-text" id="inputGroup-sizing-default">이름</span>
          <input type="text" class="form-control" id="username" v-model="username" placeholder="이름을 입력해주세요.">
        </div>
        <div style="margin-top:20%; border-bottom: 1px solid #5B1A7C; opacity: 0.2;"></div>
      </form>
  
      <div style="display:flex; justify-content:center; align-items:center; height:100px; padding-inline: 15%; text-align: center;">
        <div style="width:100%; display:flex; padding-inline: 20%;">
          <div style="width:40%; display:flex; ">
            <router-link :to="{ name: 'SurveyPage' }" type="submit" class="btn btn-primary" 
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
    name: "UsernameCheck",
    components: { CommonTabsForm },
    data() {
      return {
        commonSurveyResult: {},
        username: "",
        next: false,
      };
    },
    mounted() {
      let commonSurveyResult = JSON.parse(localStorage.getItem('commonSurveyResult'));
      if(commonSurveyResult != null) {
        this.commonSurveyResult = commonSurveyResult;
  
        let username = this.commonSurveyResult.username;
        this.inputCheck(username);
      }
    },
    methods: {
      beforeCheck(key, url, message) {
        if(key == null || key == '' || key == undefined) {
          alert(message);
          this.$router.push({ name: url })
        }
      },
      inputCheck(username) {
        if(username == null || username == '' || username == undefined) {
          this.next = false;
        } else {
          this.username = username;
          this.next = true;
        }
      },
      nextPage() {
        this.inputCheck(this.username);
        if(this.next == false) {
          alert("이름을 입력해주세요.");
          return;
        }
  
        this.commonSurveyResult.username = this.username;
        localStorage.setItem('commonSurveyResult', JSON.stringify(this.commonSurveyResult));
        this.$router.push({ name: "GenderCheckPage" });
      },
    }
  }
  
  </script>
  
  <style scoped>
  </style>