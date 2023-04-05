<template>
  <div class="wrap">
    <my-page-profile-section/>
    <my-page-tabs-form/>
  </div>
</template>

<script>

import MyPageTabsForm from "@/components/mypage/MyPageTabsForm.vue";
import MyPageProfileSection from '@/components/mypage/MyPageProfileSection.vue';

export default {
    name: "MyPage",
    components: {
      MyPageTabsForm,
      MyPageProfileSection
  },
}

</script>

<style scoped>
.wrap {
  width: 1200px;
  margin: 0 auto;
  padding: 40px 0 100px;
}
.wrap ul {
  list-style: none !important;
}
</style>
