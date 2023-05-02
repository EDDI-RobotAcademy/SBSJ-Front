<template>
  <div class="container mx-auto px-4 pt-5 mt-5">
    <div class="filter-content">
      <div class="body-part">
        <ul class="list-unstyled">
          <li class="list-item py-2 px-4 bg-main-500 text-white rounded-lg mb-2 cursor-pointer" @click="filtering('TOTAL')">
            <span>전체 상품 보기</span>
          </li>
          <li class="list-header font-bold mt-4 mb-2">
            <span>기능별 카테고리</span>
          </li>
          <li class="list-item py-2 px-4 bg-purple-500 text-white rounded-lg mb-2 cursor-pointer" @click="filtering('EYE')">
            <span>눈 건강</span>
          </li>
          <li class="list-item py-2 px-4 bg-purple-500 text-white rounded-lg mb-2 cursor-pointer" @click="filtering('BONE')">
            <span>뼈 건강</span>
          </li>
          <li class="list-item py-2 px-4 bg-purple-500 text-white rounded-lg mb-2 cursor-pointer" @click="filtering('STRESS')">
            <span>스트레스완화</span>
          </li>
          <li class="list-item py-2 px-4 bg-purple-500 text-white rounded-lg mb-2 cursor-pointer" @click="filtering('VITAMIN-C')">
            <span>비타민 C</span>
          </li>
          <li class="list-item py-2 px-4 bg-purple-500 text-white rounded-lg mb-2 cursor-pointer" @click="filtering('VITAMIN-D')">
            <span>비타민 D</span>
          </li>
        </ul>
        <ul class="list-unstyled mt-6">
          <li class="list-header font-bold mt-4 mb-2">
            <span>브랜드별 카테고리</span>
          </li>
          <li class="list-item py-2 px-4 bg-violet-500 text-white rounded-lg mb-2 cursor-pointer" @click="filteringBrandProduct('ABC')">
            <span>ABC</span>
          </li>
          <li class="list-item py-2 px-4 bg-violet-500 text-white rounded-lg mb-2 cursor-pointer" @click="filteringBrandProduct('DEF')">
            <span>DEF</span>
          </li>
          <li class="list-item py-2 px-4 bg-violet-500 text-white rounded-lg mb-2 cursor-pointer" @click="filteringBrandProduct('GHI')">
            <span>GHI</span>
          </li>
          <li class="list-item py-2 px-4 bg-violet-500 text-white rounded-lg mb-2 cursor-pointer" @click="filteringBrandProduct('JKL')">
            <span>JKL</span>
          </li>
          <li class="list-item py-2 px-4 bg-violet-500 text-white rounded-lg mb-2 cursor-pointer" @click="filteringBrandProduct('MNO')">
            <span>MNO</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>


export default {
  name: 'ProductListFilter',
  props: {
      
  },
  methods: {
    filtering(value) {
      this.$emit('filtering', value)
    },
    filteringBrandProduct(value) {
      this.$emit('filteringBrandProduct', value)
    }
  }
}

</script>

<style scoped>
  .list-item {
    transition: background-color 0.2s;
    padding: 0.5rem;
    border-radius: 0.5rem;
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.5rem;
    color: #6b7280;
    cursor: pointer;
    border: 1px solid #e5e7eb;
    margin-bottom: 0.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .list-item:hover {
    background-color: #f5f5f5;
  }
  .list-header {
    font-weight: bold;
    margin-top: 1.5rem;
    margin-bottom: 0.5rem;
  }
  .bg-main-500 {
    background-color: #692498;
    color: #fff;
  }
  .bg-purple-500 {
    background-color: #692498;
    opacity: 80%;
    color: #fff;
  }
  .bg-violet-500 {
    background-color: #692498;
    opacity: 60%;
    color: #fff;
  }

</style>