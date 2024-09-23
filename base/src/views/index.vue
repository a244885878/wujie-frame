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

const route = useRoute()
const router = useRouter()
const { bus } = WujieVue

const currentSubName = ref<string>('')
let path = ''

watch(
	() => route,
	(val: RouteLocationNormalizedLoaded) => {
		// 当前激活的子应用
		currentSubName.value = val.params.subApplicationName as string
		// 同步主应用路由 => 子应用
		path = val.params.subApplicationPath as string
		bus.$emit('syncSubRoute', {
			subName: currentSubName.value,
			path: path,
		})
	},
	{ deep: true, immediate: true }
)

// 同步子应用路由 => 主应用
bus.$on('syncMainRoute', (path: string) => {
	router.push(path)
})

// 子应用相互跳转
bus.$on('skipRoute', (path: string) => {
	router.push(path)
})

onBeforeUnmount(() => {
	// 清空所有监听事件
	bus.$clear()
})
</script>

<style scoped lang="scss"></style>
