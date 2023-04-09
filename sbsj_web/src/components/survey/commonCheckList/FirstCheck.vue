<template>
  <body>
    <div style="padding-inline: 10%; margin-top:3%;">
      
      <div class="container">
        <div style="width: 100%; text-align: right;">
            <router-link :to="{ name: 'SurveyPage' }" style="color: #5B1A7C;">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
              </svg>
            </router-link>
        </div>
      </div>

        <div style="display: flex; ">
            <div style="display: flex; width:100%; height:50px; justify-content:center; border-bottom: 5px solid #5B1A7C;">
                <div style="display:flex; ">
                    <svg  xmlns="http://www.w3.org/2000/svg" width="30" height="30" class="bi bi-1-circle-fill" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM9.283 4.002H7.971L6.072 5.385v1.271l1.834-1.318h.065V12h1.312V4.002Z"/>
                    </svg>
                    <div>
                      <div style="width: 100%; font-size:larger; color:#5B1A7C;"> &nbsp; 기본정보</div>
                    </div>
                </div>
            </div>
            &nbsp;&nbsp;
            <div style="display: flex; width: 100%; height:50px; justify-content: center; border-bottom: 5px solid #5B1A7C; opacity: 0.2;">
                <div style="display:flex;">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" class="bi bi-2-circle-fill" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM6.646 6.24c0-.691.493-1.306 1.336-1.306.756 0 1.313.492 1.313 1.236 0 .697-.469 1.23-.902 1.705l-2.971 3.293V12h5.344v-1.107H7.268v-.077l1.974-2.22.096-.107c.688-.763 1.287-1.428 1.287-2.43 0-1.266-1.031-2.215-2.613-2.215-1.758 0-2.637 1.19-2.637 2.402v.065h1.271v-.07Z"/>
                    </svg>
                    <div style="width: 100%; font-size:larger; color:#5B1A7C"> &nbsp; 라이프스타일</div>
                </div>
            </div>
            &nbsp;&nbsp;
              <div style="display: flex; width: 100%; height:50px; justify-content: center; border-bottom: 5px solid #5B1A7C; opacity: 0.2;">
                  <div style="display:flex;">
                      <svg xmlns="http://www.w3.org/2000/svg"  width="30" height="30" class="bi bi-3-circle-fill" viewBox="0 0 16 16">
                          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0Zm-8.082.414c.92 0 1.535.54 1.541 1.318.012.791-.615 1.36-1.588 1.354-.861-.006-1.482-.469-1.54-1.066H5.104c.047 1.177 1.05 2.144 2.754 2.144 1.653 0 2.954-.937 2.93-2.396-.023-1.278-1.031-1.846-1.734-1.916v-.07c.597-.1 1.505-.739 1.482-1.876-.03-1.177-1.043-2.074-2.637-2.062-1.675.006-2.59.984-2.625 2.12h1.248c.036-.556.557-1.054 1.348-1.054.785 0 1.348.486 1.348 1.195.006.715-.563 1.237-1.342 1.237h-.838v1.072h.879Z"/>
                      </svg> 
                      <div style="width: 100%; font-size:larger; color:#5B1A7C"> &nbsp; 관심건강</div>
                  </div>
              </div>
        </div>

      
        <form style="padding-inline: 30%;">
            <div >
              <div style="font-size: xx-large;">
                  <div style="margin-top:10%; height:100%; width:100%; display:flex; justify-content:start; align-items:center; font-weight: 100;">
                      <p style="margin-top:3%; font-weight: bold;">성별</p>
                      을 알려주세요.
                  </div>
              </div>
            </div>

            <svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
                <symbol id="info-fill" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
                </symbol>
            </svg>

            <div class="alert alert-primary d-flex align-items-center" role="alert" style="width:75%; ">
                <svg class="bi flex-shrink-0 me-2" width="20" height="20" role="img" aria-label="Info:"><use xlink:href="#info-fill"/></svg>
                <div style="font-size: small;">
                성별 및 연령에 따라 추천 영양성분이 달라집니다.
                </div>
            </div>


            <div style=" margin-top:8%; font-size: larger; justify-content:start; align-items:center;" >
              <div class="form-check">
                <input class="form-check-input" type="checkbox" id="male" @click="genderChecked('male')">
                <label class="form-check-label" for="male">남성</label>
              </div>
                <br>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" id="female" @click="genderChecked('female')">
                <label class="form-check-label" for="female" >여성</label>
              </div>
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
                    이전</router-link>
                </div>
            
                <div style="width:100%;">
                    <router-link :to="{ name: 'SecondCheck' }" type="submit" class="btn btn-primary" v-if="next"
                    style="font-weight:bold; display:flex; background-color:#5B1A7C; border-color: #5B1A7C; display:flex; justify-content:center; align-items:center; color:white;">
                    <button @click="nextPage">다음</button></router-link>
                </div>
            </div>
        </div>
        
    </div>
</body>

</template>

<script>
export default {
  name: "FirstCheck",
  data() {
    return {
      next: false
    }
  },
  methods: {
    genderChecked(gender) {
      if(gender === 'male') {
        document.getElementsByClassName("form-check-input")[0].checked = true
        document.getElementsByClassName("form-check-input")[1].checked = false
      } else {
        document.getElementsByClassName("form-check-input")[1].checked = true
        document.getElementsByClassName("form-check-input")[0].checked = false
      }
      this.next = true;
    },
    nextPage() {
      if(this.next){
        router.push({ name: 'SecondCheck' })
      }
    }
  },
}

        
  


</script>

<style>

</style>