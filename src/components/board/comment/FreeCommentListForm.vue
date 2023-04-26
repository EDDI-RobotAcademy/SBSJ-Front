<template>
    <div>
        <v-container>
            <v-card-text v-if="!freeComments || (Array.isArray(freeComments) && freeComments.length === 0)">
                <p>현재 등록된 댓글이 없습니다.</p>
            </v-card-text >
            <v-card-text v-else v-for="(freeComment, index) in freeComments" :key="freeComment.freeCommentId">
                <div class="free-comment">
                <p style="font-weight:bold;">{{ freeComment.writer }} </p>
                <p v-show="commentModify !== index">{{ freeComment.comment }}</p>
                <v-text-field v-model="freeComment.comment" label="댓글 수정" v-show="commentModify === index"></v-text-field>
                <button v-if="commentModify !== index" @click="startModify(index)">수정 | </button>
                <button v-if="commentModify === index" @click="saveComment(freeComment)">수정 완료 | </button>
                <button @click="deleteComment(freeComment)">삭제</button>
                </div>
            </v-card-text>
        </v-container>
    </div>
</template>

<script>
import axios from "axios";
export default {
    name: "FreeCommentListForm",
    props: {
        freeComments: {
            type: Array
        },
        freeComment: {
            type: Object
        },
    },
    data() {
        return {
            commentModify: null,
        }
    },
    methods: {
        startModify(index) {
            this.commentModify = index;
        },
        saveComment(payload) {
            this.commentModify = null;
            const { freeCommentId, comment } = payload;
            return axios.put(`http://localhost:7777/free/read/${freeCommentId}`, 
                {comment})
                .then((res) => {
                    alert("질문 게시글의 댓글 " + freeCommentId + "번 -> " + comment  +"로 수정 성공", res.data)
                })
                .catch(() => {
                    alert("질문 게시글의 댓글 " + freeCommentId + "번 수정 실패")
                })
        },
        async deleteComment(payload) {
            const { freeCommentId } = payload;
            await axios.delete(`http://localhost:7777/free/read/${freeCommentId}`)
                .then(() => {
                    alert('댓글 삭제 완료');
                    location.reload();
                })
                .catch(() => {
                    alert('댓글 삭제 실패');
                });
        }
    },
}
</script>

<style>
.free-comment {
    border: 1px solid #ddd;
    padding: 10px;
    margin-bottom: 10px;
}
</style>