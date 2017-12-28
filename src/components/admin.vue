<template>
  <div class="admin">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="标题">
        <el-input v-model="form.title"></el-input>
      </el-form-item>
      <el-form-item label="日期">
        <el-date-picker type="date" placeholder="选择日期" v-model="form.time" style="width: 100%;" format="yyyy-MM-dd" value-format="yyyy-MM-dd"></el-date-picker>
      </el-form-item>
      <el-form-item label="内容">
        <el-input type="textarea" v-model="form.content"></el-input>
      </el-form-item>
      <el-button type="primary" @click="saveData">保存</el-button>
    </el-form>
  </div>
</template>

<script>
  import API from '@/config/api'
  export default {
    name: 'Admin',
    data () {
      return {
        form: {
          time: '',
          title: '',
          content: ''
        }
      }
    },
    methods: {
      saveData () {
        this.$http.post(API.addArticle, {
          data: this.form
        }).then(res => {
          console.log('res', res)
        }, err => {
          console.log('err', err)
        })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
  .admin {
    width: 500px;
    margin: 0 auto;
  }

</style>
