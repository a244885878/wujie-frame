<template>
	<div class="home-box" v-if="showMenu">
		<Menu></Menu>
		<div class="views-box">
			<router-view></router-view>
		</div>
	</div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import Menu from '@/components/Menu/index.vue'

const showMenu = computed(() => {
	return !window?.$wujie
})
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
	}
}
</style>
