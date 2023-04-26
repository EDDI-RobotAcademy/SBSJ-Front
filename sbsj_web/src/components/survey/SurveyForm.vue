<template>
  <div class="survey_intro">
    <div class="content">
      <div class="tit_area">
        <p class="tit">
            건강설문으로<br>내 몸에 꼭 필요한<br><strong>영양성분을 추천 받으세요!</strong>
        </p>
      </div>
      <div class="info_list_div">
        <div class="swiper-container swiper-container-initialized swiper-container-horizontal">
          <div class="swiper-wrapper">
            <div class="swiper-slide list swiper-slide-active">
              <div class="img">
                <img src="@/assets/survey/icon/icn_ipu_intro_01.svg" class="cont">
              </div>
              <div class="info_list_txt">
                <p class="tit">약 3분 소요</p>
                <p class="desc">쉽고 편하게 답변할 수 있는</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="survey_intro_btn">
        <router-link :to="{ name: 'UsernameCheckPage' }" type="submit" class="btn btn-outline-primary" 
          style="font-weight: bold;">설문 시작하기</router-link>
      </div>
    </div>
  </div>
</template>
  
<script>

export default {
  name: 'SurveyForm'
}

</script>

<style scoped>
  .survey_intro .content .tit_area .tit {
    font-size: 30px;
    line-height: 42px;
    font-weight: 400;
    color: #000;
    letter-spacing: -0.5px;
    text-align: center;
  }
  p {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }
  .survey_intro .content .info_list_div .swiper-container {
    padding-top: 50px;
    padding-bottom: 32px;
  }
  .survey_intro .content .info_list_div .swiper-container .swiper-wrapper .swiper-slide {
    width: 267px;
    text-align: center;
  }
  .survey_intro .content .info_list_div .swiper-container .swiper-wrapper .swiper-slide-active {
    margin: 0 auto 0 auto;
  }
  .survey_intro .content .info_list_div .swiper-container .swiper-wrapper .img {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 256px;
    height: 256px;
    background: #fff;
    border-radius: 50%;
    box-shadow: 0 0 30px 0 #eee;
  }
  .survey_intro .content .info_list_div .swiper-container .swiper-wrapper .info_list_txt {
    margin-top: 30px;
  }
  .survey_intro .content .info_list_div .swiper-container .swiper-wrapper .info_list_txt .tit {
    font-size: 22px;
    font-weight: bold;
    line-height: 30px;
    color: #000;
    margin-bottom: 4px;
  }
  .survey_intro .content .info_list_div .swiper-container .swiper-wrapper .info_list_txt .desc {
    font-size: 20px;
    font-weight: 300;
    line-height: 30px;
    color: #180e33;
  }
  .survey_intro .content .survey_intro_btn a.btn {
    position: relative;
    margin: 30px auto 30px auto;
    display: block;
    width: 380px;
    font-size: 16px;
    line-height: 20px;
    font-weight: 500;
    color: #fff;
    background: #5b1a7c;
    border-radius: 6px;
    padding: 18px 11px;
    text-align: center;
  }

</style>