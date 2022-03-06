// import { createRouter, createWebHistory } from 'vue-router';
import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Projects from '../views/Projects.vue';
import Contact from '../views/Contact.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: Home,
    name: 'Home',
  },
  {
    path: '/projects',
    component: Projects,
    name: 'Projects',
  },
  {
    path: '/contact',
    component: Contact,
    name: 'Projects',
  },

];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
