<template>
  <form @submit.prevent="onSubmit">
    <table class="qna-board-register-table">
        <tr>
            <td>제목</td>
            <td><input type="text" v-model="title"/></td>
        </tr>
        <tr>
            <td>작성자</td>
            <td><input type="text" v-model="writer"/></td>
        </tr>
        <tr>
            <td>본문</td>
            <td><textarea cols="70" rows="20" v-model="content"/></td>
        </tr>
        <div text-align="left" style="font-size:14px; color:gray">
            * 상품과 무관한 내용이거나 음란 및 불법적인 내용은 통보없이 삭제될 수 있습니다.
        </div>
        <div>
            <v-checkbox name="secret" value="true" 
                label="비밀글로 문의하기"
                color="#205C37"
                v-model="privateCheck">
            </v-checkbox>
        </div>
        <div v-if="privateCheck">
            <div>비밀번호:</div>
            <div><input type="password" name="password" v-model="password" placeholder="비밀번호를 입력하세요" /></div>
        </div>        
    </table>

    <div class="mt-2">
        <button type="submit" class="btn btn-outline-primary me-2">등록</button>
        <router-link :to="{ name: 'QnaBoardListPage' }">
            <button class="btn btn-outline-danger">취소</button>
        </router-link>
    </div>

  </form>
</template>

<script>
export default {
    name: 'QnaBoardRegisterForm',
    data() {
        return {
            title: '문의사항',
            writer: '누구세요?',
            content: '내용을 입력하세요.',
            privateCheck: false,
            password: ''
        }
    },
    methods: {
        isPasswordValid(password) {
            const minLength = 8;
            const maxLength = 15;
            const hasLowerCase = /[a-z]/.test(password);
            const hasNumber = /\d/.test(password);
            const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

            return  maxLength > password.length &&
                    password.length >= minLength && hasLowerCase && hasNumber && hasSpecialChar;
        },
        onSubmit() {
            const { title, writer, content, password, privateCheck } = this;
            if (!title || !writer || !content) {
                alert("모든 입력란에 입력해주세요");
                return;
            }

            if (this.privateCheck && !this.isPasswordValid(password)) {
                alert("비밀번호는 8 자 이상 15 자 미만, 하나 이상의 숫자 및 소문자와 특수 문자를 모두 포함해야합니다.");
                return;
            }
            this.$emit('submit', { title, writer, content, password, privateCheck })
        }
    }
}
</script>

<style scoped>
    .qna-board-register-table td {
        border: 1px solid;
        text-align: center;
    }
</style>