<template>
  <div class="index">
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
        active-text-color="#ffd04b"
        @select = "select">
        <el-menu-item index="/">
          首页
          <!--<router-link to="/Home">首页</router-link>-->
          <!--<span slot="title" class="mark" v-if="index==='1'"></span>-->
        </el-menu-item>
        <el-menu-item index="/Admin">
          后台管理系统
          <!--<router-link to="/Admin">后台管理系统</router-link>-->
          <!--<span slot="title" class="mark" v-if="index==='2'"></span>-->
        </el-menu-item>
        <el-menu-item index="3">
          <!--<router-link to="/Home">关于</router-link>-->
          <!--<span slot="title" class="mark" v-if="index==='3'"></span>-->
        </el-menu-item>
        <el-menu-item index="4">
          <!--<router-link to="/Admin">标签</router-link>-->
          <!--<span slot="title" class="mark" v-if="index==='4'"></span>-->
        </el-menu-item>
        <el-menu-item index="5">
          <!--<router-link to="/Home">分类</router-link>-->
          <!--<span slot="title" class="mark" v-if="index==='5'"></span>-->
        </el-menu-item>
      </el-menu>
    </el-col>
  </div>
</template>

<script>
  export default {
    name: 'index',
    data () {
      return {
        defaultActive: '/Home'
      }
    },
    created () {
      this.activeRouterRelateMenu()
    },
    methods: {
      activeRouterRelateMenu () { // 刷新页面的时候根据router激活对应的menu
        const self = this
        self.defaultActive = self.$route.path
      },
      select (key, path) {
        this.index = key
      }
    }
  }
</script>

<style lang="less" scoped>
  .index {
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
  .index {
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
