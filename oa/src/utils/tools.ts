import router from '@/router'

export const selfSubName = 'oa'

// 公共路由跳转方法
export const routerChange = (path: string) => {
  if (window?.$wujie) {
    window?.$wujie?.bus.$emit('skipRoute', `/${selfSubName}${path}`)
  } else {
    router.replace(path)
  }
}

// 公共路由参数获取
export const getQuery = () => {
  if (window?.$wujie) {
    return window.$wujie?.props.query
  } else {
    return router.currentRoute.value.query
  }
}