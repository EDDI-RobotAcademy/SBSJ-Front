<template>
    <div v-if="showPasswordModal" class="password-modal">
        <div class="password-modal-content">
            <h5>비밀글입니다. 비밀번호를 입력하세요.</h5>
            <input type="password" v-model="enteredPassword" placeholder="비밀번호" />
            <button @click="checkPassword">확인</button>
        </div>
    </div>
    
<div v-else>
    <div style="width:80%;">
        <h1 style="text-align: center; width:60%;">
            <input type="text" style="text-align: center;" :value="qnaBoard.title" readonly />
        </h1>
        <div class="readText">
            <div style="border-bottom: 1px solid black; opacity: 0.2; margin-top:5%;"></div>
            
            <div style="display: flex;">
                <div style="text-align:start;">
                    <input type="text" :value="qnaBoard.qnaBoardId" readonly />
                </div>
                <div style="text-align:right; flex-grow:1;">
                    <input type="text" :value="qnaBoard.regDate | formatDate" readonly />
                </div>
            </div>
            <div>
                <div style="text-align: start; margin-top:2%;">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                        <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                    </svg>
                    <input style="margin-left: 2%;" type="text" :value="qnaBoard.writer" readonly/>
                    <div style="border-bottom: 1px solid black; opacity: 0.2; margin-top:5%;"></div>
                </div>
            </div>
            <div>
                <div style="margin-top: 5%;">
                    <textarea cols="70" rows="10" :value="qnaBoard.content" readonly></textarea>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>

export default {
name: 'QnaBoardReadForm',
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
    const hasAccess = localStorage.getItem(`qnaBoardAccess-${this.qnaBoard.qnaBoardId}`);
    this.showPasswordModal = this.qnaBoard.privateCheck && !hasAccess;
},
watch: {
    qnaBoard: {
        immediate: true,
        handler(newValue) {
            const hasAccess = localStorage.getItem(`qnaBoardAccess-${newValue.qnaBoardId}`);
            this.showPasswordModal = newValue.privateCheck && !hasAccess;
        }
    }
},
methods: {
    checkPassword() {
        if (this.qnaBoard.privateCheck && this.enteredPassword === this.qnaBoard.password) {
            this.showPasswordModal = false;
            localStorage.setItem(`qnaBoardAccess-${this.qnaBoard.qnaBoardId}`, true);
        } else if (!this.qnaBoard.privateCheck) {
            this.showPasswordModal = false;
        } else {
            alert('비밀번호가 일치하지 않습니다.');
        }
    },
},
beforeDestroy() {
    localStorage.removeItem(`qnaBoardAccess-${this.qnaBoard.qnaBoardId}`);
},
};

</script>

<style scoped>
.readText {
width: 80%;
border-collapse: separate;
padding-inline: 5%;
}
.password-modal {
position: fixed;
z-index: 1;
left: 0;
top: 0;
width: 100%;
height: 100%;
overflow: auto;
background-color: rgba(0, 0, 0, 0.7);
display: flex;
align-items: center;
justify-content: center;
}

.password-modal-content {
background-color: #fefefe;
padding: 20px;
border: 1px solid #888;
width: 30%;
text-align: center;
}
</style>