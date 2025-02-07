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
  
      <!-- Content -->
      <div class="content">
        <div class="card male">
          <img src="https://placekitten.com/200/250" alt="Male Puppy" />
          <h2>Male</h2>
        </div>
  
        <div class="card female">
          <img src="https://placekitten.com/200/250" alt="Female Puppy" />
          <h2>Female</h2>
        </div>
      </div>
  
      <!-- Footer -->
      <div class="footer">
        <span>Insignis Natura</span>
        <div class="footer-right">
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
  