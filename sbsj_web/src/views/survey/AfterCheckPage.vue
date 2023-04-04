<template>
  <div>
    <div style="margin-top:3%; text-align: right; width:96%;">
      <router-link :to="{ name: 'SurveyPage' }" style="color: #5B1A7C;">
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
        </svg>
      </router-link>
    </div>
    <div style="padding-inline: 10%;">
      <after-check-form/>
    </div>
  </div>
  </template>

<script>

import AfterCheckForm from '@/components/survey/AfterCheckForm.vue'

export default {
    components: { AfterCheckForm },
}

</script>

<style>

</style>