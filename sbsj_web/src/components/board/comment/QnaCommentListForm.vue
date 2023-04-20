<template>
    <div>
        <v-container>
            <v-card-text v-if="!qnaComments || (Array.isArray(qnaComments) && qnaComments.length === 0)">
                <p>현재 등록된 댓글이 없습니다.</p>
            </v-card-text >
            <v-card-text v-else v-for="(qnaComment, index) in qnaComments" :key="qnaComment.qnaCommentId">
                <div class="qna-comment">
                <p style="font-weight:bold;">{{ qnaComment.writer }} </p>
                <p v-show="commentModify !== index">{{ qnaComment.comment }}</p>
                </div>
            </v-card-text>
        </v-container>
    </div>
</template>

<script>
import axios from "axios";
export default {
    name: "QnaCommentListForm",
    props: {
        qnaComments: {
            type: Array
        },
        },
    },
}
</script>

<style>
.qna-comment {
    border: 1px solid #ddd;
    padding: 10px;
    margin-bottom: 10px;
}
</style>