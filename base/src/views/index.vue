<template>
	<template v-for="(item, index) in menuData" :key="index">
		<WujieVue
			v-if="currentSubName === item.name"
			width="100%"
			height="100%"
			:name="item.name"
			:url="item.url"
			:props="{
				path,
				params,
				query,
				userInfo,
			}"
			alive
		></WujieVue>
	</template>
</template>

<script setup lang="ts">
import { ref, watch, onBeforeUnmount } from 'vue'
import {
	useRoute,
	useRouter,
	type RouteLocationNormalizedLoaded,
} from 'vue-router'
import WujieVue from 'wujie-vue3'
import { menuData } from '@/components/Menu/data'
import useStore from '@/store'

const route = useRoute()
const router = useRouter()
const { bus } = WujieVue
const {
	store: { userInfo },
} = useStore()

const currentSubName = ref<string>('')
let path = ''
let params: any = null // 内存中的参数，刷新丢失
let query: any = null // 主应用地址栏的参数，刷新不丢失

watch(
	() => route,
	(val: RouteLocationNormalizedLoaded) => {
		// 当前激活的子应用
		currentSubName.value = val.params.subApplicationName as string
		// 同步主应用路由 => 子应用
		path = val.params.subApplicationPath as string
		// 记录主应用的query参数
		query = val.query
		bus.$emit('syncSubRoute', {
			subName: currentSubName.value,
			path: path,
		})
	},
	{ deep: true, immediate: true }
)

// 同步子应用路由 => 主应用
bus.$on('syncMainRoute', (path: string) => {
	if (route.path !== path) {
		router.push(path)
	}
})

// 子应用相互跳转
bus.$on('skipRoute', (path: string, data?: any) => {
	if (data) {
		params = data
	}
	router.push(path)
})

onBeforeUnmount(() => {
	// 清空所有监听事件
	bus.$clear()
})
</script>

<style scoped lang="scss"></style>
