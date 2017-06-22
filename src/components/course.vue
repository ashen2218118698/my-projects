<template>
  <div>
    <div class="banner">
      <div class="container">
        <div class="title">
          课程列表
        </div>
        <router-link class="btn btn-primary btn-lg more" to="/course">查看班级</router-link>
      </div>
    </div>
    <div class="container" id="content-container">
      <div class="tabs">
        <div class="tab-header">
          <ul class="clearfix">
            <li :class="{ 'active':selected === null}"><a @click="initCourses();selectNull()">全部</a></li>
            <li :class="{ 'active':type === selected }" v-for="type in c_types"><a
              @click="changeCourses($event);choose(type)">{{type.c_type}}</a></li>
          </ul>
        </div>
      </div>
      <div class="filter">
        <ul class="nav nav-sort">
          <li><a class="active">最新</a></li>
          <li><a>最热</a></li>
          <li><a>推荐</a></li>
        </ul>
        <div class="more-filter hidden-xs">
          <label class="checkbox-inline">
            <input type="checkbox" id="live" value="/course">直播课程
          </label>
          <label class="checkbox-inline">
            <input type="checkbox" id="free" value="/course">免费课程
          </label>
        </div>
      </div>
      <div class="course-list">
        <div class="row">
          <div v-for="course in courses" class="col-lg-3 col-md-4 col-sm-6">
            <div class="course-item">
              <div class="course-img">
                <router-link :to="'/courseDetail/' + course.id">
                  <img :src="course.c_img" class="img-responsive">
                </router-link>
              </div>
              <div class="course-info">
                <div class="title">
                  <router-link :to="'/courseDetail/' + course.id" class="link-red">{{course.c_name}}</router-link>
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
</template>

<script>
  export default {
    name: 'course',
    data() {
      return {
        courses: [],
        c_types: [],
        selected: null
      }
    },
    created: function () {
      this.initCourses();
      this.initCourseType()
    },
    methods: {
      initCourses() {
        this.$http.get('./data/get_all_course.php')
          .then(r => {
            this.courses = r.data
          })
      },
      initCourseType() {
        this.$http.get('./data/get_all_course_type.php')
          .then(r => {
            this.c_types = r.data
          })
      },
      changeCourses(e) {
        let request = e.target.innerHTML;
        this.$http.get('./data/change_course_by_type.php', {
          params: {
            type: request
          }
        })
          .then(r => {
            this.courses = r.data;
          })
          .catch(error => {
            console.log(error);
          })
      },
      choose(index) {
        this.selected = index
      },
      selectNull() {
        this.selected = null
      }
    }
  }
</script>

<style scoped>
  .course-info > .title > a.link-red {
    color: #000;
  }

  .banner {
    height: 80px;
    padding: 20px 0;
    background-color: #263238;
    letter-spacing: 1px;
  }

  .banner, .banner .container {
    position: relative;
    text-align: left;
  }

  .banner .title {
    text-transform: uppercase;
    padding: 6px 0;
    font-size: 20px;
    color: #fff;
  }

  .banner .more {
    position: absolute;
    top: 0;
    right: 10px;
  }

  #content-container {
    margin: 30px auto;
    min-height: 400px;
  }

  .container .btn-primary {
    color: #000;
  }

  .container .btn-primary:hover {
    color: #263238;
  }

  .tabs {
    background: #263238;
    margin-bottom: 30px;
    border: 1px solid #f50057;
    border-radius: 2px;
  }

  .tabs .tab-header {
    background: #263238;
  }

  .tabs .tab-header > ul {
    padding: 0;
    margin: 0;
    list-style: none;
  }

  .tabs .tab-header > ul > li {
    float: left;
  }

  .tabs .tab-header > ul > li.active a {
    color: #263238;
    background-color: #e8345a;
  }

  .tabs .tab-header > ul > li a {
    display: block;
    padding: 15px 30px;
    color: #c1c1c1;
    transition: all .3s ease;
  }

  .tabs .tab-header > ul > li:not(.active) a:hover {
    color: #e8345a;
    transition: all .3s ease;
  }

  /*********/
  .filter {
    position: relative;
    background-color: #263238;
    border-radius: 2px;
    height: 40px;
    margin-bottom: 30px;
  }

  .filter .nav-sort {
    float: left;
    padding-right: 300px;
  }

  .filter .nav-sort > li {
    display: inline-block;
  }

  .filter .nav-sort > li > a.active {
    background-color: #e8345a;
    color: #263238;
  }

  .filter .nav-sort > li > a:not(.active):hover {
    color: #e8345a;
  }

  .filter .more-filter {
    position: absolute;
    text-align: right;
    top: 0;
    right: 15px;
    width: 300px;
  }

  .filter .more-filter label {
    margin-left: 15px;
    margin-top: 11px;
    vertical-align: top;
    transition: all .3s ease;
  }

  /**********/
  .course-list .course-item {
    position: relative;
    z-index: 1;
    margin-bottom: 30px;
    border-radius: 2px;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, .1);
    background-color: #fff;
  }

  @media (min-width: 992px) {
    .course-list .course-item {
      transition: all .3s ease;
    }
  }

  @media (min-width: 992px) {
    .course-list .course-item:hover {
      transform: translateY(-6px);
      -webkit-transform: translateY(-6px);
      -moz-transform: translateY(-6px);
      box-shadow: 0 4px 6px 0 rgba(0, 0, 0, .1), 0 2px 4px 0 rgba(0, 0, 0, .1);
      -webkit-box-shadow: 0 4px 6px 0 rgba(0, 0, 0, .1), 0 2px 4px 0 rgba(0, 0, 0, .1);
      -moz-box-shadow: 0 4px 6px 0 rgba(0, 0, 0, .1), 0 2px 4px 0 rgba(0, 0, 0, .1);
      -webkit-transition: all .3s ease;
      -moz-transition: all .3s ease;
      -o-transition: all .3s ease;
      transition: all .3s ease;
    }
  }

  .course-list .course-item .course-img {
    position: relative;
    overflow: hidden;
    border-top-left-radius: 2px;
    border-top-right-radius: 2px;
  }

  .course-list .course-item .course-img .img-responsive {
    width: 100%;
  }

  .course-list .course-item .title {
    margin-top: 10px;
    padding: 0 10px;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-wrap: normal;
  }

  .course-list .course-item .metas {
    position: relative;
    padding: 10px;
    color: #000;
  }

  .course-list .course-item .metas .num {
    margin-left: 16px;
    margin-right: 30px;
  }

  .course-list .course-item .metas svg {
    width: 16px;
    height: 16px;
    margin-right: 15px;
  }

  .num svg {
    top: 20px;
    left: 14px;
  }

  .comment svg {
    top: 20px;
    left: 60px;
  }

  .course-list .course-item .metas .price {
    float: right;
    color: #e83d2c;
    font-size: 14px;
    margin-right: 0;
  }
</style>
