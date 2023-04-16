<template>
  <div class="container" align="center">
    <h2 class="mb-5">문의사항 작성</h2>
    <qna-board-register-form @submit="onSubmit"/>
  </div>
</template> 

<script>
import QnaBoardRegisterForm from '@/components/board/QnaBoardRegisterForm.vue'
import { mapState, mapActions } from 'vuex'

const boardModule = 'boardModule'

export default {
    name: "QnqBoardRegisterPage",
    components: { QnaBoardRegisterForm },
    computed: {
      ...mapState(boardModule, ['qnaBoard'])
    },
    methods: {
        ...mapActions(boardModule, [
            'requestCreateQnaBoardToSpring'        // Board 만드는 것을 Spring 에게 요청한다~
        ]),
        async onSubmit(payload) {
            const qnaBoard = await this.requestCreateQnaBoardToSpring(payload);
            if (qnaBoard) {
                await this.$router.push({ name: 'QnaBoardListPage' });
            }
        }
    }
}

</script>

<style>

</style>