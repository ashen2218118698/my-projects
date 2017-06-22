<template>
  <div>
    <section class="course-detail-header before">
      <div class="container">
        <ol class="breadcrumb">
          <li>
            <router-link to="/">首页</router-link>
          </li>
          <li>
            <router-link to="/course">课程</router-link>
          </li>
          <li class="active">
            {{course.c_name}}
          </li>
        </ol>
        <div class="section clearfix">
          <div class="course-img">
            <img :src="course.c_img" class="img-responsive">
          </div>
          <div class="course-info">
            <h2 class="title">
              {{course.c_name}}
              <icon name="qrcode"></icon>
            </h2>
            <div class="subtitle"></div>
            <div class="metas">
              <div class="score">
                <icon name="star-o"></icon>
                <icon name="star-o"></icon>
                <icon name="star-o"></icon>
                <icon name="star-o"></icon>
                <icon name="star-o"></icon>
                <span>(0人)</span>
              </div>
              <p class="expiry-data hidden-sm">
                <label for>有效期</label>
                <span>365天</span>
              </p>
              <p class="discount-price">
                <label for>价格</label>
                <span class="course-price-widget">
                  <span class="price">
                    {{course.c_price}}元
                  </span>
                </span>
              </p>
            </div>
          </div>
          <div class="course-operation clearfix">
            <div class="student-num hidden-xs">
              <icon name="user-circle"></icon>
              1人
            </div>
            <div class="course-data clearfix">
              <div>
                <icon></icon>
                <i>收藏</i></div>
              <div>
                <icon></icon>
                <i>分享</i></div>
            </div>
            <div class="buy">
              <a class="btn btn-primary btn-lg">加入学习</a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div id="content-container" class="container">
      <div class="course-detail row">
        <div class="col-lg-9 col-md-8 course-detail-main">
          <section class="section">
            <div class="nav-btn-tab">
              <ul class="nav nav-tabs" role="tablist">
                <li role="presentation">
                  <router-link :to="'/courseDetail/' + course.id + '/overview/' + course.id">课程概览</router-link>
                </li>
                <li role="presentation">
                  <router-link :to="'/courseDetail/' + course.id + '/lesson/' + course.id">课时</router-link>
                </li>
                <li role="presentation">
                  <router-link :to="'/courseDetail/' + course.id + '/comment/' + course.id">评价</router-link>
                </li>
                <li role="presentation">
                  <router-link :to="'/courseDetail/' + course.id + '/note/' + course.id">笔记</router-link>
                </li>
              </ul>
            </div>
            <router-view></router-view>
          </section>
          <div class="panel panel-default hidden-xs">
            <div class="panel-heading">
              <h3 class="panel-title">
                相关课程
              </h3>
            </div>
            <div class="panel-body">
              <div class="course-list no-shadow no-margin">
                <div class="row">
                  <div v-for="course in relatedCourses" class="col-lg-4 col-md-6 col-sm-6">
                    <div class="course-item">
                      <div class="course-img">
                        <router-link :to="'/courseDetail/' + course.id">
                          <img :src="course.c_img" class="img-responsive">
                        </router-link>
                      </div>
                      <div class="course-info">
                        <div class="title">
                          <router-link :to="'/courseDetail/' + course.id" class="link-red">{{course.c_name}}
                          </router-link>
                        </div>
                        <div class="metas clearfix">
                  <span class="num">
                    <icon name="user-circle"></icon>
                    {{course.student_num}}
                  </span>
                          <span class="comment">
                    <icon name="commenting"></icon>
                    0
                  </span>
                          <span class="course-price-widget">
                    <span class="price">
                      {{course.c_price}}元
                    </span>
                  </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-4 course-sidebar">
          <div class="panel panel-default panel-class hidden-sm" id="panel-class">
            <div class="panel-heading">
              <h3 class="panel-title">
                推荐班级
                <router-link to="/forum" class="more">
                  <icon name="ellipsis-h"></icon>
                </router-link>
              </h3>
            </div>
            <div class="panel-body">
              <div class="dingsi">
                <a class="class-img">
                  <img src="./../../static/img/courseImg/mianfen-luwei.jpg" class="img-responsive">
                </a>
                <h5 style="margin-bottom: 0">
                  <a class="link-red">面粉卤味系列</a>
                </h5>
              </div>
            </div>
          </div>
          <div class="panel panel-default">
            <div class="panel-heading">
              <h3 class="panel-title">
                授课教师
              </h3>
            </div>
            <div class="panel-body">
              <div class="media media-default">
                <div class="media-left">
                  <a class="js-user-card">
                    <img src="./../../static/img/user-01.jpg" class="avatar-md">
                  </a>
                </div>
                <div class="media-body">
                  <div class="title">
                    <a class="link-red">admin</a>
                  </div>
                  <div class="content">管理员</div>
                </div>
              </div>
            </div>
          </div>
          <div class="panel panel-default">
            <div class="panel-heading">
              <h3 class="panel-title">
                最新学员
              </h3>
            </div>
            <div class="panel-body">
              <span class="wu">无</span>
            </div>
          </div>
          <div class="panel panel-default student-dynamic">
            <div class="panel-heading">
              <h3 class="panel-title">
                学员动态
              </h3>
            </div>
            <div class="panel-body">
              <div class="media media-number-o">
                <div class="media-body">
                  <a class="link-red">admin</a>
                  学完了课时
                  <a class="link-red">陕西小吃-汉中面皮凉皮</a>
                </div>
              </div>
              <div class="media media-number-o">
                <div class="media-body">
                  <a class="link-red">admin</a>
                  开始学习课时
                  <a class="link-red">陕西小吃-汉中面皮凉皮</a>
                </div>
              </div>
              <div class="media media-number-o">
                <div class="media-body">
                  <a class="link-red">ashen</a>
                  开始学习课时
                  <a class="link-red">陕西小吃-汉中面皮凉皮</a>
                </div>
              </div>
              <div class="media media-number-o">
                <div class="media-body">
                  <a class="link-red">ashen</a>
                  加入课程
                  <a class="link-red">汉中面皮凉皮</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'courseDetail',
    data() {
      return {
        course: Object,
        relatedCourses: []
      }
    },
    created: function () {
      this.init();
      this.initRelatedCourses()
    },
    methods: {
      init() {
        let id = this.$route.params.id;
        this.$http.get('./data/get_course_by_id.php', {
          params: {
            id: id
          }
        }).then(r => {
          this.course = r.data[0]
        }).catch(error => {
          console.log(error);
        })
      },
      initRelatedCourses() {
        this.$http.get('./data/get_related_course.php')
          .then(r => {
            this.relatedCourses = r.data
          })
      }
    }
  }
</script>

<style scoped>
  .course-detail-header .course-img .img-responsive {
    width: 100%;
  }

  .section {
    background-color: #263238;
    text-align: left;
  }

  .panel-default > .panel-heading .more svg {
    top: 34px;
    left: 100px;
  }

  .course-detail-header {
    position: relative;
    margin-top: 20px;
  }

  .course-detail-header .section {
    position: relative;
    padding: 0;
    margin-bottom: 0;
  }

  .course-detail-header.before .course-img {
    width: 480px;
    margin: 15px;
  }

  .course-detail-header .course-img {
    position: relative;
    float: left;
    background-color: #fff;
  }

  .course-detail-header.before .course-info {
    float: left;
    width: 390px;
    width: 386px \9;
    padding: 15px 19px 15px 5px;
    background-color: #263238;
    color: #fff;
  }

  .course-detail-header.before .course-operation {
    float: right;
    width: 240px;
    height: 300px;
  }

  .course-detail-header .course-operation {
    padding: 12px 15px;
    background-color: #fafafa;
    color: #919191;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
  }

  .course-detail-header .title {
    color: inherit;
  }

  .course-detail-header .subtitle {
    color: #919191;
    margin-bottom: 10px;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-wrap: normal;
  }

  .course-detail-header .metas {
    color: #919191;
  }

  .score {
    position: relative;
    margin-bottom: 10px;
  }

  svg {
    width: 17px;
    position: relative;
    left: 10px;
    top: 12px;
  }

  .price {
    float: right;
    color: #e83d2c;
    font-size: 14px;
    margin-right: 0;
  }

  .course-detail-header .metas p {
    font-size: 12px;
  }

  .course-detail-header .metas p label {
    width: 60px;
    margin-bottom: 0;
    font-weight: 400;
  }

  .course-detail-header .metas p span {
    display: inline-block;
  }

  .course-detail-header.before .course-operation {
    float: right;
    width: 240px;
  }

  .course-detail-header .course-operation {
    padding: 12px 15px;
    background-color: #fafafa;
    color: #919191;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
  }

  .course-detail-header.before .course-operation .student-num {
    border-bottom: 1px solid #f1f1f1;
  }

  .course-detail-header .course-operation .student-num {
    text-align: center;
    font-size: 22px;
    padding: 20px 0;
  }

  .course-detail-header.before .course-data {
    border-bottom: 1px solid #f5f5f5;
  }

  .course-detail-header .course-data {
    list-style-type: none;
    padding: 10px 0;
  }

  .course-detail-header.before .course-operation .buy {
    padding: 26px 0;
    text-align: center;
  }

  .course-detail-header.before .course-operation .buy .btn {
    padding: 10px 30px;
  }
</style>
