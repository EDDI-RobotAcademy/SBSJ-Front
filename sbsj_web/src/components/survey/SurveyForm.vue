<template>
  <body>
      <div class="container">
          <div style="display: flex; justify-content: center; text-decoration:center; width:100%;" >
              <div style="display: flex; justify-content: center; text-decoration:center; width:30%; margin-top:10%;">
              <router-link :to="{ name: 'FirstCheck' }" type="submit" class="btn btn-outline-primary" style="width:50%; font-weight: bold;">공통 설문 시작</router-link>
              </div>
            </div>
      </div>
  </body>
  
  </template>
  
  <script>
  export default {
    name: 'SurveyForm',
    data() {
      return {
  
      }
    },
    methods: {
      
    }
  }
  </script>
  
  <style>
  
  </style>