<template>
    <div>
        <div class="inner recommend_div_list">
            <div class="recommend_div accor_div accor counsel_accor on recommend_div0">
                <div class="list on">
                    <a href="javascript:" class="open">
                        <h3 class="tit">설문결과 추천 영양성분</h3>
                    </a>
                    <div class="counsel_accor_inner close" style="display: block;">
                    <div class="list_div">
                        <div class="swiper-container swiper-container-initialized swiper-container-horizontal swiper-container-autoheight">
                            <div class="swiper-wrapper list" style="height: 184px; transform: translate3d(0px, 0px, 0px);">
                                <a href="" class="swiper-slide link_area swiper-slide-active" style="margin-right: 30px;">
                                    <div class="info_text">
                                        <p class="img"><img src="@/assets/productImgs/PERNIT.jpg" alt=""></p>
                                        <div class="txt_area">
                                            <h4 class="name">조인트본 1500</h4>
                                        </div>
                                        <div class="type">
                                            <span class="red-recommend">추천</span>
                                        </div>
                                    </div>
                                </a>
                                <a href="" class="swiper-slide link_area swiper-slide-next" style="margin-right: 30px;">
                                    <div class="info_text">
                                        <p class="img"><img src="@/assets/productImgs/PERNIT.jpg" alt=""></p>
                                        <div class="txt_area">
                                            <h4 class="name">어골칼슘 & 마그네슘 비타민D</h4>
                                        </div>
                                        <div class="type">
                                            <span class="red-recommend">추천</span>
                                        </div>
                                    </div>
                                </a>
                                <a href="" class="swiper-slide link_area" style="margin-right: 30px;">
                                    <div class="info_text">
                                        <p class="img"><img src="@/assets/productImgs/PERNIT.jpg" alt=""></p>
                                        <div class="txt_area">
                                            <h4 class="name">멀티비타민 미네랄 139</h4>
                                        </div>
                                        <div class="type">
                                            <span class="red-recommend">추천</span>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div class="swiper-navigation">
                            <div class="swiper-button-prev"></div>
                            <div class="swiper-button-next"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        <div class="inner">
            <div class="notice_area">
                <p class="txt">위 정보는 이해를 돕기 위한 건강정보이며, 제품에 관한 정보가 아닙니다.</p>
                <div class="dot_indent">
                    <p>건강기능식품 ‘기능별정보’ 출처: <a href="https://www.foodsafetykorea.go.kr/portal/healthyfoodlife/functionality.do?menu_grp=MENU_NEW01&menu_no=2657&menu_no=2657&menu_grp=MENU_NEW01" target="_blank">식품안전나라</a></p>
                    <p>건강기능식품 ‘원료별정보’ 출처: <a href="https://www.foodsafetykorea.go.kr/portal/board/board.do?menu_grp=MENU_NEW01&menu_no=2660" target="_blank">식품안전나라</a></p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: "SurveyResultRecommendForm"
}

</script>

<style scoped>
    .survey_result_new.rslt3 .inner {
        width: 800px;
    }
    .inner {
        position: relative;
        margin: 0 auto;
        width: 1080px;
    }
    .inner:after {
        content: "";
        display: block;
        clear: both;
    }

    .survey_result_new.rslt3 .recommend_div.accor {
        padding: 0 40px 0;
    }
    .survey_result_new.rslt3 .recommend_div.accor {
        border-top: 1px solid #ddd;
    }
    .survey_result_new.rslt3 .recommend_div {
        margin-top: 60px;
        border: 1px solid #ddd;
        border-radius: 16px;
        padding: 48px 40px;
    }

    .survey_result_new.rslt3 .recommend_div_list .recommend_div:first-child:nth-last-child(1) .list .open {
        background: none !important;
        pointer-events: none;
    }
    .survey_result_new.rslt3 .recommend_div.accor .open {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 30px 44px 30px 0;
    }
    a {
        text-decoration: none;
        color: #555;
        border: none;
    }
    a:-webkit-any-link {
        color: -webkit-link;
        cursor: pointer;
    }

    .survey_result_new.rslt3 .recommend_div.accor .open .tit {
        font-weight: 600;
        font-size: 18px;
        line-height: 24px;
        color: #303030de;
    }
    h3 {
        display: block;
        font-size: 1.17em;
        margin-block-start: 1em;
        margin-block-end: 1em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
        font-weight: bold;
    }
    .survey_result_new.rslt3 .recommend_div.accor .counsel_accor_inner {
        padding-bottom: 48px;
    }
    .survey_result_new.rslt3 .recommend_div.accor .counsel_accor_inner {
        border-top: 1px solid #eee;
    }
    .survey_result_new.rslt3 .recommend_div.accor .close {
        display: none;
        padding: 8px 0 48px 0;
    }
    .survey_result_new.rslt3 .recommend_div.accor .list_div {
        position: relative;
        margin-top: 0;
    }
    .survey_result_new.rslt3 .recommend_div .list_div {
        position: relative;
        margin-top: 14px;
    }

    .swiper-container-autoheight, .swiper-container-autoheight .swiper-slide {
        height: auto;
    }
    .swiper-container {
        margin-left: auto;
        margin-right: auto;
        position: relative;
        overflow: hidden;
        list-style: none;
        padding: 0;
        z-index: 1;
    }

    .survey_result_new.rslt3 .recommend_div .counsel_accor_inner .list_div .list {
        padding-top: 32px;
    }
    .survey_result_new.rslt3 .recommend_div .list_div .list {
        display: flex;
        position: relative;
        width: 100%;
        padding: 24px 0 0 0;
    }
    .swiper-container-autoheight .swiper-wrapper {
        -webkit-box-align: start;
        -webkit-align-items: flex-start;
        -ms-flex-align: start;
        align-items: flex-start;
        -webkit-transition-property: height, -webkit-transform;
        transition-property: height, -webkit-transform;
        -o-transition-property: transform, height;
        transition-property: transform, height;
        transition-property: transform, height, -webkit-transform;
    }
    .swiper-container-android .swiper-slide, .swiper-wrapper {
        -webkit-transform: translate3d(0px, 0, 0);
        transform: translate3d(0px, 0, 0);
    }
    .swiper-wrapper {
        position: relative;
        width: 100%;
        height: 100%;
        z-index: 1;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-transition-property: -webkit-transform;
        transition-property: -webkit-transform;
        -o-transition-property: transform;
        transition-property: transform;
        transition-property: transform, -webkit-transform;
        -webkit-box-sizing: content-box;
        box-sizing: content-box;
    }

    .survey_result_new.rslt3 .recommend_div .list_div .list .swiper-slide {
        width: 120px;
    }
    .swiper-container-autoheight, .swiper-container-autoheight .swiper-slide {
        height: auto;
    }
    .swiper-slide {
        -webkit-flex-shrink: 0;
        -ms-flex-negative: 0;
        flex-shrink: 0;
        width: 100%;
        height: 100%;
        position: relative;
        -webkit-transition-property: -webkit-transform;
        transition-property: -webkit-transform;
        -o-transition-property: transform;
        transition-property: transform;
        transition-property: transform, -webkit-transform;
    }

    .survey_result_new.rslt3 .recommend_div .list_div .list .info_text {
        position: relative;
        width: 100%;
        overflow: hidden;
    }

    .survey_result_new.rslt3 .recommend_div .list_div .list .info_text .img {
        position: relative;
        width: 120px;
        height: 120px;
        vertical-align: middle;
        border-radius: 8px;
        background: #f7f7f7;
    }
    .survey_result_new.rslt3 .recommend_div .list_div .list .info_text .img img {
        width: 100%;
    }

    .survey_result_new.rslt3 .recommend_div .list_div .list .info_text .txt_area {
        width: 100%;
    }
    .survey_result_new.rslt3 .recommend_div .list_div .list .info_text .txt_area .name {
        display: -webkit-box;
        font-weight: 600;
        font-size: 18px;
        line-height: 24px;
        color: #303030de;
        max-height: 48px;
        height: 48px;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        word-break: break-all;
    }
    .survey_result_new.rslt3 .recommend_div .list_div .list .type {
        position: absolute;
        top: 0;
        left: 0;
        display: flex;
        align-items: center;
    }

    .survey_result_new.rslt3 .recommend_div .list_div .list .type span:first-child {
        margin-left: 0;
    }
    .survey_result_new.rslt3 .recommend_div .list_div .list .type span.red-recommend {
        color: #e62423;
        background: #ffeded;
    }
    .survey_result_new.rslt3 .recommend_div .list_div .list .type span {
        padding: 2px 7px;
        font-size: 12px;
        line-height: 18px;
        color: #7b23a8;
        background: #fff;
    }

    .survey_result_new.rslt3 .notice_area {
        margin-top: 60px;
        padding: 24px 20px;
        background: #f9f9f9;
    }
    .survey_result_new.rslt3 .notice_area .txt {
        padding-left: 20px;
        font-weight: 300;
        font-size: 13px;
        line-height: 18px;
        color: #000;
        background: url(@/assets/survey/blk_noti_icon.png) no-repeat left center;
        background-size: 16px;
    }
    .survey_result_new.rslt3 .notice_area .dot_indent {
        margin-top: 16px;
    }

    .dot_indent p:first-child {
        margin-top: 0;
    }
    .dot_indent p {
        position: relative;
        padding-left: 10px;
        margin-top: 6px;
        font-weight: 300;
        font-size: 13px;
        line-height: 18px;
        color: #777;
        text-align: left;
    }
    .dot_indent p:before {
        content: '';
        position: absolute;
        top: 7px;
        left: 2px;
        width: 3px;
        height: 3px;
        background: #bbb;
        border-radius: 100%;
    }

    .survey_result_new .notice_area .dot_indent p a {
        display: inline-block;
        padding-right: 18px;
        color: #7b23a8;
        background: url(@/assets/survey/result_notice_link.png) no-repeat right center;
        background-size: 16px;
    }

    :before, :after {
        box-sizing: border-box;
    }

    body, div, h1, h2, h3, h4, h5, h6, ul, ol, li, dl, dt, dd, p, form, fieldset, table, tr, th, td {
        margin: 0;
        padding: 0;
    }
    p {
        display: block;
        margin-block-start: 1em;
        margin-block-end: 1em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
    }
    div {
        display: block;
    }
    h4 {
        display: block;
        margin-block-start: 1.33em;
        margin-block-end: 1.33em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
        font-weight: bold;
    }
    img, fieldset {
        border: none;
        vertical-align: top;
    }
    img {
        overflow-clip-margin: content-box;
        overflow: clip;
    }
</style>