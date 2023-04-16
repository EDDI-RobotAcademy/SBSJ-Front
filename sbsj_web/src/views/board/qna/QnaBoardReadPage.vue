<template>
  <div class="container" align="center">
    <div alian="center">
      <h2 class="mb-5">게시판 읽기</h2>
        <qna-board-read-form v-if="qnaBoard" :qnaBoard="qnaBoard" />
        <p v-else>로딩중...............</p>
        <div class="mt-2">
          <router-link :to="{ name: 'QnaBoardModifyPage', params: { qnaBoardId } }">
            <button class="btn btn-outline-primary me-2">게시물 수정</button>
          </router-link>
          <button @click="onDelete" class="btn btn-outline-danger me-2">삭제</button>
          <router-link :to="{ name: 'QnaBoardListPage' }">
            <button class="btn btn-outline-danger">돌아가기</button>
          </router-link>
        </div>
      </div>
    </div>
</template>

<script>

import QnaBoardReadForm from '@/components/board/QnaBoardReadForm.vue'
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
    components : { QnaBoardReadForm },
    props: {
        qnaBoardId: {
            type: String,
            required: true
        }
    },
    computed: {
        ...mapState(boardModule, ['qnaBoard'])
    },
    methods: {
        ...mapActions(boardModule, [
            'requestQnaBoardToSpring',
            'requestQnaBoardDeleteToSpring'
        ]),
        async onDelete() {
            await this.requestQnaBoardDeleteToSpring(this.qnaBoardId);
            await this.$router.push({ name: 'QnaBoardListPage' })
        },
    },
    created() {
        this.requestQnaBoardToSpring(this.qnaBoardId)
    }
}

</script>

<style>

</style>