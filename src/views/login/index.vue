<template>
  <div class="login-container h-screen flex items-center justify-center">
    <el-form
      :model="form"
      :rules="rules"
      ref="formRef"
      @keyup.enter="submitForm"
      class="demo-ruleForm p-10 border border-solid border-gray-300 rounded-md"
      autocomplete="on"
    >
      <div class="mb-4">普通登录</div>
      <el-form-item label="" prop="username">
        <el-input v-model="form.username" placeholder="请输入账号" />
      </el-form-item>
      <el-form-item label="" prop="password">
        <el-input v-model="form.password" type="password" show-password placeholder="请输入密码" />
      </el-form-item>
      <el-form-item label="" prop="captcha">
        <div class="flex">
          <el-input v-model="form.captcha" class="w-4/6" />
          <el-image
            :src="captchaUrl"
            @click="getCaptchaUrl"
            class="w-2/6 cursor-pointer border rounded-md border-[#dcdfe6] ml-2"
          />
        </div>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm" class="w-full">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script setup lang="ts">
import { getCaptcha } from '@/api/login/login'
import type { FormInstance, FormRules } from 'element-plus'
import { ref, onMounted } from 'vue'
import { loginData } from '@/api/type/user'
import useStore from '@/stores'
import { useRouter } from 'vue-router'
import { ContentLoader } from 'vue-content-loader'
defineOptions({
  name: 'Login',
})

const router = useRouter()
const { login } = useStore()
const captchaUrl = ref('')
function getCaptchaUrl() {
  getCaptcha().then((res: any) => {
    captchaUrl.value = res.data.captcha
  })
}
onMounted(() => {
  getCaptchaUrl()
})

const form = ref({
  username: '',
  password: '',
  captcha: '',
})
const rules = ref<FormRules<loginData>>({
  username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
  password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
  captcha: [{ required: true, message: '请输入验证码', trigger: 'blur' }],
})
const formRef = ref<FormInstance>()

function submitForm() {
  // 防止在 组件未渲染完成 或 ref 还没有指向 <ElForm> 实例 时调用方法，避免报错：
  if (!formRef.value) {
    return
  }
  formRef.value.validate(async (valid) => {
    if (valid) {
      //校验通过
      try {
        await login.asyncLogin(form.value)
        localStorage.setItem('workspace_id', 'default')
        router.replace({ name: 'application' })
      } catch (error) {
        console.log('登录失败', error)
      }
    } else {
      // console.log('校验不通过')
    }
  })
}
</script>
