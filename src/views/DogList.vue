<template>
  <div class="container">
    <header>
      <img src="/path-to-logo.jpg" alt="Kennel Logo" class="logo" />
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
          <input v-model="newDog.name" placeholder="Name" required />
          <input v-model="newDog.age" placeholder="Age" required />
          <input v-model="newDog.characteristic" placeholder="Characteristic" required />
          <input type="file" @change="onFileChange" accept="image/*" required />
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
      </div>
    </div>

    <!-- Dog Detail Modal -->
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
      dogs: [
        { name: "Vento", age: 3, characteristic: "Loyal", health: "solid" , color:"brown" ,image: "path-to-vento.jpg" },
        { name: "Rocky", age: 2, characteristic: "Intelligent", health: "solid" , color:"brown", image: "path-to-rocky.jpg" },
        { name: "Max", age: 3, characteristic: "Impressive",health: "solid" , color:"brown", image: "path-to-max.jpg" },
        { name: "Toby", age: 0.3, characteristic: "Gentle", health: "solid" , color:"brown", image: "path-to-toby.jpg" },
        { name: "Charlie", age: 0.3, characteristic: "Adorable", health: "solid" , color:"brown", image: "path-to-charlie.jpg" }
      ],
      newDog: {
        name: "",
        age: "",
        characteristic: "",
        health: "",
        color: "",
        image: ""
      }
    };
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
            (this.filters.age === "Puppy" && dog.age <= 1) ||
            (this.filters.age === "Adult" && dog.age > 1 && dog.age <= 7) ||
            (this.filters.age === "Senior" && dog.age > 7)) &&
          (this.filters.characteristic === "" || dog.characteristic === this.filters.characteristic)&&
          (this.filters.color === "" || dog.color.toLowerCase() === this.filters.color.toLowerCase())
        );
      });
    }
  },
  methods: {
    openDogModal(dog) {
      this.selectedDog = dog;
    },
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
      if (this.newDog.name && this.newDog.age && this.newDog.characteristic && this.newDog.health && this.newDog.color && this.newDog.image) {
        this.dogs.push({ ...this.newDog });
        this.newDog = { name: "", age: "", characteristic: "", health: "", color: "", image: "" };
        this.showForm = false;
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
</style>
