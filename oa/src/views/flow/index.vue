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
		来自审批页面的消息：{{ store.message }}
	</div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import useStore from '@/store'
const { store } = useStore()

const router = useRouter()

const skip = () => {
	router.replace('/approve?id=222')
}

console.log('流程页面-加载了')
</script>

<style scoped lang="scss"></style>
