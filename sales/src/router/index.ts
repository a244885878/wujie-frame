import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';

export const menus = [
  { path: '/order', component: () => import('@/views/order/index.vue'), meta: { title: '订单', icon: 'Star' } },
  { path: '/client', component: () => import('@/views/client/index.vue'), meta: { title: '客户', icon: 'Star' } },
]

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: () => import('@/views/common/index.vue'),
  },
  {
    path: '/login',
    component: () => import('@/views/common/login.vue'),
  },
];

if (window?.$wujie) {
  routes.push(...menus)
} else {
  routes[0].children = menus
}

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
