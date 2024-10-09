<template>
	<div class="login-box">
		<el-form
			ref="ruleFormRef"
			style="max-width: 600px"
			:model="state.ruleForm"
			:rules="state.rules"
			label-width="auto"
			status-icon
			class="form-box"
		>
			<el-form-item label="用户名" prop="username">
				<el-input v-model="state.ruleForm.username" />
			</el-form-item>
			<el-form-item label="密码" prop="password">
				<el-input type="password" v-model="state.ruleForm.password" />
			</el-form-item>
			<el-button
				style="width: 100%"
				type="primary"
				@click="submitForm(ruleFormRef)"
			>
				登录
			</el-button>
		</el-form>
	</div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
import { useRouter } from 'vue-router'

const router = useRouter()

const ruleFormRef = ref<FormInstance>()

type State = {
	ruleForm: {
		username: string
		password: string
	}
	rules: FormRules
}
const state: State = reactive({
	ruleForm: {
		username: '',
		password: '',
	},
	rules: {
		username: [
			{
				required: true,
				message: '请输入',
				trigger: 'blur',
			},
		],
		password: [
			{
				required: true,
				message: '请输入',
				trigger: 'blur',
			},
		],
	},
})

const submitForm = async (formEl: FormInstance | undefined) => {
	if (!formEl) return
	await formEl.validate((valid) => {
		if (valid) {
			localStorage.setItem('subToken', 'sub')
			router.push('/')
		}
	})
}
</script>

<style scoped lang="scss">
.login-box {
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	box-sizing: border-box;
	padding-top: 100px;

	.form-box {
		height: 200px;
		border-radius: 4px;
		border: 1px solid #dcdfe6;
		padding: 50px;
	}
}
</style>
