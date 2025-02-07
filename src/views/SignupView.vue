  <template>
    <div class="container">
      <div class="form-wrapper">
        <!-- Profile Image -->
        <img src="..\assets\dog1.jpg" alt="Profile" class="profile-img" />
  
        <!-- Form Card -->
        <div class="form-card">
          <h2 class="title">Welcome!</h2>
  
          <form @submit.prevent="register">
            <input v-model="name" type="text" placeholder="Name" class="input-field" />
            <input v-model="surname" type="text" placeholder="Surname" class="input-field" />
            <input v-model="email" type="email" placeholder="E-mail" class="input-field" />
            <input v-model="username" type="text" placeholder="Username" class="input-field" />
            <input v-model="password" type="password" placeholder="Password" class="input-field" />
  
            <button type="button" class="btn login-btn" @click="goToLogin">Go to login</button>
            <button type="submit" class="btn register-btn">Register</button>
          </form>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        name: "",
        surname: "",
        email: "",
        username: "",
        password: ""
      };
    },
    methods: {
      register() {
        alert(`User ${this.name} registered successfully!`);
        // Add your registration logic here (e.g., API call)
        this.$router.push("/login"); // Redirect to login page
      },
      goToLogin() {
        this.$router.push("/login"); // Redirect to login page
      }
    }
  };
  </script>
  
  <style scoped>
  /* General styling */
  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: #d3d3d3;
  }
  
  /* Wrapper for the form */
  .form-wrapper {
    text-align: center;
  }
  
  /* Profile Image */
  .profile-img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 4px solid white;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  }
  
  /* Form Card */
  .form-card {
    background-color: #6dc36d;
    padding: 20px;
    margin-top: 10px;
    border-radius: 10px;
    width: 300px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  }
  
  /* Title */
  .title {
    color: #004d00;
    font-size: 22px;
    margin-bottom: 15px;
  }
  
  /* Input Fields */
  .input-field {
    width: 90%;
    padding: 8px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
  
  /* Buttons */
  .btn {
    width: 95%;
    padding: 10px;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
  }
  
  .login-btn {
    background-color: white;
    color: black;
    margin-bottom: 10px;
  }
  
  .register-btn {
    background-color: gray;
    color: white;
  }
  
  .login-btn:hover {
    background-color: #f0f0f0;
  }
  
  .register-btn:hover {
    background-color: darkgray;
  }
  </style>
  