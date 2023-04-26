<template>
    <div class="container">
        <h1>회사소개</h1>
          <!-- <table class="rwd-table">
            <tbody>
              <tr>
                <th>상점명</th>
                <th>구성원</th>
                <th>대표전화</th>
                <th>주소</th>
                <th>개인정보 관리책임</th>
                <th>대표메일</th>
              </tr>
              <tr>
                <td data-th="Supplier Code">
                  PYE
                </td>
                <td data-th="Supplier Name">
                  윤영현 김민홍 남건호 황동희 서예인
                </td>
                <td data-th="Invoice Number">
                  02-2212-2568
                </td>
                <td data-th="Invoice Date">
                    서울특별시 강남구 테헤란로14길 6 남도빌딩 2F, 3F, 4F, 5F, 6F
                </td>
                <td data-th="Due Date">
                    윤영현 김민홍 남건호 황동희 서예인
                </td>
                <td data-th="Net Amount">
                    PYECompany@PYE.co.kr
                </td>
              </tr>
            </tbody>
          </table> -->
          <table class="type03">
            <tr>
                <th scope="row">상점명</th>
                <td>주식회사 PYE</td>
            </tr>
            <tr>
                <th scope="row">구성원</th>
                <td>윤영현 김민홍 남건호 황동희 서예인</td>
            </tr>
            <tr>
                <th scope="row">대표전화</th>
                <td>내용이 들어갑니다.</td>
            </tr>
            <tr>
                <th scope="row">주소</th>
                <td>서울특별시 강남구 테헤란로14길 6 남도빌딩 2F, 3F, 4F, 5F, 6F</td>
            </tr>
              <tr>
                <th scope="row">개인정보 관리책임</th>
                <td>윤영현 김민홍 남건호 황동희 서예인</td>
            </tr>
            <tr>
                <th scope="row">대표메일</th>
                <td>PYECompany@PYE.co.kr</td>
            </tr>
          </table>
          <h3>Team SBSJ</h3>
        </div>
</template>

<script>
export default {
  
};
</script>
<style scoped>


@import 'https://fonts.googleapis.com/css?family=Open+Sans:600,700';

* {font-family: 'Open Sans', sans-serif;}

table.type03 {
    border-collapse: collapse;
    text-align: left;
    line-height: 1.5;
    border-top: 1px solid #ccc;
    border-left: 3px solid #369;
    margin : 20px 10px;
    margin: 0 auto;
  }
  table.type03 th {
    width: 147px;
    padding: 10px;
    font-weight: bold;
    vertical-align: top;
    color: #153d73;
    border-right: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    margin: 0 auto;
  
  }
  table.type03 td {
    width: 349px;
    padding: 10px;
    vertical-align: top;
    border-right: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    margin: 0 auto;
  }
.rwd-table {
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
}


/* THE END OF THE IMPORTANT STUFF */

/* Basic Styling */
body {
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
}

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