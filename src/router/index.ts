import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import sourceData from '@/data.json';
import type { Destination } from '@/types';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/destination/:id/:slug',
    name: 'destination',
    component: () => import('@/views/DestinationView.vue'),
    props: (route) => ({ ...route.params, id: parseInt(route.params.id) }),
    beforeEnter: (to, from) => {
      const exists = sourceData.destinations.find(
        (destination: Destination) => destination.id === parseInt(to.params.id)
      );

      if (!exists)
        return {
          name: 'NotFound',
          params: {
            pathMatch: to.path.split('/').slice(1),
          },
          query: to.query,
          hash: to.hash,
        };
    },
    children: [
      {
        path: ':experienceSlug',
        name: 'experience',
        component: () => import('@/views/ExperienceView.vue'),
        props: (route) => ({ ...route.params, id: parseInt(route.params.id) }),
      },
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/views/NotFound.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
