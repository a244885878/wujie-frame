<template>
	<div class="home-box">
		<h1>订单页面</h1>
		<el-button type="primary" @click="skip()"
			>跳转oa子应用审批页面 ?id=1
			params={message:'hello啊树哥'}</el-button
		>
	</div>
</template>

<script setup lang="ts">
const skip = () => {
	window?.$wujie?.bus.$emit('skipRoute', `/oa/approve?id=1`, {
		message: 'hello啊树哥',
	})
}

console.log('订单页面-加载了')
</script>

<style scoped lang="scss">
.home-box {
	box-sizing: border-box;

	.margin-box {
		margin: 10px 0;
		& > div {
			margin: 10px 0;
		}
	}
}
</style>
