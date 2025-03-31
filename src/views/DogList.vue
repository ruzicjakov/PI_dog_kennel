<template>
  <div class="container">
    <header>
      <img src="@/assets/paw.jpg" alt="Logo" class="logo" />
      <h1>Insignis Natura da Casali</h1>
      <h2>Kennel from Zadar</h2>
    </header>

    <button @click="showForm = true" class="add-dog-button">Add New Dog</button>

    <div class="filter-section">
      <input v-model="filters.name" placeholder="Search by name..." class="filter-input" />
      <select v-model="filters.age" class="filter-select">
        <option value="">All Ages</option>
        <option value="Puppy">Puppy (0-1 year)</option>
        <option value="Adult">Adult (1-7 years)</option>
        <option value="Senior">Senior (7+ years)</option>
      </select>
      <input v-model="filters.color" placeholder="Search by color..." class="filter-input" />
      <select v-model="filters.characteristic" class="filter-select">
        <option value="">All Characteristics</option>
        <option v-for="char in uniqueCharacteristics" :key="char" :value="char">{{ char }}</option>
      </select>
    </div>

    

    <!-- Add Dog Modal -->
    <div v-if="showForm" class="modal" @click="showForm = false">
      <div class="modal-content" @click.stop>
        <span class="close" @click="showForm = false">&times;</span>
        <h3>Add a New Dog</h3>
        <form @submit.prevent="addDog">
          <input v-model="newDog.name" placeholder="Name" />
          <input v-model="newDog.age" placeholder="Age"  />
          <input v-model="newDog.characteristic" placeholder="Characteristic" />
          <input v-model="newDog.color" placeholder="Color"  />
          <input v-model="newDog.health" placeholder="Health State" />
          <input type="file" @change="onFileChange" accept="image/*"  />
          <button type="submit">Add Dog</button>
        </form>
      </div>
    </div>

    <!-- Dog List -->
    <div class="dog-list">
      <div v-for="dog in filteredDogs" :key="dog.name" class="dog-card" @click="openDogModal(dog)">
        <img :src="dog.image" :alt="dog.name" class="dog-image" />
        <div class="dog-info">
          <p><strong>Name:</strong> {{ dog.name }}</p>
          <p><strong>Age:</strong> {{ dog.age }}</p>
          <p><strong>Color:</strong> {{ dog.color }}</p>
        </div>
        
        <button @click.stop="toggleFavorite(dog)" class="favorite-button">
  <i :class="dog.isFavorite ? 'fas fa-heart text-red-500' : 'far fa-heart'"></i>
</button>

      </div>
    </div>

    <div v-if="selectedDog" class="modal" @click="selectedDog = null">
      <div class="modal-content" @click.stop>
        <span class="close" @click="selectedDog = null">&times;</span>
        <h3>{{ selectedDog.name }}</h3>
        <img :src="selectedDog.image" :alt="selectedDog.name" class="dog-modal-image" />
        <p><strong>Age:</strong> {{ selectedDog.age }}</p>
        <p><strong>Characteristic:</strong> {{ selectedDog.characteristic }}</p>
        <p><strong>Health State:</strong> {{ selectedDog.health || "Unknown" }}</p>
        <p><strong>Color:</strong> {{ selectedDog.color || "Unknown" }}</p>
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
import { db } from "@/firebase"; 
import { collection, getDocs, addDoc, updateDoc, doc } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

export default {
  data() {
    return {
      showForm: false,
      selectedDog: null,
      filters: {
        name: "",
        age: "",
        characteristic: "",
        color: ""
      },
      dogs: [],
      newDog: {
        name: "",
        age: "",
        characteristic: "",
        health: "",
        color: "",
        image: "",
        isFavorite: false
      }
    };
  },
  async created() {
    await this.fetchDogs();
  },
  computed: {
    uniqueCharacteristics() {
      return [...new Set(this.dogs.map(dog => dog.characteristic))];
    },
    filteredDogs() {
      return this.dogs.filter(dog => {
        return (
          (this.filters.name === "" || dog.name.toLowerCase().includes(this.filters.name.toLowerCase())) &&
          (this.filters.age === "" ||
            (this.filters.age === "Puppy" && Number(dog.age) <= 1) ||
            (this.filters.age === "Adult" && Number(dog.age) > 1 && Number(dog.age) <= 7) ||
            (this.filters.age === "Senior" && Number(dog.age) > 7)) &&
          (this.filters.characteristic === "" || dog.characteristic === this.filters.characteristic) &&
          (this.filters.color === "" || dog.color.toLowerCase() === this.filters.color.toLowerCase())
        );
      });
    },
    favoriteDogs() {
      return this.dogs.filter(dog => dog.isFavorite);
    }
  },
  methods: {

    goHome(){
      this.$router.push('/');
    },
    goAbout(){
      this.$router.push('/about');
    },
    async fetchDogs() {
      try {
        if (!db) {
          throw new Error("Firestore instance (db) is not initialized.");
        }

        const dogsCollection = collection(db, "dogs"); 
        const querySnapshot = await getDocs(dogsCollection);
        this.dogs = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      } catch (error) {
        console.error("Error fetching dogs:", error);
      }
    },

    async addDog() {
  const defaultDog = {
    name: "unknown",
    age: "unknown",
    characteristic: "unknown",
    health: "unknown",
    color: "unknown",
    image: "unknown",
    isFavorite: false
  };

  const dogData = {
    ...defaultDog, 
    ...this.newDog 
  };

  try {
    console.log("New Dog Data:", dogData);
    const docRef = await addDoc(collection(db, "dogs"), dogData);
    this.dogs.push({ id: docRef.id, ...dogData });
    this.newDog = { name: "", age: "", characteristic: "", health: "", color: "", image: "", isFavorite: false };
    this.showForm = false;
  } catch (error) {
    console.error("Error adding dog:", error);
  }
},

    async toggleFavorite(dog) {
    try {
      const dogRef = doc(db, "dogs", dog.id);
      const newFavoriteStatus = !dog.isFavorite;
      
      await updateDoc(dogRef, { isFavorite: newFavoriteStatus });

      // Update local state
      const dogIndex = this.dogs.findIndex(d => d.id === dog.id);
      if (dogIndex !== -1) {
        this.dogs[dogIndex].isFavorite = newFavoriteStatus;
      }
    } catch (error) {
      console.error("Error updating favorite status:", error);
    }
  },

  openDogModal(dog) {
    this.selectedDog = dog;
  },
  

    async onFileChange(event) {
      const file = event.target.files[0];
      if (file) {
        const storage = getStorage();
        const storageRef = ref(storage, `dogs/${file.name}`);

        try {
          await uploadBytes(storageRef, file);
          const downloadURL = await getDownloadURL(storageRef);
          this.newDog.image = downloadURL;
        } catch (error) {
          console.error("Error uploading file:", error);
        }
      }
    }
  }
};
</script>



<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}
.modal-content {
  background: white;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
}
.close {
  float: right;
  font-size: 24px;
  cursor: pointer;
}
.dog-modal-image {
  width: 200px;
  border-radius: 10px;
}
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
  cursor: pointer;
}
.favorites-section {
  margin-top: 20px;
  padding: 10px;
  background: #f8e9a1;
  border-radius: 10px;
}

.favorite-button i {
  font-size: 1.5rem;
  transition: color 0.3s ease;
}

.favorite-button i.fas {
  color: red;
}

.dog-image {
  width: 200px; 
  height: 200px;
  object-fit: cover; 
  border-radius: 10px;
}
</style>
