<template>
  <div>
    <aside class="col-md-3">
      <section class="class-section panel panel-default">
        <h2 class="h4 section-title primary-line">
          课程分类
          <router-link to="/course" class="section-more pull-right">更多>></router-link>
        </h2>
        <div class="recommend-class-list row">
          <div class="row classroom-category">
            <div class="col-xs-12">
              <div class="panel panel-default">
                <h4 class="panel-heading">热门分类</h4>
                <div class="panel-body">
                  <ul class="course-list">
                    <li class="list-item">
                      <router-link to="/course" v-for="courseType in courseTypes">{{courseType.c_type}}</router-link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div class="panel panel-default wechat">
        <div class="panel-heading">
          <h3 class="panel-title">加入多美味小吃创业交流QQ群</h3>
        </div>
        <div class="panel-body">
          <div class="row">
            <div class="col-xs-6 col-sm-3 col-md-8 col-xs-offset-3 col-sm-offset-2 col-md-offset-2">
              <a target="_blank" href="//shang.qq.com/wpa/qunwpa?idkey=b483f7461303ab76ec199196731b5386abf3cb30cdef9ad0352d1e7a831e4846"><img border="0" src="//pub.idqqimg.com/wpa/images/group.png" alt="多美味小吃创业交流群" title="多美味小吃创业交流群"></a>
              <br>
              群号：643679035
            </div>
          </div>
        </div>
      </div>
      <div class="panel panel-default wechat">
        <div class="panel-heading">
          <h3 class="panel-title">多美味微信公众号</h3>
        </div>
        <div class="panel-body">
          <div class="row">
            <div class="col-xs-6 col-sm-3 col-md-8 col-xs-offset-3 col-sm-offset-2 col-md-offset-2">
              <img class="wechat-qrcode img-responsive" src="./../../static/img/erweima.png" alt="多美味微信公众号二维码" title="多美味微信公众号二维码">
              <p class="wechat-intro">关注微信公众号随时随地获取最新创业资讯</p>
            </div>
          </div>
        </div>
      </div>
    </aside>
  </div>
</template>

<script>
  export default {
    name: 'homepageAside',
    data() {
          return {
              courseTypes: []
          }
    },
    props: {
      childMsg: Array
    },
    watch: {
      childMsg (value) {
        this.courseTypes = value;
      }
    },
  }
</script>

<style scoped>
  .class-section {
    padding-bottom: 20px;
    background-color: #263238;
    color: #fff;
  }
.classroom-category li {
  list-style: none;
}
  .classroom-category .list-item a {
    display: inline-block;
    margin-right: 5px;
  }
  .course-list {
    padding: 0 8px;
  }
  .list-item {
    text-align: left;
  }
</style>
