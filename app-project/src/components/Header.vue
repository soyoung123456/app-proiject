<template>
  <div id="header">
    <div id="container">
      <div class="topbar-fl">
        <ul class="navbar-nav">
          <li v-if="!$store.state.username"><router-link to='/login'>你好,请登录</router-link></li>
           <li v-if="$store.state.username"><router-link to='/login'>你好，{{ $store.state.username }}</router-link></li>
          <li><router-link to='/register'>登录注册</router-link></li>
          <li><router-link to='/home'>手机逛淘宝</router-link></li>
        </ul>
      </div>
      <div calss="topbar-fr">
        <ul>
          <li><router-link to='/home'>淘宝网首页</router-link></li>
          <li><router-link to='/home'>我的淘宝</router-link></li>
          <li><router-link to='/cart'>购物车</router-link></li>
        </ul>
      </div>
    </div>
    <div id="container-low">
      <div class="topleft" style="float:left">
        <img src="../assets/AItaobao.png" alt="" />
      </div>
      <div calss="topcenter" style="float:left;margin-left:30px;">
        <input type="text" placeholder="输入搜索内容" class="input" v-model="searchParams" />
      </div>
      <div class="topright" style="float:left ">
        <input type="submit" class="submit" value="搜索"  @click="click" />
      </div>
    </div>
    <hr>
  </div>
</template>

<script>
export default {
  	data() {
		return {
      searchParams: '',
    }
  },
	methods: {
	  click() {
	  	// if(this.$router.currentRoute.fullPath !== '/detail') {
      //   this.$router.push({
      //       path: '/detail'
      //   });
      // }
      // var search = this.searchParams;
      // if(search){
      //   this.$store.state.searchParams = this.$store.state.productList.filter(value => value.brand.indexOf(this.search)!= -1)
      // }
      this.$router.push({
          path: '/home',
          // name: 'Details'
      })
      this.$store.state.searchParams = this.searchParams;

      console.error(this.$store.state.searchParams);
    }
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
html body {
  width: 1200px;
  margin: 0;
  padding: 0;
}
#header {
  width: 1200px;
  margin: 0 auto;
}
#container {
  min-width: 800px;
  width: 1200px;
  height: 30px;
  /* border: 1px solid red; */
  margin: 0 auto;
  background: #ccc;
  clear: both;
}
.topbar-fl {
  width: 900px;
  height: 30px;
  float: left;
  /* border: 1px solid blue */
}
.topbar-fr {
  width: 100px;
  height: 30px;
  float: right;
  /* border: 1px solid red; */
}
#container li {
  float: left;
  line-height: 35px;
  padding: 0 8px;
  list-style: none;
}
#container a {
  color: black;
  text-decoration: none;
}
#container a:hover {
  color: red;
}
#container-low {
  float:left;
  width: 1200px;
  height:100px;
  margin: 0 auto;
  /* border:1px red solid; */
  margin-top:10px;
}
#container-low .topleft {
  margin-left:200px;
  width: 200px;
  height: 76px;
  /* border: 1px solid red; */
}
#container-low .topcenter {
  width:450px;
  height: 80px;
  /* border: 1px solid blue; */
}
.input {
  width: 450px;
  height: 50px;
  border-color: red;
  outline: none;
}
#container-low .topright {
  width: 100px;
  height: 80px;
}
.submit{
  width: 100px;
  height: 50px;
  background-color: red;
  color: white;
  font-size: 20px;
  border-color: red;
}
hr{
    color:red;
    width:100%;
}
</style>
