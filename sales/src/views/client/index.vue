<template>
	<div class="home-box">
		<h1>客户页面</h1>
	</div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const skip = () => {
	router.push('/approve')
}

console.log('客户页面-加载了')
</script>

<style scoped lang="scss"></style>
