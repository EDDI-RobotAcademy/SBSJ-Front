<template>
    <form @submit.prevent="onSubmit">
      <table class="qna-board-register-table">
          <tr>
              <td>작성자</td>
              <td><input type="text" style="border: 2px solid #CCCC;" v-model="writer"/></td>
          </tr>
          <tr>
              <td>제목</td>
              <td><textarea type="text" cols="50" rows="1" style="border: 2px solid #CCCC" v-model="title"/></td>
          </tr>
          <tr>
              <td>카테고리</td>
              <td>
                  <select v-model="inquiryType" style="border: 2px solid #CCCC; width:20%; text-align: center;">
                      <option value="" disabled selected>문의유형</option>
                      <option>배송 문의</option>
                      <option>상품 문의</option>
                      <option>환불 문의</option>
                      <option>기타 문의</option>
                  </select>
              </td>
          </tr>
          <tr>
              <td>본문</td>
              <td><textarea cols="70" rows="10" style="border: 2px solid #CCCC" v-model="content"/></td>
          </tr>
      </table>
      <div text-align="left" style="font-size:14px; color:gray; text-align:left; width:70%;">
          * 상품과 무관한 내용이거나 음란 및 불법적인 내용은 통보없이 삭제될 수 있습니다.
      </div>
      <div class="privateCheck">
          <v-checkbox name="secret" value="true" 
              label="비밀글로 문의하기"
              v-model="privateCheck">
          </v-checkbox>
      </div>
      <div v-if="privateCheck" class="secret">
          <div>비밀번호</div> &nbsp;
          <div><input type="password"  style="border: 2px solid #CCCC" name="password" v-model="password" /></div>
      </div>        
  
      <div class="qnaRegister">
          <button type="submit" class="btn btn-outline-dark me-2">등록</button>
          <router-link :to="{ name: 'QnaBoardListPage' }">
              <button class="btn btn-outline-danger">취소</button>
          </router-link>
      </div>
  
    </form>
  </template>
  
  <script>
  export default {
      name: 'QnaBoardRegisterForm',
      data() {
          return {
              title: '',
              writer: '',
              content: '',
              inquiryType: "",
              privateCheck: false,
              password: ''
          }
      },
      methods: {
          isPasswordValid(password) {
              const minLength = 4;
              const maxLength = 8;
              const hasLowerCase = /[a-z]/.test(password);
              const hasNumber = /\d/.test(password);
              const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
  
              return  maxLength > password.length &&
                      password.length >= minLength && hasLowerCase && hasNumber && hasSpecialChar;
          },
          onSubmit() {
              const { title, writer, content, password, privateCheck, inquiryType } = this;
              if (!title || !writer || !content || !inquiryType) {
                  alert("모든 입력란에 입력해주세요");
                  return;
          }
  
              if (this.privateCheck && !this.isPasswordValid(password)) {
                  alert("비밀번호는 4 자 이상 8 자 미만, 하나 이상의 숫자 및 소문자와 특수 문자를 모두 포함해야합니다.");
                  return;
              }
              this.$emit('submit', { title, writer, inquiryType, content, password, privateCheck })
          }
      }
  }
  </script>
  
  <style scoped>
       .qnaRegister {
          text-align: right; 
          width: 70%;
       }
       .qna-board-register-table {
            border-collapse: collapse;
            width: 70%;
            margin: 0 auto;
            font-weight: bold;
        }
        .qna-board-register-table td {
            border-top: 2px solid #CCCC;
            border-bottom: 2px solid #CCCC;
            padding: 20px;
            text-align: left; /* 텍스트 왼쪽 정렬로 변경 */
        }
        .qna-board-register-table td:nth-child(1) {
            width: 15%;
        }
        .qna-board-register-table td:not(:first-child) {
            border-left: none;
        }
        .qna-board-register-table tr:not(:last-child) td {
            border-bottom: none;
        }
        .privateCheck {
          width: 70%;
          text-align: center;
          font-weight: bold;
        }
        .secret {
          text-align: left;
          width: 70%;
          display: flex;
        }
  </style>