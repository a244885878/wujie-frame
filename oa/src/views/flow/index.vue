<template>
	<div class="home-box">
		<h1>流程页面</h1>
		<el-popover
			placement="top-start"
			title="Title"
			:width="200"
			trigger="hover"
			content="this is content, this is content, this is content"
		>
			<template #reference>
				<el-button>Hover to activate</el-button>
			</template>
		</el-popover>
		<el-button type="primary" @click="skip()"
			>跳转到审批页面 id=222</el-button
		>
	</div>
</template>

<script setup lang="ts">
import { routerChange } from '@/utils/tools'

const skip = () => {
	routerChange('/approve?id=222')
}

console.log('流程页面-加载了')
</script>

<style scoped lang="scss"></style>
