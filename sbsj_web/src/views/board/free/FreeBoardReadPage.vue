<template>
  <div class="container" align="center" style="border: 1px solid black; width: 70%; margin-bottom:5%;">
    <div alian="center">
        <free-board-read-form v-if="freeBoard" :freeBoard="freeBoard"/>
        <p v-else>로딩중...............</p>
        <div>
          <div style="display:flex; justify-content:space-between; width:70%; margin-top:5%;">
            <div>
              <router-link :to="{ name: 'FreeBoardModifyPage', params: { freeBoardId } }">
                <button class="btn btn-outline-dark me-2">게시물 수정</button>
                <button @click="onDelete" class="btn btn-outline-dark me-2">삭제</button>
              </router-link>
            </div>
            <div>
              <router-link :to="{ name: 'FreeBoardListPage' }">
                <button class="btn btn-outline-dark">돌아가기</button>
              </router-link>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
// import FreeCommentListForm from '@/components/board/comment/FreeCommentListForm.vue'
// import FreeCommentRegisterForm from '@/components/board/comment/FreeCommentRegisterForm.vue'
import FreeBoardReadForm from '@/components/board/freeBoard/FreeBoardReadForm.vue'
import { mapActions, mapState } from 'vuex'

const boardModule = 'boardModule'

export default {
    name: 'FreeBoardReadPage',
    data() {
      return {
        showPasswordModal: false,
        enteredPassword: ''
      };
    },                        
    components : { FreeBoardReadForm, },
    props: {
        freeBoardId: {
            type: String,
            required: true
        }
    },
    computed: {
        ...mapState(boardModule, ['freeBoard', 'freeComments'])
    },
    methods: {
        ...mapActions(boardModule, [
            'requestFreeBoardToSpring',
            'requestFreeBoardDeleteToSpring',
        ]),
        async onDelete() {
            await this.requestFreeBoardDeleteToSpring(this.freeBoardId);
            await this.$router.push({ name: 'FreeBoardListPage' })
        },
    },
    async created() {
        await this.requestFreeBoardToSpring(this.freeBoardId);
    }
}

</script>

<style>
  .container {
    margin-top: 7%;
  }
</style>