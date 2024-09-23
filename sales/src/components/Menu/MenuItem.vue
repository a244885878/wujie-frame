<template>
	<template v-for="(item, index) in menuData" :key="index">
		<el-sub-menu :index="item.path" v-if="item.children?.length">
			<template #title>
				<el-icon>
					<component :is="item?.meta?.icon"></component>
				</el-icon>
				<span>{{ item?.meta?.title }}</span>
			</template>
			<MenuItem :menu-data="item.children"></MenuItem>
		</el-sub-menu>
		<el-menu-item :index="item.path" v-else>
			<el-icon>
				<component :is="item?.meta?.icon"></component>
			</el-icon>
			<span>{{ item?.meta?.title }}</span>
		</el-menu-item>
	</template>
</template>

<script setup lang="ts">
import MenuItem from './MenuItem.vue'

interface Props {
	menuData: any[]
}
const { menuData } = defineProps<Props>()
</script>

<style scoped lang="scss"></style>
