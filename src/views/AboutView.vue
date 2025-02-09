<template>
    <div class="container">
      <!-- Header -->
      <div class="header">
        <img src="@/assets/paw.jpg" alt="Logo" class="logo" />
        <div class="title">
          <h1>Insignis Natura da Casali</h1>
          <p>Kennel from Zadar</p>
        </div>
      </div>
  
      <!-- About Section -->
      <div class="about-section">
        <div class="text-content">
          <h2>About us</h2>
          <p>
            Welcome to my corner of the internet! I’m Jale, and I’m thrilled to share my passion for dogs with you.
          </p>
          <p>
            My fascination with canines stems from a love for their unwavering loyalty and companionship. Over the years,
            I have dedicated myself to raising and nurturing these incredible creatures, ensuring they receive the best
            possible care and training.
          </p>
          <p>
            At Insignis Natura da Casali, we believe that every dog deserves a loving home. Our breeding program is built
            on love, responsibility, and ethical practices to ensure that our puppies grow into happy and healthy
            companions.
          </p>
          <p>
            Thank you for visiting, and we appreciate your support in sharing our passion for dogs!
          </p>
  
          <!-- Contact Section -->
          <div class="contact-box">
            <p><strong>Email:</strong> znfrid@gmail.com</p>
            <p><strong>Phone:</strong> +56 9876543456</p>
            <button class="contact-btn">CONTACT US</button>
          </div>
        </div>
      </div>
  
      <!-- Map Section -->
      <div class="map-container">
        <h2>Our Location</h2>

        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d106808.17117735624!2d15.129223578261975!3d44.18158180708394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1shr!2shr!4v1739133398561!5m2!1shr!2shr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

      </div>
  
      <!-- Footer -->
      <div class="footer">
        <span>Insignis Natura</span>
        <div class="footer-right">
          <button class="home-btn" @click="goToHome">Home page</button>
          <img src="@/assets/paw.jpg" alt="Logo" class="logo" />
          <button class="about-btn" @click="goToAbout">About us</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "About",
    methods: {
      goToHome() {
        this.$router.push("/");
      },
      goToAbout() {
        this.$router.push("/about");
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
    background-color: #f8f8f8;
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
  
  /* About Section */
  .about-section {
    display: flex;
    max-width: 900px;
    margin-top: 30px;
    gap: 20px;
    padding: 20px;
  }
  
  .text-content {
    flex: 1;
  }
  
  h2 {
    font-size: 26px;
    color: #333;
  }
  
  p {
    font-size: 14px;
    color: #555;
    line-height: 1.5;
  }
  
  /* Contact Box */
  .contact-box {
    background: #eaeaea;
    padding: 15px;
    border-radius: 10px;
    margin-top: 10px;
    text-align: center;
  }
  
  .contact-btn {
    margin-top: 10px;
    padding: 8px 15px;
    background-color: black;
    color: white;
    border: none;
    cursor: pointer;
    border-radius: 5px;
  }
  
  .contact-btn:hover {
    background-color: gray;
  }
  
  /* Map */
  .map-container {
    text-align: center;
    width: 100%;
    max-width: 800px;
    margin-top: 20px;
  }
  
  .map-container iframe {
    width: 100%;
    height: 400px;
    border: 0;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    margin-top: 10px;
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
  
  .home-btn,
  .about-btn {
    background-color: black;
    color: white;
    border: none;
    padding: 8px 15px;
    border-radius: 5px;
    cursor: pointer;
    margin-left: 10px;
  }
  
  .home-btn:hover,
  .about-btn:hover {
    background-color: gray;
  }
  </style>
  
