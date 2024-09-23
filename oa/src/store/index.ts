import { reactive } from "vue";

type Store = {
  message: any
}
const store: Store = reactive({
  message: null
})

export default function useStore() {
  const setMessage = (data: any) => {
    store.message = data
  }

  return {
    store,
    setMessage
  }
}