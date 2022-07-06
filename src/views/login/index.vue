<template>
  <div class="login-container">
    <el-form
      ref="loginfrom"
      :model="ruleForm"
      :rules="LoginFormref"
      :size="formSize"
      class="demo-ruleForm"
      label-width="120px"
      status-icon
    >
      <el-form-item label="用户名" prop="username">
        <el-input v-model="ruleForm.username" style="width: 200px"/>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="ruleForm.password" style="width: 200px" type="password"/>
      </el-form-item>
      <el-form-item label="验证码" prop="code">
        <el-input v-model="ruleForm.code" label-width="150px" style="width: 100px"/>
        <img :src="captchaImg" alt="" @click="codeImg()">
      </el-form-item>
      <el-form-item>

        <el-button @click="handleLoginSubmit(ruleForm)">提交</el-button>
        <el-button>获取密码</el-button>

      </el-form-item>
    </el-form>
  </div>

</template>

<script setup>
import { reactive, ref } from 'vue'
import { validatePassword } from './rules'
import { getCodeImg, login } from '@/api/login'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

const router = useRouter()
const ruleForm = reactive({
  username: 'test',
  password: '1234567',
  code: null,
  token: null
})
const store = useStore()
const loginfrom = ref(null)
const captchaImg = ref()
const LoginFormref = reactive({
  username: [
    {
      required: true,
      message: '请输入用户名',
      trigger: 'blur'
    },
    {
      min: 3,
      max: 5,
      message: 'Length should be 3 to 5',
      trigger: 'blur'
    }
  ],
  password: [
    {
      required: true,
      trigger: 'blur',
      validator: validatePassword
    }
  ],
  code: [{
    required: true,
    message: '输验证码',
    trigger: 'change'
  }]
})
const handleLoginSubmit = () => {
  loginfrom.value.validate(async (valid) => {
    if (valid) {
      try {
        console.log(ruleForm, 'ruleForm')
        const res = await login(ruleForm)
        console.log(res, 'resres')
        store.dispatch('user/getUserInfo')
        router.push('/')
      } catch (e) {

      }
    } else {
      console.log('error submit!')
      return false
    }
  })
}
const codeImg = async () => {
  const res = await getCodeImg()
  console.log('123', res)
  captchaImg.value = res.captchaImg
  ruleForm.token = res.token
}
codeImg()
</script>

<style lang="scss" scoped>
.login-container {
  height: 100%;
  background-color: aliceblue;
  width: 100%;

  .demo-ruleForm {
    width: 520px;
    padding: 0 35px;
    position: absolute;
    left: 50%;
    margin-left: -260px;
    top: 200px;
    overflow: hidden;

    ::v-deep .el-input__wrapper {
      width: 50px;
    }
  }
}
</style>
