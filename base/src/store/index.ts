import { reactive } from "vue";

type Store = {
  userInfo: any
}
const store: Store = reactive({
  userInfo: null
})

export default function userStore() {

  const setUserInfo = () => {
    console.log('setUserInfo')
    return new Promise((resolve) => {
      setTimeout(() => {
        store.userInfo = {
          username: 'Admin'
        }
        resolve(true)
      }, 200)
    })
  }

  return {
    setUserInfo,
    store
  }
}