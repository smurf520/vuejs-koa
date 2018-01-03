<template>
  <div class="login">
    <div class="content">
      <el-form ref="regForm" :model="regForm" :rules="rules">
        <span style="font-size:18px;color:#409EFF;margin-bottom:10px;display:block;">用户登录</span>
        <el-form-item prop="email">
          <el-input type="text" v-model="regForm.name" placeholder="请输入邮箱">
          </el-input>
        </el-form-item>
        <el-form-item prop="pwd">
          <el-input type="password" v-model="regForm.pwd" placeholder="请输入密码">
          </el-input>
        </el-form-item>
        <el-button type="primary" @click="login">登录</el-button>
        <el-button type="primary" @click="regist">注册</el-button>
      </el-form>
    </div>
  </div>
</template>
<script>
  import API from '@/config/api'
  export default {
    name: 'login',
    data () {
      return {
        regForm: {
          name: '',
          pwd: ''
        },
        rules: {
          name: [{ required: true, message: '请输入用户名称', trigger: 'blur' }],
          pwd: [{ required: true, message: '请输入密码', trigger: 'blur' }]
        }
      }
    },
    methods: {
      login () {
        const formName = 'regForm'
        this.$refs[formName].validate(valid => {
          if (valid) {
            this.$http.get(API.login, {
              params: {
                user: this.regForm.name,
                password: this.regForm.pwd
              }
            }).then(res => {
              console.log('res', res)
              if (res && res.status === 200) {
                alert('登录成功')
                this.$router.push('/admin')
              } else {
                alert('登录失败')
                alert(res.data.msg)
              }
            }, err => {
              console.log('err', err)
            })
          } else {
            return false
          }
        })
      },
      regist () {
        this.$router.push('/register')
      }
    }
  }
</script>
<style scoped lang="less">
  .login {
    .content {
      width: 500px;
      margin: 0 auto;
      height: auto;
    }
    .adminLogin{
      width: 500px;
      margin: 0 auto;
      height: auto;
      margin-top: 30px;
    }
  }
</style>
<style lang="less">
  .login {
    .el-input {
      margin-bottom: 5px;
    }
  }
</style>

