<template>
    <div class="container" align="center">
        <h2>게시물 수정</h2>
        <qna-board-modify-form v-if="qnaBoard" :qnaBoard="qnaBoard" @submit="onSubmit"/>
        <p v-else>로딩중...............</p>
    </div>
</template>

<script>
import QnaBoardModifyForm from '@/components/board/QnaBoardModifyForm.vue';
import { mapState, mapActions } from 'vuex'

const boardModule = 'boardModule'

export default {
    name: 'QnaBoardModifyPage',
    components: { QnaBoardModifyForm },
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
            'requestQnaBoardModifyToSpring'
        ]),
        async onSubmit(payload) {
            const { title, content } = payload
            const qnaBoardId = this.qnaBoardId

            await this.requestQnaBoardModifyToSpring({ qnaBoardId, title, content })
            await this.$router.push({
                name: 'QnaBoardReadPage',
                params: { qnaBoardId: this.qnaBoardId }
            })
        }
    },
    created() {
        this.requestQnaBoardToSpring(this.qnaBoardId)
    }
}

</script>

<style>

</style>