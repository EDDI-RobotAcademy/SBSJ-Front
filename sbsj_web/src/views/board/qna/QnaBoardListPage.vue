<template>
  <div>
    <qna-board-list-form :qnaBoards="showQnaBoards"/>
    <div class="clear-fix"></div>
    <paginate :containerClass="'pagination'" v-model="syncCurrentPage" :page-count="10" :page-range="10" :margin-pages="1" :click-handler="clickCallback" :prev-text="'Previous'" :next-text="'Next'" style="display: flex;
    list-style: none;
    padding: 0;
    margin: 0;">
        <template slot="page" slot-scope="props"> 
            <li v-for="(page, index) in props.pages" :key="index" :class="{ 'active': props.isActive(page), 'disabled': props.isDisabled(page)}">
                <a href="#" @click.prevent="props.pageSelected(page)">{{ page }}</a>
            </li>
        </template>
    </paginate>
    <div class="clear-fix"></div>
  </div>
</template>

<script>
import QnaBoardListForm from '@/components/board/qnaBoard/QnaBoardListForm.vue'
import { mapActions, mapState } from 'vuex'
import Paginate from 'vuejs-paginate';

const boardModule = 'boardModule'

export default {
  components: { QnaBoardListForm, Paginate },
  name: "QnaBoardListPage",
  data() {
    return {
      currentPage: 1,
      itemsPerPage: 5,
      cache: {},
      qnaBoardList: []
    }
  }, 
  computed: {
      ...mapState(boardModule, ['qnaBoards']),
      syncCurrentPage: {
            get() {
                return this.currentPage
            },
            set(value) {
                this.currentPage = value
            }
      },
      showQnaBoards: {
        get() {
          return this.qnaBoardList
        },
        set(value) {
          this.qnaBoardList = value;
        }
      }
  },
  async mounted () {
    console.log("mouted()")
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    console.log(startIndex + "/" + endIndex)
    const payload = {startIndex: startIndex, endIndex: endIndex}
    await this.requestQnaBoardListToSpring(payload)
    this.showQnaBoards = this.qnaBoards
    this.cache[this.currentPage] = this.qnaBoards
  },
  methods: {
    ...mapActions(boardModule, [
      'requestQnaBoardListToSpring'
    ]),
    
    async clickCallback(pageNumber) {
      console.log("clickCallback(): " + pageNumber)
      this.syncCurrentPage = pageNumber
      const startIndex = (pageNumber - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      
      if(!this.cache[pageNumber]) {
        const payload = {startIndex: startIndex, endIndex: endIndex}
        await this.requestQnaBoardListToSpring(payload);
        this.showQnaBoards = this.qnaBoards
        this.cache[this.currentPage] = this.qnaBoards
      } else {
        console.log("cache used!!")
        this.showQnaBoards = this.cache[pageNumber]
      }
        
    }

  }
}

</script>

<style>

</style>