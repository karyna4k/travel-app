import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import AboutView from '@/views/AboutView.vue';
import BrazilView from '@/views/BrazilView.vue';
import HawaiiView from '@/views/HawaiiView.vue';
import JamaicalView from '@/views/JamaicalView.vue';
import PanamaView from '@/views/PanamaView.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView,
  },
  {
    path: '/brazil',
    name: 'Brazil',
    component: BrazilView,
  },
  {
    path: '/hawaii',
    name: 'Hawaii',
    component: HawaiiView,
  },
  {
    path: '/jamaica',
    name: 'Jamaica',
    component: JamaicalView,
  },
  {
    path: '/panama',
    name: 'Panama',
    component: PanamaView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
