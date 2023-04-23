<template>
  <div>
    <free-board-list-form :freeBoards="freeBoards"/>
  </div>
</template>

<script>
import FreeBoardListForm from '@/components/board/freeBoard/FreeBoardListForm.vue'
import { mapActions, mapState } from 'vuex'

const boardModule = 'boardModule'

export default {
  components: { FreeBoardListForm },
  name: "FreeBoardListPage",
  computed: {
      ...mapState(boardModule, ['freeBoards'])
  },
  mounted () {
    this.requestFreeBoardListToSpring()
  },
  methods: {
    ...mapActions(boardModule, [
      'requestFreeBoardListToSpring'
    ])
  }
}

</script>

<style>

</style>