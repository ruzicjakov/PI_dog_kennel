import { createRouter, createWebHistory } from 'vue-router';
import Signup from '@/views/SignupView.vue'; 
import Login from '@/views/LoginView.vue'; 
import Home from '@/views/HomePage.vue'; 
import About from '@/views/AboutView.vue'; 
import DogList from '@/views/DogList.vue';

const routes = [
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  },

    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
        path: '/doglist',
        name: 'DogList',
        component: DogList 
    }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
