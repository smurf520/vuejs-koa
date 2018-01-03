<template>
  <div class="nav_">
    <el-col :span="6">
      <div class="title" @click="toLogin">
        心情日记
      </div>
      <el-menu
        :default-active="defaultActive"
        :router = "true"
        background-color="#fff"
        text-color="#000"
        class="el-menu-vertical-demo"
        active-text-color="#ffd04b">
        <el-menu-item index="/index">
          首页
        </el-menu-item>
        <el-menu-item index="/admin">
          后台管理系统
        </el-menu-item>
        <el-menu-item index="/about">
          关于
        </el-menu-item>
        <el-menu-item index="/tag">
          标签
        </el-menu-item>
        <el-menu-item index="/sort">
          分类
        </el-menu-item>
      </el-menu>
    </el-col>
  </div>
</template>

<script>
  export default {
    name: 'Nav_',
    data () {
      return {
      }
    },
    created () {
      this.activeRouterRelateMenu()
    },
    methods: {
      activeRouterRelateMenu () {
        const self = this
        self.defaultActive = self.$route.path
      },
      toLogin () {
        this.$router.push({path: '/login'})
      }
    }
  }
</script>

<style lang="less" scoped>
  .nav_ {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    background-color: yellow;
    width: 1100px;
    margin: 0 auto;
    .title {
      width: 100%;
      height: 86px;
      font-size: 20px;
      background: #000;
      color: #fff;
      line-height: 86px;
      font-weight: bold;
      cursor: pointer;
    }
  }

</style>
<style lang='less'>
  .nav_ {
    .el-col {
      border: 1px solid #ccc;
    }
    .el-menu-item:hover {
      background-color: #eee !important;
    }
  }
</style>
