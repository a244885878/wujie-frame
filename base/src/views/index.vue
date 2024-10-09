<template>
	<template v-for="(item, index) in menuData" :key="index">
		<WujieVue
			v-if="currentSubName === item.name"
			width="100%"
			height="100%"
			:name="item.name"
			:url="item.url"
			:props="props"
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

type Props = {
	path: string
	params: any
	query: any
	userInfo: any
}
const props = ref<Props>({
	path: '',
	params: null, // 内存中的参数，刷新丢失
	query: null, // 主应用地址栏的参数，刷新不丢失
	userInfo: useStore().store.userInfo,
})
const currentSubName = ref<string>('')

watch(
	() => route,
	(val: RouteLocationNormalizedLoaded) => {
		// 当前激活的子应用名称
		currentSubName.value = val.params.subApplicationName as string
		// 当前激活的子应用路由
		props.value.path = val.params.subApplicationPath as string
		// 记录主应用的query参数
		props.value.query = val.query
		// 同步主应用路由 => 子应用
		bus.$emit('syncSubRoute', {
			subName: currentSubName.value,
			path: props.value.path,
		})
	},
	{ deep: true, immediate: true }
)

// 子应用路由跳转
bus.$on('skipRoute', (path: string, data?: any) => {
	if (data) {
		props.value.params = data
	}
	router.push(path)
})

onBeforeUnmount(() => {
	// 清空所有监听事件
	bus.$clear()
})
</script>

<style scoped lang="scss"></style>
