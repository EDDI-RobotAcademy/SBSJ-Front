<template>
  <div class="container" style="padding-left: 0; padding-right: 0;">
    <div class="filter-content">
      <div class="body-part">
        <ul class="list" style="padding-left: 0;">
          <li class="list-item" @click="filtering('TOTAL')">
            <span>전체보기</span>
          </li>
          <li class="list-header">
            <span>신체 기관별</span>
          </li>
          <li class="list-item" @click="filtering('EYE')">
            <span>눈 건강</span>
          </li>
          <li class="list-item" @click="filtering('BONE')">
            <span>뼈 건강</span>
          </li>
          <li class="list-item" @click="filtering('STRESS')">
            <span>스트레스 완화</span>
          </li>
          <li class="list-item" @click="filtering('VITAMIN-C')">
            <span>비타민 C</span>
          </li>
          <li class="list-item" @click="filtering('VITAMIN-D')">
            <span>비타민 D</span>
          </li>
        </ul>
        <ul class="list" style="padding-left: 0;">
          <li class="list-header">
            <span>브랜드별</span>
          </li>
          <li class="list-item" @click="filteringBrandProduct('ABC')">
            <span>ABC</span>
          </li>
          <li class="list-item" @click="filteringBrandProduct('DEF')">
            <span>DEF</span>
          </li>
          <li class="list-item" @click="filteringBrandProduct('GHI')">
            <span>GHI</span>
          </li>
          <li class="list-item" @click="filteringBrandProduct('JKL')">
            <span>JKL</span>
          </li>
          <li class="list-item" @click="filteringBrandProduct('MNO')">
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

  .container {
    padding-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;

  }
  .filter-content {
    width: 200px;
    display: block;
    position: relative;
    background-color: none;
    border: solid;
    height: 2206px;
  }

  .list {
    list-style-type: none;
    padding-left: 0;
    display: block;
    box-sizing: border-box;
  }

  .list-item {
    cursor: pointer;
  }

  .list-item:hover {
    background-color: rgb(199, 212, 223);
  }

</style>