<template>
  <div class="container" align="center">
    <div class="mb-5">공지사항</div>
    <free-board-register-form @submit="onSubmit"/>
  </div>
</template> 

<script>
import FreeBoardRegisterForm from '@/components/board/freeBoard/FreeBoardRegisterForm.vue'
import { mapState, mapActions } from 'vuex'

const boardModule = 'boardModule'

export default {
    name: "FreeBoardRegisterPage",
    components: { FreeBoardRegisterForm },
    computed: {
      ...mapState(boardModule, ['freeBoard'])
    },
    methods: {
        ...mapActions(boardModule, [
            'requestCreateFreeBoardToSpring'        // Board 만드는 것을 Spring 에게 요청한다~
        ]),
        async onSubmit(payload) {
            const freeBoard = await this.requestCreateFreeBoardToSpring(payload);
            if (freeBoard) {
                await this.$router.push({ name: 'FreeBoardListPage' });
            }
        }
    }
}

</script>

<style scoped>
.mb-5 {
  font-size: medium;
  width: 70%;
  height: 30px;
  background-color: black;
  color: white;
  font-weight: bold;
  text-align: center;
}

</style>