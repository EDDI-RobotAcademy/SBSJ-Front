<template>
  <v-app>
    <Header/> <!-- 건호씨가 만든 상단 내비 바 자리-->
    <v-content> <!-- 바디 -->
      <router-view/>
    </v-content>
    <Footer/>
  </v-app>
</template>

<script>
// 헤더 자리는 내비 바 임포트해서 넣을 자리! 현재는 임의로 수업때 헤더 채워둠
import Header from '@/views/layoutForm/Header.vue';
import Footer from '@/views/layoutForm/Footer.vue';

export default {
  name: 'App',

  data: () => ({
    //
  }),
  components: {
    Header,
    Footer
  }
};
</script>
