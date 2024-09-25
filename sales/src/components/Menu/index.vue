<template>
	<el-menu
		active-text-color="#ffd04b"
		background-color="#545c64"
		:default-active="activePath"
		text-color="#fff"
		unique-opened
		router
		class="menu-box"
	>
		<MenuItem :menu-data="menus"></MenuItem>
	</el-menu>
</template>

<script setup lang="ts">
import MenuItem from './MenuItem.vue'
import { menus } from '@/router'
import { ref, watch } from 'vue'
import { useRoute, type RouteLocationNormalizedLoaded } from 'vue-router'

const route = useRoute()
const activePath = ref('/')

watch(
	() => route,
	(newVal: RouteLocationNormalizedLoaded) => {
		activePath.value = newVal.path
	},
	{ deep: true, immediate: true }
)
</script>

<style scoped lang="scss">
.menu-box {
	width: 200px;
	height: 100%;
	flex-shrink: 0;
	position: relative;
	transition: width 0.3s;
	overflow-y: auto;
	overflow-x: hidden;
}
</style>
