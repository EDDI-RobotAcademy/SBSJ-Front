<template>
  <v-container >

    
    <div class="container">
      <h1>PICK YOUR ENERGY</h1>
      <p>개선하고 싶은 부분을 순서대로 골라주세요.</p>
      <p>최대 3개까지 선택할 수 있어요.</p>
    </div> 
    
    <div>
          <div style="display: flex; justify-content: space-between; width:100%;">
            <div style="text-align: center; width:50% ">주요장기 관련 </div>
            <div style="text-align: center; width:50% ">건강검진 항목 관련 </div>
          </div>
      </div>
      
    <form>
      <div style="margin-top: 30px; text-align: center; width: 100%; height: 100%;">
            <div style=" width: 100%; height: 100%;" >

              <div style="display: flex; margin-bottom:17px; " >
                <div style="text-align: center; width:50%;  "> 
                  <button class="btn btn-outline-primary" type="button" name="brain" @click="toggleActive($event.target, $event.target.name)">뇌 건강</button>
                  </div> 
                  <div style="width:50%  ">
                      <button class="btn btn-outline-primary" type="button" name="vitality" @click="toggleActive($event.target, $event.target.name)">활력/피로</button>
                    </div>
                  </div>
                  
                  <div style="display: flex; margin-bottom: 17px;">
                      <div style="text-align: center; width:50% ">
                        <button class="btn btn-outline-primary" type="button" name="eye" @click="toggleActive($event.target, $event.target.name)">눈 건강</button>
                      </div>
                      <div style="width:50% ">
                          <button class="btn btn-outline-primary" type="button" name="fat" @click="toggleActive($event.target, $event.target.name)" >체지방 관리</button>
                      </div>
                  </div>

                  <div style="display: flex; margin-bottom: 17px;">
                    <div style="text-align: center; width:50% ">
                      <button class="btn btn-outline-primary" type="button" name="bone" @click="toggleActive($event.target, $event.target.name)">뼈 건강</button>
                      </div>
                      <div style="width:50% ">
                          <button class="btn btn-outline-primary" type="button" name="cholesterol" @click="toggleActive($event.target, $event.target.name)">콜레스테롤</button>
                        </div>
                  </div>

                  <div style="display: flex; margin-bottom: 17px;">
                      <div style="text-align: center; width:50% ">
                          <button class="btn btn-outline-primary" type="button" name="Liver" @click="toggleActive($event.target, $event.target.name)">위 건강</button>
                      </div>
                      <div style="width:50% ">
                          <button class="btn btn-outline-primary" type="button" name="sugar" @click="toggleActive($event.target, $event.target.name)">혈당 관리</button>
                      </div>
                    </div>
                    

                  <div style="display: flex; margin-bottom: 17px;">
                      <div style="text-align: center; width:50% ">
                          <button class="btn btn-outline-primary" type="button" name="intestine" @click="toggleActive($event.target, $event.target.name)">장 건강</button>
                      </div>
                      <div style="width:50% ">
                          <button class="btn btn-outline-primary" type="button" name="pressure" @click="toggleActive($event.target, $event.target.name)" >혈압 관리</button>
                      </div>
                  </div>
                      
                      <div style="  text-align: right; width: 100% ">
                        <router-link :to="{ name: 'AfterCheckPage' }" type="submit" class="btn btn-primary" style="border-color: white; background-color: white; color: #5B1A7C;" >넘어가기</router-link>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                          <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                        </svg>
                      </div>

              </div>
          </div>
    </form>
        
  </v-container>
</template>

<script>
export default {
  name: 'DetailSurveyForm',
  
  data() {
    return {
      checkList: { brain: false, eye: false, bone: false, liver: false, 
        intestine: false, vitality: false, fat: false, cholesterol: false, sugar: false, pressure: false }
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