<template>
      <NavbarButton />
<router-view></router-view>
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
    };
  },
  created() {
    onAuthStateChanged(auth, (user) => {
      this.user = user; // Sprema trenutno prijavljenog korisnika
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
