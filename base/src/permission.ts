import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
import router from './router'
import { type RouteLocationNormalized, type RouteLocationNormalizedLoaded, type NavigationGuardNext } from 'vue-router'
import userStore from './store'

const whiteList = ['/login'] // 没有重定向的白名单
const { setUserInfo, store } = userStore()

router.beforeEach(async (to: RouteLocationNormalized, from: RouteLocationNormalizedLoaded, next: NavigationGuardNext) => {

  NProgress.start()

  const token = localStorage.getItem('token')

  if (token) {
    if (to.path === '/login') {
      next({ path: '/' })
    } else {
      // 获取动态路由、用户信息等
      if (!store.userInfo) {
        await setUserInfo()
      }
      next()
    }
  } else {
    if (whiteList.includes(to.path)) {
      next()
    } else {
      next({ path: '/login' })
    }
  }
})

router.afterEach(() => {
  NProgress.done()
})
