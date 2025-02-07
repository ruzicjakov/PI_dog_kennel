<template>
    <div class="container">
      <!-- Header -->
      <div class="header">
        <img src="https://placekitten.com/50/50" alt="Logo" class="logo" />
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
  
        <div class="image-content">
          <img src="https://placekitten.com/400/300" alt="Dogs" />
        </div>
      </div>
  
      <!-- Footer -->
      <div class="footer">
        <span>Insignis Natura</span>
        <div class="footer-right">
          <button class="home-btn">Home page</button>
          <img src="https://placekitten.com/40/40" alt="Profile" class="profile" />
          <button class="about-btn">About us</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {};
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
  
  .image-content img {
    max-width: 100%;
    border-radius: 10px;
  }
  
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
    margin-left: 10px;
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
  