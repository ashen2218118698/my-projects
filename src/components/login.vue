<template>
  <div id="content-container" class="container">
    <div class="login-section">
      <div class="login-tab clearfix">
        <a class="active">登录账号</a>
        <router-link to="/register">注册账号</router-link>
      </div>
      <div class="login-main">
        <form action id="login-form" class="form-vertical" method="post">
          <div class="form-group mbl">
            <label for="login_username" class="control-label">账号</label>
            <div class="controls">
              <input v-model="user.name" type="text" class="form-control input-lg" id="login_username" name="_username"
                     value required placeholder="用户名">
              <div class="help-block"></div>
            </div>
          </div>
          <div class="form-group mbl">
            <label for="login_password" class="control-label">密码</label>
            <div class="controls">
              <input v-model="user.password" type="password" class="form-control input-lg" id="login_password"
                     name="_password" required placeholder="密码">
              <div class="help-block" style="display: none"></div>
            </div>
          </div>
          <div class="form-group mbl">
            <div class="controls">
              <input type="checkbox" name="_remember_me" checked="checked">
              记住密码
            </div>
          </div>
          <div class="form-group mbl">
            <button @click="login" type="button" value="登录" class="btn btn-primary btn-lg btn-block">登录</button>
          </div>
        </form>
        <div class="mbl">
          <a>找回密码</a>
          <span class="text-muted mhs">|</span>
          <span class="text-muted">还没注册账号？</span>
          <router-link to="/register">立即注册</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import store from './../vuex/store'
  export default {
    data (){
      return {
        user: {
          name: '',
          password: ''
        }
      }
    },
    computed: {},
    methods: {
      login() {
        if ((this.user.password !== '') && (this.user.name !== '')) {
          this.$http.get('./data/login.php', {
            params: {
              uName: this.user.name,
              uPwd: this.user.password
            }
          })
            .then(r => {
              this.$store.commit('loginedUser', r.data[0]);
              this.$store.commit('islogin');
              this.$router.push({path: '/'})
            })
            .catch(err => {
              console.log(err)
            })
        } else {
          return null
        }
      }
    },
    store
  }
</script>

<style>
  #content-container {
    margin: 30px auto;
    min-height: 400px;
    text-align: left;
  }

  .login-section {
    margin: 50px auto;
    width: 460px;
    min-height: 400px;
    background: #263238;
    padding: 15px;
    border-radius: 2px;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, .1);
  }

  .login-tab {
    margin: -15px -15px 0;
  }

  .login-section .login-tab > a:not(.active):hover {
    color: #e8345a;
    background-color: #000;
    transition: all .3s ease;
  }

  .login-section .login-tab > a.active {
    background-color: #41b883;
    transition: all .3s ease;
  }

  .login-section .login-tab > a {
    display: block;
    padding: 20px;
    float: left;
    width: 50%;
    font-size: 16px;
    text-align: center;
    color: #fff;
    background-color: #263238;
    transition: all .3s ease;
  }

  .login-section .login-tab > a + a {
    border-left: 1px solid #263238;
  }

  .login-main {
    padding: 40px 45px 20px;
  }

  .mbl {
    margin-bottom: 20px;
  }

  .form-control {
    border-color: #f50057;
  }

  .help-block {
    display: block;
    margin-top: 5px;
    margin-bottom: 10px;
    color: #a1a1a1;
  }

  .mhs {
    margin-left: 5px;
    margin-right: 5px;
  }

  .text-muted {
    color: #c1c1c1;
  }
</style>
