import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: () => import('@/pages/home/index.vue'),
    children: [
      {
        path: '/:subApplicationName/:subApplicationPath',
        component: () => import('@/views/index.vue'),
      },
      { path: '/:pathMatch(.*)*', component: () => import('@/views/404.vue') }
    ]
  },
  {
    path: '/login',
    component: () => import('@/pages/login/index.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
