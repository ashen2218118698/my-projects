<template>
  <div id="content-container" class="container">
    <div class="login-section">
      <div class="login-tab clearfix">
        <router-link to="/login">登录账号</router-link>
        <a class="active">注册账号</a>
      </div>
      <div class="login-main">
        <form action id="register-form" method="post">
          <div class="form-group mbl">
            <label for="register_email" class="control-label required">邮箱地址</label>
            <div class="controls">
              <input @blur="testEmail" v-model="user.email" type="text" id="register_email" name="email"
                     required="required" class="form-control input-lg" placeholder="填写你的常用邮箱">
              <p class="help-block" v-show="emailWrong">{{emailError}}</p>
            </div>
          </div>
          <div class="form-group mbl">
            <label for="register_nickname" class="control-label required">用户名</label>
            <div class="controls">
              <input @blur="testName" v-model="user.name" type="text" id="register_nickname" name="nickname"
                     required="required" class="form-control input-lg" placeholder="中英文均可，最长18个英文或9个汉字">
              <p class="help-block" v-show="unameWrong">{{unameError}}</p>
            </div>
          </div>
          <div class="form-group mbl">
            <label for="register_password" class="control-label required">密码</label>
            <div class="controls">
              <input @blur="testPwd" v-model="user.password" type="password" id="register_password" name="password"
                     required="required" class="form-control input-lg" placeholder="5-20位英文、数字、符号，区分大小写">
              <p class="help-block" v-show="pwdWrong">{{pwdError}}</p>
            </div>
          </div>
          <div class="form-group mbl">
            <div class="controls">
              <label>
                <input type="checkbox" id="user_terms" checked="checked">
                我已阅读并同意
                <a>《服务协议》</a>
              </label>
            </div>
          </div>
          <div class="form-group mbl">
            <div class="controls">
              <button type="button" value="提交" id="register_btn" class="btn btn-primary btn-lg btn-block" @click="reg">
                注册
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'register',
    data() {
      return {
        user: {
          email: '',
          name: '',
          password: ''
        },
        emailWrong: false,
        emailError: '请输入正确的邮箱地址',
        unameWrong: false,
        unameError: '中英文均可，最长18个英文或9个汉字',
        pwdWrong: false,
        pwdError: '5-20位英文、数字、符号，区分大小写'
      }
    },
    methods: {
      testEmail() {
        let re = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;
        if (re.test(this.user.email)) {
          this.emailWrong = false;
        } else {
          this.emailWrong = true;
        }
      },
      testName() {
        let re = /^\w{5,20}$/;
        if (re.test(this.user.name)) {
          this.unameWrong = false;
        } else {
          this.unameWrong = true;
        }
      },
      testPwd() {
        let re = /^\w{5,20}$/;
        if (re.test(this.user.password)) {
          this.pwdWrong = false;
        } else {
          this.pwdWrong = true;
        }
      },
      reg() {
        let email = this.user.email;
        let name = this.user.name;
        let pwd = this.user.password;
        let querystring = require('querystring');
        if (!(this.emailWrong | this.unameWrong | this.pwdWrong) & (this.user.name !== '')) {
          this.$http.post('./data/reg.php', querystring.stringify({
            uEmail: email,
            uName: name,
            uPwd: pwd
          }))
            .then(r => {
              if (r.data === 'success') {
                this.$router.push({path: '/login'})
              }
            })
            .catch(err => {
              console.log(err)
            })
        } else {
          return null
        }
      }
    }
  }
</script>

<style>
</style>
