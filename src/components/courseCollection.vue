<template>
  <div class="course-collection">
    <div class="course-item row" v-for="course in courses">
      <div class="col-xs-12 col-sm-3 course-img">
        <router-link :to="'/courseDetail/' + course.id">
          <img :src="course.c_img" class="img-responsive course-img">
        </router-link>
      </div>
      <div class="col-xs-12 col-sm-6 course-info">
        <div class="title">
          <router-link :to="'/courseDetail/' + course.id" class="link-red">
            <span class="course-category online-course">网络课程</span>
            {{course.c_name}}
          </router-link>
        </div>
        <p class="course-intro hidden-xs">
          {{course.c_introduce | makeShort}}
        </p>
      </div>
      <div class="col-xs-6 col-sm-1 course-price">
        <div class="course-metas">
          <span class="course-price-widget">
            <span class="price">
              {{course.c_price}}元
            </span>
          </span>
        </div>
      </div>
      <div class="col-xs-6 col-sm-2 course-join">
        <router-link :to="'/courseDetail/' + course.id" class="btn btn-default">加入学习</router-link>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'courseCollection',
    data() {
        return {
            courses: []
        }
    },
    props: {
      childMsg: Array
    },
    watch: {
      childMsg (value) {
        this.courses = value;
      }
    },
    filters: {
        makeShort: function (value) {
          if (value.length > 72) {
              return value.substring(0, 72) + '...';
          }
          return value;
        }
    }
  }
</script>

<style scoped>
  .course-collection {
    margin-bottom: 10px;
  }
  .course-collection .course-item {
    padding-top: 1rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid #000;
  }
  .course-price, .course-join {
    text-align: center;
  }
  .course-collection .course-item .title {
    text-align: left;
    margin-top: 0;
    margin-bottom: 1.5rem;
  }
  .course-collection .course-item .title a {
    font-size: 1.6rem;
  }
  .course-category {
    padding: 4px;
    border-radius: 4px;
    font-size: 1rem;
    color: #fff;
  }
  .online-course {
    background-color: #46c37b;
  }
  .course-price-widget .price {
    color: #f50057;
    font-size: 16px;
    margin-right: 10px;
  }
  p {
    font-size: 1.4rem;
    text-align: justify;
    text-justify: inter-ideograph;
  }
</style>
