<template>
    <form @submit.prevent="onSubmit">
      <table class="free-board-register-table">
          <tr>
              <td>작성자</td>
              <td><input type="text" style="border: 2px solid #CCCC;" v-model="writer"/></td>
          </tr>
          <tr>
              <td>제목</td>
              <td><textarea type="text" cols="50" rows="1" style="border: 2px solid #CCCC" v-model="title"/></td>
          </tr>
          <tr>
              <td>본문</td>
              <td><textarea cols="70" rows="10" style="border: 2px solid #CCCC" v-model="content"/></td>
          </tr>
      </table>
      <div text-align="left" style="font-size:14px; color:gray; text-align:left; width: 70%;">
          * 음란 및 불법적인 내용은 통보없이 삭제될 수 있습니다.
      </div>  
  
        <div class="mt-2">
            <button type="submit" class="btn btn-outline-dark me-2">등록</button>
            <router-link :to="{ name: 'FreeBoardListPage' }">
                <button class="btn btn-outline-danger">목록</button>
            </router-link>
        </div>
  
    </form>
  </template>
  
  <script>
  export default {
      name: 'FreeBoardRegisterForm',
      data() {
          return {
              title: '',
              writer: '',
              content: '',
          }
      },
      methods: {
          onSubmit() {
              const { title, writer, content } = this;
              if (!title || !writer || !content) {
                  alert("모든 입력란에 입력해주세요");
                  return;
              }
              this.$emit('submit', { title, writer, content });
          }
      }
  }
  </script>
  
  <style scoped>
     .mt-2 {
        text-align: right; 
        width: 70%;
     }
      .free-board-register-table {
          border-collapse: collapse;
          width: 70%;
          margin: 0 auto;
          font-weight: bold;
      }
      .free-board-register-table td {
          border-top: 2px solid #CCCC;
          border-bottom: 2px solid #CCCC;
          padding: 20px;
          text-align: left; /* 텍스트 왼쪽 정렬로 변경 */
      }
      .free-board-register-table td:nth-child(1) {
          width: 10%;
      }
      .free-board-register-table td:not(:first-child) {
          border-left: none;
      }
      .free-board-register-table tr:not(:last-child) td {
          border-bottom: none;
      }
  </style>
  