<template>
	<el-menu
		active-text-color="#ffd04b"
		background-color="#545c64"
		default-active="/model1-1"
		text-color="#fff"
		unique-opened
		router
		:collapse="collapse"
		class="menu-box"
	>
		<MenuItem :menu-data="menuData"></MenuItem>
	</el-menu>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import MenuItem from './MenuItem.vue'
const collapse = ref(false)

const menuData = [
	{
		path: '/mode1',
		meta: {
			icon: 'House',
			title: '模块1',
		},
		children: [
			{
				path: '/model1-1',
				meta: {
					title: '模块1-1',
				},
			},
			{
				path: '/model1-2',
				meta: {
					title: '模块1-2',
				},
			},
		],
	},
	{
		path: '/mode2',
		meta: {
			icon: 'Notification',
			title: '模块2',
		},
	},
]
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
