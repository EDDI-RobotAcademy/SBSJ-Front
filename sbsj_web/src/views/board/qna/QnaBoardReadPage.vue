<template>
  <div class="container" align="center" style="border: 1px solid black; width: 70%; margin-bottom:5%;">
    <div alian="center">
        <qna-board-read-form v-if="qnaBoard" :qnaBoard="qnaBoard"/>
        <p v-else>로딩중...............</p>
        <div>
          <div style="display:flex; justify-content:space-between; width:70%; margin-top:5%;">
            <div>
              <router-link :to="{ name: 'QnaBoardModifyPage', params: { qnaBoardId } }">
                <button class="btn btn-outline-dark me-2">게시물 수정</button>
                <button @click="onDelete" class="btn btn-outline-dark me-2">삭제</button>
              </router-link>
            </div>
            <div>
              <router-link :to="{ name: 'QnaBoardListPage' }">
                <button class="btn btn-outline-dark">돌아가기</button>
              </router-link>
            </div>
          </div>
        </div>
      </div>
      <div style="border-bottom: 1px solid black; opacity: 0.2; margin-top:5%;"></div>
          <table class="comment-form">
            <tr>
              <div>
                <qna-comment-list-form :qnaComments="qnaComments"/>
              </div>
                <qna-comment-register-form @submit="onSubmitRegister"/>
            </tr>
          </table>
  </div>
</template>

<script>
import QnaCommentListForm from '@/components/board/comment/QnaCommentListForm.vue'
import QnaCommentRegisterForm from '@/components/board/comment/QnaCommentRegisterForm.vue'
import QnaBoardReadForm from '@/components/board/qnaBoard/QnaBoardReadForm.vue'
import { mapActions, mapState } from 'vuex'

const boardModule = 'boardModule'

export default {
    name: 'QnaBoardReadPage',
    data() {
      return {
        showPasswordModal: false,
        enteredPassword: ''
      };
    },                        
    components : { QnaBoardReadForm, QnaCommentListForm, QnaCommentRegisterForm },
    props: {
        qnaBoardId: {
            type: String,
            required: true
        }
    },
    computed: {
        ...mapState(boardModule, ['qnaBoard', 'qnaComments'])
    },
    methods: {
        ...mapActions(boardModule, [
            'requestQnaBoardToSpring',
            'requestQnaBoardDeleteToSpring',
            'requestQnaCommentRegisterToSpring',
            'requestQnaCommentListFromSpring'
        ]),
        async onDelete() {
            await this.requestQnaBoardDeleteToSpring(this.qnaBoardId);
            await this.$router.push({ name: 'QnaBoardListPage' })
        },
        async onSubmitRegister(payload) {
            const { comment, writer, qnaCommentId } = payload;
            const qnaBoardId = this.qnaBoardId;
            console.log("댓글 등록" + qnaBoardId);
            await this.requestQnaCommentRegisterToSpring({ comment, writer, qnaBoardId, qnaCommentId });
            await this.requestQnaCommentListFromSpring(this.qnaBoardId);
        }
    },
    async created() {
        await this.requestQnaBoardToSpring(this.qnaBoardId);
        await this.requestQnaCommentListFromSpring(this.qnaBoardId);
    }
}

</script>

<style>
  .container {
    margin-top: 7%;
  }
</style>