<template>
	<!-- <router-view #default="{ Component }">
		<keep-alive>
			<component :is="Component" />
		</keep-alive>
	</router-view> -->
	<router-view></router-view>
</template>

<script setup lang="ts">
import {
	useRouter,
	useRoute,
	type RouteLocationNormalizedLoaded,
} from 'vue-router'
import { onMounted, watch, onBeforeUnmount } from 'vue'

const router = useRouter()
const route = useRoute()
const selfSubName = 'oa'
let isCurrentRouteChange = true

onMounted(() => {
	// 刷新时同步主应用路由(因为$emit和$on触发时机的问题，刷新时不能首先通知，否则需要改造子应用生命周期)
	if (window?.$wujie) {
		const path = window?.$wujie?.props.path
		router.replace(path)
	}
	// 同步主应用路由 => 子应用
	window?.$wujie?.bus.$on(
		'syncSubRoute',
		({ subName, path }: { subName: string; path: string }) => {
			// 子应用名称匹配时才跳转(因为保活子应用的话仍然可以响应bus事件)
			if (subName === selfSubName) {
				isCurrentRouteChange = true
				router.replace(path)
			} else {
				isCurrentRouteChange = false
				router.replace('/')
			}
		}
	)
})

// 同步子应用路由 => 主应用
watch(
	() => route,
	(val: RouteLocationNormalizedLoaded) => {
		// 只有在当前子应用环境下变化路由才触发
		if (isCurrentRouteChange) {
			window?.$wujie?.bus.$emit(
				'syncMainRoute',
				`/${selfSubName}${val.path}`
			)
		}
	},
	{ deep: true }
)

onBeforeUnmount(() => {
	window?.$wujie?.bus.$clear()
})
</script>

<style scoped lang="scss"></style>
