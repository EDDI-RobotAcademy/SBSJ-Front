<template>
  <v-footer inset padless class="pl-0">
    <v-card flat class="text-center" width="100%">
      <!-- SNS채널 아이콘들
      <v-card-text class="text-center mt-5 pt-5">
        <v-btn v-for="icon in icons" :key="icon" class="mx-3" icon>
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-text> -->
      <v-divider color="light"></v-divider>
      <v-card-text>
        <router-link style="text-decoration: none; color: black;" :to="{ name: '' }">
          이용약관
        </router-link>
        | 
        <router-link style="text-decoration: none; color: black;" :to="{ name: '' }">
          개인정보처리방침
        </router-link>
        |
        <router-link style="text-decoration: none; color: black;" :to="{ name: '' }">
          고객센터
        </router-link>
        |
        <router-link style="text-decoration: none; color: black;" :to="{ name: '' }">
          사업자 정보 
        </router-link>
        <br>
        <p class="caption">Copyright Team SBSJ All rights reserved.</p>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>

export default {
    name: "Footer",
    data: () => ({
        icons: [
            "mdi-youtube",
            "mdi-twitter",
            "mdi-instagram",
        ],
    }),
}

</script>

<style>

</style>