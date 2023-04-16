<template>
  <div>
    <qna-board-list-form :qnaBoards="qnaBoards"/>
  </div>
</template>

<script>
import QnaBoardListForm from '@/components/board/QnaBoardListForm.vue'
import { mapActions, mapState } from 'vuex'

const boardModule = 'boardModule'

export default {
  components: { QnaBoardListForm },
  name: "QnaBoardListPage",
  computed: {
      ...mapState(boardModule, ['qnaBoards'])
  },
  mounted () {
    this.requestQnaBoardListToSpring()
  },
  methods: {
    ...mapActions(boardModule, [
      'requestQnaBoardListToSpring'
    ])
  }
}

</script>

<style>

</style>