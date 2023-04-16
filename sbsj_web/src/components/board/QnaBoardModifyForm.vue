<template>
  <div>
    <form @submit.prevent="onSubmit">
        <table class="qna-board-modify-table">
            <tr>
                <td>게시물 번호</td>
                <td><input type="text" :value="qnaBoard.qnaBoardId" readonly/></td>
            </tr>
            <tr>
                <td>제목</td>
                <td><input type="text" v-model="title"/></td>
            </tr>
            <tr>
                <td>작성자</td>
                <td><input type="text" :value="qnaBoard.writer" readonly/></td>
            </tr>
            <tr>
                <td>등록일자</td>
                <td><input type="text" :value="qnaBoard.regDate" readonly/></td>
            </tr>
            <tr>
                <td>본문</td>
                <td><textarea cols="50" rows="20" v-model="content"/></td>
            </tr>
        </table>

        <div class="mt-2">
            <button type="submit" class="btn btn-outline-primary me-2">수정</button>
            <router-link :to="{ name: 'QnaBoardReadPage', params: { qnaBoardId: qnaBoard.qnaBoardId.toString() }}">
                <button class="btn btn-outline-danger">취소</button>
            </router-link>
        </div>
    </form>
  </div>
</template>

<script>

export default {
    name: 'QnaBoardModifyForm',
    props: {
        qnaBoard: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            title: '',
            writer: '',
            content: '',
            regData: ''
        }
    },
    methods: {
        onSubmit() {
            const { title, content } = this
            this.$emit('submit', { title, content })
        }
    },
    created() {
        this.title = this.qnaBoard.title
        this.writer = this.qnaBoard.writer
        this.content = this.qnaBoard.content
        this.regData = this.qnaBoard.regData
    }
}

</script>

<style scoped>
    .qna-board-modify-table td {
        border: 1px solid;
        text-align: center;
    }
</style>