<template>
  <div class="container" style="padding-left: 0; padding-right: 0;">
    <div class="filter-content">
      <div class="body-part">
        <ul class="list" style="padding-left: 0;">
          <li class="list-header">
            <span>신체 부위별</span>
          </li>
          <li class="list-item" @click="filtering('TOTAL')">
            <span>전체보기</span>
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
    }
  }
}

</script>

<style>

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