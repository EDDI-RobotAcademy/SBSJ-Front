<template>
  <div class="container" style="align: center">
    <div class="qnaRegisterPage">문의게시판</div>
    <qna-board-register-form @submit="onSubmit"/>
  </div>
</template> 

<script>
import QnaBoardRegisterForm from '@/components/board/qnaBoard/QnaBoardRegisterForm.vue'
import { mapState, mapActions } from 'vuex'

const boardModule = 'boardModule'

export default {
    name: "QnaBoardRegisterPage",
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
.qnaRegisterPage {
  font-size: medium;
  width: 70%;
  background-color: black;
  color: white;
  font-weight: bold;
}

</style>