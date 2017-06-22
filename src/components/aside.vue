<template>
  <div>
    <aside class="col-md-4 article-sidebar">
      <!--热门资讯-->
      <div class="panel panel-default hot-article">
        <div class="panel-heading">
          <h3 class="panel-title">热门资讯</h3>
        </div>
        <div class="panel-body">
          <div class="media media-number" v-for="(hotInfo, index) in hotInfos">
            <div class="media-left"><span class="num">{{index+1}}</span></div>
            <div class="media-body"><router-link :to="'/infoDetail/' + hotInfo.id" class="link-red">{{hotInfo.title | forBeautiful}}</router-link></div>
          </div>
        </div>
      </div>
      <!--热门标签-->
      <div class="panel panel-default hot-tag">
        <div class="panel-heading">
          <h3 class="panel-title">热门标签</h3>
        </div>
        <div class="panel-body">
          <router-link to="course/id" v-for="label in labels" class="btn-tag">{{label.c_label}}</router-link>
        </div>
      </div>
      <!--热门评论-->
      <div class="panel panel-default hot-comments">
        <div class="panel-heading">
          <h3 class="panel-title">热门评论</h3>
        </div>
        <div class="panel-body">
          <div class="media media-hot-comment">
            <div class="media-body">
              <div class="pull-left">
                <router-link to="/user/id" class="user-card"><img src="./../../static/img/user01.jpg" alt="用户头像" class="avatar-sm"></router-link>
              </div>
              <div class="comments-info">

              </div>
              <div class="comments-content">
                很有用-毕设展示用例测试
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--推荐资讯-->
      <div class="panel panel-default recommend-article">
        <div class="panel-heading">
          <h3 class="panel-title">推荐资讯</h3>
        </div>
        <div class="panel-body">
          <div class="media media-number" v-for="(recommendInfo, index) in recommendInfos">
            <div class="media-left">
              <span class="num">{{index+1}}</span></div>
            <div class="media-body">
              <router-link :to="'/infoDetail/' + recommendInfo.id" class="link-red">{{recommendInfo.title}}</router-link>
            </div>
          </div>
        </div>
      </div>
    </aside>
  </div>
</template>

<script>
  export default {
      name: 'aSide',
    data() {
          return {
              hotInfos: [],
              recommendInfos: [],
              labels: []
          }
    },
    created: function () {
        this.getHotLabels();
        this.getInfos();
    },
    methods: {
         getHotLabels() {
             this.$http.get('./data/get_all_course_label.php')
               .then(r => {
                   this.labels = r.data
               })
         },
        getInfos() {
          this.$http.get('./data/get_all_information.php')
            .then(r => {
              this.hotInfos = r.data.slice(10,16);
              this.recommendInfos = r.data.slice(0,6)
            })
        }
    },
    filters: {
      forBeautiful: function (value) {
        if (value.length > 19) {
          return value.substring(0, 19) + '...';
        }
        return value;
      }
    }
  }
</script>

<style scoped>
  .media.media-number, .media.media-number-o {
    border-bottom: 1px solid #000;
    padding-bottom: 15px;
  }
  .media:first-child {
    margin-top: 0;
  }
  .media, .media-body {
    zoom: 1;
    overflow: hidden;
  }
  .media {
    margin-top: 15px;
  }
  .media.media-number .media-left .num,
  .media.media-number-o .media-left .num {
    display: block;
    width: 20px;
    height: 20px;
    line-height: 18px;
    text-align: center;
    border: 1px solid #919191;
    border-radius: 50%;
  }
  .user-card {
    display: inline-block;
  }
  .avatar-sm {
    border-radius: 50%;
    width: 40px;
    height: 40px;
  }
  .btn-tag {
    padding: 6px 10px;
    margin: 5px 5px 5px 0;
    color: #fff;
    font-size: 12px;
    background-color: #41b883;
    transition: all .3s ease;
  }
  .btn-tag:hover {
    color: #e8345a;
    background-color: #263238;
    transition: all .3s ease;
  }
</style>
