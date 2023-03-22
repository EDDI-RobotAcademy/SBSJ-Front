<template>
  <v-container fill-height align-center justify-center>
    <div class="container">
      <h1>PICK YOUR ENERGY</h1>
      <p>개선하고 싶은 부분을 순서대로 골라주세요.</p>
      <p fon>각 항목 최대 3개까지 선택할 수 있어요.</p>
    </div> 
    
      <form>
        <div class="row" style="margin-top: 50px;">
          <p style="text-align: left; margin-left:320px;">주요장기 관련</p>
          <div>
            <div style="text-align: left; margin-left: 330px;">
                <div>
                  <div style="display: inline-block; text-align: left; margin-bottom: 10px;">
                      <button class="btn btn-outline-primary" type="button" name="brain"  id="1" @click="toggleActive($event.target, $event.target.id)">뇌 건강</button>
                  </div>
                    <div style="display: inline-block; text-align: right; margin-left: 400px;">
                        <button class="btn btn-outline-primary" type="button" name="tired" id="1" >활력/피로</button>
                    </div>
                </div>
                <div>
                  <div style="display: inline-block; text-align: left; margin-bottom: 10px;">
                      <button class="btn btn-outline-primary" type="button" name="eye" id="2" @click="toggleActive($event.target, $event.target.id)">눈 건강</button>
                  </div>
                  <div style="display: inline-block; text-align: right; margin-left: 400px;">
                    <button class="btn btn-outline-primary" type="button" >체지방 관리</button>
                    </div>
                </div>
                <div>
                  <div style="display: inline-block; text-align: left; margin-bottom: 10px;">
                      <button class="btn btn-outline-primary" type="button" name="bone" id="3" @click="toggleActive($event.target, $event.target.id)">뼈 건강</button>
                  </div>
                  <div style="display: inline-block; text-align: right; margin-left: 400px;">
                    <button class="btn btn-outline-primary" type="button" >콜레스테롤</button>
                    </div>
                <div>
                  <div style="display: inline-block; text-align: left; margin-bottom: 10px;">
                      <button class="btn btn-outline-primary" type="button" name="Liver" id="4" @click="toggleActive($event.target, $event.target.id)">위 건강</button>
                  </div>
                  <div style="display: inline-block; text-align: right; margin-left: 400px;">
                    <button class="btn btn-outline-primary" type="button" >혈당 관리</button>
                    </div>
                <div>
                  <div style="display: inline-block; text-align: left; margin-bottom: 10px;">
                        <button class="btn btn-outline-primary" type="button" name="intestine" id="5" @click="toggleActive($event.target, $event.target.id)">장 건강</button>
                  </div>
                  <div style="display: inline-block; text-align: right; margin-left: 400px;">
                    <button class="btn btn-outline-primary" type="button" >혈압 관리</button>
                    </div>
                </div>
                  </div>
                </div>
            </div>
          </div>
      </div>
            <div formcheck="radio"></div>
      </form>
        
  </v-container>
</template>

<script>
export default {
  name: 'DetailSurveyForm',
  
  data() {
    return {
      checkList: { brain: false, eye: false, bone: false, liver: false, intestine: false }
    }
  },
  methods: {
      toggleActive(btn, name) {
        let listValues = Object.values(this.checkList);
          let count = 0;
          for(let i=0; i<listValues.length; i++) {
              if(listValues[i] === true) {
                count++;                  
              }
            }

        if(count < 3) {
            if(this.checkList[name] === false) {
                btn.classList.add("active");
                this.checkList[name] = true;
            } else {
                btn.classList.remove("active");
                this.checkList[name] = false;
            }
        } else {
            if(this.checkList[name] === true) {
                btn.classList.remove("active");
                this.checkList[name] = false;
            }
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


</style>