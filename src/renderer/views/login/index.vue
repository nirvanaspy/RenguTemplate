<template>
  <!--<div class="login-container">
    <el-form class="login-form" autoComplete="on" :model="loginForm" :rules="loginRules" ref="loginForm" label-position="left">
      <h3 class="title">vue-element-admin</h3>
      <el-form-item prop="username">
        <span class="svg-container svg-container_login">
          <svg-icon icon-class="user" />
        </span>
        <el-input name="username" type="text" v-model="loginForm.username" autoComplete="on" placeholder="username" />
      </el-form-item>
      <el-form-item prop="password">
        <span class="svg-container">
          <svg-icon icon-class="password"></svg-icon>
        </span>
        <el-input name="password" :type="pwdType" @keyup.enter.native="handleLogin" v-model="loginForm.password" autoComplete="on"
          placeholder="password"></el-input>
          <span class="show-pwd" @click="showPwd"><svg-icon icon-class="eye" /></span>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" style="width:100%;" :loading="loading" @click.native.prevent="handleLogin">
          Sign in
        </el-button>
      </el-form-item>
      <div class="tips">
        <span style="margin-right:20px;">username: admin</span>
        <span> password: admin</span>
      </div>
    </el-form>
  </div>-->
  <div id="wrap">
    <!-- Make page fluid -->
    <div class="row">
      <!-- Page content -->
      <div id="content" class="col-md-12 full-page login">


        <div class="inside-block">
          <img src="../../assets/images/logo-big.png" alt class="logo">
          <h1><strong>仁谷任务管理系统</strong></h1>
          <h5>登录</h5>

          <form id="form-signin" class="form-signin">
            <section>
              <div class="input-group">
                <input type="text" class="form-control" name="username" v-model="loginForm.username" placeholder="请输入用户名">
                <div class="input-group-addon"><i class="fa fa-user"></i></div>
              </div>
              <div class="input-group">
                <input type="password" class="form-control" name="password" v-model="loginForm.password" placeholder="请输入密码">
                <div class="input-group-addon"><i class="fa fa-key"></i></div>
              </div>
            </section>
            <section class="controls">
              <div class="checkbox check-transparent">
                <input type="checkbox" value="1" id="remember" checked>
                <label for="remember">Remember me</label>
              </div>
              <a href="#">Forget password?</a>
            </section>
            <section class="log-in">
              <span class="btn btn-greensea" @click="handleLogin">登录</span>
              <span>或</span>
              <span class="btn btn-slategray" @click="jumpToRegister">前往注册</span>
            </section>
          </form>
        </div>


      </div>
      <!-- /Page content -->
    </div>
  </div>
</template>

<script>
  /*eslint-disable*/
import { isvalidUsername } from '@/utils/validate'

export default {
  name: 'login',
  data() {
    const validateUsername = (rule, value, callback) => {
      if (!isvalidUsername(value)) {
        callback(new Error('请输入正确的用户名'))
      } else {
        callback()
      }
    }
    const validatePass = (rule, value, callback) => {
      if (value.length < 5) {
        callback(new Error('密码不能小于5位'))
      } else {
        callback()
      }
    }
    return {
      loginForm: {
        username: '',
        password: '',
        ipConfig: '192.168.31.13',
        port: 8080
      },
      loginRules: {
        username: [{ required: true, trigger: 'blur', validator: validateUsername }],
        password: [{ required: true, trigger: 'blur', validator: validatePass }]
      },
      loading: false,
      pwdType: 'password'
    }
  },
  methods: {
    showPwd() {
      if (this.pwdType === 'password') {
        this.pwdType = ''
      } else {
        this.pwdType = 'password'
      }
    },
    jumpToRegister() {
      this.$router.push('/register')
    },
    handleLogin() {
      /* this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true
          this.$store.dispatch('Login', this.loginForm).then(() => {
            this.loading = false
            this.$router.push({ path: '/' })
          }).catch(() => {
            this.loading = false
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })*/
      let username = this.loginForm.username
      let password = this.loginForm.password
      let qs = require('qs');
      let formData = qs.stringify({
        'username': username,
        'password': password,
        'grant_type': 'password',
        'scope': 'SCOPES',
        'client_id': 'OAUTH_CLIENT_ID',
        'enctype': 'OAUTH_CLIENT_ID'
      })
      this.loading = true
      this.$store.dispatch('Login', formData).then(() => {
        this.loading = false
        this.$router.push({ path: '/' })
      }).catch(() => {
        this.loading = false
      })
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss">
  .input-group-addon {
    line-height: 49px;
    padding-right: 6px;
  }
</style>
