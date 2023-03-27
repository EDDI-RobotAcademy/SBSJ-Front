<template>
  <v-app>
    <Header/>
    <v-content>
      <router-view/>
    </v-content>
    <v-btn fab dark small fixed bottom right color="teal" @click="toTop">
      <v-icon>{{ "mdi-menu-up" }}</v-icon>
    </v-btn>
    <Footer/>
  </v-app>
</template>

<script>
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
  },
  methods: {    
    toTop () {
      document.body.scrollIntoView({ behavior: 'smooth' });
    }
  }
  
};
</script>
