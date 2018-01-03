<!--suppress ALL -->
<template>
  <div class="register">
    <div class="content">
      <el-form ref="regForm" :model="regForm" :rules="rules">
        <span style="font-size:18px;color:#409EFF;margin-bottom:10px;display:block;">用户注册</span>
        <el-form-item prop="email">
          <el-input type="text" v-model="regForm.email" placeholder="请输入邮箱" @blur="checkEmail(regForm)">
          </el-input>
        </el-form-item>
        <el-form-item prop="name">
          <el-input type="text" v-model="regForm.name" placeholder="请输入昵称">
          </el-input>
        </el-form-item>
        <el-form-item prop="pwd">
          <el-input type="password" v-model="regForm.pwd" placeholder="请输入密码">
          </el-input>
        </el-form-item>
        <el-form-item prop="rePwd">
          <el-input type="password" v-model="regForm.rePwd" placeholder="请再次输入密码" @blur="checkPwd(regForm)">
          </el-input>
        </el-form-item>
        <el-button type="primary" @click="regist">注  册</el-button>
        <el-button type="success" @click="toLogin">跳到登录界面</el-button>
      </el-form>
    </div>
  </div>
</template>
<script>
  import API from '@/config/api'
  export default {
    name: 'register',
    data () {
      return {
        regForm: {
          email: '',
          pwd: '',
          name: '',
          rePwd: ''
        },
        rules: {
          name: [{ required: true, message: '请输入昵称', trigger: 'blur' }],
          email: [{ required: true, message: '请输入正确格式邮箱', trigger: 'blur' }],
          pwd: [{ required: true, message: '请输入密码', trigger: 'blur' }],
          rePwd: [{ required: true, message: '请再次输入密码', trigger: 'blur' }]
        }
      }
    },
    computed: {
    },
    methods: {
      checkEmail (value) {
        var reg = /^(\w)+(\.\w+)*@(\w)+((\.\w{2,3}){1,3})$/
        var check = reg.test(value.email)
        if (!check) {
          value.email = ''
        }
      },
      checkPwd (value) {
        if (value.pwd === value.rePwd) {
//          return;
        } else {
          value.rePwd = ''
        }
      },
      regist () {
        const formName = 'regForm'
        this.$refs[formName].validate(valid => {
          if (valid) {
            this.$http.get(API.register, {
              params: {
                user: this.regForm.name,
                password: this.regForm.pwd,
                email: this.regForm.email
              }
            }).then(res => {
              console.log('res', res)
              if (res && res.status === 200) {
                alert('注册成功')
                this.$router.push('/login')
              } else {
                alert('注册失败')
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
      toLogin () {
        this.$router.push('/login')
      }
    }
  }
</script>
<style scoped lang="less">
  .register {
    padding:0 100px;
    .content {
      width: 500px;
      margin: 0 auto;
      height: auto;
    }
  }
</style>
<style lang="less">
  .register {
    .el-input {
      margin-bottom: 10px;
    }
  }
</style>

