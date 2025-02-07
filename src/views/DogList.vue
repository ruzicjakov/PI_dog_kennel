<template>
    <div class="container">
      <header>
        <img src="/path-to-logo.jpg" alt="Kennel Logo" class="logo" />
        <h1>Insignis Natura da Casali</h1>
        <h2>Kennel from Zadar</h2>
      </header>
      
      <button @click="showForm = true" class="add-dog-button">Add New Dog</button>
      
      <div v-if="showForm" class="modal">
        <div class="modal-content">
          <span class="close" @click="showForm = false">&times;</span>
          <h3>Add a New Dog</h3>
          <form @submit.prevent="addDog">
            <input v-model="newDog.name" placeholder="Name" required />
            <input v-model="newDog.age" placeholder="Age" required />
            <input v-model="newDog.characteristic" placeholder="Characteristic" required />
            <input type="file" @change="onFileChange" accept="image/*" required />
            <button type="submit">Add Dog</button>
          </form>
        </div>
      </div>
      
      <div class="dog-list">
        <div v-for="dog in dogs" :key="dog.name" class="dog-card">
          <img :src="dog.image" :alt="dog.name" class="dog-image" />
          <div class="dog-info">
            <p><strong>Name:</strong> {{ dog.name }}</p>
            <p><strong>Age:</strong> {{ dog.age }}</p>
            <p><strong>Characteristic:</strong> {{ dog.characteristic }}</p>
          </div>
        </div>
      </div>
      
      <footer>
        <nav>
          <button @click="goHome">Home page</button>
          <button @click="goAbout">About us</button>
        </nav>
      </footer>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        showForm: false,
        dogs: [
          { name: "Vento", age: 3, characteristic: "Loyal", image: "path-to-vento.jpg" },
          { name: "Rocky", age: 2, characteristic: "Intelligent", image: "path-to-rocky.jpg" },
          { name: "Max", age: 3, characteristic: "Impressive", image: "path-to-max.jpg" },
          { name: "Toby", age: "3 Months", characteristic: "Gentle", image: "path-to-toby.jpg" },
          { name: "Charlie", age: "3 Months", characteristic: "Adorable", image: "path-to-charlie.jpg" }
        ],
        newDog: {
          name: "",
          age: "",
          characteristic: "",
          image: ""
        }
      };
    },
    methods: {
      goHome() {
        this.$router.push("/");
      },
      goAbout() {
        this.$router.push("/about");
      },
      onFileChange(event) {
        const file = event.target.files[0];
        if (file) {
          this.newDog.image = URL.createObjectURL(file);
        }
      },
      addDog() {
        if (this.newDog.name && this.newDog.age && this.newDog.characteristic && this.newDog.image) {
          this.dogs.push({ ...this.newDog });
          this.newDog = { name: "", age: "", characteristic: "", image: "" };
          this.showForm = false;
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .container {
    text-align: center;
    font-family: Arial, sans-serif;
  }
  header {
    background-color: #6bbf6b;
    padding: 20px;
    color: white;
  }
  .logo {
    width: 80px;
    border-radius: 50%;
  }
  .add-dog-button {
    margin: 20px;
    padding: 10px 20px;
    background-color: #6bbf6b;
    color: white;
    border: none;
    cursor: pointer;
    font-size: 16px;
    border-radius: 5px;
  }
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .modal-content {
    background: white;
    padding: 20px;
    border-radius: 10px;
    width: 300px;
    text-align: center;
  }
  .close {
    position: absolute;
    top: 10px;
    right: 15px;
    font-size: 20px;
    cursor: pointer;
  }
  .dog-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    padding: 20px;
  }
  .dog-card {
    background: #e0ffe0;
    padding: 15px;
    border-radius: 10px;
    width: 250px;
    text-align: left;
  }
  .dog-image {
    width: 100%;
    border-radius: 10px;
  }
  footer {
    padding: 20px;
    background: white;
  }
  button {
    margin: 5px;
    padding: 10px;
    border: none;
    cursor: pointer;
  }
  </style>
  
