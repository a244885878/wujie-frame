<template>
	<el-menu
		active-text-color="#ffd04b"
		background-color="#545c64"
		:default-active="activePath"
		text-color="#fff"
		:unique-opened="false"
		router
		:collapse="collapse"
		class="menu-box"
	>
		<MenuItem :menu-data="menuData"></MenuItem>
	</el-menu>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import MenuItem from './MenuItem.vue'
import { useRoute, type RouteLocationNormalizedLoaded } from 'vue-router'
import { menuData } from './data'

const route = useRoute()
const collapse = ref(false)
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
