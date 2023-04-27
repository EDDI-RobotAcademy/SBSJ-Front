<template>
  <div>
    <free-board-list-form :freeBoards="showFreeBoards"/>
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
import FreeBoardListForm from '@/components/board/freeBoard/FreeBoardListForm.vue'
import { mapActions, mapState } from 'vuex'
import Paginate from 'vuejs-paginate';

const boardModule = 'boardModule'

export default {
  components: { FreeBoardListForm, Paginate },
  name: "FreeBoardListPage",
  data() {
    return {
      currentPage: 1,
      itemsPerPage: 5,
      cache: {},
      freeBoardList: []
    }
  }, 
  computed: {
      ...mapState(boardModule, ['freeBoards']),
      syncCurrentPage: {
            get() {
                return this.currentPage
            },
            set(value) {
                this.currentPage = value
            }
      },
      showFreeBoards: {
        get() {
          return this.freeBoardList
        },
        set(value) {
          this.freeBoardList = value;
        }
      }
  },
  async mounted () {
    console.log("mouted()")
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    console.log(startIndex + "/" + endIndex)
    const payload = {startIndex: startIndex, endIndex: endIndex}
    await this.requestFreeBoardListToSpring(payload)
    this.showFreeBoards = this.freeBoards
    this.cache[this.currentPage] = this.freeBoards
  },
  methods: {
    ...mapActions(boardModule, [
      'requestFreeBoardListToSpring'
    ]),
    async clickCallback(pageNumber) {
      console.log("clickCallback(): " + pageNumber)
      this.syncCurrentPage = pageNumber
      const startIndex = (pageNumber - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      
      if(!this.cache[pageNumber]) {
        const payload = {startIndex: startIndex, endIndex: endIndex}
        await this.requestFreeBoardListToSpring(payload)
        this.showFreeBoards = this.freeBoards
        this.cache[this.currentPage] = this.freeBoards
      } else {
        console.log("cache used!!")
        this.showFreeBoards = this.cache[pageNumber]
      }
        
    }
  }
}

</script>

<style>

</style>