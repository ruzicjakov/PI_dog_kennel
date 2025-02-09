<template>
    <div class="container">
      <div class="header">
        <img src="@/assets/paw.jpg" alt="Logo" class="logo" />
        <div class="title">
          <h1>Insignis Natura da Casali</h1>
          <p>Kennel from Zadar</p>
        </div>
      </div>
  
      <div class="carousel">
        <button @click="prevDog" class="carousel-btn left-btn">⬅</button>
  
        <div class="carousel-inner">
          <img :src="dogImages[currentDog]" :alt="'Dog ' + (currentDog + 1)" class="dog-image" />
        </div>
  
        <button @click="nextDog" class="carousel-btn right-btn">➡</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        dogImages: [
          require("@/assets/puppy1.jpg"),
          require("@/assets/puppy2.jpg"),
          require("@/assets/puppy3.jpg"), 
          require("@/assets/dog1.jpg"),
          require("@/assets/puppy4.jpg"),
          require("@/assets/puppy5.jpg"),
          require("@/assets/puppy6.jpg")
        ],
        currentDog: 0,
      };
    },
    methods: {
      nextDog() {
        this.currentDog = (this.currentDog + 1) % this.dogImages.length;
      },
      prevDog() {
        this.currentDog = (this.currentDog - 1 + this.dogImages.length) % this.dogImages.length;
      },
      autoRotate() {
        setInterval(() => {
          this.nextDog();
        }, 2200); 
      }
    },
    mounted() {
      this.autoRotate(); 
    }
  };
  </script>
  
  <style scoped>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #f8f8f8;
    min-height: 100vh;
    font-family: Arial, sans-serif;
  }
  
  .header {
    display: flex;
    align-items: center;
    background-color: #6dc36d;
    width: 100%;
    padding: 15px;
    color: white;
    justify-content: center;
  }
  
  .logo {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 10px;
  }
  
  .title {
    text-align: center;
  }
  
  h1 {
    margin: 0;
    font-size: 24px;
  }
  
  p {
    margin: 0;
    font-size: 14px;
  }
  
  .carousel {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 40px;
    width: 300px;
    height: 300px;
    position: relative;
  }
  
  .carousel-inner {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  
  .dog-image {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    object-fit: cover;
    transition: opacity 0.5s ease-in-out;
  }
  
  .carousel-btn {
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    border: none;
    padding: 10px;
    cursor: pointer;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    font-size: 20px;
    border-radius: 50%;
  }
  
  .left-btn {
    left: -40px;
  }
  
  .right-btn {
    right: -40px;
  }
  
  .carousel-btn:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }
  </style>
  
