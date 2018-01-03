<template>
  <div class="home">
    <main>
      <div class="menu-wrap">
        <Nav_></Nav_>
      </div>
      <div class="content-wrap">
        <div class="c-line"></div>
        <transition name="fade">
          <router-view></router-view>
        </transition>
      </div>
    </main>
  </div>
</template>

<script>
  import Nav_ from './nav.vue'
  export default {
    name: 'Home',
    components: {
      Nav_
    },
    data () {
      return {
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
  .home{
    height:auto;
  }

</style>
<style>

</style>
