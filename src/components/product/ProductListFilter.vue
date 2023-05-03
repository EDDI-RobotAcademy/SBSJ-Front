<template>
  <div class="container mx-auto px-4 pt-5 mt-5">
    <div class="filter-content">
      <div class="body-part">
        <ul class="list-unstyled">
          <li class="list-item py-2 px-4 bg-main-500 text-white rounded-lg mb-2 cursor-pointer" @click="filtering('TOTAL')">
            <span>전체 상품 보기</span>
          </li>
          <li class="list-header font-bold mt-4 mb-2">
            <span>신체기관별 카테고리</span>
          </li>
          <li class="list-item py-2 px-4 bg-purple-500 text-white rounded-lg mb-2 cursor-pointer" @click="filtering('BRAIN')">
            <span>뇌 건강</span>
          </li>
          <li class="list-item py-2 px-4 bg-purple-500 text-white rounded-lg mb-2 cursor-pointer" @click="filtering('EYE')">
            <span>눈 건강</span>
          </li>
          <li class="list-item py-2 px-4 bg-purple-500 text-white rounded-lg mb-2 cursor-pointer" @click="filtering('BONE')">
            <span>뼈 건강</span>
          </li>
          <li class="list-item py-2 px-4 bg-purple-500 text-white rounded-lg mb-2 cursor-pointer" @click="filtering('LIVER')">
            <span>간 건강</span>
          </li>
          <li class="list-item py-2 px-4 bg-purple-500 text-white rounded-lg mb-2 cursor-pointer" @click="filtering('INTESTINE')">
            <span>장 건강</span>
          </li>
          <li class="list-header font-bold mt-4 mb-2">
            <span>일상생활별 카테고리</span>
          </li>
          <li class="list-item py-2 px-4 bg-lightpurple-500 text-white rounded-lg mb-2 cursor-pointer" @click="filtering('STRESS')">
            <span>스트레스 관리</span>
          </li>
          <li class="list-item py-2 px-4 bg-lightpurple-500 text-white rounded-lg mb-2 cursor-pointer" @click="filtering('BODY-FAT')">
            <span>체지방 관리</span>
          </li>
          <li class="list-item py-2 px-4 bg-lightpurple-500 text-white rounded-lg mb-2 cursor-pointer" @click="filtering('BLOOD-SUGAR')">
            <span>혈당 관리</span>
          </li>
          <li class="list-item py-2 px-4 bg-lightpurple-500 text-white rounded-lg mb-2 cursor-pointer" @click="filtering('BLOOD-PRESSURE')">
            <span>혈압 관리</span>
          </li>
          <li class="list-item py-2 px-4 bg-lightpurple-500 text-white rounded-lg mb-2 cursor-pointer" @click="filtering('SKIN')">
            <span>피부 관리</span>
          </li>
        </ul>
        <ul class="list-unstyled mt-6">
          <li class="list-header font-bold mt-4 mb-2">
            <span>브랜드별 카테고리</span>
          </li>
          <li class="list-item py-2 px-4 bg-violet-500 text-white rounded-lg mb-2 cursor-pointer" @click="filteringBrandProduct('VITAMIN-VILLAGE')">
            <span>비타민마을</span>
          </li>
          <li class="list-item py-2 px-4 bg-violet-500 text-white rounded-lg mb-2 cursor-pointer" @click="filteringBrandProduct('NOW-FOODS')">
            <span>나우푸드</span>
          </li>
          <li class="list-item py-2 px-4 bg-violet-500 text-white rounded-lg mb-2 cursor-pointer" @click="filteringBrandProduct('DR-ELIZABETHS')">
            <span>닥터 엘리자베스</span>
          </li>
          <li class="list-item py-2 px-4 bg-violet-500 text-white rounded-lg mb-2 cursor-pointer" @click="filteringBrandProduct('CENTRUM')">
            <span>센트룸</span>
          </li>
          <li class="list-item py-2 px-4 bg-violet-500 text-white rounded-lg mb-2 cursor-pointer" @click="filteringBrandProduct('CENOVIS')">
            <span>세노비스</span>
          </li>
          <li class="list-item py-2 px-4 bg-violet-500 text-white rounded-lg mb-2 cursor-pointer" @click="filteringBrandProduct('ETC')">
            <span>기타 브랜드</span>
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
  .bg-lightpurple-500 {
    background-color: #692498;
    opacity: 70%;
    color: #fff;
  }
  .bg-violet-500 {
    background-color: #692498;
    opacity: 60%;
    color: #fff;
  }

</style>