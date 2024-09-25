import router from './router'
import { type RouteLocationNormalized, type RouteLocationNormalizedLoaded, type NavigationGuardNext } from 'vue-router'
import userStore from './store'
const { setUserInfo, store } = userStore()

const whiteList = ['/login'] // 没有重定向的白名单

let log = true

router.beforeEach(async (to: RouteLocationNormalized, from: RouteLocationNormalizedLoaded, next: NavigationGuardNext) => {

  if (window?.$wujie) {
    if (log) {
      console.log("基座环境、基座token：", localStorage.getItem('token'))
      console.log("基座环境、基座的全局状态：", store.userInfo)
      log = false
    }
    return next()
  }

  const token = localStorage.getItem('subToken')
  if (log) {
    console.log('独立环境、token:', token)
    log = false
  }

  if (token) {
    if (to.path === '/login') {
      next({ path: '/' })
    } else {
      // 独立运行时获取全局数据
      if (!store.userInfo) {
        await setUserInfo()
        console.log('独立环境的全局状态:', store.userInfo)
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