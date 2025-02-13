<template>
  <div v-if="!isAuthChecked">Loading...</div>
  <div v-else>
    <NavbarButton :isLoggedIn="!!user" />
    <router-view></router-view>
  </div>
</template>

<script>
import NavbarButton from "@/components/NavbarButton.vue";
import { auth } from "@/firebase";
import { onAuthStateChanged } from "firebase/auth";

export default {
  name: "App",
  components: {
    NavbarButton,
  },
  data() {
    return {
      user: null,
      isAuthChecked: false,
    };
  },
  created() {
    onAuthStateChanged(auth, (user) => {
      this.user = user; 
      this.isAuthChecked = true; 
      console.log("User is logged in:", this.user);
    });
  },
};
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
