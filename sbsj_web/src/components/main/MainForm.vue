<template>
  <v-container>
    <div id="home">
        <div class="row">
            <div class="col-md elevation-1 ma-2 pa-2">
                캐러셀<br>
                캐러셀<br>
                캐러셀<br>
                캐러셀<br>
                캐러셀<br>
                캐러셀<br>
            </div>
        </div>
            <div class="row">
            <div class="col-md elevation-1 ma-2 pa-2">
                베스트셀러<br>
                베스트셀러<br>
                베스트셀러<br>
                베스트셀러<br>
                베스트셀러<br>
                베스트셀러<br>
            </div>
            <div class="col-md elevation-1 ma-2 pa-2">
                맞춤상품<br>
                맞춤상품<br>
                맞춤상품<br>
                맞춤상품<br>
                맞춤상품<br>
                맞춤상품<br>
            </div>
        </div>
      <router-view/>
    </div>
  </v-container>
</template>

<script>

  export default {
    name: 'MainForm',

    components: {
      
    },
  }
</script>
