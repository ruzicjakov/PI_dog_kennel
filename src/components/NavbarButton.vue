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
          <button @click="navigateTo('/signup')" class="dropdown-item">📝 Sign Up</button>
          <button @click="navigateTo('/login')" class="dropdown-item">🔑 Login</button>
        </div>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
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
      }
    }
  };
  </script>
  
  <style scoped>
  /* Navbar Container */
  .navbar {
    background-color: #333;
    padding: 10px 20px;
    color: white;
    text-align: left;
  }
  
  /* Menu Button */
  .menu-btn {
    background: none;
    border: none;
    color: white;
    font-size: 20px;
    cursor: pointer;
  }
  
  /* Dropdown Menu */
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
  
  /* Dropdown Items */
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
  
