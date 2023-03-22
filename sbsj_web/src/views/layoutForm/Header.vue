<template>
  <nav>
  <v-app-bar color="dark" class="flex-grow-0" app dark>
    <v-app-bar-nav-icon v-on:click="activeSidebar"/>
    <v-img class="mx-2" src="@/assets/logo.png"
            max-height="40" max-width="40" contain/>
      <v-toolbar-title class="text--darken-4">
          <span>Pick Your Energy</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-text-field class="green--text" v-model="search" append-icon="mdi-magnify" label="placeholder" single-line hide-details></v-text-field>
      <v-btn v-if="isAuthenticated == true" text color="grey" v-on:click="resign">
          <span>회원 탈퇴</span>
          <v-icon right>mdi-login</v-icon>
      </v-btn>
      <v-btn text color="grey" onclick="location.href='http://localhost:8080/sign-up'">
          <span>Sign Up</span>
          <v-icon right>mdi-account-plus-outline</v-icon>
      </v-btn>
      <v-btn v-if="isAuthenticated == false" text color="grey" onclick="location.href='http://localhost:8080/sign-in'">
          <span>Sign In</span>
          <v-icon right>mdi-login</v-icon>
      </v-btn>
      <v-btn v-else text color="grey" v-on:click="logout">
          <span>Sign Out</span>
          <v-icon right>mdi-exit-to-app</v-icon>
      </v-btn>
  </v-app-bar>    
</nav>
</template>

<script>
export default {


</style>          //
      },
      logout () {
          //
      }
  },
  // computed: {
  //     …mapState(["isAuthenticated"]),
  // },
  // mounted() {
  //     if (localStorage.getItem("userInfo")) {
  //         this.$store.state.isAuthenticated = true;
  //     } else {
  //         this.$store.state.isAuthenticated = false;
  //     }
  // }
  }
</script>
