<template>
  <div class="container">
    <h2 align="center">공지사항 게시판</h2>
    <div style="width: 100%; display: flex; justify-content: center; margin-top: 2%;">
      <div style="width: 5%; display: flex; border-bottom: solid;"></div>
    </div>
    <nav class="navbar navbar-expand">
      <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
    </nav>
    <div class="row">
      <div class="col-3 mt-4">
      </div>
    <div>
      </div>
        <div class="d-flex justify-content-center my-5">
          <table class="free-board-list-table">
            <tbody>
              <tr>
                <th width="100">No</th>
                <th width="400">제목</th>
                <th width="300">글쓴이</th>
                <th width="200">작성일자</th>
              </tr>
              <tr v-if="!freeBoards || (Array.isArray(freeBoards) && freeBoards.length === 0)">
                <td colspan="4">
                    현재 등록된 게시물이 없습니다!
                </td>
              </tr>
              <tr v-else v-for="freeBoard in freeBoards"
                                :key="freeBoard.freeBoardId"
                                @click="goToFreeBoardReadPage(freeBoard.freeBoardId)"
                                style="cursor: pointer">
                <td style="font-weight: bold;">
                  {{ freeBoard.freeBoardId }}
                </td>
                <td style="font-weight: bold;">
                  {{ freeBoard.title }}
                </td>
                <td style="opacity: 0.7;">
                  {{ freeBoard.writer }}
                </td>
                <td style="opacity: 0.7;">
                  {{ freeBoard.regDate | formatDate }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div>
        <div class="freewriteContent">
          <router-link :to="{ name: 'FreeBoardRegisterPage' }">
            <button class="btn btn-dark rounded-pill">글 쓰기</button>
          </router-link>
        </div>
      </div>
  </div>
</template>
  
<script>
export default {
    name: "FreeBoardListForm",
    props: {
        freeBoards: {
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

      onClick () {
        this.loading = true

        setTimeout(() => {
            this.loading = false
            this.loaded = true
        }, 2000)
      },
      goToFreeBoardReadPage(freeBoardId) {
        this.$router.push({
          name: 'FreeBoardReadPage',
          params: { freeBoardId: freeBoardId.toString() },
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
  .free-board-list-table tr:not(:first-child):hover:not(:nth-child(1)) {
    background-color: #F1F1F2;
    transition: background-color 0.3s;
  }
  .nav-item {
    margin-top: 20%;
  }
  .freewriteContent {
    margin-top: 1%;
    width: 85%;
    text-align: flex-end;
    display:flex;
    justify-content: flex-end;
}
  .free-board-list-table {
    justify-content: center;
  }
  .free-board-list-table th {
    border-top: 1px solid;
    padding-top: 10px;
    padding-bottom: 10px; 
    font-size: 15px;
    text-align: center;
  }
  .free-board-list-table td {
    padding-top: 8px;
    padding-bottom: 8px;
    border-top: 1px solid;
    border-bottom: 1px solid;
    font-size: 15px;
    text-align: center;
  }
  .free-board-list-table .board-title {
    font-size: 15px;
    text-align: left;
  }
</style>