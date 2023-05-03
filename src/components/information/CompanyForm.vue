<template>
    <div class="container">
        <div class="text-area">
          <h1>회사 소개</h1>
        </div>
        <table class="type03 table table-hover mt-5">
          <tr>
              <th scope="row">상점명</th>
              <td>Team SBSJ</td>
          </tr>
          <tr>
              <th scope="row">구성원</th>
              <td>윤영현 서예인 김민홍 남건호</td>
          </tr>
          <tr>
              <th scope="row">대표전화</th>
              <td>1544-9970</td>
          </tr>
          <tr>
              <th scope="row">주소</th>
              <td>서울특별시 강남구 테헤란로14길 6 남도빌딩 3F</td>
          </tr>
            <tr>
              <th scope="row">개인정보 관리책임</th>
              <td>윤영현 서예인 김민홍 남건호</td>
          </tr>
          <tr>
              <th scope="row">대표메일</th>
              <td>SBSJCompany@SBSJ.co.kr</td>
          </tr>
        </table>
      </div>
</template>

<script>
export default {
  
};
</script>
<style scoped>

.container {
  margin-top: 50px;
  margin-bottom: 70px;
}

table.type03 {
    border-collapse: collapse;
    line-height: 1.5;
    border: 1px solid #ccc;
    margin : 20px 10px;
    margin: 0 auto;
    width: 600px;
  }
  table.type03 th {
    width: 147px;
    padding: 10px;
    font-weight: bold;
    color: white;
    text-align: right;
    border-right: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    margin: 0 auto;
    background-color: #692498;
    opacity: 60%;
  
  }
  table.type03 td {
    width: 349px;
    padding: 10px;
    text-align: left;
    border-right: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    margin: 0 auto;
  }
  .text-area {
    text-align: center;
  }
/* .rwd-table {
  margin: auto;
  min-width: 300px;
  max-width: 100%;
  border-collapse: collapse;
}

.rwd-table tr:first-child {
  border-top: none;
  background: #428bca;
  color: #fff;
}

.rwd-table tr {
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  background-color: #f5f9fc;
}

.rwd-table tr:nth-child(odd):not(:first-child) {
  background-color: #ebf3f9;
}

.rwd-table th {
  display: none;
}

.rwd-table td {
  display: block;
}

.rwd-table td:first-child {
  margin-top: .5em;
}

.rwd-table td:last-child {
  margin-bottom: .5em;
}

.rwd-table td:before {
  content: attr(data-th) ": ";
  font-weight: bold;
  width: 120px;
  display: inline-block;
  color: #000;
}

.rwd-table th,
.rwd-table td {
  text-align: left;
}

.rwd-table {
  color: #333;
  border-radius: .4em;
  overflow: hidden;
}

.rwd-table tr {
  border-color: #bfbfbf;
}

.rwd-table th,
.rwd-table td {
  padding: .5em 1em;
}
@media screen and (max-width: 601px) {
  .rwd-table tr:nth-child(2) {
    border-top: none;
  }
}
@media screen and (min-width: 600px) {
  .rwd-table tr:hover:not(:first-child) {
    background-color: #d8e7f3;
  }
  .rwd-table td:before {
    display: none;
  }
  .rwd-table th,
  .rwd-table td {
    display: table-cell;
    padding: .25em .5em;
  }
  .rwd-table th:first-child,
  .rwd-table td:first-child {
    padding-left: 0;
  }
  .rwd-table th:last-child,
  .rwd-table td:last-child {
    padding-right: 0;
  }
  .rwd-table th,
  .rwd-table td {
    padding: 1em !important;
  }
} */


/* THE END OF THE IMPORTANT STUFF */

/* Basic Styling */
/* body {
background: #4B79A1;
background: -webkit-linear-gradient(to left, #4B79A1 , #283E51);
background: linear-gradient(to left, #4B79A1 , #283E51);        
}
h1 {
  text-align: center;
  font-size: 2.4em;
  color: #020101;
}
.container {
  display: block;
  text-align: center;
}
h3 {
  display: inline-block;
  position: relative;
  text-align: center;
  font-size: 1.5em;
  color: #9a9a9a;
}


@-webkit-keyframes leftRight {
  0%    { -webkit-transform: translateX(0)}
  25%   { -webkit-transform: translateX(-10px)}
  75%   { -webkit-transform: translateX(10px)}
  100%  { -webkit-transform: translateX(0)}
}
@keyframes leftRight {
  0%    { transform: translateX(0)}
  25%   { transform: translateX(-10px)}
  75%   { transform: translateX(10px)}
  100%  { transform: translateX(0)}
} */

/*
    Don't look at this last part. It's unnecessary. I was just playing with pixel gradients... Don't judge.
*/
/*
@media screen and (max-width: 601px) {
  .rwd-table tr {
    background-image: -webkit-linear-gradient(left, #428bca 137px, #f5f9fc 1px, #f5f9fc 100%);
    background-image: -moz-linear-gradient(left, #428bca 137px, #f5f9fc 1px, #f5f9fc 100%);
    background-image: -o-linear-gradient(left, #428bca 137px, #f5f9fc 1px, #f5f9fc 100%);
    background-image: -ms-linear-gradient(left, #428bca 137px, #f5f9fc 1px, #f5f9fc 100%);
    background-image: linear-gradient(left, #428bca 137px, #f5f9fc 1px, #f5f9fc 100%);
  }
  .rwd-table tr:nth-child(odd) {
    background-image: -webkit-linear-gradient(left, #428bca 137px, #ebf3f9 1px, #ebf3f9 100%);
    background-image: -moz-linear-gradient(left, #428bca 137px, #ebf3f9 1px, #ebf3f9 100%);
    background-image: -o-linear-gradient(left, #428bca 137px, #ebf3f9 1px, #ebf3f9 100%);
    background-image: -ms-linear-gradient(left, #428bca 137px, #ebf3f9 1px, #ebf3f9 100%);
    background-image: linear-gradient(left, #428bca 137px, #ebf3f9 1px, #ebf3f9 100%);
  }
}*/
</style>