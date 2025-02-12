import { createRouter, createWebHistory } from 'vue-router';
import { auth } from '@/firebase'; 

import Signup from '@/views/SignupView.vue';
import Login from '@/views/LoginView.vue';
import Home from '@/views/HomePage.vue';
import About from '@/views/AboutView.vue';
import DogList from '@/views/DogList.vue';
import FavoriteDogs from '@/views/FavoriteDogs.vue';

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
    component: DogList,
    meta: { requiresAuth: true } 
  },
  {
    path: '/favorites',
    name: 'FavoriteDogs',
    component: FavoriteDogs,
    meta: { requiresAuth: true } 
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});


router.beforeEach((to, from, next) => {
  const user = auth.currentUser; 
  if (to.matched.some(record => record.meta.requiresAuth) && !user) {
    alert("Access denied for this route. Please log in first.");
    next('/login');
  } else {
    next();
  }
});

export default router;
