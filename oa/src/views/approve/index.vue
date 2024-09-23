<template>
	<div class="home-box">
		<h1>审批页面</h1>
		<div class="margin-box">
			<div>
				<el-select
					v-model="value"
					placeholder="Select"
					size="large"
					style="width: 240px"
				>
					<el-option
						v-for="item in options"
						:key="item.value"
						:label="item.label"
						:value="item.value"
					/>
				</el-select>
			</div>
			<div>
				<el-button :plain="true" @click="open">Show message</el-button>
			</div>
			<div>
				<el-button plain @click="dialogVisible = true">
					打开dialog
				</el-button>
				<el-dialog v-model="dialogVisible" title="Tips" width="500">
					<span>This is a message</span>
					<template #footer>
						<div class="dialog-footer">
							<el-button @click="dialogVisible = false"
								>Cancel</el-button
							>
							<el-button
								type="primary"
								@click="dialogVisible = false"
							>
								Confirm
							</el-button>
						</div>
					</template>
				</el-dialog>
			</div>
			<div>
				<el-button type="primary" @click="drawer = true">
					打开抽屉
				</el-button>
				<el-drawer
					v-model="drawer"
					title="I am the title"
					direction="ltr"
				>
					<span>Hi, there!</span>
				</el-drawer>
			</div>
		</div>
		<el-button type="primary" @click="skip()">跳转到流程页面</el-button>
		<p style="margin: 10px 0">来自销售子模块订单页的消息：{{ message }}</p>
	</div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import { ElMessage } from 'element-plus'
import useStore from '@/store'

const router = useRouter()
const { setMessage } = useStore()

const value = ref('')
const dialogVisible = ref(false)
const drawer = ref(false)
const message = ref<any>(null)

const options = [
	{
		value: 'Option1',
		label: 'Option1',
	},
	{
		value: 'Option2',
		label: 'Option2',
	},
	{
		value: 'Option3',
		label: 'Option3',
	},
	{
		value: 'Option4',
		label: 'Option4',
	},
	{
		value: 'Option5',
		label: 'Option5',
	},
]

const skip = () => {
	router.push('/flow')
	setMessage('你好啊')
}

const open = () => {
	ElMessage.success('This is a message.')
}

console.log('审批页面-加载了')
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
