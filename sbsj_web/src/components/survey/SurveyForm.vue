<template>
  <body>

  <div class="container">
    <div class="col-auto">
      <div class="container">
        <h1>PICK YOUR ENERGY</h1>
        <p>아래 질문에 답해주세요.</p>
      </div>

      <form>
        <div class="col-auto row-auto">
          <label>성별을 알려주세요.</label>
          <div class="d-grid gap-2 d-md-block">
            <button class="btn btn-primary btn-sm" type="button"> 남성 </button> 
            &nbsp;
            <button class="btn btn-primary btn-sm" type="button"> 여성 </button>
          </div>
         </div>

        <br>


        <div class="col-3">
          <label>나이를 알려주세요.</label>
          <div>
            <select class="form-select" aria-label="Default select example">
              <option value="option1">19세 이하</option>
              <option value="option2">20 ~ 29세</option>
              <option value="option3">30 ~ 39세</option>
              <option value="option3">50 ~ 59세</option>
              <option value="option3">60세 이상</option>
            </select>
          </div>
        </div>

          <br>

        <div class="col-auto">
          <div class="form-group">
            <label for="question1">흡연을 하나요?</label>
            <div>
              <button class="btn btn-outline-primary" type="button" @click="smoke(true)">Y</button>
              &nbsp;
              <button class="btn btn-outline-primary" type="button" @click="smoke(false)">N</button>
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
              <button class="btn btn-outline-primary" type="button" @click="drink(true)">Y</button>
              &nbsp;
              <button class="btn btn-outline-primary" type="button" @click="drink(false)">N</button>
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
          <button class="btn btn-outline-primary" type="button" @click="exercise(true)">Y</button>
          &nbsp;
          <button class="btn btn-outline-primary" type="button" @click="exercise(false)">N</button>
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

        <div class="col-auto">
          <div class="row-3" align="left">
            <router-link :to="{ name: 'DetailSurveyPage' }" type="submit" align="left" class="btn btn-primary">상세 건강 페이지로 이동</router-link>
          </div>
          <div class="row-3" align="right">
            <button type="reset"  align="right" class="btn btn-secondary">초기화</button>
          </div>
        </div>

      </form>
    </div>
  </div>
  </body>

</template>

<script>
export default {
  name: 'SurveyForm',
  data() {
    return {
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