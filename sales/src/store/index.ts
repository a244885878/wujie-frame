import { reactive } from "vue";

type Store = {
  message: any
  userInfo: any
}
const store: Store = reactive({
  message: null,
  userInfo: window?.$wujie ? window?.$wujie?.props.userInfo : null
})

export default function useStore() {
  const setMessage = (data: any) => {
    store.message = data
  }

  const setUserInfo = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        store.userInfo = {
          username: 'admin'
        }
        resolve(true)
      }, 200)
    })
  }

  return {
    store,
    setUserInfo,
    setMessage
  }
}