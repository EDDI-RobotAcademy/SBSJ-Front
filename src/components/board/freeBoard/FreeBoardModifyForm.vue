<template>
  <div>
    <form @submit.prevent="onSubmit">
        <div style="width:80%;">
            <h1 style="text-align: center;">
                <input type="text" style="text-align: center; border: 2px solid #CCCC" v-model="title"/>
            </h1>
            <div class="readText">
                <div style="border-bottom: 1px solid black; opacity: 0.2; margin-top:5%;"></div>
                
                <div style="display: flex;">
                    <div style="text-align:start;">
                        <input type="text" :value="freeBoard.freeBoardId" readonly />
                    </div>
                    <div style="text-align:right; flex-grow:1;">
                        <input type="text" :value="freeBoard.regDate | formatDate" readonly />
                    </div>
                </div>
                <div>
                    <div style="text-align: start; margin-top:2%;">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                            <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                        </svg>
                        <input style="margin-left:2%;" type="text" :value="freeBoard.writer" readonly/>
                        <div style="border-bottom: 1px solid black; opacity: 0.2; margin-top:5%;"></div>
                    </div>
                </div>
                <div>
                    <div style="margin-top:5%; border: 2px solid #CCCC">
                        <textarea cols="90" rows="10" v-model="content"></textarea>
                    </div>
                </div>
            </div>
        </div>

        <div class="mt-2">
            <button type="submit" class="btn btn-outline-dark me-2">수정</button>
            <router-link :to="{ name: 'FreeBoardReadPage', params: { freeBoardId: freeBoard.freeBoardId.toString() }}">
                <button class="btn btn-outline-danger">취소</button>
            </router-link>
        </div>
    </form>
  </div>
</template>

<script>

export default {
    name: 'FreeBoardModifyForm',
    props: {
        freeBoard: {
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
        this.title = this.freeBoard.title
        this.writer = this.freeBoard.writer
        this.content = this.freeBoard.content
        this.regData = this.freeBoard.regData
    }
}

</script>

<style scoped>
    .readText {
        width: 70%;
    }
    .free-board-modify-table td {
        border: 1px solid;
        text-align: center;
    }
</style>