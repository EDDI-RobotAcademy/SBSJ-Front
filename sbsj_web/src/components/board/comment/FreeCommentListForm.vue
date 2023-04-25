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