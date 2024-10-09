<template>
	<!-- <router-view #default="{ Component }">
		<keep-alive>
			<component :is="Component" />
		</keep-alive>
	</router-view> -->
	<router-view></router-view>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { onMounted, onBeforeUnmount } from 'vue'
import { selfSubName } from '@/utils/tools'

const router = useRouter()

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
				router.replace(path)
			} else {
				router.replace('/')
			}
		}
	)
})

onBeforeUnmount(() => {
	window?.$wujie?.bus.$clear()
})
</script>

<style scoped lang="scss"></style>
