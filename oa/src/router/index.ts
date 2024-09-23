import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  { path: '/', component: () => import('@/views/common/index.vue') },
  { path: '/approve', component: () => import('@/views/approve/index.vue'), meta: { title: '审批' } },
  { path: '/flow', component: () => import('@/views/flow/index.vue'), meta: { title: '流程' } },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
