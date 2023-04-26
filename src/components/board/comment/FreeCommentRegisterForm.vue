<template>
    <v-container>
        <form @submit="onSubmitRegister()">
            <table>
            <tbody>
            <br>
            <tr>
            &nbsp;&nbsp;&nbsp;
            <td>
            <h3>댓글</h3>
            <i class="bi bi-0-square"></i>
            <div style="border: 1px solid black;">
                <input style="font-weight:bold;" label="작성자" type="text" placeholder="작성자를 입력하세요." v-model="writer" />
                <br>
                <div class="textarea-container">
                    <textarea v-model="comment"
                                cols="70" rows="5"
                                placeholder="내용을 입력해 주세요."
                                onfocus="this.placeholder=''"
                                onblur="this.placeholder='내용을 입력해 주세요.'"
                                style="resize-none;">
                    </textarea>
                    <button class="submit-button" type="submit" style="margin-right: 2%; font-size:medium;">
                        등록
                    </button>
                  
                </div>
            </div>
            </td>
            <td>
            </td>
        </tr>
        </tbody>
        </table>
    </form>
    </v-container>
</template>

<script>
export default {
    name: "FreeCommentRegisterForm",
        props: {
        freeBoard: {
            type: Array
        },
    },
    data() {
    return {
        comment: '',
        writer: ''
    }
    },
    methods: {
    onSubmitRegister() {
        const {comment, writer} = this
        this.$emit('submit', {comment, writer})
        },
    }
}
</script>

<style scoped>
    .textarea-container {
        position: relative;
        display: inline-block;
    }
    .submit-button {
      position: absolute;
      right: 0;
      bottom: 0;
      font-size: small;
    }
</style>