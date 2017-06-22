<template>
  <div id="app">
    <header>
      <nav class="navbar navbar-my-style">
        <div class="container-fluid">
          <div class="navbar-header">
            <button class="navbar-toggle" data-toggle="collapse" data-target="#responsive-navbar">
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <router-link to="/" class="navbar-brand"><img src="./assets/logo.png" alt="Brand" style="height: 50px"></router-link>
          </div>
          <div class="collapse navbar-collapse" id="responsive-navbar">
            <ul class="nav navbar-nav">
              <li><router-link to="/course">课程</router-link></li>
            <li><router-link to="/information">资讯</router-link></li>
            <li><router-link to="/forum">论坛</router-link></li>
            <li><router-link to="/mobile">移动端</router-link></li>
            </ul>
            <div class="profile navbar-right">
              <ul class="nav navbar-nav user-nav" v-show="!isLogin">
                <li><router-link to="/login">登录</router-link></li>
                <li><router-link to="/register">注册</router-link></li>
              </ul>
              <ul class="nav navbar-nav user-nav" v-show="isLogin">
                <li class="user-avatar-li">
                  <router-link to="/user" class="dropdown-toggle">
                  <img src="./../static/img/user-01.jpg" class="avatar-xs">
                </router-link>
                </li>
                <li class="visible-lg"><a>我的学习</a></li>
              </ul>
            </div>
            <form action="" class="navbar-form navbar-right hidden-xs hidden-sm">
              <div class="form-group">
                <input type="text" class="form-control">
                <button type="submit">
                  <span class="glyphicon glyphicon-search"></span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </nav>
    </header>

    <router-view></router-view>
    <footer>
      <div class="footer-link">
        <div class="container">
          <div class="row">
            <div class="col-md-8 footer-main clearfix">
              <div class="link-item">
                <h3>我是学生</h3>
                <router-link to="/howtoregister">如何加盟</router-link>
              </div>
              <div class="link-item">
                <h3>我是老师</h3>
                <router-link to="/howtoregister">发布课程</router-link>
              </div>
              <div class="link-item">
                <h3>我是管理员</h3>
                <router-link to="/howtoregister">修改底部链接</router-link>
              </div>
              <div class="link-item hidden-xs">
                <h3>商业应用</h3>
                <router-link to="/howtoregister">会员专区</router-link>
              </div>
              <div class="link-item hidden-xs">
                <h3>关于我们</h3>
                <router-link to="/howtoregister">多美味官网</router-link>
              </div>
            </div>
            <div class="col-md-4 footer-logo hidden-sm hidden-xs">
              <router-link to="/">
                <img src="./../static/img/bottom-logo.png" alt="建议图片大小为223*64">
              </router-link>
              <div class="footer-sns">
                <a href="http://weibo.com/fontendhuan/home?topnav=1&wvr=6" target="_blank" class="weibo">
                  <figure><icon name="weibo"></icon></figure>
                </a>
                <a class="weixin-popover" @mouseover="show = true" @mouseleave="show = false">
                  <figure><icon name="weixin"></icon></figure>
                  <div class="weixin-content" v-show="show">
                    <img src="./../static/img/erweima.png" alt>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="copyright">
        <div class="container">
          Powered by&nbsp;
          <router-link to="/">sellmyself.online</router-link>&nbsp;
          ©2017&nbsp;&nbsp;
          <router-link to="/">多美味</router-link>
          <div class="mts">
            <router-link to="/">多美味教育投资有限公司</router-link>
          </div>
        </div>
      </div>
    </footer>
  </div>

</template>

<script>
  import store from './vuex/store'
  import {mapState} from 'vuex';
export default {
  name: 'app',
  data() {
      return {
          show: false
      }
  },
  store,
  computed:mapState(["isLogin"])
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: white;
  }
  p {
    font-size: 1.4rem;
    text-align: justify;
    text-justify: inter-ideograph;
  }
  .fa-icon {
    height: auto;
    width: 24px;
    position: absolute;
    top: 50%;
    left: 50%;
    display: block;
    transform: translate(-50%,-50%);
  }
  .container a, .footer-main a {
    color: #c1c1c1;
    transition: all .3s ease;
  }
  .container a:hover, .footer-main a:hover {
    color: #fff;
    transition: all .3s ease;
  }
  .title > a.link-red {
    color: #c1c1c1;
    transition: all .3s ease;
  }
  .title > a.link-red:hover {
    color: #e8345a;
    transition: all .3s ease;
  }
  .wrap {
    transition: all .3s ease;
  }
  /**********************/
  a.btn {
    transition: all .3s ease;
    background-image: none;
  }
  a.btn:hover {
    transition: all .3s ease;
    text-decoration: none;
  }
  a.btn-default {
    color: #000;
    background-color: #e8345a;
    border-color: #c1c1c1;
  }
  a.btn-default:hover {
    color: #263238;
    background-color: #f50057;
  }
  .primary-line {
    border-bottom: 1px solid #f50057;
  }
  .section-title {
    margin-bottom: 1.5rem!important;
    padding-top: 1.5rem;
    text-align: left;
  }
  .section-more {
    font-size: 1.4rem;
    line-height: 3.2rem;
  }
  /*********************/
  .navbar-my-style {
    background-color: #e8345a;
    border-color: #e8345a;
  }
  .navbar-my-style input[type="text"] {
    background-color: #fff;
    border: none;
    color: #000;
    padding-right: 30px;
  }
  .navbar-my-style .navbar-form {
    position: relative;
  }
  .navbar-my-style button[type="submit"] {
    position: absolute;
    top: 20%;
    right: 20px;
    background: none;
    border: none;
  }
  .navbar-my-style .glyphicon {
    color: #000;
  }
  .navbar-brand {

  }
  .profile {
    margin-right: 25px;
  }
  footer {
    position: relative;
  }
  .footer-link {
    background: #263238;
    padding: 55px 0;
  }
  .footer-main .link-item {
    width: 20%;
    float: left;
    padding: 0 10px;
  }
  .footer-main h3 {
    font-size: 16px;
    color: #fff;
    margin-top: 0;
    margin-bottom: 30px;
    line-height: 1.7;
  }
  .footer-main ul li {
    margin-top: 20px;
  }
  .copyright {
    background: #000;
    border-top: 1px solid #f50057;
    padding: 20px 0;
    line-height: 30px;
    color: #fff;
  }
  .navbar-toggle span {
    background: #fff;
  }
  @media (max-width: 767px) {
    .navbar-brand {
      display: inline-block;
      float: none;
      padding: 0 10px;
      line-height: 50px;
    }
    .profile {
      margin-right: 0;
    }
    .footer-main .link-item {
      width: 33.33%;
      padding: 0 5px;
    }
  }
  .footer-logo .footer-sns {
    margin-top: 30px;
  }
  .footer-logo .footer-sns>a {
    display: inline-block;
  }
  .weixin-popover {
    position: relative;
  }
  .footer-logo .footer-sns figure {
    display: block;
    position: relative;
    width: 40px;
    height: 40px;
    margin: 0 10px;
    border-radius: 50%;
    color: #fff;
    cursor: pointer;
    user-select: none;
    transition: all .3s;
  }
  .footer-logo .footer-sns figure:hover {
    transition: all .3s;
  }
  .footer-logo .footer-sns .weibo figure {
    background-color: #e6162d;
  }
  .footer-logo .footer-sns .weibo figure:hover {
    background-color: #c4000b;
  }
  .footer-logo .footer-sns .weixin-popover figure {
    background-color: #1ec354;
  }
  .footer-logo .footer-sns .weixin-popover figure:hover {
    background-color: #00a132;
  }
  .weixin-content img {
    width: 180px;
    height: 180px;
  }
  .weixin-content {
    position: absolute;
    left: -65px;
    top: -205px;
    box-shadow: 0 2px 3px rgba(0,0,0,.5);
    padding: 5px;
    z-index: 1;
    background: #fff;
  }
  .weixin-content:after {
    content: "";
    width: 0;
    height: 0;
    border: 12px solid transparent;
    border-top-color: #FFFFFF;
    position: absolute;
    left: 43%;
    top: 100%;
    margin-top: 0px;
  }
  .panel-default > .panel-heading .more svg:hover {
    color: #fff;
    transition: all .3s ease;
  }
  .panel-default > .panel-body {
    position: relative;
    padding: 15px 0;
  }
  .panel-default > .panel-heading .more svg {
    position: absolute;
    top: 40px;
    display: block;
    color: #c1c1c1;
    transition: all .3s ease;
  }
  .panel-default > .panel-heading {
    position: relative;
    font-size: 16px;
    padding: 15px 0;
    border-bottom: 1px solid #f50057;
  }
  /*******************/
  .nav.user-nav>li {
    float: left;
    height: 60px;
  }
  .nav.user-nav>li>a {
    color: #000;
    display: block;
    padding: 20px 15px;
  }
  .nav.user-nav>li>a.dropdown-toggle {
    padding: 15px;
  }
  .nav>li>a>img {
    max-width: none;
  }
  .avatar-xs {
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    width: 30px!important;
    height: 30px!important;
  }
  /*********************/
  .breadcrumb a {
    transition: all .3s ease;
  }
  .breadcrumb a:hover {
    color: #e8345a;
    transition: all .3s ease;
  }
  .breadcrumb a, .breadcrumb li.active {
    color: #fff;
  }
  section {
    padding: 15px;
    margin-bottom: 20px;
    -webkit-border-radius: 2px;
    -moz-border-radius: 2px;
    border-radius: 2px;
    -webkit-box-shadow: 0 1px 2px 0 rgba(0,0,0,.1);
    -moz-box-shadow: 0 1px 2px 0 rgba(0,0,0,.1);
    box-shadow: 0 1px 2px 0 rgba(0,0,0,.1);
  }
  .section {
    background: #fff;
    padding: 15px;
    margin-bottom: 20px;
    -webkit-border-radius: 2px;
    -moz-border-radius: 2px;
    border-radius: 2px;
    -webkit-box-shadow: 0 1px 2px 0 rgba(0,0,0,.1);
    -moz-box-shadow: 0 1px 2px 0 rgba(0,0,0,.1);
    box-shadow: 0 1px 2px 0 rgba(0,0,0,.1);
  }
  .nav.nav-tabs {
    margin-bottom: 15px;
    border-color: #000;
  }
  .nav.nav-tabs > li {
    margin-bottom: 0;
  }
  .news-section li {
    list-style: none;
  }
  .nav.nav-tabs > li > a {
    border: none;
    border-bottom: 2px solid #263238;
    color: #c1c1c1;
    font-size: 16px;
    transition: all .3s ease;
  }
  .nav-tabs > li > a {
    margin-right: 2px;
    line-height: 1.42857143;
    border-radius: 2px 2px 0 0;
  }
  .nav.nav-tabs>li.active>a,
  .nav.nav-tabs>li:hover>a {
    border: none;
    border-bottom: 2px solid #f50057;
    background: 0 0;
    color: #e8345a;
    transition: all .3s ease;
  }
</style>
