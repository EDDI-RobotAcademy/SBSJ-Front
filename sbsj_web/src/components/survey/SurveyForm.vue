<template>
  <body>
  <div class="container">
    <div class="col-auto">
      <div class="container">
        <h1>PICK YOUR ENERGY</h1>
      </div>

      <div style="display: flex; ">
            <div style="display: flex; width:100%; height:50px; justify-content:center; border-bottom: 5px solid #5B1A7C;">
                <div style="display:flex; ">
                    <svg  xmlns="http://www.w3.org/2000/svg" width="30" height="30" class="bi bi-1-circle-fill" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM9.283 4.002H7.971L6.072 5.385v1.271l1.834-1.318h.065V12h1.312V4.002Z"/>
                    </svg>
                    <div>
                    <div style="width: 100%; font-size:larger; "> &nbsp; 기본정보</div>
                    </div>
                </div>
            </div>
            &nbsp;&nbsp;
            <div style="display: flex; width: 100%; height:50px; justify-content: center; border-bottom: 5px solid #5B1A7C;">
                <div style="display:flex;">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" class="bi bi-2-circle-fill" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM6.646 6.24c0-.691.493-1.306 1.336-1.306.756 0 1.313.492 1.313 1.236 0 .697-.469 1.23-.902 1.705l-2.971 3.293V12h5.344v-1.107H7.268v-.077l1.974-2.22.096-.107c.688-.763 1.287-1.428 1.287-2.43 0-1.266-1.031-2.215-2.613-2.215-1.758 0-2.637 1.19-2.637 2.402v.065h1.271v-.07Z"/>
                    </svg>
                    <div style="width: 100%; font-size:larger;"> &nbsp; 라이프스타일</div>
                </div>
            </div>
            &nbsp;&nbsp;
            <div style="display: flex; width: 100%; height:50px; justify-content: center; border-bottom: 5px solid #5B1A7C;">
                <div style="display:flex;">
                    <svg xmlns="http://www.w3.org/2000/svg"  width="30" height="30" class="bi bi-3-circle-fill" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0Zm-8.082.414c.92 0 1.535.54 1.541 1.318.012.791-.615 1.36-1.588 1.354-.861-.006-1.482-.469-1.54-1.066H5.104c.047 1.177 1.05 2.144 2.754 2.144 1.653 0 2.954-.937 2.93-2.396-.023-1.278-1.031-1.846-1.734-1.916v-.07c.597-.1 1.505-.739 1.482-1.876-.03-1.177-1.043-2.074-2.637-2.062-1.675.006-2.59.984-2.625 2.12h1.248c.036-.556.557-1.054 1.348-1.054.785 0 1.348.486 1.348 1.195.006.715-.563 1.237-1.342 1.237h-.838v1.072h.879Z"/>
                    </svg> 
                    <div style="width: 100%; font-size:larger"> &nbsp; 관심건강</div>
                </div>
            </div>
        </div>

        <br>


        <div class="col-auto">
          <div class="form-group">
            <label for="question1">흡연을 하나요?</label>
            <div>
              <button class="btn btn-outline-primary" type="button" name="yesSmoke" @click="smoke(true)">Y</button>
              &nbsp;
              <button class="btn btn-outline-primary" type="button" name="noSmoke" @click="smoke(false)">N</button>
            </div>
          </div>
        </div>

          <div v-if="SmokingFrequency">
            <div class="form-group">
              <label>하루 기준 몇 갑을 피우시나요?</label>
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="smokingAmount" value="5개비 이하" v-model="SmokingAmount">
                  <label class="form-check-label" for="smokingAmount1">5개비 이하</label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="smokingAmount" value="10개비 이하" v-model="SmokingAmount">
                  <label class="form-check-label" for="smokingAmount2">10개비 이하</label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="smokingAmount" value="1갑 이상" v-model="SmokingAmount">
                  <label class="form-check-label" for="smokingAmount3">1갑 이상</label>
                </div>
            </div>
          </div>

        <br>

          <div>
            <div class="col-auto">
              <div class="form-group">
              <label for="question2">음주를 하나요?</label>
              <div>
                <button class="btn btn-outline-primary" type="button" name="yesdrink" @click="drink(true)">Y</button>
                &nbsp;
                <button class="btn btn-outline-primary" type="button" name="nodrink" @click="drink(false)">N</button>
              </div>
            </div>
          </div>

          <div v-if="DrinkingFrequency">
            <div class="form-group">
                <label>일주일 기준으로 몇 회 정도를 마시나요?</label>
                <div class="form-check">
                  <input class="form-check-input" name="drinkingAmount" type="radio">
                  <label class="form-check-label">주 1 ~ 2회</label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" name="drinkingAmount" type="radio">
                  <label class="form-check-label">주 3 ~ 4회</label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" name="drinkingAmount" type="radio">
                  <label class="form-check-label">주 5회 이상</label>
                </div>
              </div>
            </div>
          </div>

        <br>

        
          <div>
          <div class="col-auto">
            <div class="form-group">
              <label for="question3">야외활동을 많이 하는 편인가요?</label>
              <div>
                <button class="btn btn-outline-primary" type="button" name="yesexcercise" @click="exercise(true)">Y</button>
                &nbsp;
                <button class="btn btn-outline-primary" type="button" name="noexcercise " @click="exercise(false)">N</button>
              </div>
            </div>
        </div>
    
        <div v-if="ExercisingFrequency">
          <div class="form-group">
            <label>야외활동</label>
              <div class="form-check">
                  <input class="form-check-input" name="ExercisingAmount" type="radio">
                  <label class="form-check-label">주 1 ~ 2회</label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" name="ExercisingAmount" type="radio">
                  <label class="form-check-label">주 3 ~ 4회</label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" name="ExercisingAmount" type="radio">
                  <label class="form-check-label">주 5회 이상</label>
                </div>
              </div>
          </div>
        </div>

        <br>

          <div style="display: flex; width:100%;" >
            <router-link :to="{ name: 'DetailSurveyPage' }" type="submit" align="left" class="btn btn-primary" style="width:50%;">상세 건강 페이지로 이동</router-link>

            <div style="width: 100%; text-align: right;">
              <button type="reset" align="right" class="btn btn-secondary">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
                  <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
                </svg>
              </button>
            </div>
          </div>
    </div>
  </div>
</body>

</template>

<script>
export default {
  name: 'SurveyForm',
  data() {
    return {
      male: false,
      feMale: false,
      ExercisingFrequency: false,
      DrinkingFrequency: false,
      SmokingFrequency: false
    }
  },
  methods: {
    
    smoke(isSmoke) {
      if(isSmoke === true) {
        this.SmokingFrequency = true
      } else {
        this.SmokingFrequency = false
      }
    },
    drink(isDrink) {
      if(isDrink === true) {
        this.DrinkingFrequency = true
      } else {
        this.DrinkingFrequency = false
      }
    },
    exercise(isExercise) {
      if(isExercise === true) {
        this.ExercisingFrequency = true
      } else {
        this.ExercisingFrequency = false
      }
    },
  }
}
</script>

<style>

</style>