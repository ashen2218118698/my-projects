<template>
  <div id="content-container" class="container">
    <div class="userpage-header">
      <div class="media">
        <div class="media-left">
          <div class="avatar-bg">
            <img src="./../../static/img/user_touxiang.png" class="avatar-lg">
            </a>
          </div>
          <div class="media-body">
            <h2>欢迎{{user.uName}}登录多美味！</h2>
            <button @click="turnToHome();$store.commit('loginout')">退出登录</button>
          </div>
          <form>
            <label for="type">小吃类型</label>
            <input v-model="course.type" type="text" id="type">
            <label for="price">小吃价格</label>
            <input v-model="course.price" type="number" id="price">
            <label for="label">小吃标签</label>
            <input v-model="course.label" type="text" id="label">
            <label for="name">小吃名称</label>
            <input v-model="course.name" type="text" id="name">
            <label for="img">小吃图片地址</label>
            <input v-model="course.img" type="text" id="img">
            <label for="stu_num">学员数量</label>
            <input v-model="course.stu_num" type="number" id="stu_num">
            <label for="c_list">课时列表</label>
            <input v-model="course.c_list" type="text" id="c_list">
            <label for="introduce">课程介绍</label>
            <input v-model="course.introduce" type="text" id="introduce">
            <button type="button" value="提交" @click="add">添加一条课程信息</button>
          </form>
        </div>
      </div>
    </div>
</template>

<script>
  import store from './../vuex/store'
  import {mapState} from 'vuex';
  export default {
    name: 'user',
    data() {
      return {
        course: {
          type: '',
          price: Number,
          label: '',
          name: '',
          img: '',
          stu_num: Number,
          c_list: '',
          introduce: ''

        }
      }
    },
    computed: mapState(["user"]),
    methods: {
      turnToHome() {
        this.$router.push({path: '/'})
      },
      add() {
        let querystring = require('querystring');
        this.$http.post('./data/add_course.php', querystring.stringify({
          type: this.course.type,
          price: this.course.price,
          label: this.course.label,
          name: this.course.name,
          img: this.course.img,
          stu_num: this.course.stu_num,
          c_list: this.course.c_list,
          introduce: this.course.introduce
        }))
          .then(r => {
            if (r.data === 'success') {
              this.$router.push({path: '/'})
            }
          })
          .catch(err => {
            console.log(err)
          })
      }
    },
    store
  }
</script>

<style>
  button {
    background-color: #e8345a;
    color: #000;
  }

  from {
    color: #0f0f0f;
  }

  label, input, button {
    display: block;
    color: #0f0f0f;
  }
</style>
