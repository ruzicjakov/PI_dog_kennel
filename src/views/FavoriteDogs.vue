<template>
    <div class="container">
      <header>
        <h1>Favorite Dogs</h1>
        <button @click="$router.push('/')" class="back-button">Back to Home</button>
      </header>
  
      <div v-if="favoriteDogs.length > 0" class="dog-list">
        <div v-for="dog in favoriteDogs" :key="dog.id" class="dog-card">
          <img :src="dog.image" :alt="dog.name" class="dog-image" />
          <div class="dog-info">
            <p><strong>Name:</strong> {{ dog.name }}</p>
            <p><strong>Age:</strong> {{ dog.age }}</p>
            <p><strong>Color:</strong> {{ dog.color }}</p>
          </div>
          <button @click="toggleFavorite(dog)">Remove from Favorites</button>
        </div>
      </div>
  
      <div v-else>
        <p>No favorite dogs yet.</p>
      </div>
    </div>
  </template>
  
  <script>
  import { db } from "@/firebase";
  import { collection, getDocs, updateDoc, doc } from "firebase/firestore";
  
  export default {
    data() {
      return {
        dogs: []
      };
    },
    async created() {
      await this.fetchDogs();
    },
    computed: {
      favoriteDogs() {
        return this.dogs.filter(dog => dog.isFavorite);
      }
    },
    methods: {
      async fetchDogs() {
        try {
          const dogsCollection = collection(db, "dogs");
          const querySnapshot = await getDocs(dogsCollection);
          this.dogs = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        } catch (error) {
          console.error("Error fetching dogs:", error);
        }
      },
  
      async toggleFavorite(dog) {
        try {
          const dogRef = doc(db, "dogs", dog.id);
          await updateDoc(dogRef, { isFavorite: !dog.isFavorite });
  
          this.dogs = this.dogs.map(d => 
            d.id === dog.id ? { ...d, isFavorite: !d.isFavorite } : d
          );
        } catch (error) {
          console.error("Error updating favorite status:", error);
        }
      }
    }
  };
  </script>


<style scoped>
  /* General styles */
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #cccf0e;
    min-height: 100vh;
    font-family: Arial, sans-serif;
  }
  
  /* Header */
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
  
  /* Content */
  .content {
    display: flex;
    gap: 20px;
    margin-top: 40px;
  }
  
  .card {
    width: 250px;
    padding: 20px;
    border-radius: 10px;
    text-align: center;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  }
  
  .card img {
    width: 100%;
    border-radius: 10px;
  }
  
  .male {
    background-color: #f8d7da;
  }
  
  .female {
    background-color: #d4edda;
  }
  
  h2 {
    margin-top: 10px;
    font-size: 20px;
    color: #2c3e50;
  }
  
  /* Footer */
  .footer {
    display: flex;
    justify-content: space-between;
    width: 100%;
    background-color: white;
    padding: 15px;
    margin-top: 40px;
    box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);
    align-items: center;
  }
  
  .footer-right {
    display: flex;
    align-items: center;
  }
  
  .profile {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 10px;
  }
  
  .about-btn {
    background-color: black;
    color: white;
    border: none;
    padding: 8px 15px;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .about-btn:hover {
    background-color: gray;
  }
</style>  
