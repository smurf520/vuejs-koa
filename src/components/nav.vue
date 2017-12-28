<template>
  <div class="nav_">
    <el-col :span="6">
      <div class="title">
        心情日记
      </div>
      <el-menu
        :default-active="$route.path"
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
        <el-menu-item index="3">
        </el-menu-item>
        <el-menu-item index="4">
        </el-menu-item>
        <el-menu-item index="5">
        </el-menu-item>
      </el-menu>
    </el-col>
  </div>
</template>

<script>
  export default {
    name: 'nav',
    data () {
      return {
        defaultActive: '/index'
      }
    },
    created () {
      this.activeRouterRelateMenu()
    },
    methods: {
      activeRouterRelateMenu () { // 刷新页面的时候根据router激活对应的menu
        const self = this
        self.defaultActive = self.$route.path
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
    /*margin-top: 60px;*/
    height: auto;
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
    }
    a {
      text-decoration:none;
      color: #000;
      float:left;
      width: 100%;
    }
    a:hover{
      color:#ffd04b;
    }
    .mark{
      display: inline-block;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background-color: #ffd04b;
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
    .el-form-item {
      height: 40px;
    }
  }
</style>
