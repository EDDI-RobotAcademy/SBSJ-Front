import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

import ShoppingCartPage from "@/views/order/shoppingCart/ShoppingCartPage.vue"
import ProductListPage from "@/views/product/ProductListPage.vue"
import ProductReadPage from '@/views/product/ProductReadPage'
import ProductRegisterPage from '@/views/product/ProductRegisterPage'
import ProductModifyPage from '@/views/product/ProductModifyPage'

import SignUpPage from "@/views/account/member/SignUpPage";
import SignInPage from "@/views/account/member/SignInPage";
import SearchPasswordPage from "@/views/account/member/SearchPasswordPage";
import SearchUserIdPage from "@/views/account/member/SearchUserIdPage";
import SignAgreePage from "@/views/account/member/SignAgreePage";
import AgreementPage from "@/views/information/AgreementPage";
import CompanyPage from "@/views/information/CompanyPage";
import PrivacyPolicyPage from "@/views/information/PrivacyPolicyPage";
import InformationUsePage from "@/views/information/InformationUsePage";

import MyPage from '@/views/mypage/MyPage';
import MyPagePasswordCheckPage from "@/views/mypage/MyPagePasswordCheckPage";

// 설문 관련
import SurveyPage from '@/views/survey/SurveyPage'
import SurveyResultPage from '@/views/survey/SurveyResultPage';

// 기본정보 설문
import UsernameCheckPage from '@/views/survey/commonCheckList/UsernameCheckPage'
import GenderCheckPage from '@/views/survey/commonCheckList/GenderCheckPage'
import AgeCheckPage from '@/views/survey/commonCheckList/AgeCheckPage'
import WeightCheckPage from '@/views/survey/commonCheckList/WeightCheckPage'
import HeightCheckPage from '@/views/survey/commonCheckList/HeightCheckPage'
import SmokingCheckPage from '@/views/survey/commonCheckList/SmokingCheckPage'
import DrinkingCheckPage from '@/views/survey/commonCheckList/DrinkingCheckPage'
import ExercisingCheckPage from '@/views/survey/commonCheckList/ExercisingCheckPage'

// 신체기관 설문
import VisceraSurveyPage from '@/views/survey/visceraCheckList/VisceraSurveyPage'
import BoneCheckPage from '@/views/survey/visceraCheckList/BoneCheckPage'
import BrainCheckPage from '@/views/survey/visceraCheckList/BrainCheckPage'
import EyeCheckPage from '@/views/survey/visceraCheckList/EyeCheckPage'
import IntestineCheckPage from '@/views/survey/visceraCheckList/IntestineCheckPage'
import LiverCheckPage from '@/views/survey/visceraCheckList/LiverCheckPage'

// 일상생활 설문
import LifeSurveyPage from '@/views/survey/lifeCheckList/LifeSurveyPage'
import BloodPressureCheckPage from '@/views/survey/lifeCheckList/BloodPressureCheckPage'
import BloodSugarCheckPage from '@/views/survey/lifeCheckList/BloodSugarCheckPage'
import BodyFatCheckPage from '@/views/survey/lifeCheckList/BodyFatCheckPage'
import SkinCheckPage from '@/views/survey/lifeCheckList/SkinCheckPage'
import StressCheckPage from '@/views/survey/lifeCheckList/StressCheckPage'

import QnaBoardRegisterPage from "@/views/board/qna/QnaBoardRegisterPage";
import QnaBoardListPage from "@/views/board/qna/QnaBoardListPage";
import QnaBoardReadPage from "@/views/board/qna/QnaBoardReadPage";
import QnaBoardModifyPage from "@/views/board/qna/QnaBoardModifyPage";

import FreeBoardRegisterPage from "@/views/board/free/FreeBoardRegisterPage";
import FreeBoardListPage from "@/views/board/free/FreeBoardListPage";
import FreeBoardReadPage from "@/views/board/free/FreeBoardReadPage";
import FreeBoardModifyPage from "@/views/board/free/FreeBoardModifyPage";

import OrderInfoPage from "@/views/order/OrderInfoPage.vue"
import PurchaseCompletePage from "@/views/order/PurchaseCompletePage.vue"
import ReviewRegisterPage from '@/views/review/ReviewRegisterPage';
import ReviewListPage from '@/views/review/ReviewListPage';
import ReviewModifyPage from '@/views/review/ReviewModifyPage'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/shopping-cart',
    name: 'ShoppingCartPage',
    component: ShoppingCartPage,
    meta: { loginCheck: true }
  },
  {
    path: '/product/:categoryName?/:brandName?',
    name: 'ProductListPage',
    component: ProductListPage,
    props: true
  },
  {
    path: '/productDetail/read/:productId',
    name: 'ProductReadPage',
    component: ProductReadPage,
    props: true
  },
  {
    path: '/sign-up',
    name: 'SignUpPage',
    component: SignUpPage,
    meta: { logoutCheck: true }
  },
  {
    path: '/sign-in',
    name: 'SignInPage',
    component: SignInPage,
    meta: { logoutCheck: true }
  },
  {
    path: '/search-id',
    name: 'SearchUserIdPage',
    component: SearchUserIdPage,
    meta: { logoutCheck: true }
  },
  {
    path: '/search-password',
    name: 'SearchPasswordPage',
    component: SearchPasswordPage,
    meta: { logoutCheck: true }
  },
  {
    path: '/agree-pass',
    name: 'SignAgreePage',
    component: SignAgreePage,
    meta: { logoutCheck: true }
  },
  {
    path: '/agreement',
    name: 'AgreementPage',
    component: AgreementPage
  },
  {
    path: '/company',
    name: 'CompanyPage',
    component: CompanyPage
  },
  {
    path: '/privacy-policy',
    name: 'PrivacyPolicyPage',
    component: PrivacyPolicyPage
  },
  {
    path: '/information-use',
    name: 'InformationUsePage',
    component: InformationUsePage
  },

  {
    path: '/mypage',
    name: 'MyPage',
    component: MyPage,
    meta: { loginCheck: true },
    // beforeEnter: (to, from, next) => {
    //   next({ name: 'MyPagePasswordCheckPage' });
    // },
  },
  {
    path: '/mypage/check-password',
    name: 'MyPagePasswordCheckPage',
    component: MyPagePasswordCheckPage,
    meta: { loginCheck: true }
  },

  // 설문조사
  {
    path: '/survey',
    name: 'SurveyPage',
    component: SurveyPage,
    meta: { loginCheck: true }
  },
  {    
    path: '/survey/common/user-name',
    name: 'UsernameCheckPage',
    component: UsernameCheckPage,
    meta: { loginCheck: true }
  },
  {    
    path: '/survey/common/gender',
    name: 'GenderCheckPage',
    component: GenderCheckPage,
    meta: { loginCheck: true }
  },
  {    
    path: '/survey/common/age',
    name: 'AgeCheckPage',
    component: AgeCheckPage,
    meta: { loginCheck: true }
  },
  {    
    path: '/survey/common/body',
    name: 'WeightCheckPage',
    component: WeightCheckPage,
    meta: { loginCheck: true }
  },
  {    
    path: '/survey/common/body',
    name: 'HeightCheckPage',
    component: HeightCheckPage,
    meta: { loginCheck: true }
  },
  {    
    path: '/survey/common/smoking',
    name: 'SmokingCheckPage',
    component: SmokingCheckPage,
    meta: { loginCheck: true }
  },
  {    
    path: '/survey/common/drinking',
    name: 'DrinkingCheckPage',
    component: DrinkingCheckPage,
    meta: { loginCheck: true }
  },
  {    
    path: '/survey/common/exercising',
    name: 'ExercisingCheckPage',
    component: ExercisingCheckPage,
    meta: { loginCheck: true }
  },

  // 신체기관 관련 설문조사
  {
    path: '/survey/viscera',
    name: 'VisceraSurveyPage',
    component: VisceraSurveyPage,
    meta: { loginCheck: true }
  },
  {    
    path: '/survey/viscera/bone',
    name: 'BoneCheckPage',
    component: BoneCheckPage,
    meta: { loginCheck: true }
  },
  {    
    path: '/survey/viscera/brain',
    name: 'BrainCheckPage',
    component: BrainCheckPage,
    meta: { loginCheck: true }
  },
  {    
    path: '/survey/viscera/eye',
    name: 'EyeCheckPage',
    component: EyeCheckPage,
    meta: { loginCheck: true }
  },
  {    
    path: '/survey/viscera/intestine',
    name: 'IntestineCheckPage',
    component: IntestineCheckPage,
    meta: { loginCheck: true }
  },
  {    
    path: '/survey/viscera/liver',
    name: 'LiverCheckPage',
    component: LiverCheckPage,
    meta: { loginCheck: true }
  },

   // 일상생활 관련 설문조사
   {
    path: '/survey/life',
    name: 'LifeSurveyPage',
    component: LifeSurveyPage,
    meta: { loginCheck: true }
  },
  {
    path: '/survey/life/blood-pressure',
    name: 'BloodPressureCheckPage',
    component: BloodPressureCheckPage,
    meta: { loginCheck: true }
  },
  {
    path: '/survey/life/blood-sugar',
    name: 'BloodSugarCheckPage',
    component: BloodSugarCheckPage,
    meta: { loginCheck: true }
  },
  {
    path: '/survey/life/body-fat',
    name: 'BodyFatCheckPage',
    component: BodyFatCheckPage,
    meta: { loginCheck: true }
  },
  {
    path: '/survey/life/skin',
    name: 'SkinCheckPage',
    component: SkinCheckPage,
    meta: { loginCheck: true }
  },
  {
    path: '/survey/life/stress',
    name: 'StressCheckPage',
    component: StressCheckPage,
    meta: { loginCheck: true }
  },
  {
    path: '/survey/result',
    name: 'SurveyResultPage',
    component: SurveyResultPage,
    meta: { loginCheck: true }
  },
  
  {    
    path: '/product-register-page',
    name: 'ProductRegisterPage',
    component: ProductRegisterPage,
    meta: { loginCheck: true }
  },
  {    
    path: '/order-info',
    name: 'OrderInfoPage',
    component: OrderInfoPage,
    meta: { loginCheck: true }
  },
  {
    path: '/review/:productId',
    name: 'ReviewRegisterPage',
    component: ReviewRegisterPage,
    props: true,
    meta: { loginCheck: true }
  },
  {
    path: '/review-list',
    name: 'ReviewListPage',
    component: ReviewListPage
  },
  {
    path: '/review/modify/:review?',
    name: 'ReviewModifyPage',
    component: ReviewModifyPage,
    props: true
  },
  {
    path: '/qna/register',
    name: 'QnaBoardRegisterPage',
    component: QnaBoardRegisterPage
  },
  {
    path: '/qna/list',
    name: 'QnaBoardListPage',
    component: QnaBoardListPage
  },
  {
    path: '/qna/read/:qnaBoardId',
    name: 'QnaBoardReadPage',
    components: { 
      default: QnaBoardReadPage
    },
    props: {
      default: true
    }
  },
  {
    path: '/qna/modify/:qnaBoardId',
    name: 'QnaBoardModifyPage',
    components: { 
      default: QnaBoardModifyPage
    },
    props: {
      default: true
    }
  },
  {
    path: '/free/register',
    name: 'FreeBoardRegisterPage',
    component: FreeBoardRegisterPage
  },
  {
    path: '/free/list',
    name: 'FreeBoardListPage',
    component: FreeBoardListPage
  },
  {
    path: '/free/read/:freeBoardId',
    name: 'FreeBoardReadPage',
    components: { 
      default: FreeBoardReadPage
    },
    props: {
      default: true
    }
  },
  {
    path: '/free/modify/:freeBoardId',
    name: 'FreeBoardModifyPage',
    components: { 
      default: FreeBoardModifyPage
    },
    props: {
      default: true
    }
  },
  {    
    path: '/purchase-complete',
    name: 'PurchaseCompletePage',
    component: PurchaseCompletePage,
    meta: { loginCheck: true }
  },
  {    
    path: '/product-modify-page/:productId',
    name: 'ProductModifyPage',
    component: ProductModifyPage,
    props: true,
    meta: { loginCheck: true }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  let userInfo = JSON.parse(localStorage.getItem("userInfo"));

  let isLoggedIn;
  // alert(JSON.stringify(userInfo))
  if(userInfo == null || userInfo == '' || Object.keys(userInfo).length == 0) {
    isLoggedIn = false;
  } else {
    isLoggedIn = true;
  }

  if(to.meta.loginCheck && !isLoggedIn) {
    alert("로그인이 필요한 페이지 입니다. 로그인 페이지로 이동합니다.");
    next({ name: "SignInPage" });
  } else {
    next();
  }

  if(to.meta.logoutCheck && isLoggedIn) {
    alert("이미 로그인 되어있습니다. 로그인 상태로는 들어갈 수 없는 페이지입니다.");
    next({ name: "home" });
  } else {
    next();
  }
})

export default router