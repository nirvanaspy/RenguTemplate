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
    <div id="wrap"
         v-loading.fullscreen.lock="jumpLoading"
         element-loading-text="正在跳转中"
         element-loading-spinner="el-icon-loading"
    >
        <!-- Make page fluid -->
        <div class="row">
            <!-- Page content -->
            <div id="content" class="col-md-12 full-page login">


                <div class="inside-block">
                    <img src="../../assets/images/logo-big.png" alt class="logo">
                    <h1><strong>仁谷任务管理系统</strong></h1>
                    <h5>注册</h5>

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
                            <div class="input-group">
                                <input type="text" class="form-control" name="phoneNumber" v-model="loginForm.phoneNumber" placeholder="请输入手机号码">
                                <div class="input-group-addon"><i class="fa fa-phone"></i></div>
                            </div>
                            <div class="input-group">
                                <input type="text" class="form-control" name="name" v-model="loginForm.name" placeholder="请输入姓名">
                                <div class="input-group-addon"><i class="fa fa-address-book"></i></div>
                            </div>
                            <div class="input-group">
                                <input type="text" class="form-control" name="mail" v-model="loginForm.mail" placeholder="请输入邮箱">
                                <div class="input-group-addon"><i class="fa fa-envelope"></i></div>
                            </div>
                        </section>
                        <!--<section class="controls">
                            <div class="checkbox check-transparent">
                                <input type="checkbox" value="1" id="remember" checked>
                                <label for="remember">Remember me</label>
                            </div>
                            <a href="#">Forget password?</a>
                        </section>-->
                        <section class="log-in">
                            <span class="btn btn-slategray" @click="handleRegister">注册</span>
                            <span>或</span>
                            <span class="btn btn-greensea" @click="jumpToLogin">前往登录</span>
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
    import { register } from '../../api/login'

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
                    phoneNumber: '',
                    name: '',
                    mail: ''
                },
                loginRules: {
                    username: [{ required: true, trigger: 'blur', validator: validateUsername }],
                    password: [{ required: true, trigger: 'blur', validator: validatePass }]
                },
                loading: false,
                jumpLoading: false,
                pwdType: 'password',
                errorMessage: '操作失败！'
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
            jumpToLogin() {
                this.$router.push('/login')
            },
            handleRegister() {
                let qs = require('qs');
                let data = {
                    'username': this.loginForm.username,
                    'password': this.loginForm.password,
                    'name': this.loginForm.name,
                    'telephoneNumber': this.loginForm.phoneNumber,
                    'emailAddress': this.loginForm.mail
                }
                let datapost = qs.stringify(data)
                register(datapost).then((res) => {
                    this.$notify({
                        title: '成功',
                        message: '注册成功',
                        type: 'success',
                        duration: 2000
                    })
                    this.loading = false
                    // this.$router.replace('/login')
                    let formData = qs.stringify({
                        "username": this.loginForm.username,
                        'password': this.loginForm.password,
                        'grant_type': 'password',
                        'scope': 'SCOPES',
                        'client_id': 'OAUTH_CLIENT_ID',
                        'enctype': 'OAUTH_CLIENT_ID'
                    })
                    this.jumpLoading = true
                    this.$store.dispatch('Login', formData).then(() => {
                        this.jumpLoading = false
                        this.loading = false
                        /*getUserId().then((res) => {
                          this.setCookie('userId', res.data.data.id)
                        })*/
                        this.$router.push({ path: '/' })
                    }).catch(() => {
                        this.loading = false
                        this.jumpLoading = false
                        this.$notify({
                            title: '失败',
                            message: '登录失败',
                            type: 'error',
                            duration: 1000
                        })
                    })
                }).catch((error) => {
                    this.loading = false
                    this.errorMessage = '注册失败，请检查信息填写是否正确！'
                    if(error.response.data.message){
                        this.errorMessage = error.response.data.message
                    }
                    this.$notify({
                        title: '失败',
                        message: this.errorMessage,
                        type: 'error',
                        duration: 2000
                    })
                })
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
                this.loading = true
                this.$store.dispatch('Login', this.loginForm).then(() => {
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
