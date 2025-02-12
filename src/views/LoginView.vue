<template>
  <div class="container">
    <div class="form-wrapper">
      <!-- Profile Image -->
      <img src="../assets/dog1.jpg" alt="Profile" class="profile-img" />

      <!-- Form Card -->
      <div class="form-card">
        <h2 class="title">Welcome!</h2>

        <form @submit.prevent="login">
          <input v-model="email" type="email" placeholder="E-mail" class="input-field" required />
          <input v-model="password" type="password" placeholder="Password" class="input-field" required />

          <button type="submit" class="btn login-btn">Login</button>
          <button type="button" class="btn register-btn" @click="goToRegister">Go to register</button>
        </form>

        <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { auth } from "@/firebase"; // Import Firebase Auth
import { signInWithEmailAndPassword } from "firebase/auth";

export default {
  data() {
    return {
      email: "",
      password: "",
      errorMessage: "",
    };
  },
  methods: {
    async login() {
      try {
        const userCredential = await signInWithEmailAndPassword(auth, this.email, this.password);
        console.log("User logged in:", userCredential.user);
        
        // Redirect to home page after successful login
        this.$router.push("/");
      } catch (error) {
        this.errorMessage = "Invalid email or password";
      }
    },
    goToRegister() {
      this.$router.push("/signup");
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

/* Error Message */
.error {
  color: red;
  margin-top: 10px;
  font-size: 14px;
}
</style>
