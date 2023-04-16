<template>
  <div class="container">
    <h2 align="center" class="mt-10">게시물</h2>
    <div class="row">
      <div class="col-3 mt-4">
        <span style="font-size: 20px;">고객문의 게시판</span>
      </div>
      <!-- <div class="col-9 d-flex justify-content-end qna-board-list-search-form" style="padding-left: 700px;">
        <v-text-field 
          class="green--text header-search-form"
          label="검색" v-model="search"
          :loading="loading"
          density="compact" variant="solo"
          append-icon="mdi-magnify" color="green"
          single-line hide-details clearable
          @click:append="onClick"
        ></v-text-field>
      </div> -->
    </div>
    <div class="d-flex justify-content-center my-5">
      <table class="qna-board-list-table">
        <tr>
          <th width="100">No</th>
          <th width="150">카테고리</th>
          <th width="500">제목</th>
          <th width="150">작성자</th>
          <th width="240">등록일자</th>
          <th width="100">조회수</th>
          <th width="100">좋아요</th>
        </tr>
        <tr v-if="!qnaBoards || (Array.isArray(qnaBoards) && qnaBoards.length === 0)">
          <td colspan="4">
              현재 등록된 게시물이 없습니다!
          </td>
        </tr>
        <tr v-else v-for="qnaBoard in qnaBoards" :key="qnaBoard.qnaBoardId">
          <td>
            {{ qnaBoard.qnaBoardId }}
          </td>
          <td>
            기타
          </td>
          <td class="board-title">
            <router-link :to="{ name: 'QnaBoardReadPage', params: { qnaBoardId: qnaBoard.qnaBoardId.toString() }}"
              style="text-decoration: none; color: black">
              <span :class="{ 'private-text': isPrivate(qnaBoard) }">
                {{ isPrivate(qnaBoard) ? "비밀글입니다" : qnaBoard.title }}
              </span>
            </router-link>
          </td>
          <td>
            {{ isMasking(qnaBoard.writer) }}
          </td>
          <td>
            {{ formatDate(qnaBoard.regDate) }}
          </td>
          <td>
            0
          </td>
          <td>
            0
          </td>
        </tr>
      </table>
    </div>
    <div class="d-flex justify-content-end my-5">
      <router-link :to="{ name: 'QnaBoardRegisterPage' }">
        <button class="btn btn-primary">글 쓰기</button>
      </router-link>
    </div>
  </div>
</template>
  
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
      formatDate(dateString) {
        const date = new Date(dateString);
        const year = date.getFullYear();
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const day = date.getDate().toString().padStart(2, '0');
        return `${year}-${month}-${day}`;
      },
    }
}

</script>

<style scoped>

  .qna-board-list-table {
    justify-content: center;
  }
  .qna-board-list-table th {
    padding-top: 15px;
    padding-bottom: 15px;
    border-top: 3px solid;
    font-size: 15px;
    text-align: center;
  }
  .qna-board-list-table td {
    padding-top: 15px;
    padding-bottom: 15px;
    border-top: 1px solid;
    border-bottom: 1px solid;
    font-size: 15px;
    text-align: center;
  }
  .qna-board-list-table .board-title {
    padding-left: 10px;
    font-size: 18px;
    text-align: left;
  }
  .private-text {
    font-style: italic;
    color: #ff0000;
    font-weight: bold;
  }

</style>