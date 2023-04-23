<template>
    <div class="container" align="center">
        <h2>게시물 수정</h2>
        <free-board-modify-form v-if="freeBoard" :freeBoard="freeBoard" @submit="onSubmit"/>
        <p v-else>로딩중...............</p>
    </div>
</template>

<script>
import FreeBoardModifyForm from '@/components/board/freeBoard/FreeBoardModifyForm.vue';
import { mapState, mapActions } from 'vuex'

const boardModule = 'boardModule'

export default {
    name: 'FreeBoardModifyPage',
    components: { FreeBoardModifyForm },
    props: {
        freeBoardId: {
            type: String,
            required: true
        }
    },
    computed: {
      ...mapState(boardModule, ['freeBoard'])
    },
    methods: {
        ...mapActions(boardModule, [
            'requestFreeBoardToSpring',
            'requestFreeBoardModifyToSpring'
        ]),
        async onSubmit(payload) {
            const { title, content } = payload
            const freeBoardId = this.freeBoardId

            await this.requestFreeBoardModifyToSpring({ freeBoardId, title, content })
            await this.$router.push({
                name: 'FreeBoardReadPage',
                params: { freeBoardId: this.freeBoardId }
            })
        }
    },
    created() {
        this.requestFreeBoardToSpring(this.freeBoardId)
    }
}

</script>

<style>

</style>