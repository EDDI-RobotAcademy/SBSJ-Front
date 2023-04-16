<template>
  <div>
    <div v-if="showPasswordModal" class="password-modal">
        <div class="password-modal-content">
            <h2>비밀글입니다. 비밀번호를 입력하세요.</h2>
            <input type="password" v-model="enteredPassword" placeholder="비밀번호" />
            <button @click="checkPassword">확인</button>
        </div>
    </div>
    <div v-else>
        <table class="qna-board-read-table">
            <tr>
                <td>게시물 번호</td>
                <td><input type="text" :value="qnaBoard.qnaBoardId" readonly/></td>
            </tr>
            <tr>
                <td>제목</td>
                <td><input type="text" :value="qnaBoard.title" readonly/></td>
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
                <td><textarea cols="50" rows="20" :value="qnaBoard.content" readonly/></td>
            </tr>
        </table>
    </div>
  </div>
</template>

<script>

export default {
    name: 'QnaBoardRead',
    props: {
        qnaBoard: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            showPasswordModal: false,
            enteredPassword: ''
        };
    },
    mounted() {
        this.showPasswordModal = this.qnaBoard.privateCheck;
    },
    watch: {
        qnaBoard: {
            immediate: true,
            handler(newValue) {
                this.showPasswordModal = newValue.privateCheck;
            }
        }
    },
    methods: {
        checkPassword() {
            if (this.qnaBoard.privateCheck && this.enteredPassword === this.qnaBoard.password) {
                this.showPasswordModal = false;
            } else if (!this.qnaBoard.privateCheck) {
                this.showPasswordModal = false;
            } else {
                alert('비밀번호가 일치하지 않습니다.');
            }
        },
    }
};

</script>

<style scoped>
    .qna-board-read-table td {
        border: 1px solid;
        text-align: center;
    }
    .password-modal {
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.4);
    }

    .password-modal-content {
    background-color: #fefefe;
    margin: 15% auto;
    padding: 20px;
    border: 1px solid #888;
    width: 30%;
    text-align: center;
    }
</style>