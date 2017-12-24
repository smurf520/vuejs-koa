<template>
  <div class="home">
    <Button type="primary" @click="getData">
      请求node数据
    </Button>
  </div>
</template>

<script>
import API from '@/config/api'
export default {
  name: 'Home',
  data () {
    return {
    }
  },
  methods: {
    getData () {
      this.$http.post(API.Mock).then(res => {
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
.home {
  
}

</style>
