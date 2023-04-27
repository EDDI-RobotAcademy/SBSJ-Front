<template>
  <div class="container">
    <h2 align="center">Q&A</h2>
    <div style="width: 100%; display: flex; justify-content: center; margin-top: 2%;">
      <div style="width: 5%; display: flex; border-bottom: solid;"></div>
    </div>
    <div class="row">
      <div class="col-3 mt-4"></div>
      <div>
        <div class="d-flex justify-content-center my-5">
          <table class="qna-board-list-table">
            <tr>
              <th width="50">No</th>
              <th width="150">문의유형</th>
              <th width="500">제목</th>
              <th width="100">글쓴이</th>
              <th width="200">작성일자</th>
            </tr>
            <template v-if="!qnaBoards || (Array.isArray(qnaBoards) && qnaBoards.length === 0)">
              <tr>
                <td colspan="4">
                  현재 등록된 게시물이 없습니다!
                </td>
              </tr>
            </template>
            <template v-else>
              <tr v-for="qnaBoard in qnaBoards" :key="qnaBoard.qnaBoardId" @click="goToQnaBoardReadPage(qnaBoard.qnaBoardId)" style="cursor: pointer">
                <td style="font-weight: bold;">
                  {{ qnaBoard.qnaBoardId }}
                </td>
                <td style="font-weight:500;">
                  {{ qnaBoard.inquiryType }}
                </td>
                <td class="board-title" style="font-weight: bold;">
                  <router-link :to="{ name: 'QnaBoardReadPage', params: { qnaBoardId: qnaBoard.qnaBoardId.toString() }}" style="text-decoration: none; color: black">
                    <span :class="{ 'private-text': isPrivate(qnaBoard) }">
                      {{ isPrivate(qnaBoard) ? "비밀글입니다" : qnaBoard.title }}
                    </span>
                  </router-link>
                </td>
                <td style="opacity: 0.7;">
                  {{ isMasking(qnaBoard.writer) }}
                </td>
                <td style="opacity: 0.7;">
                  {{ qnaBoard.regDate | formatDate }}
                </td>
              </tr>
            </template>
          </table>
        </div>
      </div>
      <div>
        <div class="QnawriteContent">
          <router-link :to="{ name: 'QnaBoardRegisterPage' }">
            <button class="btn btn-dark rounded-pill">글 쓰기</button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<!-- <template>
  <div class="container">
    <h2 align="center">Q&A</h2>
    <div style="width: 100%; display: flex; justify-content: center; margin-top: 2%;">
      <div style="width: 5%; display: flex; border-bottom: solid;"></div>
    </div>
    <div class="row">
      <div class="col-3 mt-4">
      </div>
    <div>
      </div>
        <div class="d-flex justify-content-center my-5">
          <table class="qna-board-list-table">
            <tr>
              <th width="50">No</th>
              <th width="150">문의유형</th>
              <th width="500">제목</th>
              <th width="100">글쓴이</th>
              <th width="200">작성일자</th>
            </tr>
            <tr v-if="!qnaBoards || (Array.isArray(qnaBoards) && qnaBoards.length === 0)">
              <td colspan="4">
                  현재 등록된 게시물이 없습니다!
              </td>
            </tr>
            <tr v-else
            v-for="qnaBoard in qnaBoards"
            :key="qnaBoard.qnaBoardId"
            @click="goToQnaBoardReadPage(qnaBoard.qnaBoardId)"
            style="cursor: pointer">
              <td style="font-weight: bold;">
                {{ qnaBoard.qnaBoardId }}
              </td>
              <td style="font-weight:500;">
                {{ qnaBoard.inquiryType }}
              </td>
              <td class="board-title" style="font-weight: bold;">
                <router-link :to="{ name: 'QnaBoardReadPage', params: { qnaBoardId: qnaBoard.qnaBoardId.toString() }}"
                  style="text-decoration: none; color: black">
                  <span :class="{ 'private-text': isPrivate(qnaBoard) }">
                    {{ isPrivate(qnaBoard) ? "비밀글입니다" : qnaBoard.title }}
                  </span>
                </router-link>
              </td>
              <td style="opacity: 0.7;">
                {{ isMasking(qnaBoard.writer) }}
              </td>
              <td style="opacity: 0.7;">
                {{ qnaBoard.regDate | formatDate }}
              </td>
            </tr>
          </table>
        </div>
      </div>
      <div>
        <div class="QnawriteContent">
          <router-link :to="{ name: 'QnaBoardRegisterPage' }">
            <button class="btn btn-dark rounded-pill">글 쓰기</button>
          </router-link>
        </div>
      </div>
  </div>
</template> -->
  
<script>
export default {
    name: "QnaBoardListForm",
    props: {
        qnaBoards: {
            type: Array
        }
    },
    date() {
      return {
        loaded: false,
        loading: false,
        search: "",
      }
    },
    methods: {
      isPrivate(qnaBoard) {
        return qnaBoard.privateCheck;
      },
      onClick () {
        this.loading = true

        setTimeout(() => {
            this.loading = false
            this.loaded = true
        }, 2000)
      },
      isMasking(writer) {
        if (writer.length >= 4) {
          return writer.substring(0, 3) + "*".repeat(writer.length - 4);
        } else {
          return writer;
        }
      },
      goToQnaBoardReadPage(qnaBoardId) {
        this.$router.push({
          name: 'QnaBoardReadPage',
          params: { qnaBoardId: qnaBoardId.toString() },
        });
      },
    }
}

</script>

<style scoped>
 .nav-link {
    position: relative;
  }
  .nav-link::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: black;
    opacity: 0;
    transition: opacity 0.3s;
  }
  .nav-link:hover::after {
    opacity: 1;
  }
  .qna-board-list-table tr:not(:first-child):hover:not(:nth-child(1)) {
    background-color: #F1F1F2;
    transition: background-color 0.3s;
  }
  .nav-item {
    margin-top: 20%;
  }
  .QnawriteContent {
    margin-top: 1%;
    width: 85%;
    text-align: flex-end;
    display:flex;
    justify-content: end;
}
  .qna-board-list-table {
    justify-content: center;
  }
  .qna-board-list-table th {
    border-top: 1px solid;
    padding-top: 10px;
    padding-bottom: 10px; 
    font-size: 15px;
    text-align: center;
  }
  .qna-board-list-table td {
    padding-top: 8px;
    padding-bottom: 8px;
    border-top: 1px solid;
    border-bottom: 1px solid;
    font-size: 15px;
    text-align: center;
  }
  .qna-board-list-table .board-title {
    font-size: 15px;
    text-align: left;
  }
  .private-text {
    font-style: italic;
    color: #ff0000;
    font-weight: bold;
  }

</style>