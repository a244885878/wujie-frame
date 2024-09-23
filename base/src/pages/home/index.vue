<template>
	<div class="home-box">
		<Menu></Menu>
		<div class="views-box">
			<router-view></router-view>
		</div>
	</div>
</template>

<script setup lang="ts">
import Menu from '@/components/Menu/index.vue'
</script>

<style scoped lang="scss">
.home-box {
	width: 100%;
	height: 100%;
	overflow: hidden;
	box-sizing: border-box;
	display: flex;
	background: #fafcff;

	.views-box {
		flex: 1;
		box-sizing: border-box;
		overflow: auto;
		padding: 20px;

		/* 解决无界最外层盒子加载出现滚动条的问题 */
		:deep(div:first-child) {
			box-sizing: border-box;
			border: 1px solid transparent;
		}
	}
}
</style>
