<template>
  <nav class="navbar">
    <div class="nav-container">
      <button class="menu-btn" @click="toggleDropdown">
        ☰ Menu
      </button>

      <div v-if="dropdownOpen" class="dropdown">
        <button @click="navigateTo('/')" class="dropdown-item">🏠 Home</button>
        <button @click="navigateTo('/about')" class="dropdown-item">ℹ️ About</button>
        <button @click="navigateTo('/doglist')" class="dropdown-item">🐶 Dog List</button>
        <button @click="navigateTo('/favorites')" class="dropdown-item">❤️ Favorites</button>
        
        <!-- samo ako korisnik NIJE ulogiran -->
        <button v-if="!isLoggedIn" @click="navigateTo('/signup')" class="dropdown-item">📝 Sign Up</button>
        <button v-if="!isLoggedIn" @click="navigateTo('/login')" class="dropdown-item">🔑 Login</button>
        
        <!--  samo ako korisnik JE ulogiran -->
        <button v-if="isLoggedIn" @click="logout" class="dropdown-item">🚪 Logout</button>
      </div>
    </div>
  </nav>
</template>

<script>
import { auth } from "@/firebase";
import { signOut } from "firebase/auth";

export default {
  props: {
    isLoggedIn: Boolean, // prima state iz App.vue
  },
  data() {
    return {
      dropdownOpen: false
    };
  },
  methods: {
    toggleDropdown() {
      this.dropdownOpen = !this.dropdownOpen;
    },
    navigateTo(route) {
      this.$router.push(route);
      this.dropdownOpen = false;
    },
    async logout() {
      try {
        await signOut(auth);
        console.log("User logged out");
      } catch (error) {
        console.error("Logout error:", error);
      }
    }
  }
};
</script>


<style scoped>
.navbar {
  background-color: #333;
  padding: 10px 20px;
  color: white;
  text-align: left;
}

.menu-btn {
  background: none;
  border: none;
  color: white;
  font-size: 20px;
  cursor: pointer;
}

.dropdown {
  position: absolute;
  background-color: #444;
  width: 200px;
  top: 50px;
  left: 10px;
  border-radius: 5px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  z-index: 1000;
}

.dropdown-item {
  display: block;
  width: 100%;
  padding: 10px;
  text-align: left;
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 16px;
}

.dropdown-item:hover {
  background-color: #555;
}
</style>
