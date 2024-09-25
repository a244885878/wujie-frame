import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';

export const menus = [
  { path: '/approve', component: () => import('@/views/approve/index.vue'), meta: { title: '审批', icon: 'Star' } },
  { path: '/flow', component: () => import('@/views/flow/index.vue'), meta: { title: '流程', icon: 'Star' } },
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
