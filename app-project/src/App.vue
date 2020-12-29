<template>
  <div id="app">
    <el-container style="float:left">
      <Header></Header>
    </el-container>
    <el-container style="float:left">
      <router-view ></router-view>
    </el-container>
    <el-container style="float:left">
      <Banner></Banner>
    </el-container>
  </div>
</template>

<script>
import Header from './components/Header'
import Banner from './components/Banner'
export default {
  name: 'App',
  components: {
    Header,
    Banner
  }
}
</script>

<style>
html,body{
  width:1200px;
  /* border:1px solid red; */
  margin:0 auto;
}

</style>
