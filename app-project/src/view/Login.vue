<template>
  <div id="login">
    <div id="center">
      <div class="centerleft">
        <img src="../assets/loginPhone3.jpg" alt="" />
      </div>
      <div class="centerright">
        <div class="ui centered card" id="card">
          <span id="denglu">登录</span>
          <div id="div-form">
            <el-form
              :model="loginForm"
              status-icon
              :rules="rules"
              ref="loginForm"
              label-width="100px"
              class="demo-loginForm"
            >
              <el-form-item label="用户名" prop="username" class="label1">
                <el-input
                  type="username"
                  v-model="loginForm.username"
                  autocomplete="off"
                  style="width: 200px"
                ></el-input>
              </el-form-item>
              <el-form-item label="密码" prop="password" class="label2">
                <el-input
                  type="password"
                  v-model="loginForm.password"
                  autocomplete="off"
                  style="width: 200px"
                ></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="login" style="width: 200px"
                  >提交</el-button
                >
              </el-form-item>
              <div id="together">
                <span id="cooperate">合作账号</span>
              </div>
              <div class="register">
                <router-link to="/register">注册</router-link>
              </div>
              <div class="qqwechat">
                <div class="qq"><i class="qq icon">QQ登录</i></div>
                <div class="wechat"><i class="wechat icon">微信登录</i></div>
                <div class="blog"><i class="weibo icon"> 微博登录</i></div>
              </div>
            </el-form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginForm: {
        username: '',
        password: ''
      },
      rules: {
        // 验证规则
        username: [
          {required: true, message: '请输入用户名', tirgger: 'blur'},
        ],
        password: [
          {required: true, message: '请输入密码', tirgger: 'blur'}]
      }
    }
  },
  methods: {
    login() {
      if(!this.loginForm.username) {
        this.$message.error('请输入用户名');
        return;
      }
      if(!this.loginForm.password) {
        this.$message.error('请输入密码');
        return;
      }
      let flag = 0;
      this.$store.state.userList.forEach(n => {if(n.username === this.loginForm.username && n.password === this.loginForm.password){
        flag = 1;
      }});
      if(flag) {
        this.$message.success('登录成功');
        this.$store.state.username = this.loginForm.username;
        // this.$store.commit('chaneLogin','100')
        this.$router.push({
          path: '/'
        })
        this.$store.commit('chaneLogin',1)
      } else {
        this.loginForm.username=''
        this.loginForm.password=''
        this.$message.error('用户名或密码不正确,请重新输入');
        return;
      }
    }
  },
}
</script>

<style scoped>
#login {
  width: 1200px;
  /* height: 400px; */
  margin: 0 auto;
  /* border: 1px red solid; */
}
#center {
  float: left;
  width: 1200px;
  height: 456px;
  /* border: 1px solid blue; */
  /* background: #FD7A72; */
  background: #50b4c3;
}
.centerleft {
  width: 500px;
  height: 450px;
  float: left;
  /* border: 1px red solid; */
  margin-left: 100px;
}
.centerright {
  width: 400px;
  height: 350px;
  float: left;
  /* border: 1px red solid; */
  margin-left: 100px;
  margin-top: 50px;
  background: white;
}
#denglu {
  margin-left: 170px;
}
#header {
  margin-top: 15px;
  margin-left: 50px;
}
.card {
  width: 400px;
  height: 350px;
}
span {
  margin-top: 10px;
  font-size: 20px;
  font-weight: 200px;
}
.re {
  width: 300px;
  height: 20px;
  margin-top: 10px;
  margin-left: 40px;
  /* border:1px red solid; */
}
.renumber {
  /* border:1px red solid; */
  float: left;
  width: 245px;
  height: 20px;
  text-align: left;
  margin-left: 5px;
}
.register {
  float: left;
  width: 30px;
  height: 20px;
  /* border: 1px solid red; */
}
a {
  color: black;
  text-decoration: none;
}
#div_form {
  width: 350px;
  height: 300px;
  border: 1px solid red;
  margin-top: 20px;
}
.el-form {
  width: 350px;
  height: 200px;
  /* border:1px red solid; */
  margin-left: 25px;
  margin-top: 20px;
}
.submit {
  width: 300px;
  height: 30px;
  margin-top: 10px;
  /* border: 1px red solid; */
  margin-left: 40px;
  background: #0e90d2;
  color: white;
}
#together {
  float: left;
  /* margin-top: 10px; */
  margin-left: 38px;
  width: 250px;
  height: 20px;
  /* border: 1px red solid; */
  text-align: left;
}
#cooperate {
  font-size: 15px;
  font-weight: 10px;
}
.qqwechat {
  float: left;
  width: 300px;
  height: 28px;
  margin-left: 35px;
  margin-top: 8px;
  /* border:1px red solid; */
}
.qq {
  float: left;
  width: 100px;
}
.wechat {
  float: left;
  width: 100px;
}
.weibo {
  float: left;
  width: 80px;
}
#bottom {
  float: left;
}
</style>
