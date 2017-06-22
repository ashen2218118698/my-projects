<template>
  <div>
    <swiper :options="swiperOption" ref="mySwiper">
      <!-- slides -->
      <swiper-slide>
        <a href="/"><img class="img-responsive" src="./../../static/img/slide-01.png"></a>
      </swiper-slide>
      <swiper-slide>
        <a href="/"><img class="img-responsive" src="./../../static/img/slide-02.jpg"></a>
      </swiper-slide>
      <swiper-slide>
        <a href="/"><img class="img-responsive" src="./../../static/img/slide-03.jpg"></a>
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
    <div class="wrap">
      <div class="container">
        <div class="row">
          <main class="col-md-9">
            <section class="news-section panel panel-default">
              <h2 class="h4 section-title primary-line">
                资讯
                <router-link to="/forum" class="section-more pull-right">更多>></router-link>
              </h2>
              <div class="tab news-tab">
                <ul class="nav nav-tabs" role="tablist">
                <li role="presentation" :class="{ active: !isActive }" @click="makeActive">
                  <a @click="initTitles">最新</a>
                </li>
                <li role="presentation" v-for="(category, index) in categorys" @click="addClassFun(index)" :class="{ active: index == qwer }">
                  <a @click="changeTitles">{{category.category}}</a>
                </li>
              </ul>
                <div class="tab-content">
                  <tabPanel :child-msg="titles"></tabPanel>
                </div>
              </div>
              <router-link to="/information" title="查看更多资讯" class="btn btn-block btn-lg btn-default">查看更多...</router-link>
            </section>
            <section class="course-list-section" id="course-list">
              <section class="course-section panel panel-default">
                <h2 class="h4 section-title primary-line">
                  网校课程
                  <router-link to="/course" title="查看更多网络课程" class="section-more pull-right">更多>></router-link>
                </h2>
                <courseCollection :child-msg="courses"></courseCollection>
                <router-link to="/course" title="查看更多课程" class="btn btn-block btn-lg btn-default">查看更多...</router-link>
              </section>
            </section>
            <section class="forum-section panel panel-default">
              <h2 class="h4 section-title primary-line">
                创业论坛
                <router-link to="/forum" class="section-more pull-right">进入论坛>></router-link>
              </h2>
              <div class="row">
                <div class="col-sm-7">
                  <div class="panel panel-default">
                    <h3 class="panel-heading">
                      热门讨论
                      <a href="/" class="more">
                        <icon name="ellipsis-h"></icon>
                      </a>
                    </h3>
                    <div class="panel-body">
                      <div class="group-grids">
                        <div class="grid row">
                          <div class="col-xs-12">
                            <ul class="hot-post-list"></ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-sm-5">
                  <div class="panel panel-default">
                    <h3 class="panel-heading">
                      热门板块
                      <router-link to="/course" class="more">
                        <icon name="ellipsis-h"></icon>
                      </router-link>
                    </h3>
                    <div class="panel-body">
                      <div class="group-grids">
                        <div class="grid row">
                        <p class="col-xs-3">
                          <a href="/">
                            <img class="avatar-square-sm" src="./../../static/img/biji.jpg">
                          </a>
                        </p>
                        <p class="title col-xs-9">
                          <router-link class="link-red" to="/forum">创业日记直播</router-link>
                          <br>
                          <span class="forum-data">今日主题：1 访问人数：4 </span>
                        </p>
                      </div>
                        <div class="grid row">
                          <p class="col-xs-3">
                            <a href="/">
                              <img class="avatar-square-sm" src="./../../static/img/jiaoliu.jpg">
                            </a>
                          </p>
                          <p class="title col-xs-9">
                            <router-link class="link-red" to="/forum">创业经验交流</router-link>
                            <br>
                            <span class="forum-data">今日主题：1 访问人数：4 </span>
                          </p>
                        </div>
                        <div class="grid row">
                          <p class="col-xs-3">
                            <a href="/">
                              <img class="avatar-square-sm" src="./../../static/img/taolun.jpg">
                            </a>
                          </p>
                          <p class="title col-xs-9">
                            <router-link class="link-red" to="/forum">创业热点讨论</router-link>
                            <br>
                            <span class="forum-data">今日主题：1 访问人数：4 </span>
                          </p>
                        </div>
                        <div class="grid row">
                          <p class="col-xs-3">
                            <a href="/">
                              <img class="avatar-square-sm" src="./../../static/img/fenxiang.jpg">
                            </a>
                          </p>
                          <p class="title col-xs-9">
                            <router-link class="link-red" to="/forum">创业故事分享</router-link>
                            <br>
                            <span class="forum-data">今日主题：1 访问人数：4 </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section class="recommend-teacher panel panel-default">
              <h2 class="h4 section-title primary-line">
                创业导师
                <router-link class="section-more pull-right" to="/teacher">更多>></router-link>
              </h2>
              <div class="row">
                <div class="col-xs-6 col-sm-3">
                  <div class="teacher-item">
                    <div class="teacher-top">
                      <a class="teacher-img" href="/">
                        <img class="avatar-md center-block img-responsive" src="./../../static/img/user-02.jpg" alt>
                      </a>
                      <h3 class="title">
                        <a class="link-red" href="/">ashen</a>
                      </h3>
                      <div class="position">暂无头衔</div>
                    </div>
                  </div>
                </div>
                <div class="col-xs-6 col-sm-3">
                  <div class="teacher-item">
                    <div class="teacher-top">
                      <a class="teacher-img" href="/">
                        <img class="avatar-md center-block img-responsive" src="./../../static/img/user-01.jpg" alt>
                      </a>
                      <h3 class="title">
                        <a class="link-red" href="/">admin</a>
                      </h3>
                      <div class="position">管理员</div>
                    </div>
                  </div>
                </div>
                <div class="col-xs-6 col-sm-3">
                  <div class="teacher-item">
                    <div class="teacher-top">
                      <a class="teacher-img" href="/">
                        <img class="avatar-md center-block img-responsive" src="./../../static/img/user-03.jpg" alt>
                      </a>
                      <h3 class="title">
                        <a class="link-red" href="/">Tony</a>
                      </h3>
                      <div class="position">技术部教学主任</div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </main>
          <homepageAside :child-msg="courseTypes"></homepageAside>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'home',
  data () {
    return {
      swiperOption: {
        // NotNextTick is a component's own property, and if notNextTick is set to true, the component will not instantiate the swiper through NextTick, which means you can get the swiper object the first time (if you need to use the get swiper object to do what Things, then this property must be true)
        // notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
        notNextTick: true,
        // swiper configs 所有的配置同swiper官方api配置
        autoplay: 3000,
        direction : 'horizontal',
        grabCursor : true,
        setWrapperSize :true,
        autoHeight: true,
        pagination : '.swiper-pagination',
        paginationClickable :true,
        mousewheelControl : true,
        observeParents:true,
        // if you need use plugins in the swiper, you can config in here like this
        // 如果自行设计了插件，那么插件的一些配置相关参数，也应该出现在这个对象中，如下debugger
        debugger: true,
        // swiper callbacks
        // swiper的各种回调函数也可以出现在这个对象中，和swiper官方一样
        onTransitionStart(swiper){
        }
    },
      categorys: [],
      titles: [],
      courses: [],
      courseTypes: [],
      isActive: false,
      qwer: -1,  //通过与index比较来判断是否为当前点击项
    }
  },
  http: {
    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
  },
  created: function () {
    this.getAllInfos();
    this.initTitles();
    this.initCourses();
    this.initCourseType();
  },
  methods: {
      getAllInfos() {
        this.$http.get('./data/get_all_info_category.php')
            .then(r => {
              this.categorys = r.data;
            })
      },
      changeTitles(e) {
          let request = e.target.innerHTML;
      this.$http.get('./data/change_title_by_category.php', {
        params: {
          category: request
        }
      })
        .then(r => {
          this.titles = r.data;
        })
        .catch(error => {
          console.log(error);
        })
    },
    initTitles() {
      this.$http.get('./data/get_zuixin_title.php')
        .then(r => {
          this.titles = r.data;
        })
    },
    initCourses() {
      this.$http.get('./data/get_shouye_course.php')
        .then(r => {
          this.courses = r.data;
        })
    },
    initCourseType() {
          this.$http.get('./data/get_all_course_type.php')
            .then(r => {
                this.courseTypes = r.data;
            })
    },
    makeActive() {
      this.isActive = false;
      this.qwer = -1;
    },
    addClassFun(index) {
      this.qwer = index;
      this.isActive = true;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @media screen and (min-width: 992px) {
    .swiper-container {
      width: 1140px;
      margin-top: 2rem;
    }
  }
  .news-section {
    padding-bottom: 1rem;
    text-align: left;
  }
  /**********/
  .course-list-section, .forum-section, .recommend-teacher {
    position: relative;
    padding-bottom: 20px;
    background: #263238;
  }
  .col-sm-7 svg {
    left: 428px;
  }
  .col-sm-5 svg {
    left: 288px;
  }
  .avatar-square-sm {
    width: 50px;
    height: 50px;
    border-radius: 4px;
    border: 1px solid #f50057;
  }
  .forum-section .grid .title {
    font-size: 1.6rem;
  }
  .forum-data {
    font-size: 1.2rem;
    color: #fff;
  }
  .recommend-teacher .teacher-item {
    text-align: center;
  }
</style>
