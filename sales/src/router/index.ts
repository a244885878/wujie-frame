import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  { path: '/', component: () => import('@/views/common/index.vue') },
  { path: '/order', component: () => import('@/views/order/index.vue'), meta: { title: '订单' } },
  { path: '/client', component: () => import('@/views/client/index.vue'), meta: { title: '客户' } },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
